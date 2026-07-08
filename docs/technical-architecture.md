# Technical Architecture

Node.js/TypeScript monorepo. Right now this is just the workspace skeleton — nothing else exists yet.

## Layout

```text
apps/
  api/
    src/
      evaluation/       # first bounded context: scenarios + evaluation results
        domain/         # each .ts file sits next to its .test.ts
        application/    # validates external scenario input into the domain model
  web/  # future dashboard (Next.js or Vite + React)
docs/     # narrative/architecture docs
specs/    # the specs code is built from, e.g. scenario-spec.md
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

## How a new concept gets built

Spec first, then code: write what the concept means in `specs/` (e.g. `specs/scenario-spec.md`), then implement the TypeScript types/logic to match it, then write tests that encode the spec's own examples, colocated next to the file they test. `evaluation` was built this way — the domain types didn't exist until the spec did.

Bounded contexts live as top-level folders under `apps/api/src/` (`evaluation` now, others — `agent`, `tools`, `tracing`, `rag` — named only once a milestone actually builds them). Inside a context, `domain/`, `application/`, and `infrastructure/` subfolders show up only when there's real code for them. `evaluation/application/` showed up once there was a validation boundary to put there (`specs/scenario-definition-spec.md`, then `parseScenarioDefinition`) — it's the first place `zod` gets used; `evaluation/domain/` still imports nothing external. `evaluation/infrastructure/` still doesn't exist — nothing reads a scenario definition from an actual file yet, only validates one already in memory.

## Not built yet

Reading scenario definitions from actual files, RAG, agent orchestration, tool execution, real LLM calls, API routes, the frontend, Docker, a database. Skipped on purpose — foundation first, everything else on top of it.
