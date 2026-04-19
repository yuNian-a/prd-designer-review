# PRD 设计预审 Skill

在需求评审之前，从用户视角 + 设计师视角对 PRD 跑一遍预审，找出流程断点、信息缺失、设计无法落地的问题，输出优先级问题清单，帮助设计师在线下评审前提前准备，提升评审质量和效率。

- **GitHub**：https://github.com/yuNian-a/prd-designer-review
- **npm**：https://www.npmjs.com/package/prd-designer-review

---

## 安装

在你的项目根目录执行：

```bash
npx prd-designer-review install prd-designer-review
```

安装成功后，skill 文件会出现在 `.agents/skills/prd-designer-review/` 目录下。

**后续更新**执行：

```bash
npx prd-designer-review update prd-designer-review
```

更新时会自动保留你对本地文件的修改，不会覆盖。

---

## 安装后目录结构

```
你的项目/
└── .agents/
    └── skills/
        └── prd-designer-review/
            ├── SKILL.md                       ← 核心入口，Cursor 读取此文件
            ├── skill-manifest.json
            ├── assets/
            │   └── output-template.md         ← 输出结构模板
            └── references/
                ├── review-dimensions.md       ← 详细评审检查项与优先级定义
                ├── design-review-checklist.md ← 高频遗漏点补充
                ├── interaction-patterns.md    ← 通用交互惯例
                ├── project-map.md             ← 已内置项目列表，可扩展
                ├── domain-conventions.md      ← 已内置各项目流程规范，可扩展
                ├── component-guidelines.md    ← 已内置各项目组件清单，可扩展
                └── design-tokens.md           ← 已内置各项目设计 Token，可扩展
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

AI 会按以下流程输出结果：

1. **需求概述** — 理解需求目标和用户角色
2. **主流程还原** — 还原用户完整操作链路
3. **用户视角问题** — 流程是否合理、能否跑通、异常流是否完整
4. **设计师视角问题** — 信息架构、状态体系、权限规则、字段定义是否清晰可设计
5. **需带入线下评审的问题** — 必须向产品经理确认的关键问题清单
6. **是否建议进入设计阶段** — 明确判断当前需求的可设计性

---

## 扩展项目上下文（可选）

skill 已内置以下项目的规范上下文，对应项目的需求无需额外配置即可使用：

| 项目 | 说明 |
|---|---|
| Finloop RWA 官网 | 黑色科技感营销官网，PC + Mobile |
| FAI — AI Agent Web | 企业级 AI 对话平台 |
| Finloop 官网 | B2B 金融机构品牌官网 |
| TaaS 平台（Webportal） | RWA 资产代币化管理平台，ToB SaaS |
| Finloop Enterprise Web（EPS / MFO） | 金融资产管理平台，Monorepo |

如需接入**新项目**，在以下四个文件中各新增一个项目章节即可：

- `references/project-map.md` — 新增项目标识与规范对照
- `references/domain-conventions.md` — 新增项目流程与设计约束
- `references/component-guidelines.md` — 新增项目组件清单
- `references/design-tokens.md` — 新增项目 Token / 变量

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
npm run release
```

`prepublishOnly` 钩子会在每次 `npm publish` 前自动执行 sync，无需手动复制文件。
