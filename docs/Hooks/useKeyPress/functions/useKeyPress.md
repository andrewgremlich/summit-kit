[**summit-kit**](../../../README.md)

***

[summit-kit](../../../modules.md) / [Hooks/useKeyPress](../README.md) / useKeyPress

# Function: useKeyPress()

> **useKeyPress**(`shortcuts`): `void`

Defined in: [Hooks/useKeyPress.tsx:23](https://github.com/andrewgremlich/summit-kit/blob/374135e86453db85d211b68449c3d255b57be43d/src/react/Hooks/useKeyPress.tsx#L23)

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
