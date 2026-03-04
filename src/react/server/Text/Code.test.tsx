import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Code } from "./Code.tsx";

describe("Code", () => {
	it("renders a pre element with the code content", () => {
		render(<Code code={"const x = 1;"} language="javascript" />);
		expect(screen.getByText("const")).toBeInTheDocument();
	});

	it("wraps the code in a div with the code CSS class", () => {
		const { container } = render(<Code code="hello" language="text" />);
		const wrapper = container.firstElementChild;
		expect(wrapper?.className).toContain("code");
	});

	it("contains a pre element", () => {
		const { container } = render(<Code code="fn main()" language="rust" />);
		expect(container.querySelector("pre")).toBeInTheDocument();
	});
});
