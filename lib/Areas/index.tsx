import type { StandardProps } from "@/Types/general";

import classes from "./styles.module.css";

export const Reading = (props: StandardProps) => {
	return <article className={classes.reading}>{props.children}</article>;
};

export const Section = (props: StandardProps) => {
  return <section className={classes.section}>{props.children}</section>;
};