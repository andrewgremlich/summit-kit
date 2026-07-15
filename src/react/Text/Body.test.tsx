import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Li, Ol, P, Quote, Span, Ul } from "./Body.tsx";

describe("Quote", () => {
	it("renders a blockquote element", () => {
		render(<Quote>A wise saying</Quote>);
		const el = screen.getByText("A wise saying");
		expect(el.tagName).toBe("BLOCKQUOTE");
	});

	it("applies the blockquote CSS class", () => {
		render(<Quote>Text</Quote>);
		expect(screen.getByText("Text").className).toContain("blockquote");
	});
});

describe("P", () => {
	it("renders a paragraph element", () => {
		render(<P>Paragraph</P>);
		expect(screen.getByText("Paragraph").tagName).toBe("P");
	});

	it("applies the p CSS class", () => {
		render(<P>Text</P>);
		expect(screen.getByText("Text").className).toContain("p");
	});
});

describe("Span", () => {
	it("renders a span element", () => {
		render(<Span>Inline</Span>);
		expect(screen.getByText("Inline").tagName).toBe("SPAN");
	});

	it("forwards custom classes", () => {
		render(<Span classes={["highlight"]}>Text</Span>);
		expect(screen.getByText("Text").className).toContain("highlight");
	});
});

describe("Ol", () => {
	it("renders an ordered list", () => {
		render(
			<Ol>
				<li>Item</li>
			</Ol>,
		);
		expect(screen.getByRole("list").tagName).toBe("OL");
	});
});

describe("Ul", () => {
	it("renders an unordered list", () => {
		render(
			<Ul>
				<li>Item</li>
			</Ul>,
		);
		expect(screen.getByRole("list").tagName).toBe("UL");
	});
});

describe("Li", () => {
	it("renders a list item", () => {
		render(
			<ul>
				<Li>Item</Li>
			</ul>,
		);
		expect(screen.getByText("Item").tagName).toBe("LI");
	});
});
