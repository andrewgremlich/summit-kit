import type { StandardProps } from "@/Types/general";

import classes from "./styles.module.css";

export const Reading = (props: StandardProps) => {
	return <article className={classes.reading}>{props.children}</article>;
};

export const Section = (props: StandardProps) => {
	return <section className={classes.section}>{props.children}</section>;
};

type FlexProps = {
	direction?: "row" | "column";
	justify?:
		| "center"
		| "space-between"
		| "space-around"
		| "flex-start"
		| "flex-end";
	align?: "center" | "flex-start" | "flex-end" | "baseline" | "stretch";
	wrap?: "wrap" | "nowrap";
};

export const Flex = (props: StandardProps & FlexProps) => {
	const {
		direction = "row",
		justify = "flex-start",
		align = "flex-start",
	} = props;

	return (
		<div
			className={classes.flex}
			style={{
				justifyContent: justify,
				alignItems: align,
				flexDirection: direction,
				...(props.style ? props.style : {}),
			}}
		>
			{props.children}
		</div>
	);
};
