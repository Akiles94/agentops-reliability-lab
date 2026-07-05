# AgentOps Reliability Lab

AgentOps Reliability Lab is a production-style AI Agent Reliability Lab for testing, tracing, evaluating, and securing RAG + tool-calling agent workflows, built in Node.js and TypeScript.

The main product is not a chatbot. It is the reliability layer around an AI system: a scenario runner, trace viewer, evaluation harness, tool-call safety checks, prompt-injection tests, cost/latency tracking, human-approval validation, and citation validation. A CustomerOps (support/refunds/payments) agent will later serve as the demo system under test.

## Current Scope

This is the foundation commit. It sets up the Node.js/TypeScript monorepo only:

- pnpm workspace layout.
- Shared TypeScript base configuration.
- `apps/api` package with a single foundation test proving the build/test pipeline works.
- `apps/web` reserved for a future dashboard.
- Business and technical documentation.

It intentionally does not yet include:

- RAG implementation.
- Agent workflows.
- LLM provider calls.
- Tool execution.
- API routes.
- Frontend application code.
- Docker.
- Database setup.

## Project Layout

```text
agentops-reliability-lab/
  docs/
    business-overview.md
    technical-architecture.md
  apps/
    api/
      package.json
      tsconfig.json
      src/
        index.ts
      tests/
        foundation.test.ts
    web/
      README.md
  package.json
  pnpm-workspace.yaml
  tsconfig.base.json
  LICENSE
```

## Basic Commands

Install dependencies:

```powershell
pnpm install
```

Run the foundation checks:

```powershell
pnpm test
pnpm typecheck
```
