# OR Scheduling Co-pilot

> Moving operating-room scheduling from phone calls, whiteboards, and experience into a continuous loop of CV perception and agent collaboration.

## Problem

- Operating rooms are among the highest-throughput resources in a hospital, yet scheduling often depends on experience and verbal coordination.
- Actual start and finish times drift, cascading into turnover, anesthesia, transport, and patient waiting time.
- Information is fragmented across surgeons, anesthesiologists, nurses, transport teams, and inpatient units.

## Approach

- CV layer: identify key events inside the OR and maintain a continuously updated state machine.
- Scheduler agent: continuously reschedule based on state, remaining procedures, staff schedules, and resource occupancy.
- Communication agent: distribute changes to each role while keeping human override available.

## Status

- [x] Core state-machine prototype
- [x] Demo deck
- [ ] Connect with scheduling MVP
- [ ] Integrate real clinical data

## Stack

Python · OpenCV · LangGraph · FastAPI
