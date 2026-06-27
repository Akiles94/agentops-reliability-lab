# LLM Reliability Lab

LLM Reliability Lab is a production-style portfolio project for evaluating and observing AI agent and RAG workflows before they reach production.

The main product is not a chatbot. The main product is the reliability platform around an AI system: scenario evaluation, trace logging, tool-call safety, guardrails, cost tracking, latency tracking, and pass/fail readiness gates.

The future support/refund/payment assistant will be a demo system under test. It exists to prove the reliability platform works against realistic CustomerOps workflows.

## Milestone 0 Scope

Milestone 0 creates only the repository foundation:

- Monorepo layout for a future Python API and React dashboard.
- Business and technical documentation.
- Minimal Python package configuration.
- One foundation test that proves the API package imports.

Milestone 0 intentionally does not include:

- RAG implementation.
- Agent workflows.
- LLM provider calls.
- LangGraph or orchestration logic.
- FastAPI routes.
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
      pyproject.toml
      src/
        llm_reliability_lab_api/
          __init__.py
      tests/
        test_project_foundation.py
    web/
      README.md
  LICENSE
```

## Future Architecture Direction

The future API will use Clean Architecture principles:

- Domain and application layers stay independent from providers and frameworks.
- Infrastructure adapters handle external details such as model providers, vector stores, persistence, and observability exporters.
- The API layer exposes use cases through HTTP once FastAPI is added.

Planned ports include:

- `LLM`
- `Retriever`
- `ToolExecutor`
- `TraceLogger`
- `EvaluationRunner`

Provider-specific code must stay outside the domain and application layers.

## Python Project Config

`apps/api/pyproject.toml` is Python's modern project configuration file. It is similar in purpose to a small `package.json`: it names the project, defines the Python version, and stores test/tool configuration.

For Milestone 0, it does not add FastAPI, OpenAI, LangGraph, database clients, or other runtime dependencies.

## Basic Commands

After Python 3.11 or newer is available, run from `apps/api`:

```powershell
python -m pip install -e ".[dev]"
python -m pytest
```

The first command installs the API package in editable mode with development dependencies. The second command runs the foundation test for the Python package.
