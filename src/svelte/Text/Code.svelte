<script lang="ts">
	import { highlightCode } from "../../shared/highlight.js";
	import { themed } from "../../shared/headless.js";
	import rawClasses from "../../shared/styles/components/text.module.css";

	const classes = themed(rawClasses);

	type CodeProps = {
		code: string;
		language: string;
	};

	let { code, language }: CodeProps = $props();

	const highlighted = $derived(highlightCode(code, language));
</script>

<section class={classes.code} aria-label={`${language} code block`}>
	{#await highlighted then html}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<div class={classes.pre}>{@html html}</div>
	{:catch}
		<pre class={classes.pre}>{code}</pre>
	{/await}
</section>
