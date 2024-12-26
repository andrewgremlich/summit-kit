import { P } from "@/Text";
import type { IconType } from "react-icons";
import * as Icons from "react-icons/fi";

type IconProps = {
	name: string;
	size?: number;
	color?: string;
};

export const Icon = ({
	name,
	size = 24,
	color = "currentColor",
}: IconProps) => {
	const IconComponent: IconType = (Icons as { [key: string]: IconType })[name];

	if (!IconComponent) {
		return <P>Icon not found</P>;
	}

	return <IconComponent size={size} color={color} />;
};
