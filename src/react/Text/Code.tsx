import { useEffect, useState } from "react";
import { highlightCode } from "../../shared/highlight.ts";
import rawClasses from "../../shared/styles/components/text.module.css";
import { themed } from "../../utils/headless.ts";

const classes = themed(rawClasses);

interface CodeProps {
	code: string;
	language: string;
}

/**
 * Renders a syntax-highlighted code block using Shiki.
 *
 * @param code - The code string to display and highlight.
 * @param language - The programming language to use for syntax highlighting.
 * @returns A React component that displays the highlighted code in a styled block.
 */
export const Code = ({ code, language }: CodeProps) => {
	const [html, setHtml] = useState<string>("");

	useEffect(() => {
		let active = true;
		highlightCode(code, language)
			.then((result) => {
				if (active) setHtml(result);
			})
			.catch(() => {
				if (active) setHtml("");
			});
		return () => {
			active = false;
		};
	}, [code, language]);

	return (
		<section className={classes.code} aria-label={`${language} code block`}>
			{html ? (
				<div
					className={classes.pre}
					// biome-ignore lint/security/noDangerouslySetInnerHtml: Shiki output is trusted, generated from the provided code string
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			) : (
				<pre className={classes.pre}>{code}</pre>
			)}
		</section>
	);
};
