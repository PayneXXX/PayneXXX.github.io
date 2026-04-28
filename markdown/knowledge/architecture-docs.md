# Architecture Documentation

Architecture documentation is not a thick manual. It is an orientation system. In complex codebases, the expensive part is often not writing the patch but finding where the patch belongs, what boundaries matter, and which rules must not be broken.

For agents, this is even more important. Knowledge that is not in the repository is effectively invisible.

## Three Documents

| Document | Question | Purpose |
| --- | --- | --- |
| ARCHITECTURE.md | Where does this kind of work live? | Builds the project map |
| AGENTS.md | How should an agent work here? | Provides rules and navigation |
| PLANS.md / ExecPlan | How should this task proceed? | Records plan, progress, decisions, and validation |

ARCHITECTURE.md describes what the system is. AGENTS.md describes how to collaborate with it. PLANS.md describes how a specific task changes it.

## ARCHITECTURE.md

This file should answer where important things are and which boundaries are stable. It should avoid volatile detail and focus on modules, data flow, key abstractions, external dependencies, and invariants.

The most valuable parts are often negative rules: what should not depend on what, which layer must not access which resource, or where state is allowed to change.

## AGENTS.md

AGENTS.md should be a compact entry point, not a giant instruction dump. It should list commands, conventions, important files, and links to deeper docs. Its main principle is progressive disclosure: give the map first, then let the agent read deeper only when needed.

## PLANS.md / ExecPlan

An ExecPlan is a task-level living document. It should include visible goals, progress, discoveries, decisions, key paths, exact steps, validation, and recovery notes. A new agent should be able to continue from it.

## My Understanding

Architecture docs reduce entry cost. For humans, they reduce confusion. For agents, they reduce context cost. They are not after-the-fact documentation; they are infrastructure for continuous collaboration.
