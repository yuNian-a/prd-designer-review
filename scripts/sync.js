/**
 * 将根目录的开发源文件同步到 .agents/skills/prd-designer-review/
 * 执行：node scripts/sync.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SKILL_ID = 'prd-designer-review';
const TARGET = path.join(ROOT, '.agents', 'skills', SKILL_ID);

// 根目录 → 打包目录 的映射关系
const SYNC_MAP = [
  { src: 'SKILL.md',                              dest: 'SKILL.md' },
  { src: 'assets/output-template.md',             dest: 'assets/output-template.md' },
  { src: 'references/review-dimensions.md',       dest: 'references/review-dimensions.md' },
  { src: 'references/design-review-checklist.md', dest: 'references/design-review-checklist.md' },
  { src: 'references/interaction-patterns.md',    dest: 'references/interaction-patterns.md' },
  { src: 'references/domain-conventions.md',      dest: 'references/domain-conventions.md' },
  // project-map / component-guidelines / design-tokens 是用户配置文件，不同步
];

function syncFile(srcRel, destRel) {
  const srcPath = path.join(ROOT, srcRel);
  const destPath = path.join(TARGET, destRel);

  if (!fs.existsSync(srcPath)) {
    console.warn(`  ⚠️  源文件不存在，跳过: ${srcRel}`);
    return;
  }

  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.copyFileSync(srcPath, destPath);
  console.log(`  ✓  ${srcRel} → .agents/skills/${SKILL_ID}/${destRel}`);
}

console.log(`\n🔄 同步 skill 文件到 .agents/skills/${SKILL_ID}/\n`);

for (const { src, dest } of SYNC_MAP) {
  syncFile(src, dest);
}

console.log('\n✅ 同步完成\n');
