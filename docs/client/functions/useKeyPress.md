[**summit-kit**](../../README.md)

***

[summit-kit](../../modules.md) / [client](../README.md) / useKeyPress

# Function: useKeyPress()

> **useKeyPress**(`shortcuts`): `void`

Defined in: [client/Hooks/useKeyPress.tsx:23](https://github.com/andrewgremlich/summit-kit/blob/aa2be78d740324e5b3ff93911408340830848b2a/src/react/client/Hooks/useKeyPress.tsx#L23)

Custom React hook that listens for specified keyboard shortcuts and triggers associated actions.

## Parameters

### shortcuts

`object`[]

An array of shortcut objects, each containing:
  - `shortcutKey`: A string representing the key or key combination (e.g., "Control+S", "Shift+Alt+X").
  - `action` (optional): A callback function to execute when the shortcut is pressed.

## Returns

`void`

## Remarks

- Supports combination shortcuts using "Shift", "Control", "Meta", and "Alt" modifiers.
- The hook attaches a `keydown` event listener to the window and cleans up on unmount.
- Only combination shortcuts (with "+") are currently handled.

## Example

```tsx
useKeyPress([
  { shortcutKey: "Control+S", action: handleSave },
  { shortcutKey: "Shift+Alt+X", action: handleSpecialAction }
]);<|cursor|>
```
