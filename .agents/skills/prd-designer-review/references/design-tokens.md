# Design Tokens

各项目的设计 Token 与规范参考，用于在需求预审时判断需求描述的视觉方案是否与项目现有规范冲突，以及进入设计执行阶段时对齐变量。

---

## 使用说明

AI 在评审时，若需求涉及颜色、间距、字体、圆角等视觉规范，应对照本文件判断：
- 需求描述的视觉方案是否超出当前 Token 体系支持范围
- 若需求要求使用项目规范外的颜色或样式，应标注为设计风险

---

## 一、FAI 项目（AI Agent Web）

**技术栈**：Vue 3 + Less + CSS Variables

### 颜色

```css
/* 主色 */
--color-primary: #3b82f6;
--color-primary-hover: #2563eb;
--color-primary-active: #1d4ed8;

/* 背景 */
--color-bg-primary: #ffffff;
--color-bg-secondary: #f9fafb;
--color-bg-tertiary: #f3f4f6;
--color-border: #e5e7eb;

/* 文字 */
--color-text-primary: #111827;
--color-text-secondary: #6b7280;
--color-text-tertiary: #9ca3af;

/* 语义色 */
--color-success: #10b981;
--color-error: #ef4444;
--color-warning: #f59e0b;
```

### 间距

```css
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-2xl: 48px;
```

### 字号

```css
--font-size-xs: 12px;
--font-size-sm: 14px;
--font-size-base: 16px;
--font-size-lg: 18px;
--font-size-xl: 20px;
--font-size-2xl: 24px;
```

### 字重

```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### 圆角

```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-full: 9999px;
```

### 层级（z-index）

```css
--z-dropdown: 1000;
--z-modal: 2000;
--z-tooltip: 3000;
```

---

## 二、RWA 官网项目（Finloop RWA Official Website）

**技术栈**：Nuxt 3 + Vue 3 + Less + CSS Variables

### 颜色

```css
/* 文字 */
--fontPrimaryColor: rgba(255, 255, 255, 0.9);
--fontSecondaryColor: rgba(255, 255, 255, 0.7);
--fontTertiaryColor: rgba(255, 255, 255, 0.5);

/* 背景 */
--bg-primary: #000;
--bg-secondary: #f9fafb;
--primaryBgColor: #000;
--primaryColor: #3467ff;

/* 分割线 */
--dividedDarkColor: rgba(255, 255, 255, 0.16);
--dividedLightColor: rgba(255, 255, 255, 0.08);

/* 卡片表面 */
--color-surface-light: rgba(255, 255, 255, 0.05);
--color-surface-medium: rgba(255, 255, 255, 0.08);
--color-surface-hover: rgba(255, 255, 255, 0.10);
--color-surface-border: rgba(255, 255, 255, 0.10);

/* 语义色 */
--color-success: #10b981;
--color-error: #ef4444;
--color-warning: #f59e0b;
--color-info: #3b82f6;
```

### 间距

```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
--space-4xl: 96px;
```

### 字号

```css
--font-size-sm: 14px;
--font-size-base: 16px;
--font-size-lg: 18px;
--font-size-xl: 20px;
--font-size-2xl: 24px;
--font-size-3xl: 32px;
--font-size-4xl: 40px;
--font-size-5xl: 56px;
--font-size-6xl: 64px;
```

### 字重

```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### 圆角

```css
--radius-sm: 4px;
--radius-base: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

### 过渡动画

```css
--transition-fast: 150ms ease-in-out;
--transition-base: 300ms ease-in-out;
--transition-slow: 500ms ease-in-out;
```

---

## 三、Finloop 官网（finloop-website-web）

**技术栈**：Nuxt 2 + Vue 2 + Less（无 CSS Variables，使用硬编码色值）

### 品牌色

```less
// 主色（Finloop 蓝）
#1B83F8        // 按钮、高亮、链接（主要）
#0F5BF8        // 深蓝变体

// 背景色
#00152A        // 深色区块背景（导航栏、Hero、CTA 区）
rgba(0, 21, 42, 0.8)   // 半透明深色背景

// 文字色
#ffffff                        // 深色背景上的主文字
rgba(255, 255, 255, 0.8)       // 深色背景上的次要文字
rgba(255, 255, 255, 0.5)       // 深色背景上的辅助文字
#182031                        // 浅色背景上的深色主文字
rgba(24, 32, 49, 0.6)          // 浅色背景上的次要文字
rgba(0, 0, 0, 0.5)             // 浅色背景上的辅助文字

