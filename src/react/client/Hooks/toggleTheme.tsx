/**
 * Sets the theme on the document root element.
 * Pass "light", "dark", or "system" (removes data-theme to fall back to OS preference).
 */
export function setTheme(theme: "light" | "dark" | "system"): void {
	if (typeof document === "undefined") return;

	if (theme === "system") {
		document.documentElement.removeAttribute("data-theme");
	} else {
		document.documentElement.setAttribute("data-theme", theme);
	}
}

/**
 * Returns the current active theme: "light", "dark", or "system" (when no override is set).
 */
export function getTheme(): "light" | "dark" | "system" {
	if (typeof document === "undefined") return "system";

	const attr = document.documentElement.getAttribute("data-theme");
	if (attr === "light" || attr === "dark") return attr;
	return "system";
}

/**
 * Toggles between light and dark. If currently "system", reads the OS preference
 * and toggles to the opposite.
 */
export function toggleTheme(): void {
	if (typeof document === "undefined") return;

	const current = getTheme();
	if (current === "dark") {
		setTheme("light");
	} else if (current === "light") {
		setTheme("dark");
	} else {
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;
		setTheme(prefersDark ? "light" : "dark");
	}
}
