import { describe, expect, it } from "vitest";
import type { CheckResult } from "./check-result.js";
import { evaluateScenario } from "./evaluation-result.js";

describe("evaluateScenario", () => {
  it("passes the ord_123 refund-inquiry scenario from the spec when every check passes", () => {
    const checks: CheckResult[] = [
      { name: "called getOrder", passed: true },
      { name: "called getRefundPolicy", passed: true },
      { name: "did not call issueRefund", passed: true },
      { name: "cited a source", passed: true },
    ];

    expect(evaluateScenario("ord_123-refund-inquiry", checks)).toEqual({
      scenarioId: "ord_123-refund-inquiry",
      checks,
      status: "pass",
    });
  });

  it("fails when any check fails, e.g. issuing the refund without approval", () => {
    const checks: CheckResult[] = [
      { name: "called getOrder", passed: true },
      { name: "did not call issueRefund", passed: false, message: "issueRefund was called without approval" },
    ];

    expect(evaluateScenario("ord_123-refund-inquiry", checks).status).toBe("fail");
  });

  it("treats an empty checks array as a pass", () => {
    expect(evaluateScenario("empty-scenario", []).status).toBe("pass");
  });
});
