<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLFormAttributes } from "svelte/elements";
	import { cx } from "../../shared/cx.js";

	type FormProps = HTMLFormAttributes & {
		classes?: string[];
		onsubmit?: (event: SubmitEvent) => void;
		children?: Snippet;
	};

	let {
		classes,
		onsubmit,
		children,
		...rest
	}: FormProps = $props();

	const handleSubmit = (event: SubmitEvent) => {
		if (!onsubmit) return;
		event.preventDefault();
		onsubmit(event);
	};
</script>

<form
	class={cx(classes) || undefined}
	onsubmit={onsubmit ? handleSubmit : undefined}
	{...rest}
>
	{@render children?.()}
</form>
