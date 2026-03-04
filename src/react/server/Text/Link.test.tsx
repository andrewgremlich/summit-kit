import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Link } from "./Link.tsx";

describe("Link", () => {
	it("renders an anchor element with href", () => {
		render(<Link href="https://example.com">Click me</Link>);
		const el = screen.getByRole("link");
		expect(el).toHaveAttribute("href", "https://example.com");
	});

	it("defaults target to _parent", () => {
		render(<Link href="/">Link</Link>);
		expect(screen.getByRole("link")).toHaveAttribute("target", "_parent");
	});

	it("defaults rel to noopener noreferrer", () => {
		render(<Link href="/">Link</Link>);
		expect(screen.getByRole("link")).toHaveAttribute(
			"rel",
			"noopener noreferrer",
		);
	});

	it("accepts custom target and rel", () => {
		render(
			<Link href="/" target="_blank" rel="noreferrer">
				Link
			</Link>,
		);
		const el = screen.getByRole("link");
		expect(el).toHaveAttribute("target", "_blank");
		expect(el).toHaveAttribute("rel", "noreferrer");
	});

	it("applies the anchor CSS class", () => {
		render(<Link href="/">Link</Link>);
		expect(screen.getByRole("link").className).toContain("a");
	});

	it("forwards custom classes", () => {
		render(
			<Link href="/" classes={["nav-link"]}>
				Link
			</Link>,
		);
		expect(screen.getByRole("link").className).toContain("nav-link");
	});
});
