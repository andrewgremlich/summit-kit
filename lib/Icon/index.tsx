import { P } from "@/Text";
import type { IconType } from "react-icons";
import * as Icons from "react-icons/fi";

import type { ClassesProps } from "@/Types";

type IconProps = {
	name: string;
	size?: number;
	color?: string;
} & ClassesProps;

export const Icon = ({
	name,
	size = 24,
	color = "currentColor",
	...props
}: IconProps) => {
	const IconComponent: IconType = (Icons as { [key: string]: IconType })[name];

	if (!IconComponent) {
		return <P>Icon not found</P>;
	}

	return (
		<IconComponent
			className={`${
				props.classes && props.classes.length > 0
					? ` ${props.classes.join(" ")}`
					: ""
			}`}
			size={size}
			color={color}
		/>
	);
};
