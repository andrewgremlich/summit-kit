import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Reading, Section } from "./index.tsx";

describe("Reading", () => {
	it("renders children inside an article element", () => {
		render(<Reading>Hello</Reading>);
		const el = screen.getByText("Hello");
		expect(el.tagName).toBe("ARTICLE");
	});

	it("applies the reading CSS module class", () => {
		render(<Reading>Content</Reading>);
		const el = screen.getByText("Content");
		expect(el.className).toContain("reading");
	});
});

describe("Section", () => {
	it("renders children inside a section element", () => {
		render(<Section>World</Section>);
		const el = screen.getByText("World");
		expect(el.tagName).toBe("SECTION");
	});

	it("applies the section CSS module class", () => {
		render(<Section>Content</Section>);
		const el = screen.getByText("Content");
		expect(el.className).toContain("section");
	});
});
