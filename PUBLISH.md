# PRD 设计预审 Skill

在需求评审之前，从用户视角 + 设计师视角对 PRD 跑一遍预审，找出流程断点、信息缺失、设计无法落地的问题，输出优先级问题清单，帮助设计师在线下评审前提前准备，提升评审质量和效率。

- **GitHub**：https://github.com/yuNian-a/prd-designer-review
- **npm**：https://www.npmjs.com/package/prd-designer-review

---

## 安装

在你的项目根目录执行以下命令：

```bash
npx prd-designer-review install prd-designer-review
```

安装成功后，skill 文件会出现在你的项目目录下。**后续如需更新**，执行：

```bash
npx prd-designer-review update prd-designer-review
```

更新时会自动保留你在 `project-map.md`、`component-guidelines.md`、`design-tokens.md` 中填写的本地配置，不会覆盖。

---

安装后目录结构：

```
你的项目/
└── .agents/
    └── skills/
        └── prd-designer-review/
            ├── SKILL.md                          ← 核心入口，Cursor 读取此文件
            ├── skill-manifest.json
            ├── assets/
            │   └── output-template.md            ← 输出结构模板
            └── references/
                ├── review-dimensions.md          ← 详细评审检查项（自动使用）
                ├── design-review-checklist.md    ← 高频遗漏点补充（自动使用）
                ├── interaction-patterns.md       ← 通用交互惯例（自动使用）
                ├── domain-conventions.md         ← 行业流程规范（自动使用）
                ├── project-map.md                ← 填写你的项目信息（建议配置）
                ├── component-guidelines.md       ← 填写你的组件库信息（建议配置）
                └── design-tokens.md              ← 填写你的设计 Token（建议配置）
```

---

## 使用方式

安装后，在 Cursor 中直接输入：

```
@SKILL.md 帮我评审以下需求：[粘贴 PRD 内容]
```

或：

```
这是产品给的需求文档，帮我评审一下：[粘贴内容]
```

AI 会自动按以下流程输出结果：

1. **需求概述** — 理解这是什么需求、目标用户是谁
2. **主流程还原** — 还原用户完整操作链路
3. **用户视角问题** — 流程是否合理、能否跑通、异常流是否完整
4. **设计师视角问题** — 信息架构、状态体系、权限规则、字段定义是否清晰可设计
5. **需带入线下评审的问题** — 必须向产品经理确认的关键问题清单
6. **是否建议进入设计阶段** — 明确判断当前需求的可设计性

---

## 建议配置（可选）

安装完成后，建议根据你的项目情况填写以下两个文件，可以让评审结果更贴合你的实际项目：

**`references/project-map.md`**  
填写你的产品线、目标用户、业务类型等基本信息，帮助 AI 了解项目背景。

**`references/component-guidelines.md`**  
填写你们使用的组件库（如 Ant Design 版本）及已知限制，AI 在评审设计可落地性时会参考。

其余 references 文件（行业惯例、交互模式、评审检查项）已内置通用内容，无需修改即可使用。

---

## 发布新版本（维护者）

### 方式一：推 tag 自动发布（推荐）

```bash
# 1. 更新 package.json 和 skill-manifest.json 中的版本号
# 2. 提交并推送 tag
git add .
git commit -m "release: v1.x.x"
git tag v1.x.x
git push origin main --tags
```

推送 tag 后，GitHub Actions 自动执行 sync + npm publish。

> 前提：在 GitHub 仓库 Settings → Secrets → Actions 中添加 `NPM_TOKEN`（npm Access Token）。

### 方式二：本地手动发布

```bash
# 同步源文件到打包目录，再发布
npm run release
```

`prepublishOnly` 钩子会在每次 `npm publish` 前自动执行 sync，无需手动复制文件。
