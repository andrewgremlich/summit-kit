"use client";

import { useEffect } from "react";
import { runShortcuts } from "../../../shared/keypress.ts";

/**
 * Custom React hook that listens for specified keyboard shortcuts and triggers associated actions.
 *
 * @param shortcuts - An array of shortcut objects, each containing:
 *   - `shortcutKey`: A string representing the key or key combination (e.g., "Control+S", "Shift+Alt+X").
 *   - `action` (optional): A callback function to execute when the shortcut is pressed.
 *
 * @remarks
 * - Supports combination shortcuts using "Shift", "Control", "Meta", and "Alt" modifiers.
 * - The hook attaches a `keydown` event listener to the window and cleans up on unmount.
 *
 * @example
 * ```tsx
 * useKeyPress([
 *   { shortcutKey: "Control+S", action: handleSave },
 *   { shortcutKey: "Shift+Alt+X", action: handleSpecialAction }
 * ]);
 * ```
 */
export const useKeyPress = (
	shortcuts: {
		shortcutKey: string;
		action?: () => void;
	}[],
) => {
	useEffect(() => {
		const keyAbortController = new AbortController();

		window.addEventListener(
			"keydown",
			(event: KeyboardEvent) => {
				runShortcuts(event, shortcuts);
			},
			{
				signal: keyAbortController.signal,
			},
		);

		return () => {
			keyAbortController.abort();
		};
	}, [shortcuts]);
};
