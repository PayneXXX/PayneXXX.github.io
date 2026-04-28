# PRD Agent

> 一个 plan -> write -> review -> distill 的闭环 PRD 助手。

## Loop

```text
needs -> planner -> generator -> human + evaluator -> ship
                                -> feedback -> generator
```

## Components

- Planner：把 PM 的零散需求收敛成结构化 plan。
- Generator：按 plan 写出可读的初稿。
- Evaluator：从 clarity、completeness、risk 多维度打分。
- Human gate：必须通过的强人工节点。
- Skill distiller：每完成一份 PRD，把过程沉淀成该 PM 的 PRD skills。
