import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "../../server/Areas/Flex.tsx";
import { PrimaryButton, SecondaryButton } from "../../server/Form/Buttons.tsx";
import { P } from "../../server/Text/Body.tsx";
import { Code } from "../../server/Text/Code.tsx";
import { H2 } from "../../server/Text/Headings.tsx";
import { useAudio } from "./useAudio.tsx";

const AudioDemo = () => {
	const { play, pause, stop, isPlaying, currentTime, volume, setVolume } =
		useAudio({
			src: "https://actions.google.com/sounds/v1/alarms/beep_short.ogg",
			volume: 0.5,
			stereo: 0,
		});

	return (
		<div>
			<H2>useAudio Hook</H2>
			<P>
				A hook for managing audio playback using the Web Audio API. Supports
				volume control, stereo panning, seeking, looping, and fade-in.
			</P>
			<Code
				language="typescript"
				code={`const { play, pause, stop, seek, isPlaying, currentTime, volume, setVolume, setStereo } = useAudio({
  src: "audio.mp3",
  volume: 0.5,
  loop: false,
  stereo: 0,
  fadeInDuration: 1,
});`}
			/>
			<P>Status: {isPlaying ? "Playing" : "Stopped"}</P>
			<P>Current time: {currentTime.toFixed(2)}s</P>
			<P>Volume: {volume}</P>
			<Flex direction="row" gap={8} items="center">
				<PrimaryButton onClick={play}>Play</PrimaryButton>
				<SecondaryButton onClick={pause}>Pause</SecondaryButton>
				<SecondaryButton onClick={stop}>Stop</SecondaryButton>
				<input
					type="range"
					min="0"
					max="1"
					step="0.01"
					value={volume ?? 0.5}
					onChange={(e) => setVolume(Number(e.target.value))}
				/>
			</Flex>
		</div>
	);
};

const meta: Meta = {
	title: "Client/Hooks/useAudio",
	component: AudioDemo,
};

export default meta;

export const Default: StoryObj = {
	render: () => <AudioDemo />,
};
