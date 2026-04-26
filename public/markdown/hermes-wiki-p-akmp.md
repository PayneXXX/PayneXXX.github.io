# Hermes-wiki-P/AKMP

> A dual-vault knowledge system for humans and AI agents: PKM stays lightweight, personal, and associative; AKM becomes structured, searchable, maintainable, and machine-first.

## Background

Personal knowledge bases tend to run into two problems once agents enter the workflow:

- Human-facing notes get polluted by machine-generated files, IDs, and rigid structures.
- Agent-facing knowledge remains unstructured, so every task loads too much context and repeats prior work.

Hermes-wiki-P/AKMP solves this through physical separation: one vault for human thinking, another vault for agent operation, with workflows connecting the two when needed.

## Dual Vaults

| Vault | Audience | Role |
| --- | --- | --- |
| Penn_PKM | Human | iCloud-based, lightweight, flexible, associative, available across devices |
| Hermes_AKM | Agent groups | Local, Git-managed, structured, retrieval-first, machine-oriented |

PKM preserves personal thought, reading paths, and low-friction capture. AKM stores agent-callable knowledge, skills, templates, and project context.

## Core Mechanisms

### Raw / Compiled Layers

The Raw layer keeps immutable source material such as articles, papers, transcripts, and images. Agents read it but do not mutate it.

The Compiled layer contains processed skills, knowledge pages, and concepts that agents actually load during tasks.

### Lazy Map Loading

Agents do not load every map at once. They move through a layered orientation flow:

1. A tiny global entry: AKM_Guide.
2. A project-specific MOC.
3. The concrete Skill, Knowledge, or Context files needed for the current task.

This keeps context bounded and prevents unrelated projects from polluting the task window.

### Skill Promotion

When a project-level skill is reused in more than half of relevant projects, it is promoted into the common skill library. The original location keeps a stub redirect so links do not break.

This lets local project practice gradually become general capability.

### Lint Checks

AKM periodically checks orphan pages, broken wikilinks, stale content, tag pollution, contradictions, invalid frontmatter, and oversized pages.

The goal is not formatting purity. The goal is to keep the knowledge system usable as it grows.

## Relationship to LLM Wiki

The system is inspired by Karpathy's LLM Wiki pattern, including Raw -> Compiled -> Schema layering, orientation rituals, append-only logs, lint checks, provenance, and page thresholds.

Its difference is the stronger separation between human and agent vaults, plus skill promotion and ID Registry mechanisms designed for Hermes / OpenClaw-style agent workflows.

## Project Value

Hermes-wiki-P/AKMP is not just an Obsidian template. It is knowledge infrastructure for AI Building:

- Humans keep free-form capture and reflection in PKM.
- Agents get structured, callable knowledge in AKM.
- Project SOPs and task context can be distilled.
- Reusable skills can rise into common capability.
- Logs and lint checks keep the system traceable and maintainable.

The goal is for knowledge to become executable context, not just stored notes.
