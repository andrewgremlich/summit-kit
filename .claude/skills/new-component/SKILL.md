---
name: new-component
description: Scaffolds a new Summit Kit component with correct structure, types, and CSS module. Invoke with /new-component <ComponentName> <server|client>.
argument-hint: <ComponentName> <server|client>
---

Scaffold a new Summit Kit component based on $ARGUMENTS.

Parse $ARGUMENTS as: `<ComponentName> <server|client>`

## Steps

1. Determine the target directory:
   - `server` → `src/react/server/<ComponentName>/`
   - `client` → `src/react/client/<ComponentName>/`

2. Create `index.tsx` using this template (replace `<ComponentName>` throughout):

```tsx
import type { StandardProps } from "../Types/general.ts";
import { cx } from "../../utils/cx.ts";
import classes from "./styles.module.css";

type <ComponentName>Props = StandardProps & {
	// add component-specific props here
};

export const <ComponentName> = (props: <ComponentName>Props) => {
	return (
		<div className={cx(classes.root, props.classes)} style={props.style}>
			{props.children}
		</div>
	);
};
```

3. Create `styles.module.css` in the same directory:

```css
.root {
	/* add styles here */
}
```

4. Add the export to the appropriate entry index:
   - server: append `export * from "./<ComponentName>/index.tsx";` to `src/react/server/index.ts`
   - client: append `export { <ComponentName> } from "./<ComponentName>/index.tsx";` to `src/react/client/index.ts`

5. Confirm what was created and remind the user to run `npm run build` to validate.

## Conventions
- Indentation: tabs
- Quotes: double
- No inline styles unless setting CSS custom properties
- Colors must reference CSS custom properties from `src/styles/colors.css`
