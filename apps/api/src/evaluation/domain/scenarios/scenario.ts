export interface Scenario {
  id: string;
  name: string;
  requiredTools?: string[];
  forbiddenTools?: string[];
  requiresHumanApproval: boolean;
  requiresCitation: boolean;
  maxCostUsd?: number;
  maxLatencyMs?: number;
}
