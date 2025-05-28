import { useEffect, useRef, useState, useCallback } from "react";
import { Howl } from "howler";

interface UseAudioOptions {
	src: string;
	volume?: number;
	loop?: boolean;
	preload?: boolean;
	autoplay?: boolean;
	html5?: boolean;
	stereo?: number; // -1 (left) to 1 (right), 0 is center
}

interface UseAudioReturn {
	play: () => void;
	pause: () => void;
	stop: () => void;
	seek: (seek: number) => void;
	isPlaying: boolean;
	currentTime: number;
	volume?: number; // Current volume level
	setVolume: (volume: number) => void;
	setStereo: (pan: number) => void;
}

/**
 * React hook for managing audio playback using the Howler.js library.
 *
 * @param {UseAudioOptions} options - Configuration options for the audio instance.
 * @param {string | string[]} options.src - The source URL(s) of the audio file(s).
 * @param {number} [options.volume=1] - Initial volume (0.0 to 1.0).
 * @param {boolean} [options.loop=false] - Whether the audio should loop.
 * @param {boolean} [options.preload=true] - Whether to preload the audio.
 * @param {boolean} [options.autoplay=false] - Whether to autoplay the audio on load.
 * @param {boolean} [options.html5=false] - Whether to force HTML5 Audio.
 * @param {number} [options.stereo=0] - Initial stereo pan (-1.0 left to 1.0 right).
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
	const howlRef = useRef<Howl | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);

	useEffect(() => {
		if (howlRef.current) {
			howlRef.current.unload();
		}

		howlRef.current = new Howl({
			src,
			volume: opts.volume,
			loop: opts.loop,
			preload: opts.preload !== undefined ? opts.preload : true,
			autoplay: opts.autoplay,
			html5: opts.html5,
			onplay: () => setIsPlaying(true),
			onpause: () => setIsPlaying(false),
			onstop: () => setIsPlaying(false),
			onend: () => setIsPlaying(false),
		});

		if (howlRef.current && typeof howlRef.current.stereo === "function") {
			howlRef.current.stereo(opts.stereo ?? 0);
		}

		return () => {
			howlRef.current?.unload();
		};
	}, [src]);

	useEffect(() => {
		let raf: number;
		const update = () => {
			if (howlRef.current && isPlaying) {
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

	const play = useCallback(() => {
		if (howlRef.current) {
			howlRef.current.play();
		}
	}, []);

	const pause = useCallback(() => {
		howlRef.current?.pause();
	}, []);

	const stop = useCallback(() => {
		howlRef.current?.stop();
	}, []);

	const seek = useCallback((seek: number) => {
		howlRef.current?.seek(seek);
		setCurrentTime(seek);
	}, []);

	const setVolume = useCallback((vol: number) => {
		opts.volume = vol;
	}, []);

	const setStereo = useCallback((pan: number) => {
		opts.stereo = pan;
	}, []);

	return {
		play,
		pause,
		stop,
		seek,
		isPlaying,
		currentTime,
		volume: opts.volume,
		setVolume,
		setStereo,
	};
};
