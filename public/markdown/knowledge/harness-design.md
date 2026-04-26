# Harness Design

A harness is the working apparatus around a model. The model provides reasoning, language, and coding ability, but those abilities are not enough for reliable long-running work. The harness gives the model state, tools, execution, context management, validation, safety boundaries, and recovery.

In short: **Agent = Model + Harness. The model contains intelligence; the harness makes it useful.**

## Why Harnesses Matter

Models have natural limits:

- They do not have persistent state by default.
- They cannot operate real environments without tools.
- Their outputs are approximate and need verification.
- Long tasks can suffer from context decay, early stopping, and loops.
- They need clear safety and permission boundaries.

Harness design starts from these failure modes. Instead of asking what feature to add, ask what failure the model tends to produce and what external structure can reduce it.

## Common Components

| Component | Role |
| --- | --- |
| Filesystem | Stores state, plans, and intermediate artifacts |
| Git / worktrees | Tracks changes, isolates tasks, enables rollback |
| Shell execution | Runs tests, scripts, builds, and checks |
| Sandbox | Limits risk and provides a controlled environment |
| Planner | Expands vague intent into scoped work |
| Evaluator | Independently checks output quality |
| Middleware | Adds runtime constraints and checks |
| Traces / logs | Reveal decisions, tool calls, and failures |

Good harnesses are not maximalist. They add the minimum structure needed outside the current model capability boundary.

## Scaffolding vs Harness

Scaffolding happens before the first model call: prompts, tool schemas, available skills, and environment descriptions.

Harnessing happens after the first model call: tool dispatch, context compression, safety checks, validation, state recovery, and multi-agent coordination.

Scaffolding decides what the agent starts with. The harness decides how it keeps working.

## Feedback Loops

The core of harness design is not making the model do more steps. It is making the model correctable:

1. Plan.
2. Implement.
3. Validate.
4. Repair.
5. Record the result.

Without this loop, output remains plausible. With tests, previews, logs, traces, and human review, output can become reliable.

## My Understanding

Harness design is not an add-on. It is the workbench that turns a language model into an engineering system. For my AI Building workflow, the harness is what connects knowledge bases, Skills, MCP, CLI tools, plans, and validation into a repeatable way of building.
