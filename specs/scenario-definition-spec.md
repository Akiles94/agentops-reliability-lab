# Scenario Definition Spec

This defines the boundary between untrusted external input and the `evaluation` domain's `Scenario` type (see `specs/scenario-spec.md`). Written before the Zod schema and parser that implement it.

## Scenario definition (raw input)

The external shape is identical field-for-field to the domain `Scenario`:

- `id: string`
- `name: string`
- `requiredTools?: string[]`
- `forbiddenTools?: string[]`
- `requiresHumanApproval: boolean`
- `requiresCitation: boolean`
- `maxCostUsd?: number`
- `maxLatencyMs?: number`

Nothing is renamed or reshaped between "definition" and "domain model" — the definition is just the same `Scenario` shape, not yet trusted.

## Parse contract

`parseScenarioDefinition(raw: unknown)` returns one of:

- `{ ok: true, scenario: Scenario }` — every field validated.
- `{ ok: false, errors: string[] }` — one human-readable message per validation failure, formatted as `"<field path>: <problem>"`. No exception is thrown; no `ZodError` (or anything else provider-specific) crosses out of the application layer.

## Worked examples

Valid input:

```text
{
  id: "ord_123-refund-inquiry",
  name: "Refund inquiry requires approval and a citation",
  requiredTools: ["getOrder", "getRefundPolicy"],
  forbiddenTools: ["issueRefund"],
  requiresHumanApproval: true,
  requiresCitation: true,
  maxCostUsd: 0.05,
  maxLatencyMs: 4000
}
```

Result: `{ ok: true, scenario: { ...same fields... } }`.

Invalid input, missing a required field:

```text
{
  id: "ord_123-refund-inquiry",
  name: "Refund inquiry requires approval and a citation",
  requiresCitation: true
}
```

(`requiresHumanApproval` is missing.) Result: `{ ok: false, errors: ["requiresHumanApproval: Invalid input: expected boolean, received undefined"] }`.

Invalid input, wrong type:

```text
{
  id: "ord_123-refund-inquiry",
  name: "Refund inquiry requires approval and a citation",
  requiresHumanApproval: "yes",
  requiresCitation: true
}
```

(`requiresHumanApproval` should be a boolean, not a string.) Result: `{ ok: false, errors: ["requiresHumanApproval: Invalid input: expected boolean, received string"] }`.
