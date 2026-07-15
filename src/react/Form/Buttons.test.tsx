import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { PrimaryButton, SecondaryButton } from "./Buttons.tsx";

describe("PrimaryButton", () => {
	it("renders children", () => {
		render(<PrimaryButton>Submit</PrimaryButton>);
		expect(screen.getByText("Submit")).toBeInTheDocument();
	});

	it("has type=submit when no onClick", () => {
		render(<PrimaryButton>Submit</PrimaryButton>);
		expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
	});

	it("has type=button when onClick is provided", () => {
		render(<PrimaryButton onClick={() => {}}>Click</PrimaryButton>);
		expect(screen.getByRole("button")).toHaveAttribute("type", "button");
	});

	it("calls onClick when clicked", () => {
		const handler = vi.fn();
		render(<PrimaryButton onClick={handler}>Click</PrimaryButton>);
		fireEvent.click(screen.getByRole("button"));
		expect(handler).toHaveBeenCalledOnce();
	});

	it("can be disabled", () => {
		render(<PrimaryButton disabled>Submit</PrimaryButton>);
		expect(screen.getByRole("button")).toBeDisabled();
	});
});

describe("SecondaryButton", () => {
	it("renders children", () => {
		render(<SecondaryButton>Cancel</SecondaryButton>);
		expect(screen.getByText("Cancel")).toBeInTheDocument();
	});

	it("has type=button", () => {
		render(<SecondaryButton>Cancel</SecondaryButton>);
		expect(screen.getByRole("button")).toHaveAttribute("type", "button");
	});

	it("calls onClick when clicked", () => {
		const handler = vi.fn();
		render(<SecondaryButton onClick={handler}>Click</SecondaryButton>);
		fireEvent.click(screen.getByRole("button"));
		expect(handler).toHaveBeenCalledOnce();
	});

	it("can be disabled", () => {
		render(<SecondaryButton disabled>Cancel</SecondaryButton>);
		expect(screen.getByRole("button")).toBeDisabled();
	});
});
