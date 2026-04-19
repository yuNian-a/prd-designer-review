# Project Map

用于在需求预审时识别当前需求所属的项目、业务线与产品类型。

AI 在接到需求后，应先比对本文件确认属于哪个项目，再加载 `domain-conventions.md`、`component-guidelines.md`、`design-tokens.md` 中对应的项目节，作为评审依据。

---

## 已收录项目

| 项目标识 | 产品名称 | 目标用户 | 产品类型 | 对应规范节 |
|---|---|---|---|---|
| `rwa-official-website` | Finloop RWA 官网 | 机构投资者（品牌触达） | 营销官网（PC + Mobile） | domain-conventions § 二、component-guidelines § 一、design-tokens § 一 |
| `fai` | FAI — AI Agent Web | 企业内部 / 团队用户 | AI 对话平台（PC Web） | domain-conventions § 三、component-guidelines § 二、design-tokens § 二 |
| `finloop-website-web` | Finloop 官网 | 金融机构 B2B 客户 | 企业品牌官网（PC + Mobile） | domain-conventions § 四、component-guidelines § 三、design-tokens § 三 |
| `webportal` | TaaS 平台 | 机构投资者 / 分销商 / 员工 | ToB 金融 SaaS（PC Web） | domain-conventions § 五、component-guidelines § 四、design-tokens § 四 |
| `enterprise-web` | Finloop Enterprise Web（EPS / MFO） | 机构投资者 / 财富管理从业者 | ToB 金融 SaaS（PC Web，Monorepo） | domain-conventions § 六、component-guidelines § 五、design-tokens § 五 |

---

## 项目识别方式

AI 可通过以下线索判断需求所属项目：

- 用户在触发 skill 时明确说明项目名称
- 需求文档中出现项目关键词（如"TaaS""FAI""EPS""MFO""RWA 官网"等）
- 需求文档中出现的路由、组件名、业务模块名（对照上表各规范节中的模块清单）
- 若无法判断，在评审结果开头注明"未能确认所属项目，以下评审基于通用 ToB 惯例"

---

## 补充其他项目

> 若有新项目接入，在上表中新增一行，并在 `domain-conventions.md`、`component-guidelines.md`、`design-tokens.md` 中添加对应项目节即可。
