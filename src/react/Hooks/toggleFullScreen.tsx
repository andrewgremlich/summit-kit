import type { Ref } from "react";
import screenfull from "screenfull";

export const toggleFullScreen = (elementRef: Ref<HTMLElement>) => {
	const isSupported = () => {
		if (typeof screenfull !== "undefined" && screenfull.isEnabled) {
			return true;
		}
		console.warn("Fullscreen mode is not supported in this browser.");
		return false;
	};

	const toggleFullScreen = () => {
		if (!elementRef) {
			console.warn("Element reference is not provided or invalid.");
			return;
		}

		if (isSupported()) {
			let targetElement: HTMLElement = document.documentElement;

			if (
				typeof elementRef === "object" &&
				elementRef !== null &&
				"current" in elementRef &&
				elementRef.current instanceof HTMLElement
			) {
				targetElement = elementRef.current;
			}

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

	toggleFullScreen();
};
