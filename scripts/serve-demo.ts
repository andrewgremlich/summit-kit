/**
 * Minimal zero-dependency static file server for the built demo site (demo-static/).
 * Resolves directory requests to index.html so `/react/` and `/svelte/` work like they do
 * on the deploy host. Run via `npm run demo` (which builds first).
 */
import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(
	fileURLToPath(new URL(".", import.meta.url)),
	"../demo-static",
);
const port = Number(process.env.PORT ?? 4173);

const types: Record<string, string> = {
	".html": "text/html",
	".js": "text/javascript",
	".css": "text/css",
	".json": "application/json",
	".svg": "image/svg+xml",
	".map": "application/json",
};

const server = createServer((req, res) => {
	// Strip query string and prevent path traversal outside root.
	const urlPath = decodeURIComponent((req.url ?? "/").split("?")[0]);
	let filePath = join(root, normalize(urlPath));
	if (!filePath.startsWith(root)) {
		res.writeHead(403).end("Forbidden");
		return;
	}

	if (existsSync(filePath) && statSync(filePath).isDirectory()) {
		filePath = join(filePath, "index.html");
	}

	if (!existsSync(filePath)) {
		res.writeHead(404).end("Not found");
		return;
	}

	res.writeHead(200, {
		"content-type": types[extname(filePath)] ?? "application/octet-stream",
	});
	createReadStream(filePath).pipe(res);
});

server.listen(port, () => {
	console.log(`Demo site: http://localhost:${port}/`);
});
