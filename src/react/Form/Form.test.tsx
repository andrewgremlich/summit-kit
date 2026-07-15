import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Form } from "./Form.tsx";

function getForm(container: HTMLElement) {
	return container.querySelector("form") as HTMLFormElement;
}

describe("Form", () => {
	it("renders children inside a form element", () => {
		const { container } = render(
			<Form>
				<input type="text" />
			</Form>,
		);
		expect(getForm(container)).toBeInTheDocument();
	});

	it("calls onSubmit and prevents default", () => {
		const handler = vi.fn();
		const { container } = render(
			<Form onSubmit={handler}>
				<button type="submit">Go</button>
			</Form>,
		);
		fireEvent.submit(getForm(container));
		expect(handler).toHaveBeenCalledOnce();
	});

	it("applies method attribute", () => {
		const { container } = render(
			<Form method="post">
				<input />
			</Form>,
		);
		expect(getForm(container)).toHaveAttribute("method", "post");
	});

	it("applies action attribute", () => {
		const { container } = render(
			<Form action="/api/submit">
				<input />
			</Form>,
		);
		expect(getForm(container)).toHaveAttribute("action", "/api/submit");
	});

	it("applies custom classes", () => {
		const { container } = render(
			<Form classes={["my-form"]}>
				<input />
			</Form>,
		);
		expect(getForm(container).className).toContain("my-form");
	});
});
