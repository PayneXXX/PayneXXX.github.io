import { type ProjectMap, type SiteContent } from "../types";

type ProjectSlug = Extract<
  keyof typeof import("./en").default.projects,
  string
>;

const home = {
  profile: {
    tocLabel: "名片",
    name: "Payne",
    avatarAlt: "Payne 头像",
    roles: [
      "AI Builder",
      "Agent Harness Engineer",
      "Vibe Coder",
      "Healthcare AI Explorer",
      "Research Builder",
    ],
  },
  about: {
    tocLabel: "介绍",
    greeting:
      "嗨，我是 Payne / 肖佩恩，一名电子信息专业 2026 届硕士应届毕业生。我正在把自己的研究训练、工程实践和 AI 工具使用经验，整理成一套关于 AI Building 的工作流：从信息检索，到整理形成 Wiki 与知识图谱，并同步更新信息地图；从全局复用 Skills，到项目专属 Skills 的管理与沉淀；再到 MCP、CLI 的统一整理，让这套工作流真实落地，并且持续产生复利。",
    school: {
      name: "上海理工大学",
      major: "光电信息与计算机工程学院",
      majorEnglish: "OECE",
    },
    status:
      "2026 届硕士应届毕业生，正在寻找 AI 产品、Agent 应用、具身智能或医疗 AI 相关方向的工作机会。",
    badges: [
      { id: "open-to-work", label: "求职中", icon: "briefcase" },
      { id: "master-graduate", label: "硕士应届", icon: "school" },
      { id: "algorithm-engineer", label: "算法工程师", icon: "code" },
      { id: "agent-harness", label: "Agent Harness", icon: "star" },
      { id: "independent-builder", label: "独立构建者", icon: "rocket" },
      { id: "fast-learner", label: "学习能力强", icon: "bolt" },
      { id: "knowledge-builder", label: "知识库构建", icon: "coffee" },
      { id: "midnight-thinker", label: "深夜思想家", icon: "moon" },
    ],
  },
  decks: {
    tocLabel: "Deck",
    title: "Deck",
    items: [
      {
        id: "ai-building",
        title: "AI Building",
        subtitle: "Tools -> Workflows -> Compounding Systems",
        description:
          "关于 AI Building、Agent Harness、个人知识库与可复用 Skills 的阶段性思考，用 deck 形式整理成更适合快速浏览的版本。",
        src: "/decks/ai-building.html",
        tags: ["AI Building", "Harness", "Knowledge"],
      },
    ],
  },
  projects: {
    tocLabel: "项目",
    title: "项目",
    viewDetailsLabel: "查看详情",
  },
  github: {
    tocLabel: "GitHub",
    title: "GitHub 活跃度",
    totalTemplate: "{year} 年共 {count} 次贡献",
    activityTemplate: "{date} 共 {count} 次贡献",
    legend: {
      less: "少",
      more: "多",
    },
    weekdays: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  },
  experiences: {
    tocLabel: "经历",
    title: "经历",
    items: [
      {
        id: "master-oct-deep-learning",
        organization: "电子信息硕士 · 在读",
        role: "深度学习算法 / OCT 图像降噪与分割 / 超连续激光器",
        employmentType: "Master · 2026 届",
        period: "2023 - 2026",
        location: "中国 上海",
        logoText: "OCT",
        highlights: [
          "围绕 OCT 系统图像降噪、分割与深度学习算法开展研究，并自主搭建一台 OCT 原型机。",
          "在原型机中引入光场调控思路，实现线扫描方案；同时承担后端数据处理、降噪、分割与实验结果整理。",
          "论文撰写过程中开始系统使用 Gemini、Claude、Claude Code、ChatGPT 与 Codex 完成文献调研、信息检索、格式整理，以及通过自然语言驱动 LaTeX 生成深度学习架构图。",
        ],
      },
      {
        id: "agent-harness-ai-building",
        organization: "Agent / Harness Engineering 转向",
        role: "OpenClaw 之后的 AI Building 实践",
        employmentType: "Self-directed",
        period: "2026 - now",
        location: "Remote",
        logoText: "AI",
        highlights: [
          "从今年年初 OpenClaw 的爆火开始，持续实践 agent 与 vibe coding，逐渐意识到 harness engineering 对稳定产出的决定性作用。",
          "从 0 搭建个人知识库，并区分面向人类阅读的知识库与面向 Agent 调用的知识库。",
          "把模型从单次调用放进 plan、write、review、eval、fallback 的连续回路中，用项目验证人机协作的边界。",
        ],
      },
      {
        id: "nonlinear-multimodal-imaging",
        organization: "多模态非线性成像探索",
        role: "多光子 / THG / CARS / SRS 成像",
        employmentType: "Research",
        period: "2023 - 2024",
        location: "Lab",
        logoText: "NLO",
        highlights: [
          "硕士早期探索多光子成像、三次谐波成像、相干反斯托克斯拉曼散射成像与受激拉曼散射成像的组合潜力。",
          "关注不同成像机制在结构、化学成分、无标记观测与系统复杂度之间的优势与挑战。",
          "这段经历为后续理解多模态医学数据、成像链路与 AI 辅助分析打下了领域直觉。",
        ],
      },
      {
        id: "bachelor-engineering-management",
        organization: "工程管理 · 本科",
        role: "经济管理 / 工程基础 / 校园合作组织",
        employmentType: "Bachelor",
        period: "2018 - 2022",
        location: "中国 合肥",
        logoText: "B.S",
        highlights: [
          "本科阶段主要学习微观经济学、管理学、工程经济学、运筹学与三大力学，形成对系统、资源与约束的基础理解。",
          "担任校外联部部长，与网易、携程达成校园合作，组织宣传活动并完成既定传播目标。",
          "这段经历让后来的技术探索不只停留在算法或系统本身，也会自然关注协作、传播与真实场景中的执行成本。",
        ],
      },
    ],
  },
  knowledge: {
    tocLabel: "知识",
    title: "知识卡片",
    viewDetailsLabel: "阅读全文",
    items: [
      {
        id: "agent-first-engineering",
        title: "智能体优先工程",
        cover: "/images/knowledge/agent-first-engineering.svg",
        summary:
          "工程师从写代码转向设计环境、规则和反馈回路，让智能体在可观测系统中自主完成实现。",
        tags: ["Agent-First", "AI Building", "Engineering"],
      },
      {
        id: "harness-design",
        title: "Harness 设计",
        cover: "/images/knowledge/harness-design.svg",
        summary:
          "Agent = Model + Harness。模型提供智能，Harness 通过文件系统、工具、沙箱、验证和中间件让智能变得可用。",
        tags: ["Harness", "Self-Verify", "Middleware"],
      },
      {
        id: "context-management",
        title: "上下文管理",
        cover: "/images/knowledge/context-management.svg",
        summary:
          "长任务中的上下文不是缓冲区，而是预算。压缩、重置、任务分解和渐进式披露决定 agent 能否持续工作。",
        tags: ["Context", "Compaction", "Long-running"],
      },
      {
        id: "multi-agent-coordination",
        title: "多智能体协调",
        cover: "/images/knowledge/multi-agent-coordination.svg",
        summary:
          "从 Generator-Verifier 到 Orchestrator-Subagent、Agent Teams、Message Bus、Shared State，协调模式决定上下文边界与信息流。",
        tags: ["Multi-Agent", "Coordination", "Orchestrator"],
      },
      {
        id: "architecture-docs",
        title: "架构文档设计",
        cover: "/images/knowledge/architecture-docs.svg",
        summary:
          "ARCHITECTURE.md、AGENTS.md、PLANS.md 构成从心智地图、交互规则到执行记录的三层文档体系。",
        tags: ["ARCHITECTURE.md", "AGENTS.md", "PLANS.md"],
      },
      {
        id: "skills-knowledge-systems",
        title: "Skills 与知识系统",
        cover: "/images/knowledge/skills-knowledge-systems.svg",
        summary:
          "个人知识库、LLM Wiki 和 Claude Skills 共同指向一个目标：把专业知识变成可复用、可检索、可维护的能力单元。",
        tags: ["Skills", "LLM Wiki", "Knowledge"],
      },
    ],
  },
  skills: {
    tocLabel: "技能",
    title: "技能与技术栈",
    items: [
      { name: "AI Build" },
      { name: "Harness Engineering" },
      { name: "Knowledge Management" },
      { name: "Python", icon: "python" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Docker", icon: "docker" },
      { name: "Three.js", icon: "threejs" },
      { name: "Deep Learning" },
      { name: "PyTorch" },
      { name: "OpenCV" },
      { name: "OCT Imaging" },
      { name: "Image Denoising" },
      { name: "Image Segmentation" },
      { name: "LLM Eval" },
      { name: "Agent Harness" },
      { name: "Vibe Coding" },
      { name: "LaTeX" },
      { name: "Obsidian" },
    ],
  },
  now: {
    tocLabel: "近况",
    title: "近况",
    items: [
      {
        id: "prd-agent",
        title: "PRD Agent · 闭环协作助手",
        description:
          "把 PRD 写作拆成 plan -> write -> review -> distill 的回路，evaluator 与 human gate 共同把关，最终沉淀该 PM 的 PRD skills。",
        badge: "In progress",
        icon: "code-dots",
      },
      {
        id: "hermes-wiki-p-akmp",
        title: "Hermes-wiki-P/AKMP · 双库知识体系",
        description:
          "把面向人的 PKM 与面向 Agent 的 AKM 物理隔离，用 Raw / Compiled 分层、地图按需加载、技能上浮和 Lint 体检管理知识复利。",
        badge: "Online",
        icon: "target",
      },
      {
        id: "ai-building-notes",
        title: "AI Building 长文笔记",
        description:
          "持续整理关于 harness、agent 边界、人机协作回路与个人知识库的思考，同步维护 Markdown、HTML、Deck 等不同载体。",
        badge: "Reading & writing",
        icon: "book",
      },
    ],
  },
  resume: {
    tocLabel: "简历",
    title: "简历",
    badges: {
      available: "求职机会开放",
      updated: "2026 春季更新",
    },
    heading: "一页简历，方便快速了解我",
    description:
      "这里放了一份可下载的简历草稿，适合快速浏览我的方向、技术栈、项目经历和联系方式。",
    downloadLabel: "下载简历",
    copyEmailLabel: "复制邮箱",
    emailCopiedLabel: "已复制",
  },
  newsletter: {
    tocLabel: "订阅",
    title: "订阅通讯",
    formLabel: "订阅通讯表单",
    emailLabel: "邮箱地址",
    placeholder: "输入你的邮箱",
    submitLabel: "订阅",
    successMessage: "已记录，感谢订阅。",
    errors: {
      required: "请输入邮箱地址。",
      invalid: "请输入有效的邮箱地址。",
    },
  },
  introduction: {
    tocLabel: "引言",
    quote:
      "脚踏实地，实事求是：用产品的思想做技术，从技术的视角看产品。I help machines meet us where we are.",
    author: "Payne",
  },
} satisfies SiteContent["home"];

const projects: ProjectMap<ProjectSlug> = {
  "or-scheduling": {
    slug: "or-scheduling",
    cover: "/images/projects/or-scheduling.webp",
    name: "OR Scheduling Co-pilot",
    summary: "机器视觉 + 多 Agent 协作的手术室调度系统。",
    intro:
      "CV 模块识别手术状态，调度 Agent 协调资源、推送提醒；目标是把整个 OR 调度变成一个连续的、可被打断、可被人工接管的协作回路。",
    detail:
      "把医院手术室调度从电话、白板和经验迁移到 CV 感知 + Agent 协作的连续回路。系统关注术中状态漂移、角色协调、资源预占和 human override。",
    status: "building",
    stack: ["Python", "OpenCV", "LangGraph", "FastAPI", "Multi-Agent", "Healthcare AI"],
  },
  "surgery-time-mvp": {
    slug: "surgery-time-mvp",
    cover: "/images/projects/surgery-time.webp",
    name: "Surgery Time MVP",
    summary: "结合患者病例、术前检查和医学影像，预测合适手术时间窗与手术时长。",
    intro:
      "系统将医生诊断、术前检查、医学影像报告等信息统一为 patient-card schema，再结合手术室、主刀与麻醉医师排班，提供患者与主治医师可选的时间窗。",
    detail:
      "这是一个验证患者数据到手术时间窗的最小链路，重点是让 duration predictor、slot matcher 与 human confirmation 形成可解释流程。",
    status: "building",
    stack: ["Python", "LLM", "SQLite", "Streamlit", "Healthcare AI", "Scheduling"],
  },
  "prd-agent": {
    slug: "prd-agent",
    cover: "/images/projects/prd-agent.webp",
    name: "PRD Agent",
    summary: "面向产品经理的 PRD 智能 Agent，围绕 plan、write、review、distill 构建闭环。",
    intro:
      "根据需求先生成 plan，由 generator 按 plan 写出初稿，再由人类 + evaluator 联合审核，不合格则带反馈回到 generator；通过后沉淀该 PM 的 PRD skills。",
    detail:
      "这个项目关注的不是单次生成 PRD，而是把 PM 写作流程拆成可评估、可回滚、可沉淀的 harness。",
    status: "online",
    stack: ["TypeScript", "LLM", "Eval Harness", "Agent", "Product Workflow"],
    links: {
      github: "https://github.com/PayneXXX/prd-copilot-pro",
    },
  },
  "hermes-wiki-p-akmp": {
    slug: "hermes-wiki-p-akmp",
    cover: "/images/projects/hermes-wiki-p-akmp.png",
    name: "Hermes-wiki-P/AKMP",
    summary: "面向人类与 AI Agent 的双轨知识库体系，分离个人 PKM 与机器优先的 AKM。",
    intro:
      "系统把 Penn_PKM 作为轻量、联想式的个人知识库，把 Hermes_AKM 作为本地 Git 管理、结构化、按需检索的 Agent 公用知识库。",
    detail:
      "通过 Raw / Compiled 分层、全局入口到项目地图的渐进加载、技能上浮、ID Registry 与 Lint 体检，避免人类知识库被机器文件污染，也避免 Agent 每次任务全量加载知识导致上下文爆炸。",
    status: "online",
    stack: ["Obsidian", "PKM", "AKM", "Agent Knowledge", "Git", "Markdown"],
    links: {
      github: "https://github.com/PayneXXX/hermes-wiki-P-A_KM",
    },
  },
};

const ui = {
  common: {
    copy: "复制",
    copied: "已复制",
    backToTop: "回到顶部",
    status: {
      building: "开发中",
      online: "已上线",
      beta: "内测中",
      concept: "概念阶段",
    },
    links: {
      github: "GitHub",
      readme: "README",
      issues: "Issues",
      demo: "演示",
      website: "官网",
    },
  },
  projectDetail: {
    title: "项目",
    tabsLabel: "项目详情分区",
    tabs: {
      overview: "概览",
      readme: "README",
      website: "仓库",
    },
    cloneProtocols: {
      https: "HTTPS",
      ssh: "SSH",
      cli: "GitHub CLI",
    },
    stackTitle: "技术栈",
    readmeEnterFullscreen: "展开 README",
    readmeExitFullscreen: "收起 README",
    readmeLoading: "正在加载 README...",
    readmeError: "README 加载失败。",
    cloneDescription: "使用当前选中的命令克隆这个仓库。",
    downloadZip: "下载 ZIP",
    websiteUnavailable: "仓库链接不可用。",
  },
  settings: {
    buttonAria: "打开设置菜单",
    menuLabel: "设置",
    themeLabel: "主题",
    dividerLabel: "分割线",
    languageLabel: "语言",
    dividerPresets: "选择样式",
    themeOptions: {
      light: "浅色",
      dark: "深色",
    },
    dividerOptions: {
      "double-solid": "双实线",
      "single-dashed": "单虚线",
      "soft-fade": "柔光渐隐",
      "dot-chain": "点阵链线",
      hairline: "极细线",
      "dash-dot": "点划线",
      "center-glow": "中心微光",
      "woven-grid": "编织网格",
    },
    languageOptions: {
      "en-US": "英文",
      "zh-CN": "中文",
    },
  },
  notFound: {
    eyebrow: "页面未找到",
    description: "你要找的页面悄悄溜走了。这里没有出错，只是它暂时不在这里。",
  },
  errorBoundary: {
    oops: "出了点问题",
    unexpectedDescription: "发生了一个意外错误。",
    errorTitle: "错误",
    notFoundDescription: "你请求的页面不存在。",
  },
  scrollAnchor: {
    label: "首页模块导航",
    title: "本页目录",
  },
  actions: {
    sendEmail: "发送邮件",
    reserve: "预约沟通",
    accountPrefix: "这里是我的",
    accountHighlight: "社交账号",
  },
} satisfies SiteContent["ui"];

const content = {
  home,
  projects,
  ui,
} satisfies SiteContent<ProjectSlug>;

export default content;
