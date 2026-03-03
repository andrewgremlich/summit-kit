import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { P } from "../../server/Text/Body.tsx";
import { Code } from "../../server/Text/Code.tsx";
import { H2 } from "../../server/Text/Headings.tsx";
import { useKeyPress } from "./useKeyPress.tsx";

const KeyPressDemo = () => {
	const [lastKey, setLastKey] = useState("None");

	useKeyPress([
		{ shortcutKey: "Control+s", action: () => setLastKey("Control+S (Save)") },
		{
			shortcutKey: "Control+Shift+P",
			action: () => setLastKey("Control+Shift+P (Command Palette)"),
		},
		{ shortcutKey: "Escape", action: () => setLastKey("Escape") },
	]);

	return (
		<div>
			<H2>useKeyPress Hook</H2>
			<P>Last shortcut pressed: {lastKey}</P>
			<Code
				language="typescript"
				code={`useKeyPress([
  { shortcutKey: "Control+S", action: handleSave },
  { shortcutKey: "Control+Shift+P", action: openPalette },
  { shortcutKey: "Escape", action: handleEscape },
]);`}
			/>
			<P>Try pressing Ctrl+S, Ctrl+Shift+P, or Escape.</P>
		</div>
	);
};

const meta: Meta = {
	title: "Client/Hooks/useKeyPress",
	component: KeyPressDemo,
};

export default meta;

export const Default: StoryObj = {
	render: () => <KeyPressDemo />,
};
