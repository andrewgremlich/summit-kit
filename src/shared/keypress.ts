export type Shortcut = {
	shortcutKey: string;
	action?: () => void;
};

/**
 * Returns true when the keyboard event matches the given shortcut string.
 *
 * Combination shortcuts use "+" (e.g. "Control+S", "Shift+Alt+X") and require
 * every referenced modifier to be pressed and every unreferenced modifier to be
 * released. Single-key shortcuts match on `event.key` directly.
 */
export function matchesShortcut(
	event: KeyboardEvent,
	shortcutKey: string,
): boolean {
	const isComboShortcut = shortcutKey.includes("+");
	const keys = shortcutKey.split("+");

	if (isComboShortcut) {
		const isShiftKey = keys.includes("Shift");
		const isCtrlKey = keys.includes("Control");
		const isMetaKey = keys.includes("Meta");
		const isAltKey = keys.includes("Alt");
		const isKey = keys.find(
			(key) =>
				key !== "Shift" && key !== "Control" && key !== "Meta" && key !== "Alt",
		);
		return (
			event.key === isKey &&
			event.shiftKey === isShiftKey &&
			event.ctrlKey === isCtrlKey &&
			event.metaKey === isMetaKey &&
			event.altKey === isAltKey
		);
	}

	return event.key === shortcutKey;
}

/**
 * Runs the `action` of every shortcut whose key combination matches the event.
 */
export function runShortcuts(
	event: KeyboardEvent,
	shortcuts: Shortcut[],
): void {
	for (const shortcut of shortcuts) {
		if (shortcut.action && matchesShortcut(event, shortcut.shortcutKey)) {
			shortcut.action();
		}
	}
}
