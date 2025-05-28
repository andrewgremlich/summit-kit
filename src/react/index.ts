import "../styles/colors.css";
import "../styles/global.css";

export * from "./Areas/index.tsx";
export * from "./Form/index.tsx";
export * from "./Types/general.ts";
export * from "./Icon/index.tsx";
export * from "./Image/index.tsx";
export * from "./Text/index.tsx";

// If you need to export other hooks, do so individually, but exclude useKeyPress for SSR safety
// export { useSomeOtherHook } from "./Hooks/useSomeOtherHook";
