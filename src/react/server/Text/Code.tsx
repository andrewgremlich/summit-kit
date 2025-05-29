import { Highlight, themes } from "prism-react-renderer";
import { v4 } from "uuid";

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
		<div className={classes.code}>
			<Highlight theme={themes.dracula} code={code} language={language}>
				{({ className, style, tokens, getLineProps, getTokenProps }) => (
					<pre
						className={className}
						style={{ ...style, padding: "16px", borderRadius: "8px" }}
					>
						{tokens.map((line, i) => (
							<div key={v4()} {...getLineProps({ line, key: i })}>
								{line.map((token, key) => (
									<span key={v4()} {...getTokenProps({ token, key })} />
								))}
							</div>
						))}
					</pre>
				)}
			</Highlight>
		</div>
	);
};
