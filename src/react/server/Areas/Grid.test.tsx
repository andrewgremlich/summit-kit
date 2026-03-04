import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Grid, GridHeader, GridRow } from "./Grid.tsx";

describe("Grid", () => {
	it("renders a div by default", () => {
		render(<Grid data-testid="grid">Content</Grid>);
		expect(screen.getByTestId("grid").tagName).toBe("DIV");
	});

	it("renders a custom element via as prop", () => {
		render(
			<Grid as="section" data-testid="grid">
				Content
			</Grid>,
		);
		expect(screen.getByTestId("grid").tagName).toBe("SECTION");
	});

	it("applies grid class by default", () => {
		render(<Grid data-testid="grid">Content</Grid>);
		expect(screen.getByTestId("grid").className).toContain("grid");
	});

	it("applies cols class", () => {
		render(
			<Grid cols={3} data-testid="grid">
				Content
			</Grid>,
		);
		expect(screen.getByTestId("grid").className).toContain("cols3");
	});

	it("applies fullWidth class by default", () => {
		render(<Grid data-testid="grid">Content</Grid>);
		expect(screen.getByTestId("grid").className).toContain("fullWidth");
	});

	it("omits fullWidth class when set to false", () => {
		render(
			<Grid fullWidth={false} data-testid="grid">
				Content
			</Grid>,
		);
		expect(screen.getByTestId("grid").className).not.toContain("fullWidth");
	});

	it("applies gap as inline style", () => {
		render(
			<Grid gap={8} data-testid="grid">
				Content
			</Grid>,
		);
		expect(screen.getByTestId("grid").style.gap).toBe("8px");
	});

	it("applies templateCols as gridTemplateColumns style", () => {
		render(
			<Grid templateCols="1fr 2fr" data-testid="grid">
				Content
			</Grid>,
		);
		expect(screen.getByTestId("grid").style.gridTemplateColumns).toBe(
			"1fr 2fr",
		);
	});
});

describe("GridHeader", () => {
	it("renders header cells for each header string", () => {
		render(<GridHeader headers={["Name", "Age", "Email"]} />);
		expect(screen.getByText("Name")).toBeInTheDocument();
		expect(screen.getByText("Age")).toBeInTheDocument();
		expect(screen.getByText("Email")).toBeInTheDocument();
	});
});

describe("GridRow", () => {
	it("renders children inside a grid", () => {
		render(
			<GridRow>
				<div>Cell 1</div>
				<div>Cell 2</div>
			</GridRow>,
		);
		expect(screen.getByText("Cell 1")).toBeInTheDocument();
		expect(screen.getByText("Cell 2")).toBeInTheDocument();
	});
});
