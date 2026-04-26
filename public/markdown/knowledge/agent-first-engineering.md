# Agent-First Engineering

Agent-first engineering is a shift in software work: humans no longer need to directly implement every detail. Instead, they design environments, constraints, knowledge entry points, and feedback loops so agents can operate inside systems that are observable, verifiable, and maintainable.

The important idea is that model capability is only one part of the system. A general chat model is fragile when asked to perform complex engineering work in isolation. But when it has access to files, shell commands, tests, project maps, plans, rollback paths, and review criteria, it starts behaving like a real engineering participant.

## The Role Shift

Traditional engineering is direct manipulation: understand the task, write code, run tests, fix bugs. Agent-first engineering separates the work into two layers:

- Humans own goals, boundaries, taste, acceptance criteria, and risk judgment.
- Agents handle search, implementation, migration, verification, formatting, and intermediate artifacts.

This does not remove the human role. It moves the human role upward. The engineer becomes a systems designer, editor, reviewer, and environment builder.

## Four Practical Paths

One path is to make the repository the single system of record. Important knowledge should live in the repo, not in chat history or memory. Architecture rules, style preferences, directory maps, plans, and failure modes should be encoded as Markdown, schemas, tests, or lint rules.

A second path is turning taste into executable constraints. Subjective judgment is hard for a model to inherit reliably, but it can be translated into checklists, examples, scoring criteria, and automated gates.

A third path is replacing one-shot prompting with feedback loops. Complex work should move through plan, implement, verify, repair, and retrospect. Tests, screenshots, logs, traces, and human review turn plausible output into usable output.

The fourth path is continuously maintaining the agent environment. Rules decay, documents rot, tools conflict, and context grows. Agent-first engineering requires regular cleanup and compression.

## Knowledge Layers

Agent-facing knowledge works best when layered:

| Layer | Purpose | Examples |
| --- | --- | --- |
| Navigation | Orientation | ARCHITECTURE.md, AGENTS.md, project maps |
| Execution | Task guidance | PLANS.md, commands, acceptance criteria |
| Capability | Reusable expertise | Skills, templates, examples, knowledge cards |

Navigation answers where we are. Execution answers what to do now. Capability answers how to handle recurring classes of work.

## My Understanding

Agent-first engineering is not a belief that agents can magically do everything. It is the recognition that model intelligence has become a new engineering material. The value comes from the structure around it: feedback, state, constraints, knowledge, and verification.

That is why this Knowledge section should be more than short cards. It should show a developing engineering worldview: how to turn reading, projects, and experiments into reusable systems.
