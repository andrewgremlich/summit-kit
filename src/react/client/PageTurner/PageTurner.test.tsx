import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { PageTurner } from "./index.tsx";

describe("PageTurner", () => {
	it("renders children", () => {
		render(<PageTurner>Page content</PageTurner>);
		expect(screen.getByText("Page content")).toBeInTheDocument();
	});

	it("renders empty slider when no children", () => {
		const { container } = render(<PageTurner>{undefined}</PageTurner>);
		const slider = container.querySelector("div");
		expect(slider).toBeInTheDocument();
		expect(slider?.textContent).toBe("");
	});

	it("shows next button when onNext is provided", () => {
		render(<PageTurner onNext={() => {}}>Content</PageTurner>);
		expect(screen.getByLabelText("Go to next page")).toBeInTheDocument();
	});

	it("shows prev button when onPrev is provided", () => {
		render(<PageTurner onPrev={() => {}}>Content</PageTurner>);
		expect(screen.getByLabelText("Go to previous page")).toBeInTheDocument();
	});

	it("shows up button when onUp is provided", () => {
		render(<PageTurner onUp={() => {}}>Content</PageTurner>);
		expect(screen.getByLabelText("Go up")).toBeInTheDocument();
	});

	it("shows down button when onDown is provided", () => {
		render(<PageTurner onDown={() => {}}>Content</PageTurner>);
		expect(screen.getByLabelText("Go down")).toBeInTheDocument();
	});

	it("does not render buttons when callbacks are not provided", () => {
		render(<PageTurner>Content</PageTurner>);
		expect(screen.queryByLabelText("Go to next page")).not.toBeInTheDocument();
		expect(
			screen.queryByLabelText("Go to previous page"),
		).not.toBeInTheDocument();
		expect(screen.queryByLabelText("Go up")).not.toBeInTheDocument();
		expect(screen.queryByLabelText("Go down")).not.toBeInTheDocument();
	});

	it("calls onNext when the next button is clicked", () => {
		const handler = vi.fn();
		render(<PageTurner onNext={handler}>Content</PageTurner>);
		fireEvent.click(screen.getByLabelText("Go to next page"));
		expect(handler).toHaveBeenCalledOnce();
	});

	it("calls onPrev when the prev button is clicked", () => {
		const handler = vi.fn();
		render(<PageTurner onPrev={handler}>Content</PageTurner>);
		fireEvent.click(screen.getByLabelText("Go to previous page"));
		expect(handler).toHaveBeenCalledOnce();
	});
});
