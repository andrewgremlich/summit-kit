import type { Meta, StoryObj } from "@storybook/react";

import { P } from "../../server/Text/Body.tsx";
import { H2 } from "../../server/Text/Headings.tsx";
import { useAudio } from "./useAudio.tsx";

const AudioDemo = () => {
	const { play, pause, stop, isPlaying } = useAudio({
		src: "https://actions.google.com/sounds/v1/alarms/beep_short.ogg",
		volume: 0.5,
	});

	return (
		<div>
			<H2>useAudio Hook</H2>
			<P>Status: {isPlaying ? "Playing" : "Stopped"}</P>
			<div style={{ display: "flex", gap: "8px" }}>
				<button type="button" onClick={play}>
					Play
				</button>
				<button type="button" onClick={pause}>
					Pause
				</button>
				<button type="button" onClick={stop}>
					Stop
				</button>
			</div>
		</div>
	);
};

const meta: Meta = {
	title: "Client/Hooks/useAudio",
	component: AudioDemo,
	tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
	render: () => <AudioDemo />,
};
