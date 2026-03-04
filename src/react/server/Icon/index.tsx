import type { IconType } from "react-icons";
import * as Icons from "react-icons/fi";
import { cx } from "../../../utils/cx.ts";
import { P } from "../Text/index.tsx";
import type { ClassesProps } from "../Types/general.ts";

type IconProps = {
	name: string;
	size?: number;
	color?: string;
	"aria-label"?: string;
	"aria-hidden"?: boolean | "true" | "false";
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
	// biome-ignore lint/performance/noDynamicNamespaceImportAccess: Dynamic lookup needed for icon-by-name pattern
	const IconComponent = Icons[name as keyof typeof Icons] as
		| IconType
		| undefined;

	if (!IconComponent) {
		return <P>Icon not found</P>;
	}

	return (
		<IconComponent
			className={cx(props.classes)}
			size={size}
			color={color}
			aria-label={props["aria-label"]}
			aria-hidden={props["aria-hidden"] ?? !props["aria-label"]}
		/>
	);
};
