# AgentOps Reliability Lab

I'm building a reliability layer for AI agent and RAG workflows in Node.js/TypeScript — not another chatbot demo, but the tooling that sits around one: a scenario runner, trace viewer, evaluation harness, tool-call safety checks, prompt-injection tests, cost/latency tracking, human-approval and citation validation.

A small CustomerOps agent (support/refunds/payments) will eventually be the thing under test, but that's just a realistic target for the reliability tooling — it's not the point of the project.

## Where things stand

- pnpm workspace + shared TypeScript config.
- `apps/api` with the `evaluation` domain: plain types for a scenario, a check result, and the pass/fail evaluation computed from those checks. Spec lives in `specs/scenario-spec.md`, written before the code.
- `apps/web` reserved for a future dashboard, empty for now.
- Docs in `docs/`, specs in `specs/` — kept separate on purpose: docs are narrative, specs are the artifact code gets built from.

Not here yet, on purpose: loading scenarios from files, RAG, agent workflows, LLM calls, tool execution, API routes, a frontend, Docker, a database. Foundation first.

## Layout

```text
agentops-reliability-lab/
  docs/
    business-overview.md
    technical-architecture.md
  specs/
    scenario-spec.md
  apps/
    api/
      package.json
      tsconfig.json
      tsconfig.build.json
      src/
        index.ts
        index.test.ts
        evaluation/
          domain/
            scenarios/
              scenario.ts
            results/
              check-result.ts
              evaluation-result.ts
              evaluation-result.test.ts
    web/
      README.md
  package.json
  pnpm-workspace.yaml
  tsconfig.base.json
  LICENSE
```

Tests live next to the file they test (`evaluation-result.ts` + `evaluation-result.test.ts`), not in a parallel `tests/` tree.

## Running it

```powershell
pnpm install
pnpm test
pnpm typecheck
```
