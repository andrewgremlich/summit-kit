/**
 * Builds the static demo site: the React gallery, the Svelte gallery, and a landing page
 * that links them. Output goes to demo-static/ (the Vercel deploy target). Each framework
 * demo is its own Vite build (different plugins), so they run in sequence.
 */
import { cpSync, rmSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "vite";

const HERE = fileURLToPath(new URL(".", import.meta.url));
const root = resolve(HERE, "..");
const out = resolve(root, "demo-static");

rmSync(out, { recursive: true, force: true });

await build({ configFile: resolve(root, "demo/react/vite.config.ts") });
await build({ configFile: resolve(root, "demo/svelte/vite.config.ts") });

// Landing page at the demo root.
cpSync(resolve(root, "demo/index.html"), resolve(out, "index.html"));

console.log("Built demo-static/ (index.html + react/ + svelte/)");
