# Component Guidelines

组件能力与边界参考，用于在需求预审时判断需求所描述的交互设计是否在现有组件库能力范围内，识别可能无法直接落地的设计需求。

---

## 使用说明

AI 在评审时，若发现需求描述了某种交互或展示形式，应对照本文件判断：
- 当前组件库是否支持该能力
- 若不支持，是否属于定制开发，成本如何
- 若超出组件边界，应在设计师视角问题中标注为风险

---

## 一、通用组件能力说明

> 本节描述当前设计系统中组件的典型能力边界。请根据你的实际组件库（Ant Design、自研 UI 库等）更新以下内容。

### 表单组件
- 支持的输入类型：文本、数字、日期、时间、下拉选择、多选、开关、上传
- 表单联动（条件显隐）：**支持**，但需在需求中明确触发条件
- 动态表单（行数可增减）：**支持**，但需说明最大行数限制
- 富文本编辑器：**支持**，但图片上传需额外配置存储

### 表格组件
- 固定列（左/右）：**支持**
- 行内编辑：**支持**，但仅支持简单输入，不支持复杂表单
- 行展开（展开子内容）：**支持**
- 虚拟滚动（大数据量）：**支持**，超过 500 条建议启用
- 跨页选择：**不支持**，每次翻页后选择状态重置

### 弹窗 / 抽屉组件
- Modal 最大宽度：640px（超出建议用 Drawer 或新页面）
- Drawer 宽度：可配置，默认 480px
- 嵌套弹窗：**不推荐**，最多 2 层，超过 2 层用户体验差

### 上传组件
- 支持格式：图片（JPG / PNG / WebP）、文档（PDF / Word / Excel）
- 单文件大小上限：默认 10MB（可配置）
- 批量上传：**支持**，最多同时上传 20 个文件

---

## 二、Finloop 官网（finloop-website-web）组件说明

- **PC 端 UI 库**：Element UI（组件前缀 `el-`）
- **移动端 UI 库**：Vant 2.x（组件前缀 `van-`）
- **框架**：Vue 2 + Options API（非 Vue 3）

### 全局注册组件（直接使用，无需 import）

| 组件 | 能力说明 |
|---|---|
| `<ImgCDN>` | CDN 图片加载（带本地兜底），大图/产品图/背景图必须使用此组件 |
| `<MultiImg>` | 加载本地多格式图片（WebP + 备选格式） |
| `<MultiImgCDN>` | 加载 CDN 多格式图片 |
| `<Collapse>` | 折叠面板，适用于 FAQ、展开详情等场景 |
| `<AnimiationText>` | 文字进场动画（滚动触发） |
| `<AnimiationTransalte>` | 元素位移动画（滚动触发） |
| `<VisibleArea>` | 元素进入视口检测，用于触发动画或懒加载 |

### 需手动 import 的业务组件

| 组件 | 说明 |
|---|---|
| `CommonMain` | **每个业务页面的根容器，必须使用**，处理页面滚动结构 |
| `HeaderNav` | 顶部导航（通常由 Layout 处理，业务组件不需要手动引入） |
| `BusinessModel` | 商业模式区块（已有实现，可直接复用） |
| `QualityService` | 品质服务区块（已有实现，可直接复用） |

### PC 端 Element UI 常用组件

| 场景 | 组件 |
|---|---|
| 按钮 | `<el-button>` |
| Tab 切换 | `<el-tabs>` + `<el-tab-pane>` |
| 轮播图 | `<el-carousel>` + `<el-carousel-item>` |
| 弹窗 | `<el-dialog>` |
| 表单 | `<el-form>` + `<el-form-item>` |

### 移动端 Vant 常用组件

| 场景 | 组件 |
|---|---|
| 按钮 | `<van-button>` |
| Tab 切换 | `<van-tabs>` + `<van-tab>` |
| 轮播图 | `<van-swipe>` + `<van-swipe-item>` |
| 弹出层 | `<van-popup>` |

### 超出现有组件能力、需新开发的场景

- 复杂数据可视化（图表、动态数字等）
- 地图展示（全球布局页的地图交互）
- 视频播放器
- 实时数据展示（行情、价格等）

---

## 三、TaaS 平台（Webportal）组件说明

- **UI 库**：Ant Design Vue 4.x（组件前缀 `a-`，按需引入）
- **框架**：Vue 3 + Composition API + `<script setup lang="ts">`

### 表单输入组件

| 组件 | 能力说明 |
|---|---|
| `FInput` | 基础文本输入框 |
| `PasswordInput` | 密码输入框（含显隐切换） |
| `NumberInput` / `InputNumber` | 数值输入 |
| `StepperInput` | 步进数值输入 |
| `FSelect` | 下拉单选 |
| `FMultipleSelect` | 多选下拉 |
| `FMultipleSelectWithAll` | 带"全选"的多选下拉 |
| `FSearchSelect` | 可搜索下拉 |
| `FAutoComplete` | 自动补全输入 |
| `FDatePicker` | 日期选择器 |
| `FIDatepicker` | 自研日期/时间范围选择器 |
| `AddressOption` | 省市区联动地址选择 |
| `AreaCode` | 手机国际区号选择 |
| `CurrencySelect` | 币种选择 |
| `Captcha` | 图形验证码 |
| `FUploader` | 文件上传 |

