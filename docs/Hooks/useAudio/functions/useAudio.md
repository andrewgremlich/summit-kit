[**summit-kit**](../../../README.md)

***

[summit-kit](../../../README.md) / [Hooks/useAudio](../README.md) / useAudio

# Function: useAudio()

> **useAudio**(`options`): `UseAudioReturn`

Defined in: [Hooks/useAudio.tsx:53](https://github.com/andrewgremlich/summit-kit/blob/0bfa11d7cd78adc4fe850151af656319efb5e059/src/react/Hooks/useAudio.tsx#L53)

React hook for managing audio playback using the Howler.js library.

## Parameters

### options

`UseAudioOptions`

Configuration options for the audio instance.

## Returns

`UseAudioReturn`

An object containing playback controls and state:
- `play`: Function to start playback.
- `pause`: Function to pause playback.
- `stop`: Function to stop playback.
- `seek`: Function to set the current playback position.
- `isPlaying`: Boolean indicating if audio is currently playing.
- `currentTime`: Current playback time in seconds.
- `setVolume`: Function to set the volume.
- `setStereo`: Function to set the stereo pan.

## Example

```tsx
const { play, pause, isPlaying } = useAudio({ src: 'audio.mp3', volume: 0.5 });
```
