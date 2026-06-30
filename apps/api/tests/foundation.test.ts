import { describe, expect, it } from "vitest";

import { foundationMetadata } from "../src/index.js";

describe("foundation metadata", () => {
  it("identifies the API package and runtime", () => {
    expect(foundationMetadata).toEqual({
      projectName: "LLM Reliability Lab",
      packageName: "@llm-reliability-lab/api",
      version: "0.0.0",
      runtime: "nodejs",
      language: "typescript"
    });
  });
});

