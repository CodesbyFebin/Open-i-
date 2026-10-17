# 3. Unified Control Plane

The cockpit that unifies Experience and Harness.

## Purpose
One interface that shows worktree fleets *and* swarm topologies, injects harness capabilities when desired, and provides observability, permissions, and audit.

## Core Capabilities
- Unified cockpit (worktrees + topologies)
- Optional deep harness mode for any agent
- Memory inspector and learning trajectory viewer
- Federation mesh visualizer
- Granular permission modes (read / ask / write / auto)
- Full audit trails
- TUI + visual console + desktop

## Hybrid Modes
1. **Parallel Fleet** — isolated worktrees for comparison
2. **Harnessed Swarm** — coordinated multi-agent execution
3. **Hybrid** — inject harness into selected worktrees
4. **Federated Edge** — cross-machine zero-trust collaboration

## Status
Foundation — design complete, implementation pending.
