# PRD Agent

> A closed-loop PRD assistant built around plan -> write -> review -> distill.

## Loop

```text
needs -> planner -> generator -> human + evaluator -> ship
                                -> feedback -> generator
```

## Components

- Planner: turns scattered PM requirements into a structured plan.
- Generator: writes a readable draft from the plan.
- Evaluator: scores clarity, completeness, and risk.
- Human gate: a required human checkpoint before acceptance.
- Skill distiller: after each PRD, distills the process into reusable PRD skills for that PM.
