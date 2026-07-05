# Business Overview

Most agent and RAG demos are a chat box wrapped around some documents. That's fine for a weekend project, but it's not enough for anything meant to run in production — you need to actually know the thing behaves correctly across realistic scenarios, doesn't call tools it shouldn't, resists prompt injection, cites the sources it claims to, and stays inside whatever cost and latency budget it's given.

That's what this project is really about. The "product" is the reliability layer: something that runs golden scenarios against an agent and comes back with pass/fail and a reason why. A scenario spells out what the agent should do, which tools it's allowed to touch, whether a human has to sign off before anything risky happens, whether it needs to cite a source, and what the cost/latency ceiling is.

An example of the kind of scenario I have in mind:

- A customer asks whether order `ord_123` can be refunded.
- The agent looks up the order, then the refund policy.
- It does **not** issue the refund itself — that needs human approval.
- The final answer cites the policy it used.
- The whole run stays under the cost/latency limit.

## The demo agent

Refunds, payment lookups, policy questions — none of that is the actual point. The demo CustomerOps agent just gives the reliability layer something realistic to run scenarios against.

## Right now

The `evaluation` domain exists: plain TypeScript types for a scenario, an individual check, and the pass/fail result computed from those checks. `docs/scenario-spec.md` is the actual spec — the types and tests are derived from it, not the reverse. There's no way yet to load a scenario from a file, run one against a real agent, call a model, retrieve documents, or expose any of this over an API or dashboard.

I'll try to keep this doc roughly in sync as the project grows, mostly so I don't lose the thread if I step away from it for a while.
