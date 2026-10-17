# Open •i• — The Open Agent Harness & ADE

**Agent = Model + Harness.**  
**Open •i• is the open-source harness *and* the workspace.**

Open •i• is the ultimate open Agent Harness and Agent Development Environment. It fuses the deep multi-agent orchestration, adaptive vector memory, self-learning intelligence, and zero-trust federation of modern harness systems with a polished desktop + mobile workspace that runs any CLI agent with your own subscription.

If you are searching for an **agent harness**, an **open agent harness**, a **multi-agent ADE**, or a self-hosted system that lets fleets of coding agents share memory, coordinate as swarms, and remain auditable — this is the project.

---

## What Is an Agent Harness?

An **agent harness** is the execution layer wrapped around a language model. The model writes. The harness gives it tools, memory, loops, sandboxes, permissions, and controls so it can actually do work.

In 2026 the formula is simple and widely repeated:

> **Agent = Model + Harness**

The model is the rented black box. The harness is the part you own: the tool registry, the context manager, the memory store, the permission gate, the retry loop, the audit log, and the verification step. Change the harness and the same model can jump many places in rankings. Keep the model and improve the harness, and reliability, cost, and capability all move.

Open •i• is built as a complete, open, ownable Agent Harness. It does not lock you to one model or one vendor. It is designed so that any CLI agent (Claude Code, Codex, Grok, Cursor, OpenCode, Pi, Hermes, and others) can receive the full harness treatment — or run as a plain agent when you prefer.

---

## Why Open •i• Exists

Two strong open projects showed the shape of the problem:

- **Ruflo** (ruvnet/ruflo) demonstrated what a deep Agent Harness looks like: 100+ specialized agents, HNSW vector memory, self-learning patterns, swarm topologies with consensus, zero-trust federation, and a rich MCP tool surface.
- **Orca** (stablyai/orca) demonstrated what a polished Agent Development Environment looks like: parallel isolated Git worktrees, support for any CLI agent with bring-your-own-subscription, high-performance terminals, a mobile companion, Design Mode, and deep integrations.

Open •i• takes both and builds the missing piece: a single open system that is both the harness and the workspace. You get the intelligence layer and the human interface in one place, under your control, with no lock-in.

---

## Core Architecture

Open •i• is organized into three planes.

### 1. Experience Plane
The human-facing workspace. Parallel isolated Git worktrees. Any CLI agent. High-performance terminals. Mobile companion for monitoring and steering. Design Mode that captures UI elements into prompts. Diff annotation. GitHub and Linear integration. SSH remote worktrees. Computer use. Quick search across worktrees, files, agents, and context.

### 2. Harness Plane
The intelligence layer. Swarm coordination (hierarchical, mesh, adaptive) with consensus. Adaptive vector memory (HNSW-indexed) with hybrid search and graph hops. Self-learning (pattern banks, trajectory contrastive learning). Zero-trust federation across machines and organizations. MCP server exposing hundreds of tools. Plugin system. MetaHarness grading and security scans. Background workers. Cost tracking. Compliance-ready audit trails.

### 3. Unified Control Plane
The cockpit that shows both worktree fleets and swarm topologies. Optional deep harness mode that injects memory, hooks, and coordination into any agent via MCP. Memory inspector. Learning trajectory viewer. Federation mesh visualizer. Granular permission modes. Full audit logs.

---

## Key Capabilities

- **Any agent, harnessed or plain** — Run Claude Code, Codex, Grok, Cursor, OpenCode, Pi, Hermes, or any other CLI agent. Inject the full harness when you want shared memory and coordination.
- **Parallel worktrees** — Fan one prompt across multiple agents, each in its own isolated Git worktree. Compare, annotate, and merge the winner.
- **Shared vector memory** — HNSW-indexed store that persists across sessions, agents, and machines. Hybrid search, graph hops, diversity ranking.
- **Self-learning loop** — Agents improve from successful trajectories. Patterns are stored and reused so the system gets better without constant model calls.
- **Swarm coordination** — Hierarchical (Queen-led), mesh, and adaptive topologies. Consensus protocols so agents can agree and hand off work.
- **Zero-trust federation** — Agents on different machines discover, authenticate, and exchange work with mTLS, ed25519, PII redaction, and trust scoring.
- **MCP tool surface** — Hundreds of tools for memory, swarm, neural routing, security, browser, GitHub, and more, injectable into any agent.
- **Desktop + mobile** — Full ADE on desktop. Mobile companion for notifications and follow-up steering.
- **Evidence and audit** — Every important action is logged. MetaHarness can grade setups and produce evidence of what ran.

