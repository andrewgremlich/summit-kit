import { Highlight, themes } from "prism-react-renderer";

import classes from "./styles.module.css";

interface CodeProps {
	code: string;
	language: string;
}

/**
 * Renders a syntax-highlighted code block using the specified language and theme.
 *
 * @param code - The code string to display and highlight.
 * @param language - The programming language to use for syntax highlighting.
 * @returns A React component that displays the highlighted code in a styled block.
 */
export const Code = ({ code, language }: CodeProps) => {
	return (
		<section className={classes.code} aria-label={`${language} code block`}>
			<Highlight theme={themes.dracula} code={code} language={language}>
				{({ className, style, tokens, getLineProps, getTokenProps }) => (
					<pre className={`${className} ${classes.pre}`} style={style}>
						{tokens.map((line, i) => (
							<div key={`line-${i}`} {...getLineProps({ line, key: i })}>
								{line.map((token, j) => (
									<span
										key={`token-${i}-${j}`}
										{...getTokenProps({ token, key: j })}
									/>
								))}
							</div>
						))}
					</pre>
				)}
			</Highlight>
		</section>
	);
};
