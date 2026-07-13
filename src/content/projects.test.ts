import { describe, expect, it } from "vitest";

import { getAllProjectSlugs, getProjectBySlug, projects } from "@/content/projects";

describe("projects", () => {
  it("lists exactly two projects", () => {
    expect(projects).toHaveLength(2);
    expect(projects.map((p) => p.slug)).toEqual(["flowbit", "no-wez-zgadnij"]);
  });

  it("resolves projects by slug", () => {
    expect(getProjectBySlug("flowbit")?.name).toBe("Flowbit");
    expect(getProjectBySlug("no-wez-zgadnij")?.name).toBe("No weź zgadnij");
    expect(getProjectBySlug("missing")).toBeUndefined();
  });

  it("generates static params for all slugs", () => {
    expect(getAllProjectSlugs()).toHaveLength(2);
  });
});
