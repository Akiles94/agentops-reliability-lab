import { describe, expect, it } from "vitest";
import { parseScenarioDefinition } from "./scenario-definition.parser.js";

describe("parseScenarioDefinition", () => {
  it("parses the ord_123 refund-inquiry scenario from the spec", () => {
    const raw = {
      id: "ord_123-refund-inquiry",
      name: "Refund inquiry requires approval and a citation",
      requiredTools: ["getOrder", "getRefundPolicy"],
      forbiddenTools: ["issueRefund"],
      requiresHumanApproval: true,
      requiresCitation: true,
      maxCostUsd: 0.05,
      maxLatencyMs: 4000,
    };

    expect(parseScenarioDefinition(raw)).toEqual({ ok: true, scenario: raw });
  });

  it("reports a missing required field", () => {
    const raw = {
      id: "ord_123-refund-inquiry",
      name: "Refund inquiry requires approval and a citation",
      requiresCitation: true,
    };

    expect(parseScenarioDefinition(raw)).toEqual({
      ok: false,
      errors: ["requiresHumanApproval: Invalid input: expected boolean, received undefined"],
    });
  });

  it("reports a field with the wrong type", () => {
    const raw = {
      id: "ord_123-refund-inquiry",
      name: "Refund inquiry requires approval and a citation",
      requiresHumanApproval: "yes",
      requiresCitation: true,
    };

    expect(parseScenarioDefinition(raw)).toEqual({
      ok: false,
      errors: ["requiresHumanApproval: Invalid input: expected boolean, received string"],
    });
  });
});
