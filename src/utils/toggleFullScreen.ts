import type { Ref } from "react";
import { toggleFullScreen as toggleFullScreenEl } from "../shared/fullscreen.ts";

export const toggleFullScreen = (elementRef: Ref<HTMLElement>): void => {
	if (!elementRef) {
		console.warn("Element reference is not provided or invalid.");
		return;
	}

	let element: HTMLElement | null = null;
	if (
		typeof elementRef === "object" &&
		elementRef !== null &&
		"current" in elementRef &&
		elementRef.current instanceof HTMLElement
	) {
		element = elementRef.current;
	}

	toggleFullScreenEl(element);
};
