# Design Tokens

设计 Token 与规范参考，主要用于需求评审进入设计执行阶段后，对齐视觉变量与约束边界。在预审阶段也可用于判断需求描述的视觉表现是否超出设计系统支持范围。

---

## 使用说明

本文件在以下两个阶段发挥作用：
1. **需求预审阶段**：判断需求中对颜色、状态、字体的描述是否与设计系统冲突
2. **设计执行阶段**：对齐 Token 变量，确保设计稿使用规范变量而非硬编码值

---

## 一、颜色体系

> 请根据你的实际设计系统填写，以下为通用模板：

### 主色（Primary）
- Primary / 默认：`#1677FF`（示例）
- Primary / Hover：
- Primary / Active：
- Primary / Disabled：

### 功能色
| 用途 | Token 名称 | 色值 |
|---|---|---|
| 成功 | `color-success` | `#52C41A` |
| 警告 | `color-warning` | `#FAAD14` |
| 错误 | `color-error` | `#FF4D4F` |
| 信息 | `color-info` | `#1677FF` |

### 中性色
| 用途 | Token 名称 | 色值 |
|---|---|---|
| 主文本 | `color-text-primary` | |
| 次要文本 | `color-text-secondary` | |
| 禁用文本 | `color-text-disabled` | |
| 边框 | `color-border` | |
| 分割线 | `color-split` | |
| 背景 | `color-bg-base` | |

---

## 二、字体体系

| 级别 | 字号 | 行高 | 字重 | 用途 |
|---|---|---|---|---|
| H1 | 24px | 32px | 600 | 页面标题 |
| H2 | 20px | 28px | 600 | 模块标题 |
| H3 | 16px | 24px | 600 | 卡片标题 |
| Body | 14px | 22px | 400 | 正文 |
| Small | 12px | 20px | 400 | 辅助说明 |

---

## 三、间距体系

| Token 名称 | 值 | 使用场景 |
|---|---|---|
| `spacing-xs` | 4px | 元素内紧凑间距 |
| `spacing-sm` | 8px | 组件内部间距 |
| `spacing-md` | 16px | 组件间距 |
| `spacing-lg` | 24px | 模块间距 |
| `spacing-xl` | 32px | 页面级间距 |

---

## 四、圆角体系

| Token 名称 | 值 | 用途 |
|---|---|---|
| `radius-sm` | 2px | 标签、小组件 |
| `radius-md` | 6px | 按钮、输入框 |
| `radius-lg` | 8px | 卡片 |
| `radius-xl` | 12px | 弹窗 |

---

## 五、本项目 Token 文件地址

> 填写实际的设计 Token 来源：

- **Figma 变量地址**：
- **Token JSON 文件路径**：
- **CSS 变量文件路径**：
- **使用的 Token 工具**：（如 Style Dictionary、Theo 等）
