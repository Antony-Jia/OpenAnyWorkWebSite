# OpenAnyWork Website

English | [中文](#chinese)

OpenAnyWork official promotional website — a pure static frontend that can be deployed directly without any build steps.

## Project Structure

```
OpenAnyWorkWebSite/
├── index.html              # Main page entry
├── .gitignore              # Git ignore configuration
├── README.md               # This file
│
├── assets/                 # Static assets
│   └── mainpage.png        # Homepage hero screenshot
│
├── css/                    # Stylesheets
│   └── style.css           # Global styles (dark theme, animations, responsive layout)
│
├── js/                     # Scripts
│   ├── i18n.js             # Internationalization (Chinese/English toggle)
│   └── main.js             # Page interaction logic (scroll animation, carousel, etc.)
│
└── doc/                    # Documentation
    ├── README.md           # English documentation
    └── README.zh-CN.md     # Chinese documentation
```

## Quick Start

Open `index.html` directly in your browser, or serve it via any static server:

```bash
# Preview locally with Python
python -m http.server 8080

# Serve with Node.js
npx serve .
```

## Features

- 🌐 **Bilingual (EN/ZH)** — Toggle between English and Chinese via the button in the top-right corner
- 🎠 **Auto Carousel** — Testimonials section scrolls seamlessly and automatically
- ✨ **Scroll Animations** — Elements fade in as they enter the viewport
- 📱 **Responsive Layout** — Optimized for both desktop and mobile devices

## Deployment

This is a pure static website. Deploy it directly to GitHub Pages, Vercel, Netlify, or any static hosting platform.

---

<a name="chinese"></a>

[English](#) | 中文

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
