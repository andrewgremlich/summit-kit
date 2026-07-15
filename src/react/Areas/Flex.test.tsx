import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Flex } from "./Flex.tsx";

describe("Flex", () => {
	it("renders a div by default", () => {
		render(<Flex data-testid="flex">Content</Flex>);
		const el = screen.getByTestId("flex");
		expect(el.tagName).toBe("DIV");
	});

	it("renders a custom element via as prop", () => {
		render(
			<Flex as="nav" data-testid="flex">
				Nav
			</Flex>,
		);
		expect(screen.getByTestId("flex").tagName).toBe("NAV");
	});

	it("applies flex class by default", () => {
		render(<Flex data-testid="flex">Content</Flex>);
		expect(screen.getByTestId("flex").className).toContain("flex");
	});

	it("applies inlineFlex class when inline is true", () => {
		render(
			<Flex inline data-testid="flex">
				Content
			</Flex>,
		);
		expect(screen.getByTestId("flex").className).toContain("inlineFlex");
	});

	it("applies direction class", () => {
		render(
			<Flex direction="col" data-testid="flex">
				Content
			</Flex>,
		);
		expect(screen.getByTestId("flex").className).toContain("flexCol");
	});

	it("applies justify class", () => {
		render(
			<Flex justify="center" data-testid="flex">
				Content
			</Flex>,
		);
		expect(screen.getByTestId("flex").className).toContain("justifyCenter");
	});

	it("applies items class", () => {
		render(
			<Flex items="center" data-testid="flex">
				Content
			</Flex>,
		);
		expect(screen.getByTestId("flex").className).toContain("itemsCenter");
	});

	it("applies wrap class", () => {
		render(
			<Flex wrap="wrap" data-testid="flex">
				Content
			</Flex>,
		);
		expect(screen.getByTestId("flex").className).toContain("flexWrap");
	});

	it("applies numeric gap as px inline style", () => {
		render(
			<Flex gap={16} data-testid="flex">
				Content
			</Flex>,
		);
		expect(screen.getByTestId("flex").style.gap).toBe("16px");
	});

	it("applies string gap as-is", () => {
		render(
			<Flex gap="2rem" data-testid="flex">
				Content
			</Flex>,
		);
		expect(screen.getByTestId("flex").style.gap).toBe("2rem");
	});

	it("merges custom className", () => {
		render(
			<Flex className="custom" data-testid="flex">
				Content
			</Flex>,
		);
		expect(screen.getByTestId("flex").className).toContain("custom");
	});
});
