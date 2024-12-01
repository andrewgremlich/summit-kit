import { TextProps } from "@/Types/general";

import classes from "./styles.module.css";

export const P = (props: TextProps) => {
	return (
		<p
			className={`${classes.p}${
				props.additionalClasses && props.additionalClasses.length > 0
					? props.additionalClasses?.join(" ")
					: ""
			}`}
		>
			{props.children}
		</p>
	);
};
