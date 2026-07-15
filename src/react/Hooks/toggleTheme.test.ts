import { afterEach, describe, expect, it, vi } from "vitest";
import { getTheme, setTheme, toggleTheme } from "./toggleTheme.tsx";

describe("toggleTheme", () => {
	afterEach(() => {
		document.documentElement.removeAttribute("data-theme");
	});

	describe("setTheme", () => {
		it("sets data-theme to dark", () => {
			setTheme("dark");
			expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
		});

		it("sets data-theme to light", () => {
			setTheme("light");
			expect(document.documentElement.getAttribute("data-theme")).toBe("light");
		});

		it("removes data-theme for system", () => {
			setTheme("dark");
			setTheme("system");
			expect(document.documentElement.getAttribute("data-theme")).toBeNull();
		});
	});

	describe("getTheme", () => {
		it("returns system when no data-theme is set", () => {
			expect(getTheme()).toBe("system");
		});

		it("returns dark when data-theme is dark", () => {
			setTheme("dark");
			expect(getTheme()).toBe("dark");
		});

		it("returns light when data-theme is light", () => {
			setTheme("light");
			expect(getTheme()).toBe("light");
		});
	});

	describe("toggleTheme", () => {
		it("toggles from dark to light", () => {
			setTheme("dark");
			toggleTheme();
			expect(getTheme()).toBe("light");
		});

		it("toggles from light to dark", () => {
			setTheme("light");
			toggleTheme();
			expect(getTheme()).toBe("dark");
		});

		it("toggles from system to opposite of OS preference", () => {
			const original = window.matchMedia;
			window.matchMedia = vi.fn().mockReturnValue({
				matches: true,
			} as MediaQueryList);

			toggleTheme();
			expect(getTheme()).toBe("light");

			window.matchMedia = original;
		});
	});
});
