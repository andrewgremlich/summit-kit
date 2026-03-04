import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Select } from "./Select.tsx";

describe("Select", () => {
	it("renders options from the options prop", () => {
		render(
			<Select
				label="Color"
				options={[
					{ value: "red", label: "Red" },
					{ value: "blue", label: "Blue" },
				]}
			/>,
		);
		expect(screen.getByRole("combobox")).toBeInTheDocument();
		expect(screen.getByText("Red")).toBeInTheDocument();
		expect(screen.getByText("Blue")).toBeInTheDocument();
	});

	it("renders a label", () => {
		render(<Select label="Pick one" options={[]} />);
		expect(screen.getByText("Pick one")).toBeInTheDocument();
	});

	it("renders children as options", () => {
		render(
			<Select label="Size">
				<option value="s">Small</option>
				<option value="l">Large</option>
			</Select>,
		);
		expect(screen.getByText("Small")).toBeInTheDocument();
		expect(screen.getByText("Large")).toBeInTheDocument();
	});

	it("forwards ref to select element", () => {
		const ref = createRef<HTMLSelectElement>();
		render(
			<Select ref={ref} label="Test" options={[{ value: "a", label: "A" }]} />,
		);
		expect(ref.current).toBeInstanceOf(HTMLSelectElement);
	});

	it("sets aria-invalid when invalid prop is true", () => {
		render(<Select label="Test" invalid options={[]} />);
		expect(screen.getByRole("combobox")).toHaveAttribute(
			"aria-invalid",
			"true",
		);
	});

	it("disables individual options", () => {
		render(
			<Select
				label="Test"
				options={[
					{ value: "a", label: "A", disabled: true },
					{ value: "b", label: "B" },
				]}
			/>,
		);
		expect(screen.getByText("A").closest("option")).toBeDisabled();
		expect(screen.getByText("B").closest("option")).not.toBeDisabled();
	});
});
