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
		wrap = "nowrap",
		classes: _classes,
		...rest
	} = props;

	return (
		<div
			className={`${classes.flex}${
				_classes && _classes.length > 0
					? ` ${_classes.join(" ")}`
					: ""
			}`}
			style={{
				justifyContent: justify,
				alignItems: align,
				flexDirection: direction,
				flexWrap: wrap,
				...(props.style ? props.style : {}),
			}}
			{...rest}
		>
			{props.children}
		</div>
	);
};
