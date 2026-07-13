import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";

describe("Hero", () => {
  it("matches snapshot", () => {
    const { container } = render(<Hero />);
    expect(container).toMatchSnapshot();
  });
});

describe("About", () => {
  it("matches snapshot", () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });
});

describe("Projects", () => {
  it("matches snapshot", () => {
    const { container } = render(<Projects />);
    expect(container).toMatchSnapshot();
  });
});
