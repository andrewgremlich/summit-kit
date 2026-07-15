import { render } from "@testing-library/svelte";
import { describe, expect, it } from "vitest";
import Flex from "./Flex.svelte";

describe("Flex (svelte)", () => {
	it("renders a div by default", () => {
		const { container } = render(Flex, { props: { direction: "row" } });
		expect(container.querySelector("div")).toBeInTheDocument();
	});

	it("honors the `as` prop for the rendered element", () => {
		const { container } = render(Flex, { props: { as: "section" } });
		expect(container.querySelector("section")).toBeInTheDocument();
	});

	it("applies the gap as an inline style", () => {
		const { container } = render(Flex, { props: { gap: 16 } });
		const el = container.firstElementChild as HTMLElement;
		expect(el.style.gap).toBe("16px");
	});

	it("merges a string gap value verbatim", () => {
		const { container } = render(Flex, { props: { gap: "1rem" } });
		const el = container.firstElementChild as HTMLElement;
		expect(el.style.gap).toBe("1rem");
	});
});
