import "./index.css";
import "@/Style/global.style.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Could not find root element with id 'root'");
}

createRoot(rootElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
