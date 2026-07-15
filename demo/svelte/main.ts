import { mount } from "svelte";
// Full branded look for the demo (the library itself needs no style import).
import "../../src/shared/styles/colors.css";
import "../../src/shared/styles/global.css";
import "../demo.css";
import App from "./App.svelte";

mount(App, { target: document.getElementById("root") as HTMLElement });
