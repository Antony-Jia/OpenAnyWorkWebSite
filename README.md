# OpenAnyWork Website

OpenAnyWork 官方宣传网站，纯静态前端，无需构建步骤即可直接部署。

## 项目结构

```
OpenAnyWorkWebSite/
├── index.html              # 主页面入口
├── .gitignore              # Git 忽略配置
├── README.md               # 本文件
│
├── assets/                 # 静态资源
│   └── mainpage.png        # 首页主图截图
│
├── css/                    # 样式文件
│   └── style.css           # 全局样式（含深色主题、动画、响应式布局）
│
├── js/                     # 脚本文件
│   ├── i18n.js             # 国际化（中英文切换）
│   └── main.js             # 页面交互逻辑（滚动动画、轮播等）
│
└── doc/                    # 文档
    ├── README.md           # 英文说明文档
    └── README.zh-CN.md     # 中文说明文档
```

## 快速开始

直接用浏览器打开 `index.html`，或通过任意静态服务器托管：

```bash
# 使用 Python 本地预览
python -m http.server 8080

# 使用 Node.js serve
npx serve .
```

## 功能特性

- 🌐 **中英文双语切换** — 通过右上角按钮一键切换语言
- 🎠 **自动轮播** — 用户评价区域自动无缝滚动
- ✨ **滚动动画** — 页面元素进入视口时触发淡入效果
- 📱 **响应式布局** — 适配桌面与移动端设备

## 部署

本项目为纯静态网站，可直接部署到 GitHub Pages、Vercel、Netlify 等任意静态托管平台。
