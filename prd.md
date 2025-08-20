# YouTube 创作者 VSCode 主题 PRD

## 项目背景
我们正在将 VSCode 改造成 YouTube 内容创作者的专属工具（非编程用途）。这个主题是整体改造计划的一部分，需要让 YouTube 创作者在使用我们魔改后的 VSCode 时感到亲切、专业且富有创意。

## 目标用户
- **唯一用户群体**：YouTube 内容创作者/影响者
- **用户画像**：
  - 每天花费大量时间进行内容创作
  - 追求专业且有个性的工作界面
  - 喜欢现代、时尚的设计风格
  - 重视品牌一致性和视觉美感
  - 期望工具能体现其创作者身份

## 项目目标
基于 GitHub VSCode 主题的优秀架构，创建一个让 YouTube 创作者爱不释手的界面主题，让他们在使用我们魔改的 VSCode 时感受到：
- 这是为他们量身定制的工具
- 界面设计符合 YouTube 创作者的审美
- 使用体验愉悦且专业

## 技术要求

### 基础框架
1. **起点**：基于 GitHub VSCode 主题进行修改
2. **学习阶段**：
   - 深入研究 GitHub 主题的配色系统
   - 理解其设计哲学和颜色层次
   - 提取可复用的优秀设计模式

### 主题配置
创建恰好 2 个主题变体：
1. **浅色主题**："YouTube Studio Light"
2. **深色主题**："YouTube Studio Dark"

## 设计策略

### 核心设计理念
**"创作者的专属工作台"** - 让每个 YouTube 创作者感觉这是他们的创意工作空间

### YouTube 品牌融合策略

1. **品牌色彩运用**：
   - **主色调**：YouTube 红色 (#FF0000)
   - **运用原则**：
     - 作为点缀色，不喧宾夺主
     - 营造 YouTube 生态归属感
     - 在关键交互元素中体现

2. **创作者审美偏好**：
   - **Studio 风格**：模仿 YouTube Studio 的设计语言
   - **现代感**：采用流行的设计趋势
   - **个性化**：让创作者感受到工具的独特性
   - **专业感**：体现内容创作的专业性

### 具体设计方向

#### 深色主题设计要点
- **背景色**：深灰色系，类似 YouTube 深色模式
- **强调色**：YouTube 红色用于：
  - 活动状态指示
  - 重要按钮
  - 选中高亮
- **辅助色**：
  - 白色和浅灰色用于文本
  - 深红色变体用于次要元素
- **氛围营造**：专业创作室的感觉

#### 浅色主题设计要点
- **背景色**：明亮但不刺眼的白灰色
- **强调色**：YouTube 红色保持一致性
- **对比度**：确保长时间使用不疲劳
- **整体感觉**：清新、现代、充满活力

### UI 元素设计细节

1. **侧边栏**：
   - 采用 YouTube Studio 的侧边栏风格
   - 图标悬停时显示红色强调
   - 活动项目用红色标记

2. **顶部栏**：
   - 简洁的设计，不干扰内容区域
   - 可考虑加入细微的 YouTube 品牌元素

3. **按钮和交互元素**：
   - 主要操作按钮使用 YouTube 红色
   - 悬停效果要有 YouTube 的交互感
   - 保持与 YouTube 平台一致的交互反馈

4. **选中和高亮**：
   - 文本选中：淡红色背景
   - 行高亮：极淡的红色调
   - 焦点指示：红色边框

## 实施步骤

### 第一阶段 - 研究与分析
```
- 深入分析 GitHub VSCode 主题结构
- 研究 YouTube Studio 的设计系统
- 收集 YouTube 创作者的界面偏好
- 确定颜色变量映射关系
```

### 第二阶段 - 设计系统构建
```
- 创建 YouTube 创作者专属配色板
- 定义主色、辅助色、强调色体系
- 设计深色和浅色两套方案
- 制作设计预览图
```

### 第三阶段 - 主题开发
```
- 修改主题配置文件
- 调整所有 UI 组件颜色
- 优化交互状态的视觉反馈
- 确保品牌一致性
```

### 第四阶段 - 优化与测试
```
- 长时间使用测试
- 不同光线环境测试
- 收集创作者反馈
- 持续优化调整
```

## 成功标准
- **品牌认同**：创作者立即认识到这是为他们设计的
- **使用欲望**：看到就想使用的吸引力
- **舒适度**：长时间使用不疲劳
- **独特性**：与普通开发工具明显区别
- **归属感**：感受到 YouTube 创作者社区的归属

## 文件结构
```
youtube-studio-theme/
├── themes/
│   ├── youtube-studio-light.json
│   └── youtube-studio-dark.json
├── package.json
├── README.md
├── assets/
│   ├── logo/
│   └── screenshots/
└── docs/
    └── design-system.md
```

## 颜色规范示例

### 深色主题核心颜色
```json
{
  // 背景层次
  "editor.background": "#0F0F0F",              // YouTube 深色背景
  "sideBar.background": "#181818",             // 稍亮的侧边栏
  "activityBar.background": "#212121",         // 活动栏背景
  
  // YouTube 红色系统
  "activityBar.activeBorder": "#FF0000",       // 活动标记
  "button.background": "#CC0000",              // 主按钮
  "selection.background": "#FF000020",         // 选中背景
  "progressBar.background": "#FF0000",         // 进度条
  
  // 交互状态
  "list.activeSelectionBackground": "#FF00001A",
  "list.hoverBackground": "#FFFFFF0A",
  "button.hoverBackground": "#FF0000",
  
  // 文本颜色
  "foreground": "#FFFFFF",
  "descriptionForeground": "#AAAAAA"
}
```

### 浅色主题核心颜色
```json
{
  // 背景层次  
  "editor.background": "#FFFFFF",
  "sideBar.background": "#F9F9F9",
  "activityBar.background": "#FAFAFA",
  
  // YouTube 红色系统
  "activityBar.activeBorder": "#FF0000",
  "button.background": "#FF0000",
  "selection.background": "#FF000015",
  
  // 文本颜色
  "foreground": "#030303",
  "descriptionForeground": "#606060"
}
```

## 设计原则总结

### 必须遵循
1. **YouTube 身份感**：每个细节都要让用户感受到 YouTube 创作者的身份
2. **专业但不沉闷**：保持专业感的同时注入创意和活力
3. **红色克制使用**：红色是点缀，不是主体
4. **用户体验优先**：美观性不能牺牲易用性

### 必须避免
1. **过度使用红色**：避免造成视觉疲劳
2. **偏离品牌**：不要使用与 YouTube 品牌不符的设计元素
3. **复杂设计**：保持简洁，避免过度装饰
4. **忽视舒适度**：确保长时间使用的舒适性

## 交付标准
- 完整的主题文件（2个）
- 设计说明文档
- 安装使用指南
- 效果展示截图
- 与 YouTube Studio 的视觉对比

## 项目愿景
让每一个 YouTube 创作者打开我们魔改的 VSCode 时，都能感受到：
> "这就是为我们创作者量身定制的专业工具！"