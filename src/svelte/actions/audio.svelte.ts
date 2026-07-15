import {
	type AudioOptions,
	createAudioController,
} from "../../shared/audio.js";

/**
 * Svelte 5 audio helper. Wraps the framework-neutral `createAudioController` and exposes
 * reactive `isPlaying` / `currentTime` via runes, plus the imperative controls.
 *
 * ```svelte
 * <script>
 *   import { createAudio } from "summit-kit/svelte";
 *   const audio = createAudio({ src: "/track.mp3", volume: 0.5 });
 * </script>
 * <button onclick={audio.play}>Play</button>
 * {#if audio.isPlaying}Playing at {audio.currentTime}s{/if}
 * ```
 *
 * Call `audio.destroy()` (e.g. in `onDestroy`) to tear down the audio graph.
 */
export function createAudio(options: AudioOptions) {
	let isPlaying = $state(false);
	let currentTime = $state(0);

	const controller = createAudioController(options);

	let raf = 0;
	const tick = () => {
		if (isPlaying) {
			currentTime = controller.getCurrentTime();
			raf = requestAnimationFrame(tick);
		}
	};

	const unsubscribe = controller.onPlayingChange((playing) => {
		isPlaying = playing;
		if (playing) {
			raf = requestAnimationFrame(tick);
		} else {
			cancelAnimationFrame(raf);
		}
	});

	return {
		get isPlaying() {
			return isPlaying;
		},
		get currentTime() {
			return currentTime;
		},
		play: controller.play,
		pause: controller.pause,
		stop: () => {
			controller.stop();
			currentTime = 0;
		},
		seek: (time: number) => {
			controller.seek(time);
			currentTime = time;
		},
		setVolume: controller.setVolume,
		setStereo: controller.setStereo,
		destroy: () => {
			cancelAnimationFrame(raf);
			unsubscribe();
			controller.destroy();
		},
	};
}
