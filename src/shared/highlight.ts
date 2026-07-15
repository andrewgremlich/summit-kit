import { createHighlighterCore, type HighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
import bash from "shiki/langs/bash.mjs";
import css from "shiki/langs/css.mjs";
import html from "shiki/langs/html.mjs";
import java from "shiki/langs/java.mjs";
import js from "shiki/langs/javascript.mjs";
import json from "shiki/langs/json.mjs";
import jsx from "shiki/langs/jsx.mjs";
import markdown from "shiki/langs/markdown.mjs";
import python from "shiki/langs/python.mjs";
import rust from "shiki/langs/rust.mjs";
import svelte from "shiki/langs/svelte.mjs";
import tsx from "shiki/langs/tsx.mjs";
import ts from "shiki/langs/typescript.mjs";
import yaml from "shiki/langs/yaml.mjs";
import dracula from "shiki/themes/dracula.mjs";

/**
 * Framework-neutral syntax highlighter backed by Shiki's fine-grained core. Both the React and
 * Svelte `Code` components call this, so highlighting behavior stays identical across frameworks.
 *
 * `shiki` is an optional peer dependency — install it to use the `Code` component. Only the
 * curated language grammars imported above are bundled (rather than shiki's full ~800kB set);
 * unlisted languages render as plain text. To support more, add the import + SUPPORTED entry.
 *
 * Returns a `<pre class="shiki">…</pre>` HTML string.
 */

const DEFAULT_THEME = "dracula";

// biome-ignore lint/suspicious/noExplicitAny: shiki grammar module types vary; loadLanguage accepts them all.
const langs: any[] = [
	bash,
	css,
	html,
	java,
	js,
	json,
	jsx,
	markdown,
	python,
	rust,
	svelte,
	ts,
	tsx,
	yaml,
];

/** Languages (and aliases) that have a bundled grammar. */
const SUPPORTED = new Set<string>([
	"bash",
	"sh",
	"shell",
	"css",
	"html",
	"java",
	"javascript",
	"js",
	"json",
	"jsx",
	"markdown",
	"md",
	"python",
	"py",
	"rust",
	"rs",
	"svelte",
	"typescript",
	"ts",
	"tsx",
	"yaml",
	"yml",
]);

let highlighterPromise: Promise<HighlighterCore> | null = null;

function getHighlighter(): Promise<HighlighterCore> {
	if (!highlighterPromise) {
		highlighterPromise = createHighlighterCore({
			themes: [dracula],
			langs,
			engine: createJavaScriptRegexEngine(),
		});
	}
	return highlighterPromise;
}

export async function highlightCode(
	code: string,
	language: string,
	theme = DEFAULT_THEME,
): Promise<string> {
	const hl = await getHighlighter();
	const lang = SUPPORTED.has(language) ? language : "text";
	return hl.codeToHtml(code, { lang, theme });
}
