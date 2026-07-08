import { z } from "zod";

export const scenarioDefinitionSchema = z.object({
  id: z.string(),
  name: z.string(),
  requiredTools: z.array(z.string()).optional(),
  forbiddenTools: z.array(z.string()).optional(),
  requiresHumanApproval: z.boolean(),
  requiresCitation: z.boolean(),
  maxCostUsd: z.number().optional(),
  maxLatencyMs: z.number().optional(),
});

export type ScenarioDefinition = z.infer<typeof scenarioDefinitionSchema>;
