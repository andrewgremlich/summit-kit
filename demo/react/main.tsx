import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Full branded look for the demo (the library itself needs no style import).
import "../../src/shared/styles/colors.css";
import "../../src/shared/styles/global.css";
import "../demo.css";
import { App } from "./App.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
