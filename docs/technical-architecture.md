# Technical Architecture

LLM Reliability Lab will be a fullstack monorepo with a Python API and a React dashboard.

Milestone 0 only creates the foundation. It does not implement product behavior.

## Monorepo Layout

```text
apps/
  api/  # Future Python FastAPI service
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
- Interface/API: FastAPI routes and request/response models.

No domain or application code should import SDKs for model providers, vector stores, databases, or observability vendors.

## Planned Ports

The application layer is expected to define ports for:

- `LLM`: model interaction behind a provider-neutral interface.
- `Retriever`: document or knowledge retrieval behind a provider-neutral interface.
- `ToolExecutor`: safe tool execution and tool-call validation.
- `TraceLogger`: structured run and step logging.
- `EvaluationRunner`: scenario execution and pass/fail evaluation.

Exact method signatures will be designed when the related milestone starts.

## Future Web Direction

The frontend will live in `apps/web` as a Vite + React + TypeScript dashboard.

Planned screens include:

- Scenario runner.
- Trace viewer.
- Evaluation dashboard.
- Demo agent interface.

The web app will call the Python API instead of owning backend behavior.

## Not Implemented Yet

Milestone 0 intentionally avoids:

- RAG pipelines.
- Agent orchestration.
- Tool execution.
- LLM provider integration.
- FastAPI routes.
- Frontend app generation.
- Docker.
- Database schema or persistence.

