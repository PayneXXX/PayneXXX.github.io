# 个人简历 / 项目展示模板

一个基于 `React Router 7`、`React 19`、`Tailwind CSS 4` 构建的双语个人简历模板。

这个模板的目标不是做成“只能改几行文案的展示页”，而是尽量让你通过少量固定入口，就能部署出属于自己的简历网站：

- 修改个人配置
- 替换头像和简历
- 编辑中英文内容
- 添加项目与对应 Markdown

其余像项目路由、项目 slug、详情页路径、首页目录导航等能力，模板会尽量自动处理。

## 模板特点

- 支持中英文双语内容
- 首页内容按 section 组织，结构清晰
- `site/config.ts` 统一管理部署层配置
- 项目 slug 自动从项目数据推导
- 项目详情页 prerender 自动根据项目数据生成
- GitHub 活跃、Newsletter、Introduction 为模板内置区块
- TOC 会根据页面真实 section 自动生成
- 邮箱、预约链接、社交账号、访客数都支持“有配置就显示，无配置就自动隐藏”

## 本地运行

建议使用 `bun`。

安装依赖：

```bash
bun install
```

启动开发环境：

```bash
bun run dev
```

类型检查：

```bash
bun run typecheck
```

生产构建：

```bash
bun run build
```

本地预览生产环境：

```bash
bun run start
```

## 你通常只需要修改这些文件

如果你只是想把它改成自己的简历网站，通常只需要改下面这些入口：

- `app/site/config.ts`
- `app/content/en.ts`
- `app/content/zh.ts`
- `public/images/avatar/user.webp`
- `public/documents/resume.md`
- `public/markdown/*.md`
- `public/images/projects/*`

## 最小使用流程

### 1. 修改站点配置

编辑 `app/site/config.ts`：

- 默认语言 `defaultLanguage`
- 头像路径 `avatarSrc`
- 简历下载路径和文件名
- 联系邮箱
- 预约链接 `bookingUrl`
- 社交账号 `socials`
- 访客数 `visitorCount`

这个文件只负责“部署配置”和“外部入口”，不负责大段页面文案。

### 2. 替换你的头像和简历

把下面两个默认资源替换成你自己的：

- `public/images/avatar/user.webp`
- `public/documents/resume.md`

如果你更改了文件路径，记得同步更新 `app/site/config.ts`。

### 3. 编辑首页和整站文案

中英文内容分别在：

- `app/content/en.ts`
- `app/content/zh.ts`

这两个文件使用同一份结构，里面同时包含：

- 首页各个 section 的文案与数据
- 项目数据
- 项目详情页文案
- 设置菜单文案
- 404 文案
- 返回顶部、复制按钮、目录导航等 UI 文案

首页 section 目前对应这些 key：

- `home.profile`
- `home.about`
- `home.projects`
- `home.github`
- `home.experiences`
- `home.skills`
- `home.now`
- `home.resume`
- `home.newsletter`
- `home.introduction`

也就是说，首页每个区块展示什么，基本都由 `app/content/*.ts` 决定。

### 4. 添加或修改项目

项目数据也在 `app/content/en.ts` 和 `app/content/zh.ts` 里。

新增一个项目时，通常只需要做这几件事：

1. 在 `app/content/en.ts` 的 `projects` 中新增一个项目
2. 在 `app/content/zh.ts` 的 `projects` 中新增同一个 slug 的项目
3. 添加项目封面图到 `public/images/projects/`
4. 添加对应的 Markdown 文件到 `public/markdown/`

Markdown 文件命名约定：

- 英文：`public/markdown/{slug}.md`
- 中文：`public/markdown/{slug}_cn.md`

例如项目 slug 是 `my-awesome-project`，那么通常对应：

- `public/markdown/my-awesome-project.md`
- `public/markdown/my-awesome-project_cn.md`

## 哪些能力已经是自动的

模板里已经帮你做了这些自动化：

- 项目 slug 从英文项目数据 key 自动推导
- 项目详情页路由自动使用这些 slug
- prerender 路径自动根据项目数据生成
- 首页 TOC 根据真实 section 自动生成
- 没填邮箱时，邮箱按钮自动隐藏
- 没填预约链接时，预约按钮自动隐藏
- 没填社交账号时，社交区自动隐藏
- 没填访客数时，访客数自动隐藏

