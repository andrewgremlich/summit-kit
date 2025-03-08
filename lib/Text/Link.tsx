import type { StandardProps } from "@/Types/general";

import classes from "./styles.module.css";

type LinkProps = {
	href: string;
	target?: string;
	rel?: string;
};

export const Link = (props: StandardProps & LinkProps) => {
	const { rel = "noopener noreferrer", target = "_parent" } = props;

	return (
		<a
			className={`${classes.a}${
				props.classes && props.classes.length > 0
					? ` ${props.classes.join(" ")}`
					: ""
			}`}
			href={props.href}
			target={target}
			rel={rel}
		>
			{props.children}
		</a>
	);
};
