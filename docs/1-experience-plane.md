# 1. Experience Plane

The human interface and workspace for fleets of agents.

## Purpose
Provide a polished desktop + mobile ADE where any CLI agent can run in isolated Git worktrees, side-by-side, with rich tooling for monitoring, steering, comparing, and merging results.

## Core Capabilities
- Parallel isolated Git worktrees
- Support for any CLI agent with bring-your-own subscription
- High-performance terminals (WebGL, infinite splits, persistent scrollback)
- Mobile companion (monitor, notifications, follow-up)
- Design Mode (capture UI elements into prompts)
- Diff annotation and review
- Drag-and-drop files/images into agent context
- Integrations for common developer tools
- SSH remote worktrees
- Computer use
- Quick open search
- Usage and rate-limit tracking

## Design Principles
- Isolation by default (worktrees)
- Human in the loop by default
- Bring your own subscriptions
- Desktop-first, mobile companion
- Local-first where possible

## Status
Foundation — design complete, implementation pending.
