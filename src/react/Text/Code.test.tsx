import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Code } from "./Code.tsx";

describe("Code", () => {
	it("renders the raw code synchronously before highlighting resolves", () => {
		render(<Code code={"const x = 1;"} language="javascript" />);
		// Shiki highlights asynchronously; the fallback <pre> shows the raw code first.
		expect(screen.getByText("const x = 1;")).toBeInTheDocument();
	});

	it("swaps in Shiki-highlighted markup once highlighting resolves", async () => {
		const { container } = render(
			<Code code={"const x = 1;"} language="javascript" />,
		);
		// Shiki lazy-imports the language grammar on first use, so allow extra time.
		await waitFor(
			() => {
				expect(container.querySelector("pre.shiki")).toBeInTheDocument();
			},
			{ timeout: 5000 },
		);
	});

	it("wraps the code in a section with the code CSS class", () => {
		const { container } = render(<Code code="hello" language="text" />);
		const wrapper = container.firstElementChild;
		expect(wrapper?.className).toContain("code");
	});

	it("contains a pre element", () => {
		const { container } = render(<Code code="fn main()" language="rust" />);
		expect(container.querySelector("pre")).toBeInTheDocument();
	});
});
