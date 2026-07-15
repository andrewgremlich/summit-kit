<script lang="ts">
	import { cx } from "../../shared/cx.js";
	import { themed } from "../../shared/headless.js";
	import rawClasses from "../../shared/styles/components/form.module.css";

	const classes = themed(rawClasses);

	type InputProps = {
		type:
			| "text"
			| "password"
			| "email"
			| "number"
			| "tel"
			| "url"
			| "search"
			| "date"
			| "time"
			| "datetime-local"
			| "month"
			| "week";
		label: string;
		id: string;
		valueMissing?: string;
		typeMismatch?: string;
		required?: boolean;
		disabled?: boolean;
		classes?: string[];
	};

	let {
		type,
		label,
		id,
		valueMissing,
		typeMismatch,
		required = false,
		disabled = false,
		classes: extraClasses,
	}: InputProps = $props();

	const errorMessage = $derived(valueMissing || typeMismatch);
	const errorId = $derived(errorMessage ? `${id}-error` : undefined);
</script>

<div class={cx(classes["form-field"], extraClasses)}>
	<div class={classes["label-container"]}>
		<label class={classes.label} for={id}>{label}</label>
	</div>
	<input
		{id}
		name={id}
		class={classes["text-input"]}
		{type}
		{required}
		{disabled}
		aria-required={required || undefined}
		aria-invalid={errorMessage ? true : undefined}
		aria-describedby={errorId}
	/>
	{#if errorId}
		<span id={errorId} role="alert">{errorMessage}</span>
	{/if}
</div>
