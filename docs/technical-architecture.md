# Technical Architecture

Node.js/TypeScript monorepo. Right now this is just the workspace skeleton — nothing else exists yet.

## Layout

```text
apps/
  api/  # Node.js API service
  web/  # future dashboard (Next.js or Vite + React)
docs/   # this stuff
```

## How I want to build this

Roughly Clean Architecture: domain and application code shouldn't know anything about frameworks or providers. Anything external — a model provider, a vector store, Postgres, whatever observability tool ends up in use — sits behind an adapter. Controllers just wire HTTP to use cases and nothing more.

Concretely, once there's real code behind these:

- **Domain** — plain models and rules, no imports from anywhere external.
- **Application** — use cases plus the port interfaces they depend on.
- **Infrastructure** — adapters implementing those ports against real providers.
- **API** — controllers, DTOs, HTTP wiring, nothing smarter than that.

The ports I expect to need:

- `LLMClient` — model calls behind a provider-neutral interface.
- `Retriever` — document/knowledge retrieval.
- `ToolExecutor` — tool-call validation and execution.
- `TraceLogger` — structured run/step logging.
- `EvaluationRunner` — scenario execution and pass/fail.

I'm not locking in the exact TypeScript signatures yet — that happens when the milestone that actually needs them starts, not before.

`apps/web` will eventually hold the dashboard: scenario runner, trace viewer, eval results, a view into the demo agent. It just calls the API; no logic of its own lives there.

## Not built yet

RAG, agent orchestration, tool execution, real LLM calls, API routes, the frontend, Docker, a database. Skipped on purpose — foundation first, everything else on top of it.