所以正常情况下，你新增项目时不需要再去改：

- `types` 里的 slug 常量
- 手写项目路由列表
- 单独维护的 prerender 数组

## `app/site/config.ts` 负责什么

`app/site/config.ts` 主要负责这些信息：

- 默认语言
- 头像路径
- 简历下载地址
- 邮箱
- 预约链接
- 社交链接
- 访客数

一个典型的使用方式是：

- 把内容和项目写进 `app/content/en.ts` / `app/content/zh.ts`
- 把部署入口和个人联系方式写进 `app/site/config.ts`

## `app/content/en.ts` / `app/content/zh.ts` 负责什么

这两个文件是模板的核心内容层。

你可以把它理解成：

- `site/config.ts` 负责“站点怎么部署、怎么联系你”
- `content/*.ts` 负责“页面显示什么内容”

这两个内容文件需要保持同一份结构，尤其是项目部分。

注意：

- `en.ts` 和 `zh.ts` 里的 `projects` key 必须对齐
- 即使你主要只用中文，也建议同步维护英文文件

## 首页固定区块说明

下面 3 个区块是模板内置区块，默认始终显示：

- GitHub Activity
- Newsletter
- Introduction

它们不依赖用户在 `site/config.ts` 里额外提供内容数据。

当前版本里：

- GitHub Activity 使用模板内置的 mock 数据
- Newsletter 是前端本地表单演示，不接真实后端
- Introduction 使用模板内置引言文案

如果你想自定义它们的文字内容，可以直接改 `app/content/en.ts` 和 `app/content/zh.ts`。

## 如果你想新增首页 section

普通用户通常不需要新增 section，只改内容文件即可。

如果你确实想在首页增加一个新模块，需要做的是：

1. 在 `app/routes/_main._index.tsx` 里增加一个新的 `SectionFrame`
2. 给它一个唯一的 `id`
3. 在对应组件里渲染你的新内容

TOC 会根据页面真实 section 自动识别，所以新增后不需要再手动维护一个固定目录数组。

## 目录结构说明

下面是模板里最关键的几个目录：

```txt
app/
  content/
    en.ts
    zh.ts
    index.ts
  components/
  hooks/
  routes/
  site/
    config.ts
    home-sections.ts
  types.ts

public/
  documents/
    resume.md
  images/
    avatar/
    projects/
  markdown/
```

## 推荐修改顺序

如果你是第一次使用这个模板，建议按这个顺序来：

1. 改 `app/site/config.ts`
2. 替换头像
3. 替换简历
4. 改 `app/content/en.ts`
5. 改 `app/content/zh.ts`
6. 替换项目图片和 Markdown
7. 运行 `bun run typecheck`
8. 运行 `bun run build`

## 部署前检查清单

部署前建议至少确认这些内容：

- `app/site/config.ts` 中邮箱、社交链接、默认语言是否正确
- `app/content/en.ts` 和 `app/content/zh.ts` 的项目 key 是否一致
- `public/images/avatar/user.webp` 是否已替换
- `public/documents/resume.md` 是否已替换
- `public/markdown/` 中的 Markdown 文件是否和项目 slug 对应
- `bun run typecheck` 是否通过
- `bun run build` 是否通过

## 常见问题

### 1. 为什么我新增项目后访问不到详情页？

通常有几种原因：

- 你只改了一个语言文件，另一个语言文件没补同名 slug
- 你没有添加对应的 Markdown 文件
- 你没有放对应的项目封面图

### 2. 为什么某些按钮没有显示？

这些入口是按配置显隐的：

- 邮箱按钮依赖 `siteConfig.resume.email`
- 预约按钮依赖 `siteConfig.contact.bookingUrl`
- 社交区依赖 `siteConfig.contact.socials`
- 访客数依赖 `siteConfig.visitorCount`

如果对应值为空，它们会自动隐藏。

### 3. 我只想做中文版本，可以吗？

可以，但仍然建议保留英文文件，并让 `en.ts` / `zh.ts` 的结构保持一致，特别是 `projects` 的 key。

## 适合谁

这个模板适合这些场景：

- 个人简历站
- 开发者作品集
- 双语个人主页
- 带项目详情页的求职展示站

如果你希望模板用户只通过改数据和资源文件，就能部署一份自己的站点，这个项目就是按这个方向设计的。
