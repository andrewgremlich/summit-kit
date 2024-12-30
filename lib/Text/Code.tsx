import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/hljs";

import type { ClassesProps } from "@/Types";

import classes from "./styles.module.css";

type CodeProps = ClassesProps & {
	text: string;
	startingLineNumber?: number;
};

export const Code = (props: CodeProps) => {
	return (
		<SyntaxHighlighter
			className={`${classes.pre}${
				props.classes && props.classes.length > 0
					? ` ${props.classes.join(" ")}`
					: ""
			}`}
			showLineNumbers={true}
			style={nord}
			startingLineNumber={props.startingLineNumber ?? 1}
		>
			{props.text.trim()}
		</SyntaxHighlighter>
	);
};
