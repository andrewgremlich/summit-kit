---
name: implement-todo
description: Picks an item from TODO.md and implements it. Invoke with /implement-todo or /implement-todo <keyword> to target a specific item.
argument-hint: [keyword]
---

Implement a pending item from `TODO.md`.

## Steps

1. Read `TODO.md` and list all unchecked items (`- [ ]`)
2. If $ARGUMENTS is provided, find the item whose description matches that keyword.
   Otherwise, pick the highest-priority unchecked item (top of the list).
3. State which item you are implementing and why.
4. Implement the change following Summit Kit conventions (see below).
5. Mark the item done in `TODO.md` by changing `- [ ]` to `- [x]`.
6. Use the `build-validator` agent to confirm the build passes.

## Summit Kit Conventions

- **Indentation:** tabs
- **Quotes:** double
- **Module system:** ES Modules (`import`/`export`)
- **Props:** use `StandardProps` or `ClassesProps` from `src/react/server/Types/general.ts`
- **Class merging:** use `cx()` from `src/utils/cx.ts` — no manual template literals
- **Styles:** CSS Modules co-located with the component; colors via CSS custom properties only
- **Keys in lists:** stable (index or content-derived) — never `uuid.v4()`
- **Hooks:** always include a dependency array in `useEffect`
