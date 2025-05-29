import { useKeyPress } from "../Hooks/useKeyPress.tsx";
import { Icon } from "../Icon/index.tsx";

import classes from "./PageTurner.module.css";

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
			<div className={classes["page-slider"]}>{children || "Slider"}</div>
			{onNext && (
				<button
					className={classes["right-arrow"]}
					onClick={onNext}
					onKeyDown={(e) => e.key === "Enter" && onNext()}
					tabIndex={0}
					type="button"
					aria-label="Go to next page"
				>
					<Icon name="FiArrowRightCircle" size={48} color="white" />
				</button>
			)}
			{onPrev && (
				<button
					className={classes["left-arrow"]}
					onClick={onPrev}
					onKeyDown={(e) => e.key === "Enter" && onPrev()}
					tabIndex={0}
					type="button"
					aria-label="Go to previous page"
				>
					<Icon name="FiArrowLeftCircle" size={48} color="white" />
				</button>
			)}
			{onUp && (
				<button
					className={classes["up-arrow"]}
					onClick={onUp}
					onKeyDown={(e) => e.key === "Enter" && onUp()}
					tabIndex={0}
					type="button"
					aria-label="Go up"
				>
					<Icon name="FiArrowUpCircle" size={48} color="white" />
				</button>
			)}
			{onDown && (
				<button
					className={classes["down-arrow"]}
					onClick={onDown}
					onKeyDown={(e) => e.key === "Enter" && onDown()}
					tabIndex={0}
					type="button"
					aria-label="Go down"
				>
					<Icon name="FiArrowDownCircle" size={48} color="white" />
				</button>
			)}
		</>
	);
};
