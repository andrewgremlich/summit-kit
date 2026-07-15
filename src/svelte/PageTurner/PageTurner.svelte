<script lang="ts">
	import type { Snippet } from "svelte";
	import { themed } from "../../shared/headless.js";
	import rawClasses from "../../shared/styles/components/page-turner.module.css";
	import Icon from "../Icon/Icon.svelte";
	import { keypress } from "../actions/keypress.js";

	const classes = themed(rawClasses);

	type PageTurnerProps = {
		children?: Snippet;
		onNext?: () => void;
		onPrev?: () => void;
		onUp?: () => void;
		onDown?: () => void;
	};

	let { children, onNext, onPrev, onUp, onDown }: PageTurnerProps = $props();

	const shortcuts = $derived([
		{ shortcutKey: "Control+Shift+ArrowRight", action: onNext },
		{ shortcutKey: "Control+Shift+ArrowLeft", action: onPrev },
		{ shortcutKey: "Control+Shift+ArrowUp", action: onUp },
		{ shortcutKey: "Control+Shift+ArrowDown", action: onDown },
	]);
</script>

<div use:keypress={shortcuts} class={classes["page-slider"]}>
	{@render children?.()}
</div>

{#if onNext}
	<button
		class={classes["right-arrow"]}
		onclick={onNext}
		type="button"
		aria-label="Go to next page"
		aria-keyshortcuts="Control+Shift+ArrowRight"
	>
		<Icon name="ArrowRightCircle" size={48} color="white" aria-hidden="true" />
	</button>
{/if}
{#if onPrev}
	<button
		class={classes["left-arrow"]}
		onclick={onPrev}
		type="button"
		aria-label="Go to previous page"
		aria-keyshortcuts="Control+Shift+ArrowLeft"
	>
		<Icon name="ArrowLeftCircle" size={48} color="white" aria-hidden="true" />
	</button>
{/if}
{#if onUp}
	<button
		class={classes["up-arrow"]}
		onclick={onUp}
		type="button"
		aria-label="Go up"
		aria-keyshortcuts="Control+Shift+ArrowUp"
	>
		<Icon name="ArrowUpCircle" size={48} color="white" aria-hidden="true" />
	</button>
{/if}
{#if onDown}
	<button
		class={classes["down-arrow"]}
		onclick={onDown}
		type="button"
		aria-label="Go down"
		aria-keyshortcuts="Control+Shift+ArrowDown"
	>
		<Icon name="ArrowDownCircle" size={48} color="white" aria-hidden="true" />
	</button>
{/if}
