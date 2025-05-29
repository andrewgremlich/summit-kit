<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Summit Kit](#summit-kit)
- [summit-kit](#summit-kit)
  - [Modules](#modules)
- [React](#react)
  - [react](#react)
    - [Type Aliases](#type-aliases)
    - [Variables](#variables)
  - [Client](#client)
    - [react/client](#reactclient)
    - [Variables](#variables-1)
  - [Type Aliases](#type-aliases-1)
    - [Type Alias: ClassesProps](#type-alias-classesprops)
    - [Type Alias: StandardProps](#type-alias-standardprops)
  - [Variables](#variables-2)
    - [Variable: Code()](#variable-code)
    - [Variable: Figure()](#variable-figure)
    - [Variable: Flex()](#variable-flex)
    - [Variable: Form()](#variable-form)
    - [Variable: H1()](#variable-h1)
    - [Variable: H2()](#variable-h2)
    - [Variable: H3()](#variable-h3)
    - [Variable: H4()](#variable-h4)
    - [Variable: H5()](#variable-h5)
    - [Variable: H6()](#variable-h6)
    - [Variable: Icon()](#variable-icon)
    - [Variable: Image()](#variable-image)
    - [Variable: Li()](#variable-li)
    - [Variable: Link()](#variable-link)
    - [Variable: Ol()](#variable-ol)
    - [Variable: P()](#variable-p)
    - [Variable: PrimaryButton()](#variable-primarybutton)
    - [Variable: Quote()](#variable-quote)
    - [Variable: Reading()](#variable-reading)
    - [Variable: SecondaryButton()](#variable-secondarybutton)
    - [Variable: Section()](#variable-section)
    - [Variable: Span()](#variable-span)
    - [Variable: TextInput()](#variable-textinput)
    - [Variable: Ul()](#variable-ul)
- [summit-kit](#summit-kit-1)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

**summit-kit**

***

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Summit Kit](#summit-kit)
- [summit-kit](#summit-kit)
  - [Modules](#modules)
- [React](#react)
  - [react](#react)
    - [Type Aliases](#type-aliases)
    - [Variables](#variables)
  - [Client](#client)
    - [react/client](#reactclient)
    - [Variables](#variables-1)
  - [Type Aliases](#type-aliases-1)
    - [Type Alias: ClassesProps](#type-alias-classesprops)
    - [Type Alias: StandardProps](#type-alias-standardprops)
  - [Variables](#variables-2)
    - [Variable: Code()](#variable-code)
    - [Variable: Figure()](#variable-figure)
    - [Variable: Flex()](#variable-flex)
    - [Variable: Form()](#variable-form)
    - [Variable: H1()](#variable-h1)
    - [Variable: H2()](#variable-h2)
    - [Variable: H3()](#variable-h3)
    - [Variable: H4()](#variable-h4)
    - [Variable: H5()](#variable-h5)
    - [Variable: H6()](#variable-h6)
    - [Variable: Icon()](#variable-icon)
    - [Variable: Image()](#variable-image)
    - [Variable: Li()](#variable-li)
    - [Variable: Link()](#variable-link)
    - [Variable: Ol()](#variable-ol)
    - [Variable: P()](#variable-p)
    - [Variable: PrimaryButton()](#variable-primarybutton)
    - [Variable: Quote()](#variable-quote)
    - [Variable: Reading()](#variable-reading)
    - [Variable: SecondaryButton()](#variable-secondarybutton)
    - [Variable: Section()](#variable-section)
    - [Variable: Span()](#variable-span)
    - [Variable: TextInput()](#variable-textinput)
    - [Variable: Ul()](#variable-ul)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<a name="readmemd"></a>

**summit-kit**

***

# Summit Kit

See the generated [typedocs](https://github.com/andrewgremlich/summit-kit/blob/main/docs/modules.md).

<a name="modulesmd"></a>

[**summit-kit**](#readmemd)

***

# summit-kit

## Modules

- [react](#reactreadmemd)
- [react/client](#reactclientreadmemd)

# React

<a name="reactreadmemd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / react

## react

### Type Aliases

- [ClassesProps](#reacttype-aliasesclassespropsmd)
- [StandardProps](#reacttype-aliasesstandardpropsmd)

### Variables

- [Code](#reactvariablescodemd)
- [Figure](#reactvariablesfiguremd)
- [Flex](#reactvariablesflexmd)
- [Form](#reactvariablesformmd)
- [H1](#reactvariablesh1md)
- [H2](#reactvariablesh2md)
- [H3](#reactvariablesh3md)
- [H4](#reactvariablesh4md)
- [H5](#reactvariablesh5md)
- [H6](#reactvariablesh6md)
- [Icon](#reactvariablesiconmd)
- [Image](#reactvariablesimagemd)
- [Li](#reactvariableslimd)
- [Link](#reactvariableslinkmd)
- [Ol](#reactvariablesolmd)
- [P](#reactvariablespmd)
- [PrimaryButton](#reactvariablesprimarybuttonmd)
- [Quote](#reactvariablesquotemd)
- [Reading](#reactvariablesreadingmd)
- [SecondaryButton](#reactvariablessecondarybuttonmd)
- [Section](#reactvariablessectionmd)
- [Span](#reactvariablesspanmd)
- [TextInput](#reactvariablestextinputmd)
- [Ul](#reactvariablesulmd)

## Client

<a name="reactclientreadmemd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / react/client

### react/client

#### Variables

- [PageTurner](#reactclientvariablespageturnermd)
- [toggleFullScreen](#reactclientvariablestogglefullscreenmd)
- [useAudio](#reactclientvariablesuseaudiomd)
- [useKeyPress](#reactclientvariablesusekeypressmd)

### Variables

<a name="reactclientvariablespageturnermd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react/client](#reactclientreadmemd) / PageTurner

#### Variable: PageTurner()

> `const` **PageTurner**: (`{ children, onNext, onPrev, onUp, onDown, }`) => `JSX.Element`

Defined in: PageTurner/index.d.ts:22

A React component that provides navigation controls for paging or sliding content.

The `PageTurner` component renders navigation buttons (next, previous, up, down) based on the provided callback props.
It also enables keyboard shortcuts for navigation using the `Control+Shift+Arrow` key combinations.

##### Parameters

###### { children, onNext, onPrev, onUp, onDown, }

`PageTurnerProps`

##### Returns

`JSX.Element`

The rendered PageTurner component with navigation controls.

<a name="reactclientvariablestogglefullscreenmd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react/client](#reactclientreadmemd) / toggleFullScreen

#### Variable: toggleFullScreen()

> `const` **toggleFullScreen**: (`elementRef`) => `void`

Defined in: Hooks/toggleFullScreen.d.ts:2

##### Parameters

###### elementRef

`Ref`\<`HTMLElement`\>

##### Returns

`void`

<a name="reactclientvariablesuseaudiomd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react/client](#reactclientreadmemd) / useAudio

#### Variable: useAudio()

> `const` **useAudio**: (`{ src, ...options }`) => `UseAudioReturn`

Defined in: Hooks/useAudio.d.ts:48

React hook for managing audio playback using the Howler.js library.

##### Parameters

###### { src, ...options }

`UseAudioOptions`

##### Returns

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

##### Example

```tsx
const { play, pause, isPlaying } = useAudio({ src: 'audio.mp3', volume: 0.5 });
```

<a name="reactclientvariablesusekeypressmd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react/client](#reactclientreadmemd) / useKeyPress

#### Variable: useKeyPress()

> `const` **useKeyPress**: (`shortcuts`) => `void`

Defined in: Hooks/useKeyPress.d.ts:21

Custom React hook that listens for specified keyboard shortcuts and triggers associated actions.

##### Parameters

###### shortcuts

`object`[]

An array of shortcut objects, each containing:
  - `shortcutKey`: A string representing the key or key combination (e.g., "Control+S", "Shift+Alt+X").
  - `action` (optional): A callback function to execute when the shortcut is pressed.

##### Returns

`void`

##### Remarks

- Supports combination shortcuts using "Shift", "Control", "Meta", and "Alt" modifiers.
- The hook attaches a `keydown` event listener to the window and cleans up on unmount.
- Only combination shortcuts (with "+") are currently handled.

##### Example

```tsx
useKeyPress([
  { shortcutKey: "Control+S", action: handleSave },
  { shortcutKey: "Shift+Alt+X", action: handleSpecialAction }
]);<|cursor|>
```

## Type Aliases

<a name="reacttype-aliasesclassespropsmd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / ClassesProps

### Type Alias: ClassesProps

> **ClassesProps** = `object`

Defined in: Types/general.d.ts:1

#### Properties

##### classes?

> `optional` **classes**: `string`[]

Defined in: Types/general.d.ts:2

<a name="reacttype-aliasesstandardpropsmd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / StandardProps

### Type Alias: StandardProps

> **StandardProps** = `object` & [`ClassesProps`](#reacttype-aliasesclassespropsmd)

Defined in: Types/general.d.ts:4

#### Type declaration

##### children

> **children**: `React.ReactNode`

##### style?

> `optional` **style**: `React.CSSProperties`

## Variables

<a name="reactvariablescodemd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / Code

### Variable: Code()

> `const` **Code**: (`{ code, language }`) => `JSX.Element`

Defined in: Text/Code.d.ts:12

Renders a syntax-highlighted code block using the specified language and theme.

#### Parameters

##### { code, language }

`CodeProps`

#### Returns

`JSX.Element`

A React component that displays the highlighted code in a styled block.

<a name="reactvariablesfiguremd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / Figure

### Variable: Figure()

> `const` **Figure**: (`props`) => `JSX.Element`

Defined in: Image/index.d.ts:23

Renders an image wrapped in a <figure> element with a <figcaption> displaying the image's alt text.

#### Parameters

##### props

`ImageProps`

The properties for the image, including `src`, `alt`, `width`, and any additional props.

#### Returns

`JSX.Element`

A React element containing the image and its caption.

<a name="reactvariablesflexmd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / Flex

### Variable: Flex()

> `const` **Flex**: (`props`) => `JSX.Element`

Defined in: Areas/index.d.ts:35

A flexible container component that renders a `<div>` with configurable flexbox properties.

#### Parameters

##### props

[`StandardProps`](#reacttype-aliasesstandardpropsmd) & `FlexProps`

The properties for the Flex component.

#### Returns

`JSX.Element`

A `<div>` element styled as a flex container.

<a name="reactvariablesformmd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / Form

### Variable: Form()

> `const` **Form**: (`props`) => `JSX.Element`

Defined in: Form/Form.d.ts:20

Renders a customizable HTML `<form>` element with optional class names, submit handler, method, and action.

#### Parameters

##### props

`FormProps`

The properties for configuring the form.

#### Returns

`JSX.Element`

The rendered form element.

<a name="reactvariablesh1md"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / H1

### Variable: H1()

> `const` **H1**: (`props`) => `JSX.Element`

Defined in: Text/Headings.d.ts:10

Renders a level 1 heading (`<h1>`) with customizable classes and children.

#### Parameters

##### props

[`StandardProps`](#reacttype-aliasesstandardpropsmd)

The standard properties for the heading component.

#### Returns

`JSX.Element`

A React element representing an `<h1>` heading.

<a name="reactvariablesh2md"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / H2

### Variable: H2()

> `const` **H2**: (`props`) => `JSX.Element`

Defined in: Text/Headings.d.ts:19

Renders an H2 heading element with customizable classes and children.

#### Parameters

##### props

[`StandardProps`](#reacttype-aliasesstandardpropsmd)

The standard properties for the heading component.

#### Returns

`JSX.Element`

A React element representing an H2 heading.

<a name="reactvariablesh3md"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / H3

### Variable: H3()

> `const` **H3**: (`props`) => `JSX.Element`

Defined in: Text/Headings.d.ts:28

Renders an `<h3>` HTML element with customizable classes and children.

#### Parameters

##### props

[`StandardProps`](#reacttype-aliasesstandardpropsmd)

The standard properties for the heading component.

#### Returns

`JSX.Element`

A React element representing an `<h3>` heading.

<a name="reactvariablesh4md"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / H4

### Variable: H4()

> `const` **H4**: (`props`) => `JSX.Element`

Defined in: Text/Headings.d.ts:37

Renders an `<h4>` HTML heading element with customizable classes and children.

#### Parameters

##### props

[`StandardProps`](#reacttype-aliasesstandardpropsmd)

The standard properties for the heading component.

#### Returns

`JSX.Element`

A React element representing an `<h4>` heading.

<a name="reactvariablesh5md"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / H5

### Variable: H5()

> `const` **H5**: (`props`) => `JSX.Element`

Defined in: Text/Headings.d.ts:46

Renders an H5 heading element with customizable classes and children.

#### Parameters

##### props

[`StandardProps`](#reacttype-aliasesstandardpropsmd)

The standard properties for the heading component.

#### Returns

`JSX.Element`

A React element representing an H5 heading.

<a name="reactvariablesh6md"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / H6

### Variable: H6()

> `const` **H6**: (`props`) => `JSX.Element`

Defined in: Text/Headings.d.ts:55

Renders a `<h6>` heading element with customizable classes and children.

#### Parameters

##### props

[`StandardProps`](#reacttype-aliasesstandardpropsmd)

The standard properties for the heading component.

#### Returns

`JSX.Element`

A React element representing an `<h6>` heading.

<a name="reactvariablesiconmd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / Icon

### Variable: Icon()

> `const` **Icon**: (`{ name, size, color, ...props }`) => `JSX.Element`

Defined in: Icon/index.d.ts:16

Renders an icon component based on the provided `name` prop.

#### Parameters

##### { name, size, color, ...props }

`IconProps`

#### Returns

`JSX.Element`

The corresponding icon component if found, otherwise a fallback message.

<a name="reactvariablesimagemd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / Image

### Variable: Image()

> `const` **Image**: (`props`) => `JSX.Element`

Defined in: Image/index.d.ts:16

Renders an image element with the provided source, alternative text, width, and additional props.

#### Parameters

##### props

`ImageProps`

The properties for the image component.

#### Returns

`JSX.Element`

A React `<img>` element with the specified attributes.

<a name="reactvariableslimd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / Li

### Variable: Li()

> `const` **Li**: (`props`) => `JSX.Element`

Defined in: Text/Body.d.ts:55

Renders a styled `<li>` (list item) element with optional custom classes and children.

#### Parameters

##### props

[`StandardProps`](#reacttype-aliasesstandardpropsmd)

The standard properties for the component.

#### Returns

`JSX.Element`

A React list item element with the specified classes and children.

<a name="reactvariableslinkmd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / Link

### Variable: Link()

> `const` **Link**: (`props`) => `JSX.Element`

Defined in: Text/Link.d.ts:19

Renders a styled anchor (`<a>`) element with customizable classes, href, target, and rel attributes.

#### Parameters

##### props

[`StandardProps`](#reacttype-aliasesstandardpropsmd) & `LinkProps`

The properties for the Link component.

#### Returns

`JSX.Element`

A React anchor element with the specified properties and children.

<a name="reactvariablesolmd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / Ol

### Variable: Ol()

> `const` **Ol**: (`props`) => `JSX.Element`

Defined in: Text/Body.d.ts:37

Functional component that renders a styled <ol> (ordered list) element.

#### Parameters

##### props

[`StandardProps`](#reacttype-aliasesstandardpropsmd)

StandardProps object containing:
  - `classes` (optional): An array of additional CSS class names to apply.
  - `children`: The content to be rendered inside the ordered list.

#### Returns

`JSX.Element`

An <ol> element with combined default and custom classes, and the provided children.

<a name="reactvariablespmd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / P

### Variable: P()

> `const` **P**: (`props`) => `JSX.Element`

Defined in: Text/Body.d.ts:19

Functional component that renders a styled `<p>` (paragraph) element.

#### Parameters

##### props

[`StandardProps`](#reacttype-aliasesstandardpropsmd)

StandardProps object containing:
  - `classes` (optional): An array of additional CSS class names to apply.
  - `children`: The content to be rendered inside the paragraph.

#### Returns

`JSX.Element`

A `<p>` element with combined default and custom classes, and the provided children.

<a name="reactvariablesprimarybuttonmd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / PrimaryButton

### Variable: PrimaryButton()

> `const` **PrimaryButton**: (`props`) => `JSX.Element`

Defined in: Form/Buttons.d.ts:14

Renders a primary styled button for form submissions.

#### Parameters

##### props

`ButtonProps` & [`StandardProps`](#reacttype-aliasesstandardpropsmd)

The properties for the button component, combining `ButtonProps` and `StandardProps`.

#### Returns

`JSX.Element`

A React element representing a styled submit button.

<a name="reactvariablesquotemd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / Quote

### Variable: Quote()

> `const` **Quote**: (`props`) => `JSX.Element`

Defined in: Text/Body.d.ts:10

Functional component that renders a styled <blockquote> element.

#### Parameters

##### props

[`StandardProps`](#reacttype-aliasesstandardpropsmd)

StandardProps object containing:
  - `classes` (optional): An array of additional CSS class names to apply.
  - `children`: The content to be rendered inside the blockquote.

#### Returns

`JSX.Element`

A <blockquote> element with combined default and custom classes, and the provided children.

<a name="reactvariablesreadingmd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / Reading

### Variable: Reading()

> `const` **Reading**: (`props`) => `JSX.Element`

Defined in: Areas/index.d.ts:8

Renders an article element with the "reading" class.

#### Parameters

##### props

[`StandardProps`](#reacttype-aliasesstandardpropsmd)

Standard React props including children to be rendered inside the article.

#### Returns

`JSX.Element`

A React element wrapping the children in an article with the appropriate class.

<a name="reactvariablessecondarybuttonmd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / SecondaryButton

### Variable: SecondaryButton()

> `const` **SecondaryButton**: (`props`) => `JSX.Element`

Defined in: Form/Buttons.d.ts:24

Renders a secondary styled button component.

#### Parameters

##### props

`ButtonProps` & [`StandardProps`](#reacttype-aliasesstandardpropsmd)

The properties for the button, combining `ButtonProps` and `StandardProps`.

#### Returns

`JSX.Element`

A React element representing a secondary button.

<a name="reactvariablessectionmd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / Section

### Variable: Section()

> `const` **Section**: (`props`) => `JSX.Element`

Defined in: Areas/index.d.ts:15

Renders a semantic HTML `<section>` element with a predefined CSS class.

#### Parameters

##### props

[`StandardProps`](#reacttype-aliasesstandardpropsmd)

Standard React props, including children to be rendered inside the section.

#### Returns

`JSX.Element`

The section element containing the provided children.

<a name="reactvariablesspanmd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / Span

### Variable: Span()

> `const` **Span**: (`props`) => `JSX.Element`

Defined in: Text/Body.d.ts:28

Functional component that renders a styled <span> element.

#### Parameters

##### props

[`StandardProps`](#reacttype-aliasesstandardpropsmd)

StandardProps object containing:
  - `classes` (optional): An array of additional CSS class names to apply.
  - `children`: The content to be rendered inside the span.

#### Returns

`JSX.Element`

A <span> element with combined default and custom classes, and the provided children.

<a name="reactvariablestextinputmd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / TextInput

### Variable: TextInput()

> `const` **TextInput**: (`props`) => `JSX.Element`

Defined in: Form/Inputs.d.ts:27

Renders a styled text input field with an associated label.

#### Parameters

##### props

`InputProps`

The properties for the text input component.

#### Returns

`JSX.Element`

A JSX element representing a labeled text input field.

#### Remarks

This component supports additional CSS classes, disabled and required states, and custom input types.

<a name="reactvariablesulmd"></a>

[**summit-kit**](#readmemd)

***

[summit-kit](#modulesmd) / [react](#reactreadmemd) / Ul

### Variable: Ul()

> `const` **Ul**: (`props`) => `JSX.Element`

Defined in: Text/Body.d.ts:46

Functional component that renders a styled <ul> (unordered list) element.

#### Parameters

##### props

[`StandardProps`](#reacttype-aliasesstandardpropsmd)

StandardProps object containing:
  - `classes` (optional): An array of additional CSS class names to apply.
  - `children`: The content to be rendered inside the unordered list.

#### Returns

`JSX.Element`

A <ul> element with combined default and custom classes, and the provided children.


<a name="globalsmd"></a>

[**summit-kit**](#readmemd)

***

# summit-kit