### 数据展示组件

| 组件 | 能力说明 |
|---|---|
| `FTable` | 通用表格（含分页），列表页必须使用 |
| `FTag` / `Tag` | 状态标签（如交易状态、审核状态） |
| `FTabs` | 选项卡切换 |
| `TextEllipsisTooltip` | 长文本省略 + Tooltip 展示全文 |
| `FCopy` | 一键复制（钱包地址、哈希值等场景必用） |
| `PDFViewer` | PDF 预览（合同文档展示） |
| `NoData` | 无数据空状态（列表为空时使用） |
| `NoSearchResults` | 无搜索结果空状态（与 `NoData` 区分使用） |
| `DetailSteps` / `WrapperSteps` | 步骤条（流程说明） |
| `FosunDynamicFont` | **金额 / 数值场景专用**，使用 MiNum 数字字体，大额数字必须使用此组件 |

### 操作与反馈组件

| 组件 | 能力说明 |
|---|---|
| `FButton` | 基础按钮 |
| `CommonBtn` | 通用操作按钮（含权限控制，需绑定 `authCode`）|
| `CommonBtnSelect` | 带下拉的操作按钮（多操作合并） |
| `FModal` | 弹窗（表单类操作） |
| `FModalConfirm` | 确认弹窗（二次确认删除/提交等操作） |
| `FDrawer` | 抽屉面板（详情预览、较多字段的表单） |

### 搜索与筛选组件

| 组件 | 能力说明 |
|---|---|
| `SearchInput` | 搜索输入框 |
| `MultipleSelectSearch` | 多选搜索 |
| `IconFilter` | 筛选图标 |
| `IconSort` / `IconSortWithLogic` | 排序图标 |
| `ClearCondition` | 清除所有筛选条件 |

### 布局组件

| 组件 | 能力说明 |
|---|---|
| `AppLayout` | **主布局容器**（顶部 Header + 侧边 Sidebar + TabBar），已全局挂载 |
| `NormalLayout` | 普通内容区布局 |
| `LoginLayout` | 登录页专用布局 |
| `Breadcrumb` / `CustomBreadcrumb` | 面包屑导航 |
| `SvgIcon` | SVG 图标 |

### 超出现有组件能力、需新开发的场景

- 图表类展示（已有 ECharts，但自定义图表类型需评估工作量）
- 复杂工作流 / 审批流可视化编辑
- 实时推送行情（需 WebSocket 支持）
- 文件批量下载 / 导出
- 钱包连接 / 链上操作交互

---

## 四、Finloop Enterprise Web（EPS / MFO）组件说明

- **主力 UI 库**：Ant Design Vue 4.x（按需引入）
- **补充 UI 库**：View UI Plus 1.3、vue-devui 1.6
- **框架**：Vue 3 + Composition API + `<script setup lang="ts">`
- **公共组件**：`projects/common/components/`，全部自动全局注册，无需 import

### 布局类组件

| 组件 | 说明 |
|---|---|
| `AppLayout` | **整体页面框架**（侧边栏 + 顶栏 + 内容区），已全局挂载，不可移除 |
| `Sidebar` / `SidebarIndex` | 左侧导航 |
| `NavBar` | 顶部导航栏 |
| `AppMain` | 主内容区容器 |
| `NormalLayout` | 普通页面布局容器 |
| `LoginLayout` | 登录页专用布局 |
| `EmptyView` | 空状态视图 |
| `Footer` | 页脚 |

### 表单 / 输入类组件

| 组件 | 说明 |
|---|---|
| `FInput` | 基础输入框 |
| `FButton` | 基础按钮 |
| `FSelect` | 下拉单选 |
| `FMultipleSelect` | 多选下拉 |
| `FMultipleSelectWithAll` | 多选下拉 + 全选 |
| `FSearchSelect` | 带搜索的下拉 |
| `FAutoCompelete` | 自动补全输入框 |
| `FDatePicker` | 日期选择器 |
| `FIDatepicker` | 自研日期选择器（含日期范围、时间范围） |
| `NumberInput` | 数字输入框 |
| `PasswordInput` | 密码输入框（含显示/隐藏切换） |
| `StepperInput` | 步进器输入 |
| `SearchInput` | 带搜索按钮的输入框 |
| `AreaCode` | 手机国际区号选择 |
| `MultipleSelectSearch` | 多选 + 搜索组合 |

### 反馈 / 弹层类组件

| 组件 | 说明 |
|---|---|
| `FModal` | 弹窗（Ant Design Modal 封装） |
| `FDrawer` | 抽屉（Ant Design Drawer 封装） |
| `RecheckModal` | **二次确认弹窗**（删除、提交等高风险操作必须使用） |
| `TradePWDModel` | **交易密码验证弹窗**（所有交易提交前的安全验证） |

