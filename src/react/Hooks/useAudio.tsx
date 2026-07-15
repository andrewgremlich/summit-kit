"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
	type AudioController,
	type AudioOptions,
	createAudioController,
} from "../../shared/audio.ts";

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
 * @param {AudioOptions} options - Configuration options for the audio instance.
 * @param {string} options.src - The source URL of the audio file.
 * @param {number} [options.volume=1] - Initial volume (0.0 to 1.0).
 * @param {boolean} [options.loop=false] - Whether the audio should loop.
 * @param {boolean} [options.preload=true] - Whether to preload the audio.
 * @param {boolean} [options.autoplay=false] - Whether to autoplay the audio on load.
 * @param {number} [options.stereo=0] - Initial stereo pan (-1.0 left to 1.0 right).
 * @param {number} [options.fadeInDuration] - Fade in duration in seconds.
 *
 * @returns {UseAudioReturn} An object containing playback controls and state.
 *
 * @example
 * ```tsx
 * const { play, pause, isPlaying } = useAudio({ src: 'audio.mp3', volume: 0.5 });
 * ```
 */
export const useAudio = ({ src, ...options }: AudioOptions): UseAudioReturn => {
	const { current: opts } = useRef(options);
	const controllerRef = useRef<AudioController | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [volume, setVolumeState] = useState(options.volume);

	// biome-ignore lint/correctness/useExhaustiveDependencies: opts is a stable ref that doesn't change
	useEffect(() => {
		const controller = createAudioController({ src, ...opts });
		controllerRef.current = controller;

		const unsubscribe = controller.onPlayingChange(setIsPlaying);

		return () => {
			unsubscribe();
			controller.destroy();
			controllerRef.current = null;
		};
	}, [src]);

	useEffect(() => {
		let raf: number;
		const update = () => {
			if (controllerRef.current && isPlaying) {
				setCurrentTime(controllerRef.current.getCurrentTime());
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
		controllerRef.current?.play();
	}, []);

	const pause = useCallback(() => {
		controllerRef.current?.pause();
	}, []);

	const stop = useCallback(() => {
		controllerRef.current?.stop();
		setCurrentTime(0);
	}, []);

	const seek = useCallback((time: number) => {
		controllerRef.current?.seek(time);
		setCurrentTime(time);
	}, []);

	const setVolume = useCallback(
		(vol: number) => {
			opts.volume = vol;
			setVolumeState(vol);
			controllerRef.current?.setVolume(vol);
		},
		[opts],
	);

	const setStereo = useCallback(
		(pan: number) => {
			opts.stereo = pan;
			controllerRef.current?.setStereo(pan);
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
