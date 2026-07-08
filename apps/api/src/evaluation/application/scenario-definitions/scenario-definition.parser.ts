import type { Scenario } from "../../domain/scenarios/scenario.js";
import { scenarioDefinitionSchema } from "./scenario-definition.schema.js";

export type ParseScenarioDefinitionResult =
  | { ok: true; scenario: Scenario }
  | { ok: false; errors: string[] };

export function parseScenarioDefinition(raw: unknown): ParseScenarioDefinitionResult {
  const result = scenarioDefinitionSchema.safeParse(raw);

  if (!result.success) {
    return {
      ok: false,
      errors: result.error.issues.map((issue) => `${issue.path.join(".")}: ${issue.message}`),
    };
  }

  return { ok: true, scenario: result.data };
}
