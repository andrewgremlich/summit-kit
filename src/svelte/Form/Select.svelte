<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLSelectAttributes } from "svelte/elements";
	import { cx } from "../../shared/cx.js";
	import { themed } from "../../shared/headless.js";
	import rawStyles from "../../shared/styles/components/form.module.css";
	import Flex from "../Areas/Flex.svelte";

	const styles = themed(rawStyles);

	export type SelectOption = {
		value: string | number;
		label: string;
		disabled?: boolean;
	};

	type SelectProps = HTMLSelectAttributes & {
		class?: string;
		label?: string;
		labelClass?: string;
		containerClass?: string;
		invalid?: boolean;
		descriptionId?: string;
		errorId?: string;
		options?: SelectOption[];
		children?: Snippet;
	};

	let {
		class: className,
		label,
		labelClass,
		containerClass,
		invalid,
		descriptionId,
		errorId,
		id,
		options,
		children,
		...rest
	}: SelectProps = $props();

	const uid = $props.id();
	const selectId = $derived(id ?? uid);

	const { "aria-describedby": restAriaDescribedBy, ...restProps } = $derived(
		rest as HTMLSelectAttributes,
	);

	const ariaDescribedBy = $derived(
		[restAriaDescribedBy as string | undefined, descriptionId, errorId]
			.filter(Boolean)
			.join(" ") || undefined,
	);
</script>

<Flex class={containerClass} direction="col" gap={10}>
	{#if label}
		<label for={selectId} class={labelClass ?? styles.label}>{label}</label>
	{/if}
	<select
		id={selectId}
		aria-invalid={invalid || undefined}
		aria-required={restProps.required ? true : undefined}
		aria-describedby={ariaDescribedBy}
		class={cx(styles.select, className)}
		{...restProps}
	>
		{#if options}
			{#each options as opt (String(opt.value))}
				<option value={opt.value} disabled={opt.disabled}>{opt.label}</option>
			{/each}
		{/if}
		{@render children?.()}
	</select>
</Flex>
