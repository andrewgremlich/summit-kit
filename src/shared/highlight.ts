import { codeToHtml } from "shiki";

/**
 * Framework-neutral syntax highlighter backed by Shiki. Both the React and Svelte `Code`
 * components call this, so highlighting behavior stays identical across frameworks.
 *
 * Returns a `<pre class="shiki">…</pre>` HTML string. Async because Shiki lazy-loads the
 * language and theme grammars on first use.
 */
export function highlightCode(
	code: string,
	language: string,
	theme = "dracula",
): Promise<string> {
	return codeToHtml(code, { lang: language, theme });
}
