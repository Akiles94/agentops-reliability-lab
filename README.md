# LLM Reliability Lab

LLM Reliability Lab is a production-style portfolio project for evaluating and observing AI agent and RAG workflows before they reach production.

The main product is not a chatbot. The main product is the reliability platform around an AI system: scenario evaluation, trace logging, tool-call safety, guardrails, cost tracking, latency tracking, and pass/fail readiness gates.

The future support/refund/payment assistant will be a demo system under test. It exists to prove the reliability platform works against realistic CustomerOps workflows.

## Milestone 0 Scope

Milestone 0 creates only the Node.js and TypeScript repository foundation:

- pnpm monorepo layout.
- TypeScript base configuration.
- Future API service location.
- Future React dashboard location.
- Business and technical documentation.
- One foundation test that proves the API package exports expected metadata.

Milestone 0 intentionally does not include:

- RAG implementation.
- Agent workflows.
- LLM provider calls.
- LangGraph or orchestration logic.
- NestJS application code.
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

## Future Architecture Direction

The future API will use Clean Architecture principles:

- Domain and application layers stay independent from providers and frameworks.
- Infrastructure adapters handle external details such as model providers, vector stores, persistence, and observability exporters.
- The API layer exposes use cases through HTTP once the Node.js API framework is added.

NestJS is the likely future API framework, but it is intentionally not installed or scaffolded in Milestone 0.

Planned future ports include:

- `LLM`
- `Retriever`
- `ToolExecutor`
- `TraceLogger`
- `EvaluationRunner`

Provider-specific code must stay outside the domain and application layers.

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