---

## How It Compares

| Capability              | Typical Framework | Single-Agent CLI | **Open •i•**                  |
|-------------------------|-------------------|------------------|-------------------------------|
| Agent Harness depth     | Partial           | Light            | Full (memory + learning + federation) |
| Any CLI agent           | Limited           | One              | Any                           |
| Parallel isolation      | Rare              | No               | Worktrees + swarm-aware       |
| Shared vector memory    | Add-on            | Session only     | First-class, cross-agent      |
| Self-learning           | Rare              | No               | Trajectory + pattern bank     |
| Federation              | No                | No               | Zero-trust mesh               |
| Desktop + mobile ADE    | No                | Terminal only    | Yes                           |
| Audit & evidence        | Light             | Light            | Built-in                      |
| Open source / ownable   | Varies            | Varies           | MIT, self-hostable            |

---

## Core Workflows

### Parallel Fleet
```bash
openi worktree fan "Implement the auth module" --agents claude,codex,grok,opencode
```
Each agent works in its own isolated worktree. You compare diffs, annotate, and merge the best result.

### Harnessed Swarm
```bash
openi swarm init --topology hierarchical --max-agents 12 --memory shared
openi swarm task "Design and implement the payment system with full test coverage"
```
A coordinating agent routes work to specialized roles. Shared memory and the learning loop stay active.

### Hybrid
Run plain agents and fully harnessed swarms side-by-side. Inject harness capabilities into any agent via MCP only when needed.

### Federated Edge
```bash
openi federation join --peer edge-node.local
```
Agents on your laptop, a remote machine, and a colleague’s machine collaborate with authentication, trust scoring, and data safety gates.

---

## Installation (Conceptual)

```bash
# One-line
curl -fsSL https://openi.dev/install.sh | bash

# Or
npm install -g @openi/cli
openi init
openi
```

Claude Code / Codex plugin path:
```
/plugin marketplace add openi/openi
/plugin install openi-core@openi
```

---

## Brand & Aesthetic

Open •i• uses a near-black evidence-console aesthetic. Primary color is phosphor green `#00ff00`. The mark is an open ring with a central intelligence core — the “i” in Open •i•.

- Background: `#010409`
- Phosphor: `#00ff00`
- Secondary: clean white / warm paper for contrast
- Tagline: *Systems that prove what happened. Agents that remember and improve.*

Favicon, Open Graph image, and Twitter card are included in the repository so shares and browser tabs look consistent.

---

## Guides & Documentation

Detailed guides live in `/docs`:

- [What Is an Agent Harness?](docs/guides/what-is-an-agent-harness.md)
- [Architecture Overview](docs/guides/architecture.md)
- [Experience Plane](docs/1-experience-plane.md)
- [Harness Plane](docs/2-harness-plane.md)
- [Control Plane](docs/3-control-plane.md)

These pages are written to be useful both for humans and for agents that need to understand the system.

---

## Roadmap

**Phase 1 — Foundation**  
Desktop ADE with parallel worktrees and any-agent support. MCP injection layer. Core vector memory. Basic swarm coordination. Mobile companion.

**Phase 2 — Intelligence**  
Full self-learning loop. Zero-trust federation. MetaHarness grading and security suite. Plugin marketplace.

**Phase 3 — Ultimate**  
Hybrid topology visualizer. Cross-organization federation with trust scoring. Edge / sovereign mode. Full compliance and audit export.

---

## Why This Ranking Matters

People searching for “agent harness”, “open agent harness”, “multi-agent ADE”, “agent orchestration open source”, or “vector memory for agents” should find a clear, ownable answer. Open •i• is written and structured so that:

- The definition of an agent harness is explicit and repeated.
- The difference between model and harness is clear.
- Concrete capabilities (memory, learning, federation, worktrees, any-agent) are listed and compared.
- Installation and workflow examples are copy-pasteable.
- Branding, metadata, and social cards are consistent so the project is recognizable when shared.

This is not marketing fluff. It is the engineering stance: measure, verify, admit, execute, prove. The harness is the part that makes those claims checkable.

---

## License

MIT. See [LICENSE](LICENSE).

---

## Built by

CodesbyFebin  
Systems that prove what happened.

**Open the interface. Own the intelligence.**

---

*Open •i• is an independent open-source project. It draws architectural lessons from Ruflo and Orca but is not affiliated with or endorsed by their maintainers. All trademarks remain with their respective owners.*
