export type ClassesProps = {
	classes?: string[];
};

export type StandardProps = {
	children: React.ReactNode;
	style?: React.CSSProperties;
} & ClassesProps;
