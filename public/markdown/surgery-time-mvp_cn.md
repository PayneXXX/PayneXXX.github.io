# Surgery Time MVP

> 一个可运行的最小验证：把患者数据到手术时间窗做成一条可解释链路。

## Inputs

- 医生诊断文本
- 术前检查数据
- 医学影像描述或报告

## Pipeline

1. Patient summarizer：把病例统一为 patient-card schema。
2. Duration predictor：基于历史手术与当前 patient-card 给出术时分布。
3. Slot matcher：对接 OR、主刀、麻醉医师排班，返回 top-k 时间窗。
4. Joint picker：患者与主治医师在系统内联合确认。

## Status

- [x] schema + summarizer
- [x] 单点 duration predictor
- [ ] 排班对接
- [ ] 评估集与回测
