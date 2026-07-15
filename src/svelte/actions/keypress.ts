import type { Action } from "svelte/action";
import { runShortcuts, type Shortcut } from "../../shared/keypress.js";

/**
 * Svelte action that listens for keyboard shortcuts on `window` while the node is mounted.
 *
 * ```svelte
 * <div use:keypress={[{ shortcutKey: "Control+S", action: save }]}></div>
 * ```
 *
 * Mirrors the React `useKeyPress` hook; both share the combo-matching logic in
 * `shared/keypress`. The shortcut list can be updated reactively.
 */
export const keypress: Action<HTMLElement, Shortcut[]> = (_node, shortcuts) => {
	let current = shortcuts ?? [];

	const handler = (event: KeyboardEvent) => runShortcuts(event, current);
	window.addEventListener("keydown", handler);

	return {
		update(next: Shortcut[]) {
			current = next ?? [];
		},
		destroy() {
			window.removeEventListener("keydown", handler);
		},
	};
};
