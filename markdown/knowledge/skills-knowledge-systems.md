# Skills & Knowledge Systems

Personal knowledge bases, LLM Wikis, and Claude Skills all point in the same direction: turning scattered experience into reusable, searchable, maintainable, and callable capability units.

Traditional knowledge management asks how I remember and understand. Agent-facing knowledge systems ask how knowledge enters the next execution loop.

## LLM Wiki

An LLM Wiki treats knowledge as a persistent compounding artifact. Instead of rediscovering information for every query, the system compiles knowledge into structured pages and continuously updates them.

It can be organized into three layers:

| Layer | Content |
| --- | --- |
| Raw Sources | Original articles, papers, images, data |
| Wiki | Summaries, concepts, entities, synthesis pages |
| Schema | Naming rules, structure, workflows |

Humans curate sources and ask good questions. The LLM handles summaries, cross-links, indexing, logs, and health checks.

## Operations

**Ingest** adds new material and updates related pages.

**Query** searches and synthesizes existing pages.

**Lint** finds contradictions, stale pages, orphan pages, and missing links.

Good query results can be written back into the wiki, so exploration itself compounds.

## Skills

A Skill is a lightweight reusable capability package. It usually includes:

- A `skill.md` file with trigger conditions, workflow, and output rules.
- Reference files such as examples, style guides, background material, or MCP instructions.
- Scripts or API examples.
- Templates and other assets.

Its key mechanism is progressive disclosure: the model only sees the skill name and description until the skill is triggered.

## From Knowledge to Workflow

A knowledge system can mature through three stages:

1. Readable: humans can browse and understand it.
2. Searchable: models can locate relevant material.
3. Executable: knowledge becomes Skills, commands, templates, and checklists.

AI Building should move toward the third stage. Knowledge should not only be something I know; it should be something the system can use.

## My Understanding

Skills and knowledge systems turn one-time experience into reusable assets. Reading, building, and debugging should not disappear into chat history. They should become wiki pages, concept links, Skills, examples, and rules that improve the next task.