> 弹窗层级注意：`FModal` / `FDrawer` 均有默认 `z-index`，若需求涉及嵌套弹窗，必须在 PRD 中明确交互层级，否则标注为设计风险。

### 数据展示类组件

| 组件 | 说明 |
|---|---|
| `FTable` | **通用表格**（Ant Design Table 封装，含分页），列表页必须使用 |
| `TextEllipsisTooltip` | 文字超长省略 + Tooltip |
| `LoadingImg` | 图片懒加载 / 加载状态 |
| `NoSearchResults` | 无搜索结果空状态 |
| `PDFViewer` | PDF 预览 |
| `CustomBreadcrumb` / `Breadcrumb` | 面包屑导航 |

### 业务类组件

| 组件 | 说明 |
|---|---|
| `TradingAccount` / `TradingAccountSelect` | 交易账户选择（交易流程必用） |
| `TradingAccountFixed` | 固定展示交易账户信息 |
| `TradingAccountMore` | 账户更多操作 |
| `TradingAccountRecord` | 交易账户记录 |
| `TradingAccountEditModal` | 编辑交易账户弹窗 |
| `TradePWDSet` | 设置交易密码 |
| `TradeOrgSet` | 设置交易机构 |
| `OrgChange` | 切换机构（多机构场景） |
| `Captcha` | 图形验证码 |
| `Chatbot` / `AIChat` | AI 聊天机器人（`@matechat/core`） |
| `FosunDynamicFont` | **金额 / 数值专用字体组件**，大额数字必须使用 |

### 超出现有组件能力、需新开发的场景

- 复杂图表（已有 ECharts，自定义类型需评估工作量）
- 询价流程中的实时报价（需 WebSocket）
- 合同 / 协议的在线签署
- 跨子工程（eps ↔ mfo）的共享状态或页面复用

---

## 五、需要定制开发的场景（通用）

以下交互模式超出组件库默认能力，若需求涉及这些场景，应标注为设计风险并提前确认开发成本：

- 拖拽排序（列表行拖拽、表格列拖拽）
- 甘特图 / 时间轴编辑
- 画布类操作（节点连线、流程图绘制）
- 实时协作编辑
- 复杂数据可视化（非标准图表）
- 自定义打印模板

---

## 三、FAI 项目（AI Agent Web）组件说明

- **主力 UI 库**：Ant Design Vue 4.x
- **图标库**：@devui-design/icons
- **动画**：lottie-web（封装为 `LottieAnimation.vue`）

### 公共组件（`src/components/common/`）

| 组件 | 能力说明 |
|---|---|
| `GlobalHeader.vue` | 全局顶部导航栏，全局挂载，需求不得要求移除或替换 |
| `NewSidebar.vue` | 左侧侧边栏，全局挂载，整体布局锚点 |
| `MessageBubble.vue` | 对话气泡（用户消息 / AI 回复），已支持 Markdown 渲染 |
| `HistoryPanel.vue` | 历史记录侧边面板（内嵌在页面内） |
| `HistoryDrawer.vue` | 历史记录抽屉（从侧边滑出），两者二选一使用 |
| `UserAvatar.vue` | 用户头像展示 |
| `UserAvatarDropdown.vue` | 头像点击下拉菜单（含退出、设置等入口） |
| `DeleteConfirmModal.vue` | 删除二次确认弹窗，所有删除操作复用此组件 |
| `EditTitleModal.vue` | 标题编辑弹窗，用于重命名对话等场景 |
| `SmartScrollContainer.vue` | 智能滚动容器，含自动滚底，对话列表必须使用 |
| `NonContinuousScrollContainer.vue` | 非连续滚动容器，用于加载历史消息分段场景 |
| `BlurText.vue` | 渐显 / 模糊文字动效，AI 回复流式输出时使用 |
| `ModuleTree.vue` | 树形模块选择器 |
| `FInput/` | 自定义输入框（在 Ant Design Input 基础上扩展） |
| `FirstLoginDialog.vue` | 首次登录引导弹窗，新手流程复用此组件 |
| `LottieAnimation.vue` | Lottie 动画封装，加载状态 / 空状态动效使用 |

### 对话组件（`src/components/chatbot/`）

| 组件 | 能力说明 |
|---|---|
| `ChatInput.vue` | 对话输入框，支持多行输入、回车发送、发送按钮 |
| `ConversationList.vue` | 对话列表（含分组） |
| `ConversationItem.vue` | 单条对话列表项 |
| `AgentSelector.vue` | Agent 选择器（含搜索、分类） |
| `AgentItem.vue` | 单个 Agent 卡片 |
| `NewConversationButton.vue` | 新建对话按钮 |

### 超出现有组件能力、需要新开发的场景

若需求涉及以下内容，应标注为需要新开发，评估工作量：

- 输入框新增附件上传、语音输入、`@` 提及功能
- 消息气泡新增点赞 / 踩、复制、引用回复等操作
- Agent 的评分 / 评论系统
- 对话内容导出（PDF / Markdown）
- 实时协作（多人同时编辑同一对话）
