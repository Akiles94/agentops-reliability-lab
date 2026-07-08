import { describe, expect, it } from "vitest";
import { apiFoundation } from "./index.js";

describe("apiFoundation", () => {
  it("exposes the expected package metadata", () => {
    expect(apiFoundation).toEqual({
      name: "agentops-reliability-lab-api",
      version: "0.1.0",
    });
  });
});
