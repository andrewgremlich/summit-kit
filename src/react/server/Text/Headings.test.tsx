import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { H1, H2, H3, H4, H5, H6 } from "./Headings.tsx";

const headings = [
	{ Component: H1, tag: "H1", cssClass: "h1" },
	{ Component: H2, tag: "H2", cssClass: "h2" },
	{ Component: H3, tag: "H3", cssClass: "h3" },
	{ Component: H4, tag: "H4", cssClass: "h4" },
	{ Component: H5, tag: "H5", cssClass: "h5" },
	{ Component: H6, tag: "H6", cssClass: "h6" },
] as const;

describe("Headings", () => {
	for (const { Component, tag, cssClass } of headings) {
		it(`${tag} renders the correct element`, () => {
			render(<Component>Text</Component>);
			const el = screen.getByText("Text");
			expect(el.tagName).toBe(tag);
		});

		it(`${tag} applies the ${cssClass} CSS module class`, () => {
			render(<Component>Text</Component>);
			const el = screen.getByText("Text");
			expect(el.className).toContain(cssClass);
		});
	}

	it("forwards custom classes via the classes prop", () => {
		render(<H1 classes={["custom-class"]}>Title</H1>);
		expect(screen.getByText("Title").className).toContain("custom-class");
	});
});
