import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Figure, Image } from "./index.tsx";

describe("Image", () => {
	it("renders an img with src and alt", () => {
		render(<Image src="/photo.jpg" alt="A photo" width={300} />);
		const img = screen.getByRole("img");
		expect(img).toHaveAttribute("src", "/photo.jpg");
		expect(img).toHaveAttribute("alt", "A photo");
	});

	it("applies width attribute", () => {
		render(<Image src="/photo.jpg" alt="Photo" width={500} />);
		expect(screen.getByRole("img")).toHaveAttribute("width", "500");
	});

	it("spreads additional HTML attributes", () => {
		render(<Image src="/photo.jpg" alt="Photo" width={300} loading="lazy" />);
		expect(screen.getByRole("img")).toHaveAttribute("loading", "lazy");
	});
});

describe("Figure", () => {
	it("renders an img inside a figure element", () => {
		const { container } = render(
			<Figure src="/photo.jpg" alt="Caption text" width={300} />,
		);
		expect(container.querySelector("figure")).toBeInTheDocument();
		expect(screen.getByRole("img")).toBeInTheDocument();
	});

	it("renders a figcaption with the alt text", () => {
		render(<Figure src="/photo.jpg" alt="My caption" width={300} />);
		expect(screen.getByText("My caption")).toBeInTheDocument();
	});
});
