/// <reference types="svelte" />

// Lets the plain `tsc --noEmit` typecheck (React + shared + Svelte barrel) resolve
// `import X from "./Foo.svelte"` without erroring. Precise per-component prop types are
// produced by svelte-package / svelte-check, which use the real Svelte language tooling.
declare module "*.svelte" {
	import type { Component } from "svelte";

	const component: Component;
	export default component;
}
