# Multi-Agent Coordination

Multi-agent systems are not valuable because more models are always better. They are valuable because complex work can be split across roles, context boundaries, and information flows. A single agent is good at continuous execution; multiple agents are useful for parallel exploration, independent evaluation, and long-lived specialization.

The central question is: **where should context boundaries be drawn, and how should information cross them?**

## Five Patterns

**Generator-Verifier** uses one agent to produce and another to review. It works when quality matters and criteria can be made explicit.

**Orchestrator-Subagent** uses a lead agent to decompose and synthesize work while subagents handle bounded subtasks. It is the most broadly useful starting point.

**Agent Teams** keep persistent workers for different domains, such as frontend, backend, tests, and docs. They are useful for long-running independent work.

**Message Bus** uses events and subscriptions instead of direct delegation. It fits emergent asynchronous workflows but needs strong observability.

**Shared State** lets agents collaborate through a common store such as a research database, task board, or knowledge graph. It is powerful for cumulative discovery but can create reactive loops.

## Choosing a Pattern

Start with the simplest useful pattern:

- Short-lived subtasks: Orchestrator-Subagent.
- Long-lived specialist context: Agent Teams.
- Quality-critical generation: Generator-Verifier.
- Event-driven workflow: Message Bus.
- Collaborative research: Shared State.

Most systems should start with Orchestrator-Subagent and evolve only when real bottlenecks appear.

## Risks

Multi-agent systems fail when communication cost exceeds the benefit, responsibilities overlap, or evaluation criteria are unclear. Every agent should have a clear scope, output, owner, and completion signal.

## My Understanding

The point of multi-agent coordination is not parallelism for its own sake. It is clarity. Different agents preserve different slices of attention and state. In my own projects, I prefer simple orchestration first, then add verification or specialist workers only when the task genuinely needs them.
