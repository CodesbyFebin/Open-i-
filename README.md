# Open •i•

**The open meta-harness and Agent Development Environment for fleets of intelligent agents.**

> Agent = Model + Harness.  
> Open •i• is the harness *and* the workspace.

Open •i• is the ultimate fusion of the deep agent orchestration layer of [Ruflo](https://github.com/ruvnet/ruflo) and the polished multi-agent ADE of [Orca](https://github.com/stablyai/orca).

It gives you one place to run, isolate, coordinate, remember, learn, and federate any coding agents — with enterprise-grade controls, self-learning memory, and a desktop + mobile experience that feels native.

---

## Vision

**Open Intelligence. Open Interface. Open Source.**

Run 1 to 100 agents in parallel isolated worktrees.  
Give them shared vector memory, swarm coordination, self-learning patterns, and zero-trust federation.  
Monitor and steer everything from desktop or mobile.  
Bring your own subscriptions. Own your data. Own your edge.

---

## Core Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                     Experience Plane                        │
│  Desktop ADE · Mobile Companion · Worktrees · Terminals     │
│  Design Mode · Diff Annotation · GitHub/Linear · SSH        │
│  (Orca DNA)                                                 │
├──────────────────────────────────────────────────────────────┤
│                     Harness Plane                           │
│  Swarm Orchestration · Vector Memory · Learning Loop        │
│  Federation · MCP Tools (300+) · Specialized Agents         │
│  MetaHarness · Security · Plugins · Cost Tracking           │
│  (Ruflo DNA)                                                │
├──────────────────────────────────────────────────────────────┤
│                     Control Plane                           │
│  Unified Cockpit · Topology View · Memory Inspector         │
│  Permission Modes · Audit Logs · Federation Mesh            │
└──────────────────────────────────────────────────────────────┘
```

### 1. Experience Plane (from Orca)
- Parallel isolated Git worktrees — fan one prompt across many agents and compare/merge the winner
- Any CLI agent support (Claude Code, Codex, Grok, Cursor, OpenCode, Pi, Hermes, and any terminal agent) with BYO subscription
- High-performance WebGL terminals with infinite splits and persistent scrollback
- Mobile companion for monitoring, notifications, and follow-up steering
- Design Mode: click UI elements → capture HTML/CSS/screenshots into prompts
- Diff annotation, drag-and-drop files/images into agents
- GitHub & Linear integration, SSH remote worktrees, computer use
- Quick open search across worktrees, files, agents, and context
- Account switching and usage/rate-limit tracking

### 2. Harness Plane (from Ruflo)
- **100+ specialized agents** + ability to inject harness capabilities into any base agent via MCP
- Swarm coordination: hierarchical (Queen-led), mesh, adaptive topologies with Raft/Byzantine/Gossip consensus
- Adaptive vector memory: HNSW-indexed AgentDB / RuVector with hybrid search, graph hops, and diversity ranking
- Self-learning intelligence: SONA neural patterns, ReasoningBank, trajectory contrastive learning
- Zero-trust federation: agents across machines/orgs discover, authenticate (mTLS + ed25519), exchange work with PII redaction and trust scoring
- MCP server with 300+ tools (memory, swarm, neural, security, browser, GitHub, etc.)
- Plugin system and marketplace
- MetaHarness: grade agent setups, security scans, project snapshots, ejection to standalone toolkits
- Background workers, cost tracking, compliance modes (HIPAA, SOC2, GDPR), AIDefence

### 3. Unified Control Plane
- One cockpit showing worktree fleets *and* swarm topologies
- Optional deep harness mode: even plain CLI agents receive memory, hooks, and coordination tools
- Live memory inspector, learning trajectory viewer, federation mesh visualizer
- Granular permission modes (read / ask / write / auto) with full audit trails
- TUI + visual console + full desktop experience

---

## Key Differentiators

| Capability                  | Ruflo          | Orca           | **Open •i•**                  |
|----------------------------|----------------|----------------|-------------------------------|
| Parallel worktrees         | Basic          | Excellent      | Excellent + Swarm-aware       |
| Any CLI agent              | Partial        | Excellent      | Excellent                     |
| Deep vector memory         | Excellent      | —              | Excellent + Shared across fleet |
| Swarm coordination         | Excellent      | Light          | Excellent                     |
| Self-learning              | Excellent      | —              | Excellent                     |
| Federation                 | Excellent      | SSH only       | Zero-trust mesh               |
| Desktop + Mobile UI        | Console/TUI    | Excellent      | Excellent + Cockpit           |
| MCP tools                  | 300+           | CLI-focused    | 300+ injected                 |
| MetaHarness / Audit        | Yes            | —              | Yes                           |
| Design Mode / Computer Use | Partial        | Excellent      | Excellent                     |

---

## Core Workflows

### 1. Parallel Fleet (Orca style)
```bash
openi worktree fan "Implement the auth module" --agents claude,codex,grok,opencode
```
Each agent works in its own isolated worktree. Compare diffs, annotate, and merge the winner.

### 2. Harnessed Swarm (Ruflo style)
```bash
openi swarm init --topology hierarchical --max-agents 12 --memory shared
openi swarm task "Design and implement the payment system with full test coverage"
```
Queen coordinates specialized agents (architect, coder, tester, security). Shared vector memory and learning flywheel active.

### 3. Hybrid Mode
Run plain agents and fully harnessed swarms side-by-side in the same ADE. Inject harness capabilities into any agent via MCP when needed.

### 4. Federated Edge
```bash
openi federation join --peer edge-node.local
```
Agents on your laptop, a remote VPS, and a colleague’s machine collaborate with zero-trust channels, trust scoring, and PII gates.

---

## Technology Stack (Proposed)

| Layer              | Technologies                                      |
|--------------------|---------------------------------------------------|
| Desktop ADE        | Tauri (Rust + WebView) or Electron + Vite         |
| Mobile Companion   | React Native or Flutter                           |
| Orchestration      | TypeScript (Ruflo-style) + Rust WASM kernels      |
| Memory             | AgentDB / HNSW + SQLite / optional RuVector       |
| Terminals          | WebGL / Ghostty-inspired renderer                 |
| Federation         | mTLS + WireGuard mesh + ed25519                   |
| Agents             | Any CLI + MCP injection layer                     |
| Plugins            | Open marketplace (compatible with both ecosystems)|

---

## Installation (Conceptual)

```bash
# One-line (desktop + harness)
curl -fsSL https://openi.dev/install.sh | bash

# Or
brew install openi
npm install -g @openi/cli

# Init project
openi init

# Launch ADE
openi
```

Claude Code / Codex integration:
```
/plugin marketplace add openi/openi
/plugin install openi-core@openi
```

---

## Brand

- **Name**: Open •i•
- **Aesthetic**: Near-black evidence-console / terminal. Phosphor green `#00ff00` primary, clean white secondary.
- **Mark**: Open ring with central intelligence core (the “i”)
- **Tagline**: *Systems that prove what happened. Agents that remember and improve.*
- **License**: MIT

---

## Roadmap (Ultimate Version)

### Phase 1 — Foundation
- [ ] Desktop ADE with parallel worktrees and any-agent support
- [ ] MCP injection layer for harness capabilities
- [ ] Core vector memory and basic swarm coordination
- [ ] Mobile companion (monitor + steer)

### Phase 2 — Intelligence
- [ ] Full self-learning loop (SONA + trajectory)
- [ ] Zero-trust federation
- [ ] MetaHarness grading and security suite
- [ ] Plugin marketplace

### Phase 3 — Ultimate
- [ ] Hybrid topology visualizer
- [ ] Cross-org federation with trust scoring
- [ ] Edge compute / Sovereign mode
- [ ] Full compliance and audit export

---

## Why Open •i•

Ruflo gives agents a brain, memory, and the ability to collaborate as a team.  
Orca gives humans a beautiful workspace to run and steer fleets of agents.  

Open •i• gives you both — open, ownable, and built to scale from a single developer to a federated swarm across machines and organizations.

**Open the interface. Own the intelligence.**

---

*Built as the conceptual ultimate fusion of ruvnet/ruflo and stablyai/orca.*  
*Open source. No lock-in. Your agents. Your memory. Your edge.*

Built by CodesbyFebin
