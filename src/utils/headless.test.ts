import { afterEach, describe, expect, it } from "vitest";
import { isHeadless, setHeadless, themed } from "./headless.ts";

describe("headless", () => {
	afterEach(() => {
		setHeadless(false);
	});

	describe("setHeadless / isHeadless", () => {
		it("defaults to false", () => {
			expect(isHeadless()).toBe(false);
		});

		it("sets headless mode to true", () => {
			setHeadless(true);
			expect(isHeadless()).toBe(true);
		});

		it("sets headless mode back to false", () => {
			setHeadless(true);
			setHeadless(false);
			expect(isHeadless()).toBe(false);
		});
	});

	describe("themed", () => {
		const mockStyles = {
			submit: "_submit_abc123",
			secondary: "_secondary_def456",
		};

		it("returns original class names when not headless", () => {
			const styles = themed(mockStyles);
			expect(styles.submit).toBe("_submit_abc123");
			expect(styles.secondary).toBe("_secondary_def456");
		});

		it("returns empty strings when headless", () => {
			setHeadless(true);
			const styles = themed(mockStyles);
			expect(styles.submit).toBe("");
			expect(styles.secondary).toBe("");
		});

		it("responds dynamically to headless changes", () => {
			const styles = themed(mockStyles);
			expect(styles.submit).toBe("_submit_abc123");

			setHeadless(true);
			expect(styles.submit).toBe("");

			setHeadless(false);
			expect(styles.submit).toBe("_submit_abc123");
		});
	});
});
