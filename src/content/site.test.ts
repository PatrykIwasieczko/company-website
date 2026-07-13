import { describe, expect, it } from "vitest";

import { siteContent } from "@/content/site";
import { projects } from "@/content/projects";

describe("siteContent", () => {
  it("has required sections for a public company site", () => {
    expect(siteContent.company.name).toBeTruthy();
    expect(siteContent.owner.email).toContain("@");
    expect(projects.length).toBeGreaterThan(0);
    expect(siteContent.navigation.length).toBeGreaterThan(0);
  });
});
