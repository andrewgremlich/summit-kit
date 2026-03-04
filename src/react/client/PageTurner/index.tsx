import { themed } from "../../../utils/headless.ts";
import { Icon } from "../../server/Icon/index.tsx";
import { useKeyPress } from "../Hooks/useKeyPress.tsx";
import rawClasses from "./PageTurner.module.css";

const classes = themed(rawClasses);

type PageTurnerProps = {
	children: React.ReactNode;
	onNext?: () => void;
	onPrev?: () => void;
	onUp?: () => void;
	onDown?: () => void;
};

/**
 * A React component that provides navigation controls for paging or sliding content.
 *
 * The `PageTurner` component renders navigation buttons (next, previous, up, down) based on the provided callback props.
 * It also enables keyboard shortcuts for navigation using the `Control+Shift+Arrow` key combinations.
 *
 * @param {React.ReactNode} children - The content to be displayed inside the page slider.
 * @param {() => void} [onNext] - Callback function to be called when navigating to the next page.
 * @param {() => void} [onPrev] - Callback function to be called when navigating to the previous page.
 * @param {() => void} [onUp] - Callback function to be called when navigating up.
 * @param {() => void} [onDown] - Callback function to be called when navigating down.
 *
 * @returns {JSX.Element} The rendered PageTurner component with navigation controls.
 */
export const PageTurner = ({
	children,
	onNext,
	onPrev,
	onUp,
	onDown,
}: PageTurnerProps) => {
	useKeyPress([
		{
			shortcutKey: "Control+Shift+ArrowRight",
			action: onNext,
		},
		{
			shortcutKey: "Control+Shift+ArrowLeft",
			action: onPrev,
		},
		{
			shortcutKey: "Control+Shift+ArrowUp",
			action: onUp,
		},
		{
			shortcutKey: "Control+Shift+ArrowDown",
			action: onDown,
		},
	]);

	return (
		<>
			<div className={classes["page-slider"]}>{children}</div>
			{onNext && (
				<button
					className={classes["right-arrow"]}
					onClick={onNext}
					type="button"
					aria-label="Go to next page"
					aria-keyshortcuts="Control+Shift+ArrowRight"
				>
					<Icon
						name="FiArrowRightCircle"
						size={48}
						color="white"
						aria-hidden="true"
					/>
				</button>
			)}
			{onPrev && (
				<button
					className={classes["left-arrow"]}
					onClick={onPrev}
					type="button"
					aria-label="Go to previous page"
					aria-keyshortcuts="Control+Shift+ArrowLeft"
				>
					<Icon
						name="FiArrowLeftCircle"
						size={48}
						color="white"
						aria-hidden="true"
					/>
				</button>
			)}
			{onUp && (
				<button
					className={classes["up-arrow"]}
					onClick={onUp}
					type="button"
					aria-label="Go up"
					aria-keyshortcuts="Control+Shift+ArrowUp"
				>
					<Icon
						name="FiArrowUpCircle"
						size={48}
						color="white"
						aria-hidden="true"
					/>
				</button>
			)}
			{onDown && (
				<button
					className={classes["down-arrow"]}
					onClick={onDown}
					type="button"
					aria-label="Go down"
					aria-keyshortcuts="Control+Shift+ArrowDown"
				>
					<Icon
						name="FiArrowDownCircle"
						size={48}
						color="white"
						aria-hidden="true"
					/>
				</button>
			)}
		</>
	);
};
