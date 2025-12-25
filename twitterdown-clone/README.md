# TwitterDown Clone

一个 1:1 复刻的 TwitterDown 网站 - Twitter 视频下载器

## 项目说明

这是一个完全复刻 twitterdown.com 的项目，包括：
- ✅ 完整的 HTML 结构
- ✅ Tailwind CSS 样式
- ✅ 响应式设计
- ✅ 交互功能（下载按钮、标签切换等）
- ✅ 所有主要部分（导航、Hero、Features、Pricing、Footer）

## 项目结构

```
twitterdown-clone/
├── index.html          # 主页面
├── src/
│   ├── css/
│   │   └── style.css  # 样式文件
│   └── js/
│       └── main.js    # JavaScript 功能
└── images/
    └── logo.svg        # Logo 图片
```

## 功能特性

### 1. 导航栏
- Logo 和品牌名称
- 导航链接（Features、Pricing、How It Works、Blog）
- 语言选择器
- API 链接
- 登录按钮

### 2. Hero 区域
- 公告徽章（"NEW" - 完全免费）
- 主标题和副标题
- 下载框（支持单个和批量下载）
- 输入框和下载按钮
- Chrome 扩展和 iOS 快捷方式链接

### 3. Features 特性展示
- 简单快速
- 高质量下载
- 无需登录

### 4. Pricing 定价方案
- Starter 计划 ($49/年)
- Pro 计划 ($99/年) - 标记为热门
- Business 计划 ($299/年)

### 5. Footer 页脚
- 产品链接
- 公司信息
- 法律信息

## 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式和动画
- **JavaScript (ES6+)** - 交互功能
- **Tailwind CSS** - 实用工具类样式

## 如何使用

1. 在浏览器中打开 `index.html` 文件
2. 输入 Twitter/X 视频链接
3. 点击下载按钮

## 响应式设计

- **桌面端** (≥1024px) - 完整布局
- **平板端** (768px - 1023px) - 适配布局
- **移动端** (<768px) - 简化布局

## 定制化

### 修改颜色
在 `style.css` 中修改颜色变量：
```css
.bg-blue-600 { background-color: #2563eb; }  /* 主色 */
```

### 修改内容
直接编辑 `index.html` 中的文本内容

## 注意事项

- 这是一个前端复刻项目
- 下载功能目前是模拟的（需要对接实际 API）
- Logo 是简单的 SVG 占位符（可以替换为实际 logo）

## 未来改进

- [ ] 添加实际的 API 集成
- [ ] 添加更多语言支持
- [ ] 添加博客和更新日志页面
- [ ] 优化 SEO
- [ ] 添加单元测试

## 许可证

本项目仅供学习和演示使用。
