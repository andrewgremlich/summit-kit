import { useCallback, useEffect, useRef, useState } from "react";

interface UseAudioOptions {
	src: string;
	volume?: number;
	loop?: boolean;
	preload?: boolean;
	autoplay?: boolean;
	stereo?: number; // -1 (left) to 1 (right), 0 is center
	fadeInDuration?: number; // Fade in duration in seconds
}

interface UseAudioReturn {
	play: () => void;
	pause: () => void;
	stop: () => void;
	seek: (seek: number) => void;
	isPlaying: boolean;
	currentTime: number;
	volume?: number;
	setVolume: (volume: number) => void;
	setStereo: (pan: number) => void;
}

/**
 * React hook for managing audio playback using the Web Audio API.
 *
 * @param {UseAudioOptions} options - Configuration options for the audio instance.
 * @param {string} options.src - The source URL of the audio file.
 * @param {number} [options.volume=1] - Initial volume (0.0 to 1.0).
 * @param {boolean} [options.loop=false] - Whether the audio should loop.
 * @param {boolean} [options.preload=true] - Whether to preload the audio.
 * @param {boolean} [options.autoplay=false] - Whether to autoplay the audio on load.
 * @param {number} [options.stereo=0] - Initial stereo pan (-1.0 left to 1.0 right).
 * @param {number} [options.fadeInDuration] - Fade in duration in seconds.
 *
 * @returns {UseAudioReturn} An object containing playback controls and state:
 * - `play`: Function to start playback.
 * - `pause`: Function to pause playback.
 * - `stop`: Function to stop playback.
 * - `seek`: Function to set the current playback position.
 * - `isPlaying`: Boolean indicating if audio is currently playing.
 * - `currentTime`: Current playback time in seconds.
 * - `setVolume`: Function to set the volume.
 * - `setStereo`: Function to set the stereo pan.
 *
 * @example
 * ```tsx
 * const { play, pause, isPlaying } = useAudio({ src: 'audio.mp3', volume: 0.5 });
 * ```
 */
export const useAudio = ({
	src,
	...options
}: UseAudioOptions): UseAudioReturn => {
	const { current: opts } = useRef(options);
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const ctxRef = useRef<AudioContext | null>(null);
	const gainRef = useRef<GainNode | null>(null);
	const panRef = useRef<StereoPannerNode | null>(null);
	const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [volume, setVolumeState] = useState(options.volume);

	// biome-ignore lint/correctness/useExhaustiveDependencies: opts is a stable ref that doesn't change
	useEffect(() => {
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

		audioRef.current = audio;
		ctxRef.current = ctx;
		gainRef.current = gain;
		panRef.current = panner;
		sourceRef.current = source;

		const onPlay = () => setIsPlaying(true);
		const onPause = () => setIsPlaying(false);
		const onEnded = () => setIsPlaying(false);

		audio.addEventListener("play", onPlay);
		audio.addEventListener("pause", onPause);
		audio.addEventListener("ended", onEnded);

		if (opts.autoplay) {
			audio.play().catch(() => {});
		}

		return () => {
			audio.removeEventListener("play", onPlay);
			audio.removeEventListener("pause", onPause);
			audio.removeEventListener("ended", onEnded);
			audio.pause();
			audio.removeAttribute("src");
			audio.load();
			source.disconnect();
			ctx.close();
		};
	}, [src]);

	useEffect(() => {
		let raf: number;
		const update = () => {
			if (audioRef.current && isPlaying) {
				setCurrentTime(audioRef.current.currentTime);
				raf = requestAnimationFrame(update);
			}
		};
		if (isPlaying) {
			raf = requestAnimationFrame(update);
		}
		return () => {
			cancelAnimationFrame(raf);
		};
	}, [isPlaying]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: opts is a stable ref that doesn't change
	const play = useCallback(() => {
		const audio = audioRef.current;
		const ctx = ctxRef.current;
		const gain = gainRef.current;
		if (!audio || !ctx || !gain) return;

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
	}, []);

	const pause = useCallback(() => {
		audioRef.current?.pause();
	}, []);

	const stop = useCallback(() => {
		const audio = audioRef.current;
		if (audio) {
			audio.pause();
			audio.currentTime = 0;
			setCurrentTime(0);
		}
	}, []);

	const seek = useCallback((time: number) => {
		const audio = audioRef.current;
		if (audio) {
			audio.currentTime = time;
			setCurrentTime(time);
		}
	}, []);

	const setVolume = useCallback(
		(vol: number) => {
			opts.volume = vol;
			setVolumeState(vol);
			if (gainRef.current) {
				gainRef.current.gain.value = vol;
			}
		},
		[opts],
	);

	const setStereo = useCallback(
		(pan: number) => {
			opts.stereo = pan;
			if (panRef.current) {
				panRef.current.pan.value = pan;
			}
		},
		[opts],
	);

	return {
		play,
		pause,
		stop,
		seek,
		isPlaying,
		currentTime,
		volume,
		setVolume,
		setStereo,
	};
};
