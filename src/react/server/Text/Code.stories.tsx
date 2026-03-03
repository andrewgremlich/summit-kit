import type { Meta, StoryObj } from "@storybook/react";

import { Code } from "./Code.tsx";

const meta: Meta<typeof Code> = {
	title: "Server/Text/Code",
	component: Code,
	tags: ["autodocs"],
};

export default meta;

export const JavaScript: StoryObj<typeof Code> = {
	args: {
		language: "javascript",
		code: `const greeting = "Hello, Summit Kit!";
console.log(greeting);`,
	},
};

export const TypeScript: StoryObj<typeof Code> = {
	args: {
		language: "typescript",
		code: `interface User {
  name: string;
  email: string;
}

const user: User = {
  name: "Summit",
  email: "summit@example.com",
};`,
	},
};

export const JSX: StoryObj<typeof Code> = {
	args: {
		language: "jsx",
		code: `<Section>
  <H1>Welcome</H1>
  <P>This is Summit Kit.</P>
</Section>`,
	},
};
