import type { CheckResult } from "./check-result.js";

export const EvaluationStatus = {
  Pass: "pass",
  Fail: "fail",
} as const;

export type EvaluationStatus = (typeof EvaluationStatus)[keyof typeof EvaluationStatus];

export interface EvaluationResult {
  scenarioId: string;
  checks: CheckResult[];
  status: EvaluationStatus;
}

function deriveStatus(checks: CheckResult[]): EvaluationStatus {
  return checks.every((check) => check.passed) ? EvaluationStatus.Pass : EvaluationStatus.Fail;
}

export function evaluateScenario(scenarioId: string, checks: CheckResult[]): EvaluationResult {
  return {
    scenarioId,
    checks,
    status: deriveStatus(checks),
  };
}
