import { defineProjects, type SiteContent } from "../types";

const home = {
  profile: {
    tocLabel: "Profile",
    name: "Payne",
    avatarAlt: "Payne avatar",
    roles: [
      "AI Builder",
      "Agent Harness Engineer",
      "Vibe Coder",
      "Healthcare AI Explorer",
      "Research Builder",
    ],
  },
  about: {
    tocLabel: "About",
    greeting:
      "Hi, I'm Payne / Peien Xiao, a 2026 master's graduate in Electronic Information. I am turning my research training, engineering practice, and AI tooling experience into an AI Building workflow: from information retrieval to Wiki notes, knowledge graphs, and live information maps; from reusable global Skills to project-specific Skills; and further into MCP and CLI-based organization so the workflow can land in real work and compound over time.",
    school: {
      name: "University of Shanghai for Science and Technology",
      major: "School of Optical-Electrical and Computer Engineering",
      majorEnglish: "OECE",
    },
    status:
      "2026 master's graduate seeking opportunities in AI products, agent applications, embodied intelligence, or medical AI.",
    badges: [
      { id: "open-to-work", label: "Open to Work", icon: "briefcase" },
      { id: "master-graduate", label: "Master's Graduate", icon: "school" },
      { id: "algorithm-engineer", label: "Algorithm Engineer", icon: "code" },
      { id: "agent-harness", label: "Agent Harness", icon: "star" },
      { id: "independent-builder", label: "Independent Builder", icon: "rocket" },
      { id: "fast-learner", label: "Fast Learner", icon: "bolt" },
      { id: "knowledge-builder", label: "Knowledge Builder", icon: "coffee" },
      { id: "midnight-thinker", label: "Midnight Thinker", icon: "moon" },
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
          "A deck-format version of my current thinking on AI Building, Agent Harnesses, personal knowledge bases, and reusable Skills.",
        src: "/decks/ai-building.html",
        tags: ["AI Building", "Harness", "Knowledge"],
      },
    ],
  },
  projects: {
    tocLabel: "Projects",
    title: "Projects",
    viewDetailsLabel: "View details",
  },
  github: {
    tocLabel: "GitHub",
    title: "GitHub Activity",
    totalTemplate: "{count} contributions in {year}",
    activityTemplate: "{count} contributions on {date}",
    legend: {
      less: "Less",
      more: "More",
    },
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
  experiences: {
    tocLabel: "Experience",
    title: "Experiences",
    items: [
      {
        id: "master-oct-deep-learning",
        organization: "Electronic Information Master's Program",
        role: "Deep learning algorithms / OCT denoising and segmentation / supercontinuum laser",
        employmentType: "Master · Class of 2026",
        period: "2023 - 2026",
        location: "Shanghai, China",
        logoText: "OCT",
        highlights: [
          "Conducted research on OCT image denoising, segmentation, and deep learning algorithms, and independently built an OCT prototype system.",
          "Introduced light-field modulation into the prototype to implement line-scanning, while also handling backend data processing, denoising, segmentation, and experiment organization.",
          "During thesis writing, systematically used Gemini, Claude, Claude Code, ChatGPT, and Codex for literature research, information retrieval, formatting, and natural-language-driven LaTeX generation of deep learning architecture diagrams.",
        ],
      },
      {
        id: "agent-harness-ai-building",
        organization: "Agent / Harness Engineering Shift",
        role: "AI Building practice after OpenClaw",
        employmentType: "Self-directed",
        period: "2026 - now",
        location: "Remote",
        logoText: "AI",
        highlights: [
          "After OpenClaw became widely discussed earlier this year, I kept practicing agents and vibe coding and became increasingly aware of how decisive harness engineering is for stable output.",
          "Built a personal knowledge base from scratch, separating knowledge for human reading from knowledge intended for agent use.",
          "Moved models from one-off calls into continuous loops with plan, write, review, eval, and fallback, using projects to test the boundary of human-AI collaboration.",
        ],
      },
      {
        id: "nonlinear-multimodal-imaging",
        organization: "Multimodal Nonlinear Imaging Exploration",
        role: "Multiphoton / THG / CARS / SRS imaging",
        employmentType: "Research",
        period: "2023 - 2024",
        location: "Lab",
        logoText: "NLO",
        highlights: [
          "Explored the potential of combining multiphoton imaging, third-harmonic generation, coherent anti-Stokes Raman scattering, and stimulated Raman scattering during the early stage of my master's research.",
          "Studied the advantages and challenges of different imaging mechanisms across structure, chemical composition, label-free observation, and system complexity.",
          "This experience built domain intuition for understanding multimodal medical data, imaging pipelines, and AI-assisted analysis.",
        ],
      },
      {
        id: "bachelor-engineering-management",
        organization: "Engineering Management · Bachelor's Program",
        role: "Economics and management / engineering fundamentals / campus partnerships",
        employmentType: "Bachelor",
        period: "2018 - 2022",
        location: "Hefei, China",
        logoText: "B.S",
        highlights: [
          "Studied microeconomics, management, engineering economics, operations research, and the three major mechanics courses, building a foundation for thinking about systems, resources, and constraints.",
          "Served as head of the external liaison department, established campus collaborations with NetEase and Trip.com, and organized promotional campaigns to reach communication goals.",
          "This experience made later technical work naturally connected to collaboration, communication, and execution costs in real-world scenarios.",
        ],
      },
    ],
  },
  knowledge: {
    tocLabel: "Knowledge",
    title: "Knowledge Cards",
    viewDetailsLabel: "Read article",
    items: [
      {
        id: "agent-first-engineering",
        title: "Agent-First Engineering",
        cover: "/images/knowledge/agent-first-engineering.svg",
        summary:
          "Engineering shifts from writing code to designing environments, rules, and feedback loops where agents can implement autonomously.",
        tags: ["Agent-First", "AI Building", "Engineering"],
      },
      {
        id: "harness-design",
        title: "Harness Design",
        cover: "/images/knowledge/harness-design.svg",
        summary:
          "Agent = Model + Harness. The model provides intelligence; the harness makes it useful through state, tools, sandboxes, verification, and middleware.",
        tags: ["Harness", "Self-Verify", "Middleware"],
      },
      {
        id: "context-management",
        title: "Context Management",
        cover: "/images/knowledge/context-management.svg",
        summary:
          "For long-running tasks, context is a budget, not a buffer. Compaction, reset, decomposition, and progressive disclosure decide whether agents can continue.",
        tags: ["Context", "Compaction", "Long-running"],
      },
      {
        id: "multi-agent-coordination",
        title: "Multi-Agent Coordination",
        cover: "/images/knowledge/multi-agent-coordination.svg",
        summary:
          "From Generator-Verifier to Orchestrator-Subagent, Agent Teams, Message Bus, and Shared State, coordination patterns define context boundaries and information flow.",
        tags: ["Multi-Agent", "Coordination", "Orchestrator"],
      },
      {
        id: "architecture-docs",
        title: "Architecture Docs",
        cover: "/images/knowledge/architecture-docs.svg",
        summary:
          "ARCHITECTURE.md, AGENTS.md, and PLANS.md form a three-layer documentation system for mental maps, interaction rules, and execution records.",
        tags: ["ARCHITECTURE.md", "AGENTS.md", "PLANS.md"],
      },
      {
        id: "skills-knowledge-systems",
        title: "Skills & Knowledge Systems",
        cover: "/images/knowledge/skills-knowledge-systems.svg",
        summary:
          "Personal knowledge bases, LLM Wiki, and Claude Skills point toward reusable, searchable, maintainable units of expertise.",
        tags: ["Skills", "LLM Wiki", "Knowledge"],
      },
    ],
  },
  skills: {
    tocLabel: "Skills",
    title: "Skills & Technologies",
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
    tocLabel: "Now",
    title: "Now",
    items: [
      {
        id: "prd-agent",
        title: "PRD Agent · Closed-loop collaboration assistant",
        description:
          "Breaking PRD writing into a plan -> write -> review -> distill loop, with an evaluator and human gate jointly checking quality before distilling reusable PRD skills.",
        badge: "In progress",
        icon: "code-dots",
      },
      {
        id: "hermes-wiki-p-akmp",
        title: "Hermes-wiki-P/AKMP · Dual-vault knowledge system",
        description:
          "A dual-vault knowledge system that separates human PKM from agent-facing AKM, using Raw / Compiled layers, lazy maps, skill promotion, and lint checks.",
        badge: "Online",
        icon: "target",
      },
      {
        id: "ai-building-notes",
        title: "AI Building long-form notes",
        description:
          "Continuously organizing thoughts on harnesses, agent boundaries, human-AI collaboration loops, and personal knowledge bases across Markdown, HTML, and deck formats.",
        badge: "Reading & writing",
        icon: "book",
      },
    ],
  },
  resume: {
    tocLabel: "Resume",
    title: "Resume",
    badges: {
      available: "Open to opportunities",
      updated: "Spring 2026 update",
    },
    heading: "A one-page resume for quick context",
    description:
      "A downloadable resume draft for quickly understanding my direction, technical stack, project experience, and contact path.",
    downloadLabel: "Download resume",
    copyEmailLabel: "Copy email",
    emailCopiedLabel: "Copied",
  },
  newsletter: {
    tocLabel: "Newsletter",
    title: "Newsletter",
    formLabel: "Newsletter signup form",
    emailLabel: "Email address",
    placeholder: "Enter your email",
    submitLabel: "Subscribe",
    successMessage: "You're on the list. Thanks for subscribing.",
    errors: {
      required: "Please enter your email address.",
      invalid: "Please enter a valid email address.",
    },
  },
  introduction: {
    tocLabel: "Introduction",
    quote:
      "Work from the ground truth, build with product thinking, and read products through a technical lens. I help machines meet us where we are.",
    author: "Payne",
  },
} satisfies SiteContent["home"];

