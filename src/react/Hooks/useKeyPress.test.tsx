import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useKeyPress } from "./useKeyPress.tsx";

function fireKeyDown(opts: KeyboardEventInit) {
	window.dispatchEvent(new KeyboardEvent("keydown", opts));
}

describe("useKeyPress", () => {
	it("fires action on single key press", () => {
		const action = vi.fn();
		renderHook(() => useKeyPress([{ shortcutKey: "Escape", action }]));
		fireKeyDown({ key: "Escape" });
		expect(action).toHaveBeenCalledOnce();
	});

	it("fires action on combo key press", () => {
		const action = vi.fn();
		renderHook(() => useKeyPress([{ shortcutKey: "Control+s", action }]));
		fireKeyDown({ key: "s", ctrlKey: true });
		expect(action).toHaveBeenCalledOnce();
	});

	it("does not fire when modifiers do not match", () => {
		const action = vi.fn();
		renderHook(() => useKeyPress([{ shortcutKey: "Control+s", action }]));
		fireKeyDown({ key: "s", ctrlKey: false });
		expect(action).not.toHaveBeenCalled();
	});

	it("handles multi-modifier combos", () => {
		const action = vi.fn();
		renderHook(() =>
			useKeyPress([{ shortcutKey: "Control+Shift+ArrowRight", action }]),
		);
		fireKeyDown({ key: "ArrowRight", ctrlKey: true, shiftKey: true });
		expect(action).toHaveBeenCalledOnce();
	});

	it("cleans up event listener on unmount", () => {
		const action = vi.fn();
		const { unmount } = renderHook(() =>
			useKeyPress([{ shortcutKey: "Escape", action }]),
		);
		unmount();
		fireKeyDown({ key: "Escape" });
		expect(action).not.toHaveBeenCalled();
	});
});
