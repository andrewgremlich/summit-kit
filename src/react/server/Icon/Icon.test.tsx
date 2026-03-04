import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Icon } from "./index.tsx";

describe("Icon", () => {
	it("renders an SVG for a valid icon name", () => {
		const { container } = render(<Icon name="FiCheck" />);
		expect(container.querySelector("svg")).toBeInTheDocument();
	});

	it("renders fallback text for an unknown icon", () => {
		render(<Icon name="NonExistentIcon" />);
		expect(screen.getByText("Icon not found")).toBeInTheDocument();
	});

	it("applies custom size", () => {
		const { container } = render(<Icon name="FiCheck" size={32} />);
		const svg = container.querySelector("svg");
		expect(svg).toHaveAttribute("width", "32");
		expect(svg).toHaveAttribute("height", "32");
	});

	it("applies custom color", () => {
		const { container } = render(<Icon name="FiCheck" color="red" />);
		const svg = container.querySelector("svg");
		expect(svg).toHaveAttribute("color", "red");
	});
});
