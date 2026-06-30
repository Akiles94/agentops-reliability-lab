# Technical Architecture

LLM Reliability Lab will be a fullstack TypeScript monorepo with a Node.js API and a React dashboard.

Milestone 0 creates only the foundation. It does not implement product behavior.

## Monorepo Layout

```text
apps/
  api/  # Future Node.js API service, likely NestJS later
  web/  # Future Vite + React + TypeScript dashboard
docs/   # Business and technical documentation
```

## Architecture Principles

- Use small bounded changes.
- Keep domain and application logic independent from frameworks and providers.
- Use ports and adapters for external systems.
- Keep provider-specific code in infrastructure adapters.
- Include tests with implementation tasks when applicable.
- Avoid empty architecture folders until real code exists for them.

## Future API Direction

The future API will use Clean Architecture boundaries:

- Domain: core concepts and rules.
- Application: use cases and port interfaces.
- Infrastructure: adapters for providers, storage, tools, tracing, and evaluation execution.
- Interface/API: NestJS controllers, request/response DTOs, and HTTP wiring.

No domain or application code should import SDKs for model providers, vector stores, databases, observability vendors, or NestJS framework modules.

## Planned Ports

The application layer is expected to define provider-neutral TypeScript interfaces for:

- `LLM`: model interaction behind a provider-neutral interface.
- `Retriever`: document or knowledge retrieval behind a provider-neutral interface.
- `ToolExecutor`: safe tool execution and tool-call validation.
- `TraceLogger`: structured run and step logging.
- `EvaluationRunner`: scenario execution and pass/fail evaluation.

Exact TypeScript types and method signatures will be designed when the related milestone starts.

## Future Web Direction

The frontend will live in `apps/web` as a Vite + React + TypeScript dashboard.

Planned screens include:

- Scenario runner.
- Trace viewer.
- Evaluation dashboard.
- Demo agent interface.

The web app will call the Node.js API instead of owning backend behavior.

## Not Implemented Yet

Milestone 0 intentionally avoids:

- Domain models.
- RAG pipelines.
- Agent orchestration.
- Tool execution.
- LLM provider integration.
- NestJS application scaffolding.
- API routes.
- Frontend app generation.
- Docker.
- Database schema or persistence.

