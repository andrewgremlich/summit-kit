import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "./Inputs.tsx";

describe("Input", () => {
	it("renders a label and input", () => {
		render(<Input type="text" label="Name" id="name" />);
		expect(screen.getByLabelText("Name")).toBeInTheDocument();
	});

	it("sets the input type", () => {
		render(<Input type="email" label="Email" id="email" />);
		expect(screen.getByLabelText("Email")).toHaveAttribute("type", "email");
	});

	it("sets required attribute", () => {
		render(<Input type="text" label="Name" id="name" required />);
		expect(screen.getByLabelText("Name")).toBeRequired();
	});

	it("sets disabled attribute", () => {
		render(<Input type="text" label="Name" id="name" disabled />);
		expect(screen.getByLabelText("Name")).toBeDisabled();
	});

	it("defaults to not required and not disabled", () => {
		render(<Input type="text" label="Name" id="name" />);
		const input = screen.getByLabelText("Name");
		expect(input).not.toBeRequired();
		expect(input).not.toBeDisabled();
	});
});
