import { describe, expect, it } from "vitest";
import { cx } from "./cx.ts";

describe("cx", () => {
	it("joins multiple strings", () => {
		expect(cx("a", "b", "c")).toBe("a b c");
	});

	it("flattens arrays", () => {
		expect(cx(["a", "b"], "c")).toBe("a b c");
	});

	it("filters out falsy values", () => {
		expect(cx("a", undefined, null, false, "b")).toBe("a b");
	});

	it("handles mixed args", () => {
		expect(cx("a", ["b", "c"], undefined, "d")).toBe("a b c d");
	});

	it("returns empty string when called with no args", () => {
		expect(cx()).toBe("");
	});

	it("returns empty string when all args are falsy", () => {
		expect(cx(undefined, null, false)).toBe("");
	});
});
