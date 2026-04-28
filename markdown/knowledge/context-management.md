# Context Management

In long-running agent tasks, context is not an infinite container. It is a scarce budget. Every call rereads the context, so old logs, noisy tool output, stale decisions, and irrelevant history make the model slower, more expensive, and less coherent.

The goal of context management is not to fit more into the window. It is to make sure the model sees the right information at the right time.

## Two Failure Modes

**Context rot** happens when the window becomes noisy. The model forgets constraints, repeats completed work, or contradicts earlier decisions.

**Context anxiety** happens when the model senses pressure and tries to finish too early, leaving hidden unfinished work.

Both problems make an agent look busy while reducing real progress.

## Three Core Strategies

Compaction summarizes earlier history inside the same task. It preserves continuity but loses detail and may not fully remove context anxiety.

Context reset starts a clean session and restores state from structured handoff files. It is more robust for long tasks but requires complete handoff documents.

Task decomposition splits the work into bounded sprints with their own goals and acceptance criteria. It reduces context load and makes verification easier.

## Progressive Compaction

A mature harness handles context pressure in stages:

| Stage | Strategy |
| --- | --- |
| Warning | Record pressure and prepare cleanup |
| Observation masking | Replace old tool output with references |
| Fast pruning | Remove low-value history |
| Aggressive masking | Hide large old outputs |
| Full compaction | Produce a complete state summary |

Tool output is often the largest source of context bloat. Long logs and diffs should be offloaded to files, with only previews and paths returned to the model.

## ExecPlan as Recovery

An ExecPlan is a living document for recovery. It should include the goal, progress, discoveries, decisions, key files, next steps, commands, acceptance criteria, and rollback notes. A new agent should be able to continue from it without reading the original chat.

## My Understanding

Context management is attention management for agents. A strong personal knowledge system should therefore provide indexes, summaries, graph structure, Skills, and plans. That is how one-off conversations become continuous workflows.
