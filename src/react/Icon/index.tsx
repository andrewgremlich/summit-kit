import type { IconType } from "react-icons";
import * as Icons from "react-icons/fi";

import { P } from "../Text/index.tsx";
import type { ClassesProps } from "../Types/general.ts";

type IconProps = {
	name: string;
	size?: number;
	color?: string;
} & ClassesProps;

/**
 * Renders an icon component based on the provided `name` prop.
 *
 * @param name - The name of the icon to render. Must correspond to a key in the `Icons` object.
 * @param size - The size of the icon in pixels. Defaults to 24.
 * @param color - The color of the icon. Defaults to "currentColor".
 * @param props - Additional props, including optional `classes` for custom CSS classes.
 * @returns The corresponding icon component if found, otherwise a fallback message.
 */
export const Icon = ({
	name,
	size = 24,
	color = "currentColor",
	...props
}: IconProps) => {
	const IconComponent = Icons[name as keyof typeof Icons] as
		| IconType
		| undefined;

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
