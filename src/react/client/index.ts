// Client-only entry point for browser-specific hooks/components

export { isHeadless, setHeadless } from "../../utils/headless.ts";
export {
	getTheme,
	setTheme,
	toggleFullScreen,
	toggleTheme,
	useAudio,
	useKeyPress,
} from "./Hooks/index.tsx";
export { PageTurner } from "./PageTurner/index.tsx";
// Add other browser-only exports here as needed
