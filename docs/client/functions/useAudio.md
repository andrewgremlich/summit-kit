[**summit-kit**](../../README.md)

***

[summit-kit](../../modules.md) / [client](../README.md) / useAudio

# Function: useAudio()

> **useAudio**(`options`): `UseAudioReturn`

Defined in: [client/Hooks/useAudio.tsx:55](https://github.com/andrewgremlich/summit-kit/blob/711ddc3f6b3cc4d2424b7b18b345c9b77636227b/src/react/client/Hooks/useAudio.tsx#L55)

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