const projects = defineProjects({
  "or-scheduling": {
    slug: "or-scheduling",
    cover: "/images/projects/or-scheduling.webp",
    name: "OR Scheduling Co-pilot",
    summary: "An operating-room scheduling system powered by computer vision and multi-agent collaboration.",
    intro:
      "The CV module recognizes surgical states while scheduling agents coordinate resources and push updates, turning OR scheduling into a continuous, interruptible collaboration loop with human override.",
    detail:
      "This project moves operating-room scheduling from phone calls, whiteboards, and experience toward a CV-aware and agent-assisted workflow. It focuses on intraoperative drift, role coordination, resource reservation, and human override.",
    status: "building",
    stack: ["Python", "OpenCV", "LangGraph", "FastAPI", "Multi-Agent", "Healthcare AI"],
  },
  "surgery-time-mvp": {
    slug: "surgery-time-mvp",
    cover: "/images/projects/surgery-time.webp",
    name: "Surgery Time MVP",
    summary:
      "A prototype that predicts suitable surgery windows and surgical duration from patient cases, preoperative checks, and medical imaging information.",
    intro:
      "The system unifies diagnosis text, preoperative checks, and imaging reports into a patient-card schema, then combines OR, surgeon, and anesthesiologist schedules to return candidate time windows.",
    detail:
      "This MVP validates an explainable chain from patient data to surgery windows, focusing on how duration prediction, slot matching, and human confirmation can work together.",
    status: "building",
    stack: ["Python", "LLM", "SQLite", "Streamlit", "Healthcare AI", "Scheduling"],
  },
  "prd-agent": {
    slug: "prd-agent",
    cover: "/images/projects/prd-agent.webp",
    name: "PRD Agent",
    summary:
      "A PRD agent for product managers built around a plan, write, review, and distill loop.",
    intro:
      "The agent first creates a plan from the request, then a generator writes a draft, a human and evaluator review it, failed drafts loop back with feedback, and accepted drafts distill reusable PRD skills.",
    detail:
      "The project is not about one-shot PRD generation. It decomposes product writing into a harness that can be evaluated, rolled back, and turned into reusable product-management skills.",
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
    summary:
      "A dual-track knowledge system for humans and AI agents, separating personal PKM from machine-first AKM.",
    intro:
      "Penn_PKM is a lightweight, associative personal knowledge base in iCloud; Hermes_AKM is a local, Git-managed, structured, retrieval-first knowledge base for agent groups.",
    detail:
      "The system uses Raw / Compiled layers, progressive map loading from global entry to project MOC, skill promotion, an ID Registry, and lint checks to prevent human notes from being polluted by machine files while keeping agent context bounded.",
    status: "online",
    stack: ["Obsidian", "PKM", "AKM", "Agent Knowledge", "Git", "Markdown"],
    links: {
      github: "https://github.com/PayneXXX/hermes-wiki-P-A_KM",
    },
  },
});

