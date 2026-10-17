# 2. Harness Plane

The intelligence, memory, coordination, and security layer.

## Purpose
Give agents tools, persistent memory, self-learning, swarm coordination, and zero-trust federation so they can work as a team rather than isolated sessions.

## Core Capabilities
- Specialized agents for different roles
- Swarm coordination (hierarchical, mesh, adaptive) with consensus protocols
- Vector memory (HNSW-indexed) with hybrid search and graph hops
- Self-learning from trajectories and stored patterns
- Zero-trust federation (strong authentication, data redaction, trust scoring)
- MCP server with a broad tool surface
- Plugin system
- Security scans and grading
- Background workers
- Cost tracking and compliance modes

## Design Principles
- Agent = Model + Harness
- Memory and learning are first-class
- Federation across trust boundaries
- Evidence and auditability
- Injectable into any base agent via MCP

## Status
Foundation — design complete, implementation pending.
