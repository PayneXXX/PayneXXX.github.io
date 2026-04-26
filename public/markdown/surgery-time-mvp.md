# Surgery Time MVP

> A runnable minimum validation: turning patient data into an explainable surgery time-window chain.

## Inputs

- Doctor diagnosis text
- Preoperative examination data
- Medical imaging descriptions or reports

## Pipeline

1. Patient summarizer: normalize the case into a patient-card schema.
2. Duration predictor: estimate a surgical duration distribution from historical surgery records and the current patient card.
3. Slot matcher: connect OR, surgeon, and anesthesiologist schedules to return top-k candidate windows.
4. Joint picker: let the patient and attending doctor confirm a window together.

## Status

- [x] Schema + summarizer
- [x] Single-point duration predictor
- [ ] Scheduling integration
- [ ] Evaluation set and retrospective testing
