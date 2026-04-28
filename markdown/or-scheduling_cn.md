# OR Scheduling Co-pilot

> 把医院手术室调度从电话、白板和经验，迁移到 CV 感知 + Agent 协作的连续回路。

## Problem

- 手术室是医院最高 throughput 的资源之一，调度依赖经验与口口相传。
- 实际开台、关台时间会漂移，连锁影响接台、麻醉、转运与患者等待。
- 信息分散在主刀、麻醉、护理、转运、住院部多个角色之间。

## Approach

- CV layer：识别 OR 内关键事件，形成可持续更新的状态机。
- Scheduler agent：基于状态、剩余术式、人员排班与资源占用连续重排。
- Communication agent：把变更分发到各角色，并保留 human override。

## Status

- [x] 核心状态机原型
- [x] 演示 deck
- [ ] 与排班 MVP 打通
- [ ] 真实临床数据接入

## Stack

Python · OpenCV · LangGraph · FastAPI