// 强调色
#FE6915        // 橙色（部分旧版高亮，不推荐新增使用）
```

> 注意：本项目**不使用 CSS 变量**，色值为硬编码。与 FAI 项目和 RWA 官网的 Token 体系不兼容，三个项目不可混用色值。

### 响应式断点

```less
@media screen and (max-width: 1024px) { }   // 平板
@media screen and (max-width: 750px)  { }   // 移动端主断点
@media screen and (max-width: 480px)  { }   // 小屏手机
```

> 注意：本项目移动端断点为 **750px**（非 768px），与 RWA 官网和 FAI 项目不同。

### 全局 CSS 工具类

```css
.common-width       /* 内容最大宽度 1200px，水平居中 */
.common-title       /* 标准区块标题样式 */
.c-theme            /* 主题橙色文字（#FE6915）*/
.pointer            /* cursor: pointer */
.common-img-hover   /* 图片 hover 放大效果 */
.common-card-hover  /* 卡片 hover 上移效果 */
```

---

## 四、TaaS 平台（Webportal）

**技术栈**：Vue 3 + Less + CSS Variables  
**主题**：亮色（light）/ 暗色（dark），通过 `data-theme` 属性切换，所有颜色必须使用变量，**禁止硬编码色值**

### 字体颜色

| 变量 | 说明 | Light | Dark |
|---|---|---|---|
| `--fontPrimaryColor` | 标题文字 | `#1a1a1a` | `rgba(255,255,255,0.9)` |
| `--fontSecondaryColor` | 正文 / 辅助文字 | `#24272f` | `rgba(255,255,255,0.7)` |
| `--fontTertiaryColor` | 说明性文字 | `#4b4e55` | `rgba(255,255,255,0.45)` |
| `--fontDisableColor` | 禁用 / Placeholder | `#808287` | `rgba(255,255,255,0.2)` |
| `--fontWhiteColor` | 固定白色（两主题相同） | `#fff` | `#fff` |

### 品牌色

| 变量 | Light | Dark |
|---|---|---|
| `--primaryColor` | `#00d1e8` | `#01def7`（青色）|
| `--primaryHoverColor` | `#00d3ea` | `rgba(1,222,247,0.8)` |
| `--primaryDisableColor` | `rgba(1,222,247,0.4)` | 同 Light |
| `--secondaryColor` | `#2c5bdb` | `#2c5bdb` |

> 注意：本项目主色为**青色**（`#00d1e8`），与其他三个项目的蓝色主色完全不同，不可混用。

### 背景与填充

| 变量 | 说明 |
|---|---|
| `--bgColor` | 页面主背景 |
| `--bgContentColor` | 内容区背景 |
| `--bgPopoverColor` | 浮层 / 弹窗背景 |
| `--fillLightColor` | 最浅填充（卡片默认背景）|
| `--fillPrimaryColor` | 基础填充 |
| `--fillSecondaryColor` | Hover 填充 |
| `--fillTertiaryColor` | Active 填充 |
| `--tableRowHoverColor` | 表格行 Hover 背景 |

### 状态色（固定值，两主题相同）

| 变量 | 色值 | 说明 |
|---|---|---|
| `--riseColor` | `#e61b4c` | 涨色（红）|
| `--fallColor` | `#239c5a` | 跌色（绿）|
| `--flatColor` | `#999` | 平盘 |
| `--errorColor` | `#ff6a57` | 报错 |
| `--successColor` | `#4acf88` | 成功 |
| `--linkColor` | `#0b53de` | 链接 |

### 线框与遮罩

| 变量 | 说明 |
|---|---|
| `--borderColor` | 表单 / 卡片边框 |
| `--dividedColor` | 分割线 |
| `--maskBgColor` | 遮罩层（`rgba(0,0,0,0.3)`）|

### 侧边栏（仅主布局内使用）

| 变量 | 说明 |
|---|---|
| `--sideBarMenuBgColor` | 侧边栏背景（`rgba(14,16,20,1)`）|
| `--sideBarMenuFontColor` | 菜单字色（`rgba(255,255,255,0.45)`）|
| `--sideBarMenuFontActiveColor` | 激活菜单字色（`#01def7`）|

### 字体规范

| 场景 | 字体 |
|---|---|
| 正文 / UI | 系统字体栈（`-apple-system, BlinkMacSystemFont` 等）|
| **数值 / 金额**（重要） | `MiNum` 专用数字字体 → 必须使用 `FosunDynamicFont` 组件，支持 400/500/600 字重 |

---

## 五、Finloop Enterprise Web（EPS / MFO）

**技术栈**：Vue 3 + Less 变量（通过 Vite `additionalData` 全局注入 `variable.less`）  
**注意**：本项目使用 **Less 变量**（`@` 前缀），而非 CSS Variables（`--` 前缀），与 TaaS 平台不同，不可混用。所有颜色禁止硬编码，必须使用以下变量：

### 品牌色与功能色

```less
// 品牌主色
@primaryColor: #1b83f8;    // 蓝色，与 Finloop 官网一致

// 文字色
@fontBlackColor: #2f2f2f;  // 主要文字（标题）
@fontDarkColor:  #333;      // 次要文字（深）
@fontGreyColor:  #666;      // 次要文字
@fontLightColor: #999;      // 辅助文字 / Placeholder

// 背景色
@bgWhiteColor: #fff;
@bgGrayColor:  #f6f6f6;

// 分割线
@dividedDeepColor:  #e6e6e6;   // 深分隔线
@dividedLightColor: #efefef;   // 浅分隔线

// 金融行情色（固定，不可更改）
@riseColor: #e61b4c;    // 涨（红）
@fallColor: #239c5a;    // 跌（绿）
@flatColor: #999;       // 平盘

// 功能色
@maskBgColor: rgba(0, 0, 0, 0.3);  // 遮罩层
@linkColor:   #0b53de;              // 链接
@errorColor:  #f31414;              // 报错
@buttonColor: #0f0f0f;              // 按钮
```

> 注意：本项目为**浅色（light only）**，不支持暗色主题，与 TaaS 平台的双主题体系不同。

---

## 六、其他项目

> 在此添加其他项目的 Token 信息，格式参考上方示例。