const ui = {
  common: {
    copy: "Copy",
    copied: "Copied",
    backToTop: "Back to top",
    status: {
      building: "Building",
      online: "Online",
      beta: "Beta",
      concept: "Concept",
    },
    links: {
      github: "GitHub",
      readme: "README",
      issues: "Issues",
      demo: "Demo",
      website: "Website",
    },
  },
  projectDetail: {
    title: "Projects",
    tabsLabel: "Project detail sections",
    tabs: {
      overview: "Overview",
      readme: "README",
      website: "Repository",
    },
    cloneProtocols: {
      https: "HTTPS",
      ssh: "SSH",
      cli: "GitHub CLI",
    },
    stackTitle: "Stack used",
    readmeEnterFullscreen: "Expand README",
    readmeExitFullscreen: "Collapse README",
    readmeLoading: "Loading README...",
    readmeError: "README could not be loaded.",
    cloneDescription: "Clone this repository with the selected command.",
    downloadZip: "Download ZIP",
    websiteUnavailable: "Repository links are not available.",
  },
  settings: {
    buttonAria: "Open settings menu",
    menuLabel: "Settings",
    themeLabel: "Theme",
    dividerLabel: "Dividers",
    languageLabel: "Language",
    dividerPresets: "Choose a style",
    themeOptions: {
      light: "Light",
      dark: "Dark",
    },
    dividerOptions: {
      "double-solid": "Double solid",
      "single-dashed": "Single dashed",
      "soft-fade": "Soft fade",
      "dot-chain": "Dot chain",
      hairline: "Hairline",
      "dash-dot": "Dash dot",
      "center-glow": "Center glow",
      "woven-grid": "Woven grid",
    },
    languageOptions: {
      "en-US": "English",
      "zh-CN": "Chinese",
    },
  },
  notFound: {
    eyebrow: "Page Not Found",
    description:
      "The page you were looking for slipped away quietly. Nothing is broken, it just is not here right now.",
  },
  errorBoundary: {
    oops: "Oops!",
    unexpectedDescription: "An unexpected error occurred.",
    errorTitle: "Error",
    notFoundDescription: "The requested page could not be found.",
  },
  scrollAnchor: {
    label: "Home section navigation",
    title: "On this page",
  },
  actions: {
    sendEmail: "Send an email",
    reserve: "Book an intro call",
    accountPrefix: "Here are my",
    accountHighlight: "socials",
  },
} satisfies SiteContent["ui"];

const content = {
  home,
  projects,
  ui,
} satisfies SiteContent;

export default content;
