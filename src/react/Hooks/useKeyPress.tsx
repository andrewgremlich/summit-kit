import { useEffect } from "react";

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
 * - Only combination shortcuts (with "+") are currently handled.
 *
 * @example
 * ```tsx
 * useKeyPress([
 *   { shortcutKey: "Control+S", action: handleSave },
 *   { shortcutKey: "Shift+Alt+X", action: handleSpecialAction }
 * ]);<|cursor|>
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
				for (const shortcut of shortcuts) {
					const isComboShortcut = shortcut.shortcutKey.includes("+");
					const keys = shortcut.shortcutKey.split("+");

					if (isComboShortcut) {
						const isShiftKey = keys.includes("Shift");
						const isCtrlKey = keys.includes("Control");
						const isMetaKey = keys.includes("Meta");
						const isAltKey = keys.includes("Alt");
						const isKey = keys.find(
							(key) =>
								key !== "Shift" &&
								key !== "Control" &&
								key !== "Meta" &&
								key !== "Alt",
						);
						const isKeyPressed = event.key === isKey;
						const isShiftPressed = event.shiftKey === isShiftKey;
						const isCtrlPressed = event.ctrlKey === isCtrlKey;
						const isMetaPressed = event.metaKey === isMetaKey;
						const isAltPressed = event.altKey === isAltKey;
						const isKeyComboPressed =
							isKeyPressed &&
							isShiftPressed &&
							isCtrlPressed &&
							isMetaPressed &&
							isAltPressed;
						if (isKeyComboPressed && shortcut.action) {
							shortcut.action();
						}
					} else {
						// Handle single key shortcuts
						if (event.key === shortcut.shortcutKey && shortcut.action) {
							shortcut.action();
						}
					}
				}
			},
			{
				signal: keyAbortController.signal,
			},
		);

		return () => {
			keyAbortController.abort();
		};
	});
};
