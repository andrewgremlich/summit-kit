import type { Preview } from "@storybook/svelte";

// Components are themed out of the box via their token layer; importing the global styles
// here just adds the branded reset + palette so stories match the full-look consumer setup.
import "../src/shared/styles/colors.css";
import "../src/shared/styles/global.css";

const preview: Preview = {
	tags: ["autodocs"],
};

export default preview;
