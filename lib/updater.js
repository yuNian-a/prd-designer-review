const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { installSkill } = require('./install');

const PACKAGE_NAME = 'prd-designer-review';

/**
 * 从 npm registry 获取最新版本号
 */
function getLatestVersion() {
  try {
    const result = execSync(`npm view ${PACKAGE_NAME} version`, { encoding: 'utf-8' }).trim();
    return result;
  } catch {
    throw new Error('无法连接 npm registry，请检查网络连接');
  }
}

/**
 * 读取目标项目中已安装的 skill 版本
 */
function getInstalledVersion(skillId) {
  const manifestPath = path.join(process.cwd(), '.agents', 'skills', skillId, 'skill-manifest.json');
  if (!fs.existsSync(manifestPath)) {
    return null;
  }
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    return manifest.version || null;
  } catch {
    return null;
  }
}

/**
 * 比较版本号，返回 true 表示 a > b
 */
function isNewer(a, b) {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  for (let i = 0; i < 3; i++) {
    if ((pa[i] || 0) > (pb[i] || 0)) return true;
    if ((pa[i] || 0) < (pb[i] || 0)) return false;
  }
  return false;
}

/**
 * 更新指定 skill
 */
async function updateSkill(skillId) {
  console.log(`\n🔍 检查 ${skillId} 的更新...`);

  const installedVersion = getInstalledVersion(skillId);
  if (!installedVersion) {
    console.log(`⚠️  本地未找到已安装的 ${skillId}，请先执行安装：`);
    console.log(`   npx ${PACKAGE_NAME} install ${skillId}`);
    return;
  }

  console.log(`   本地版本: ${installedVersion}`);

  const latestVersion = getLatestVersion();
  console.log(`   npm 最新版本: ${latestVersion}`);

  if (!isNewer(latestVersion, installedVersion)) {
    console.log(`\n✅ 已是最新版本，无需更新`);
    return;
  }

  console.log(`\n🆙 发现新版本 ${latestVersion}，准备更新...`);

  // 保留用户自己填写的配置文件，不覆盖
  const protectedFiles = [
    path.join('references', 'project-map.md'),
    path.join('references', 'component-guidelines.md'),
    path.join('references', 'design-tokens.md'),
  ];

  const skillDir = path.join(process.cwd(), '.agents', 'skills', skillId);
  const backups = {};

  for (const relPath of protectedFiles) {
    const fullPath = path.join(skillDir, relPath);
    if (fs.existsSync(fullPath)) {
      backups[relPath] = fs.readFileSync(fullPath, 'utf-8');
    }
  }

  // 强制覆盖安装
  fs.rmSync(skillDir, { recursive: true, force: true });
  await installSkill(skillId);

  // 恢复用户配置文件
  const restoredFiles = [];
  for (const [relPath, content] of Object.entries(backups)) {
    const fullPath = path.join(skillDir, relPath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content, 'utf-8');
    restoredFiles.push(relPath);
  }

  if (restoredFiles.length > 0) {
    console.log(`\n🔒 已保留你的本地配置文件（未被覆盖）：`);
    restoredFiles.forEach(f => console.log(`   - ${f}`));
  }

  console.log(`\n✅ ${skillId} 已更新至 ${latestVersion}`);
}

module.exports = { updateSkill };
