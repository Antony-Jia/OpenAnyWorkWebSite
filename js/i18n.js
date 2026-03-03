const i18nData = {
    en: {
        title: "OpenAnyWork Deep Agent Workbench",
        subtitle: "Not just chat, but enabling agents to invoke tools, execute tasks, and orchestrate workflows within local workspaces.",
        warningTitle: "CAUTION",
        warningText: "OpenAnyWork allows AI to read/write local files and execute commands. Please run only in trusted workspaces and review execution behavior carefully in non-isolated mode.",
        quickStart: "Quick Start",
        requirements: "Requirements",
        req1: "Node.js >=18",
        req2: "npm",
        req3: "Docker (optional, but recommended for isolated execution)",
        features: "Feature Overview",
        feat1: "Dual workspace modes: Classic (thread workflow) and Butler (orchestration workflow).",
        feat2: "Standalone window capabilities: Quick Input (global shortcut Ctrl+Alt+Space) and task desktop popup.",
        feat3: "Thread types supported: default / ralph / email / loop / expert / butler.",
        classicTitle: "Classic Mode",
        classicDesc1: "Thread Sidebar: Create threads in different modes, rename, delete, filter.",
        classicDesc2: "Central Tab Area: Agent session page + file tabs for parallel browsing.",
        classicDesc3: "Chat Area: Streaming agent conversations, tool calls, voice I/O, attachments.",
        butlerTitle: "Butler Mode",
        butlerDesc1: "Main Session Orchestration: Semantic decisions among reply/clarify/create task.",
        butlerDesc2: "Butler Daily Tools: Calendar, countdown, RSS, Mailbox integration.",
        butlerDesc3: "Task & Monitor: Background task execution and incremental pulling.",
        coreTech: "Core Architecture",
        testimonialsTitle: "User Reviews",
        testi1: "\"The seamless integration between the orchestrator and the local execution space completely changed my AI workflow.\"",
        author1Name: "Alex Chen",
        author1Role: "Senior Software Engineer",
        testi2: "\"Butler Mode feels like having a real assistant. It handles calendar events and RSS pulling autonomously in the background!\"",
        author2Name: "Sarah Jenkins",
        author2Role: "Product Manager",
        testi3: "\"I love how I can deploy pure frontend tools without heavy configuration. This toolkit is incredibly powerful yet easy to spin up.\"",
        author3Name: "David Wu",
        author3Role: "Indie Hacker",
        testi4: "\"The Classic mode thread sorting and file viewing are unparalleled. I can track my multi-agent logic so much faster now.\"",
        author4Name: "Elena Rostova",
        author4Role: "AI Researcher",
        testi5: "\"Vercel deployment worked right out of the box. Absolutely stunning interface with no build step required.\"",
        author5Name: "Marcus Taylor",
        author5Role: "Frontend Architect",
        productFeaturesTitle: "Product Features",
        pfTitle1: "Lightning Fast",
        pfDesc1: "Zero-config pure frontend architecture optimized for instant local execution.",
        pfTitle2: "Fully Secure",
        pfDesc2: "Local workspace isolation ensures your data never leaves your computer.",
        pfTitle3: "Highly Extendable",
        pfDesc3: "Integrate thousands of plugins through our modular IPC architecture.",
        pfTitle4: "Smart Memory",
        pfDesc4: "Automatic session summaries and daily profiles with contextual recall across tasks.",
        footerDesc: "Built for true AI automation.<br>Local workspace orchestration.",
        footerProducts: "Products",
        navClassic: "Classic Mode",
        navButler: "Butler Mode",
        navQuick: "Quick Input",
        footerResources: "Resources",
        navDocs: "Architecture",
        navSpeech: "Speech API",
        navEmail: "Email Mode",
        footerCommunity: "Community",
        navContrib: "Contributing",
        mitLicense: "MIT License",
        footerLink: "View on GitHub",
        builtWith: "Built for true AI automation"
    },
    zh: {
        title: "OpenAnyWork Deep Agent Workbench",
        subtitle: "不只是聊天，而是让 Agent 在本地工作区里调用工具、执行任务、持续编排。",
        warningTitle: "注意",
        warningText: "OpenAnyWork 会让 AI 读写本地文件并执行命令。请只在可信工作区运行，非隔离模式下务必审查执行行为。",
        quickStart: "快速开始",
        requirements: "环境要求",
        req1: "Node.js >=18",
        req2: "npm",
        req3: "Docker（可选，但建议开启隔离执行）",
        features: "功能总览",
        feat1: "双工作模式：Classic（线程工作流）与 Butler（编排工作流）。",
        feat2: "独立窗口能力：Quick Input（全局快捷键 Ctrl+Alt+Space）与任务桌面弹窗。",
        feat3: "支持线程类型：default / ralph / email / loop / expert / butler。",
        classicTitle: "Classic 模式",
        classicDesc1: "线程侧栏：新建不同模式线程，支持重命名、删除与筛选。",
        classicDesc2: "中央标签区：固定 Agent 会话页 + 文件标签页并行浏览。",
        classicDesc3: "聊天区：流式对话与工具调用，支持语音输入/播报，图片与文档附件。",
        butlerTitle: "Butler 模式",
        butlerDesc1: "主会话编排：每轮在直接回复/澄清/创建任务间做语义决策。",
        butlerDesc2: "日常工具：日历、倒计时、RSS、邮件集成。",
        butlerDesc3: "任务与监听看板：后台任务执行与增量提醒拉取。",
        coreTech: "核心架构",
        testimonialsTitle: "使用者评价",
        testi1: "“编排器与本地执行空间的无缝集成彻底改变了我的 AI 工作流。”",
        author1Name: "Alex Chen",
        author1Role: "高级软件工程师",
        testi2: "“Butler 模式就像拥有一个真正的助手，它能在后台自主处理日历事件和 RSS 拉取！”",
        author2Name: "Sarah Jenkins",
        author2Role: "产品经理",
        testi3: "“我喜欢无需繁重配置即可部署纯前端工具的方式。这个工具包功能强大且极易上手。”",
        author3Name: "David Wu",
        author3Role: "独立开发者",
        testi4: "“Classic 模式的线程排列与文件查看无与伦比，能让我更快地追踪多 Agent 逻辑。”",
        author4Name: "Elena Rostova",
        author4Role: "AI 研究员",
        testi5: "“Vercel 部署开箱即用，界面令人惊艳，无需构建步骤。”",
        author5Name: "Marcus Taylor",
        author5Role: "前端架构师",
        productFeaturesTitle: "产品特点",
        pfTitle1: "极速启动",
        pfDesc1: "零配置纯前端架构，针对即时本地执行进行了优化。",
        pfTitle2: "完全安全",
        pfDesc2: "本地工作区隔离确保您的数据永不离开您的电脑。",
        pfTitle3: "高度可扩展",
        pfDesc3: "通过我们的模块化 IPC 架构集成数千个插件。",
        pfTitle4: "智能记忆",
        pfDesc4: "自动生成会话摘要和每日画像，支持跨任务的上下文回忆。",
        footerDesc: "为真正的 AI 自动化而生。<br>本地工作区编排。",
        footerProducts: "产品",
        navClassic: "Classic 模式",
        navButler: "Butler 模式",
        navQuick: "快速输入",
        footerResources: "资源与文档",
        navDocs: "架构说明",
        navSpeech: "语音接口",
        navEmail: "邮件模式",
        footerCommunity: "社区",
        navContrib: "贡献指南",
        mitLicense: "MIT 许可证",
        footerLink: "在 GitHub 上查看",
        builtWith: "为真正的 AI 自动化而生"
    }
};

// Smart language detection
function getInitialLanguage() {
    const saved = localStorage.getItem('openwork_lang');
    if (saved) return saved;

    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('zh')) return 'zh';
    if (browserLang.startsWith('en')) return 'en';

    return 'zh'; // Fallback to Chinese if no clear preference
}

let currentLang = getInitialLanguage();

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nData[currentLang][key]) {
            el.innerHTML = i18nData[currentLang][key];
        }
    });

    // Update toggle button UI
    const enSpan = document.querySelector('.lang-en');
    const zhSpan = document.querySelector('.lang-zh');
    if (currentLang === 'en') {
        enSpan.classList.add('active');
        zhSpan.classList.remove('active');
    } else {
        enSpan.classList.remove('active');
        zhSpan.classList.add('active');
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    localStorage.setItem('openwork_lang', currentLang);
    updateContent();
}

window.addEventListener('DOMContentLoaded', () => {
    updateContent();
    document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
});
