# Summit Kit

An earthy and outdoorsy opinionated component library. This will come with styles included.

[Visit the demo website!](https://summit-kit.gremlich.dev/)

## Global Styling

Import the global styling into the main entry React file with the following line.

```ts
import "summit-kit/dist/esm/summit-kit.css";
```

## Text

There are components `H1` to `H6` for headers. These accept an optional parameter `classes` to modify the original styling.

For body text, there are `P`, `Span`, and `Li` tags. These accept the same params as the header components.

```tsx
<H1 classes={['big-font']}>Hello world!</H1>
```

There is a `Link` tag, and that accepts `href`, `target`, and `rel` parameters. There are default parameter values for `target` and `rel`; `target` has the default value `_parent` and `rel` has the default value of `noopener noreferrer`. In addition to the previous parameters, the `Link` tag also accepts the parameters similar to the header tags.

There is a `Code` tag, and it imports `react-syntax-highlighter` and the `nord` style from `hljs`. That accepts a `text`, and `startingLineNumber` parameter.

## Form

There is a `Form` element that accepts `onSubmit`, `method`, and `action` parameters. The parameters `method` and `action` are meant to be used together on native HTML form actions. The parameter `onSubmit` is intended for JavaScript handling of form submissions.

There are `PrimaryButton` and `SecondaryButton`. The `PrimaryButton` has a type submit while the secondary is just a button. The buttons do have a `disabled` parameters, and it also comes with the `StandardProps` or the parameters like the Text components.

There is a `TextInput` component that can become a type text, password, or email.

```tsx
<Form
  onSubmit={() => {
    console.log("Form submitted");
  }}
>
  <TextInput type="text" label="Text Input" id="text-input" />
  <TextInput
    type="email"
    label="Email Input"
    id="email-input"
    required={true}
  />
  <TextInput
    type="password"
    label="Password Input"
    id="password-input"
  />
  <PrimaryButton>Submit</PrimaryButton>
  <SecondaryButton>Cancel</SecondaryButton>
</Form>
```

## Areas

There is a `Reading` tag. This is intended to model `max-w-prose` in TailwindCSS. The `Reading` tag has a max with of 600px at 600px viewport width and a max-width of 850px at 900px viewport width. There is also a varying padding depending on the viewport width.

There is a semantic `Section` tag with a margin bottom of 40px. This is meant to collapse with any other margin that is on an Text commponent.

```tsx
<Reading>
  <Section>
    {...}
  </Section>
</Reading>
```

There is a `Flex` component that accepts `direction`, `justify`, and `align` parameters.

## Icon

This component library also uses Feather Icons from `react-icons` NPM package. That `Icon` component accepts a `name`, `size`, and `color` parameter. The `name` will correspond to the `react-icons/fi` section.

```tsx
<Icon name="FiActivity" size={24} color="white" />
```