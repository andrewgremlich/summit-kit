import type { Meta, StoryObj } from "@storybook/react";

import { P } from "../Text/Body.tsx";
import { Grid, GridHeader, GridRow } from "./index.tsx";

const meta: Meta<typeof Grid> = {
	title: "Server/Areas/Grid",
	component: Grid,
};

export default meta;

export const BasicGrid: StoryObj<typeof Grid> = {
	name: "Basic 3-Column",
	render: () => (
		<Grid cols={3} gap={16}>
			<div style={{ background: "#2d4a2d", padding: "1rem" }}>Cell 1</div>
			<div style={{ background: "#2d4a2d", padding: "1rem" }}>Cell 2</div>
			<div style={{ background: "#2d4a2d", padding: "1rem" }}>Cell 3</div>
			<div style={{ background: "#2d4a2d", padding: "1rem" }}>Cell 4</div>
			<div style={{ background: "#2d4a2d", padding: "1rem" }}>Cell 5</div>
			<div style={{ background: "#2d4a2d", padding: "1rem" }}>Cell 6</div>
		</Grid>
	),
};

export const WithHeaderAndRows: StoryObj = {
	name: "Header + Rows",
	render: () => (
		<div>
			<GridHeader headers={["Name", "Role", "Status"]} cols={3} gap={8} />
			<GridRow cols={3} gap={8}>
				<P>Alice</P>
				<P>Developer</P>
				<P>Active</P>
			</GridRow>
			<GridRow cols={3} gap={8}>
				<P>Bob</P>
				<P>Designer</P>
				<P>Away</P>
			</GridRow>
		</div>
	),
};

export const CustomTemplate: StoryObj<typeof Grid> = {
	name: "Custom Template Columns",
	render: () => (
		<Grid templateCols="200px 1fr 1fr" gap="1rem">
			<div style={{ background: "#2d4a2d", padding: "1rem" }}>Sidebar</div>
			<div style={{ background: "#3a5c3a", padding: "1rem" }}>Main</div>
			<div style={{ background: "#2d4a2d", padding: "1rem" }}>Aside</div>
		</Grid>
	),
};

export const AlignedGrid: StoryObj<typeof Grid> = {
	name: "Aligned Items",
	render: () => (
		<Grid cols={3} gap={16} alignItems="center" justifyItems="center">
			<div style={{ background: "#2d4a2d", padding: "0.5rem" }}>Short</div>
			<div style={{ background: "#2d4a2d", padding: "2rem" }}>Tall cell</div>
			<div style={{ background: "#2d4a2d", padding: "0.5rem" }}>Short</div>
		</Grid>
	),
};
