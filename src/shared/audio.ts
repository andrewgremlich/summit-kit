export interface AudioOptions {
	src: string;
	volume?: number;
	loop?: boolean;
	preload?: boolean;
	autoplay?: boolean;
	stereo?: number; // -1 (left) to 1 (right), 0 is center
	fadeInDuration?: number; // Fade in duration in seconds
}

export interface AudioController {
	play: () => void;
	pause: () => void;
	stop: () => void;
	seek: (time: number) => void;
	setVolume: (volume: number) => void;
	setStereo: (pan: number) => void;
	/** Current playback position in seconds. */
	getCurrentTime: () => number;
	/** Subscribe to playing state changes. Returns an unsubscribe function. */
	onPlayingChange: (listener: (isPlaying: boolean) => void) => () => void;
	/** Tear down the audio graph and listeners. */
	destroy: () => void;
}

/**
 * Framework-neutral Web Audio controller. Builds the AudioContext graph once and
 * exposes imperative controls plus a playing-state subscription. Wrap this in a
 * React hook or a Svelte store for reactive `isPlaying` / `currentTime` state.
 */
export function createAudioController(options: AudioOptions): AudioController {
	const { src } = options;
	// Mutable copy so setVolume/setStereo can update the "target" values.
	const opts = { ...options };

	const audio = new Audio(src);
	audio.crossOrigin = "anonymous";
	audio.loop = opts.loop ?? false;
	audio.preload = (opts.preload ?? true) ? "auto" : "none";

	const ctx = new AudioContext();
	const source = ctx.createMediaElementSource(audio);
	const gain = ctx.createGain();
	const panner = ctx.createStereoPanner();

	gain.gain.value = opts.volume ?? 1;
	panner.pan.value = opts.stereo ?? 0;

	source.connect(gain).connect(panner).connect(ctx.destination);

	const playingListeners = new Set<(isPlaying: boolean) => void>();
	const emitPlaying = (isPlaying: boolean) => {
		for (const listener of playingListeners) listener(isPlaying);
	};

	const onPlay = () => emitPlaying(true);
	const onPause = () => emitPlaying(false);
	const onEnded = () => emitPlaying(false);

	audio.addEventListener("play", onPlay);
	audio.addEventListener("pause", onPause);
	audio.addEventListener("ended", onEnded);

	if (opts.autoplay) {
		audio.play().catch(() => {});
	}

	const play = () => {
		if (ctx.state === "suspended") {
			ctx.resume();
		}

		const fadeIn = opts.fadeInDuration && opts.fadeInDuration > 0;
		const targetVolume = opts.volume ?? 1;

		if (fadeIn && opts.fadeInDuration) {
			gain.gain.setValueAtTime(0, ctx.currentTime);
			gain.gain.linearRampToValueAtTime(
				targetVolume,
				ctx.currentTime + opts.fadeInDuration,
			);
		} else {
			gain.gain.value = targetVolume;
		}

		audio.play().catch(() => {});
	};

	const pause = () => {
		audio.pause();
	};

	const stop = () => {
		audio.pause();
		audio.currentTime = 0;
	};

	const seek = (time: number) => {
		audio.currentTime = time;
	};

	const setVolume = (vol: number) => {
		opts.volume = vol;
		gain.gain.value = vol;
	};

	const setStereo = (pan: number) => {
		opts.stereo = pan;
		panner.pan.value = pan;
	};

	const getCurrentTime = () => audio.currentTime;

	const onPlayingChange = (listener: (isPlaying: boolean) => void) => {
		playingListeners.add(listener);
		return () => {
			playingListeners.delete(listener);
		};
	};

	const destroy = () => {
		audio.removeEventListener("play", onPlay);
		audio.removeEventListener("pause", onPause);
		audio.removeEventListener("ended", onEnded);
		playingListeners.clear();
		audio.pause();
		audio.removeAttribute("src");
		audio.load();
		source.disconnect();
		ctx.close();
	};

	return {
		play,
		pause,
		stop,
		seek,
		setVolume,
		setStereo,
		getCurrentTime,
		onPlayingChange,
		destroy,
	};
}
