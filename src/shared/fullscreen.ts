import screenfull from "screenfull";

/**
 * Toggles fullscreen for the given element (or the document root when null).
 * Framework-neutral: pass a resolved element, not a framework ref.
 */
export const toggleFullScreen = (element: HTMLElement | null): void => {
	const isSupported = () => {
		if (screenfull?.isEnabled) {
			return true;
		}
		console.warn("Fullscreen mode is not supported in this browser.");
		return false;
	};

	if (isSupported()) {
		const targetElement: HTMLElement =
			element instanceof HTMLElement ? element : document.documentElement;

		screenfull.toggle(targetElement);
		screenfull.on("change", () => {
			if (screenfull.isFullscreen) {
				console.log("Entered fullscreen mode");
			} else {
				console.log("Exited fullscreen mode");
			}
		});
	} else {
		console.warn("Fullscreen mode is not supported in this browser.");
	}
};
