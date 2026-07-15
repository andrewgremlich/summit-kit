import {
	Code,
	Figure,
	Flex,
	Form,
	Grid,
	GridHeader,
	GridRow,
	Heading,
	Icon,
	Image,
	Input,
	Li,
	Link,
	Ol,
	P,
	PageTurner,
	PrimaryButton,
	Quote,
	Reading,
	SecondaryButton,
	Section,
	Select,
	Span,
	setTheme,
	toggleTheme,
	Ul,
} from "../../src/react/index.ts";

function Example({
	label,
	children,
}: {
	label: string;
	children: React.ReactNode;
}) {
	return (
		<div className="demo-example">
			<span className="demo-label">{label}</span>
			{children}
		</div>
	);
}

export function App() {
	return (
		<Reading>
			<header className="demo-header">
				<h1>Summit Kit</h1>
				<span className="demo-badge">React</span>
				<a href="../">← All demos</a>
			</header>

			<div className="demo-toolbar">
				<PrimaryButton onClick={() => toggleTheme()}>
					Toggle theme
				</PrimaryButton>
				<SecondaryButton onClick={() => setTheme("system")}>
					System
				</SecondaryButton>
			</div>

			<Section>
				<Heading level={2}>Text</Heading>
				<Example label="Headings">
					<Heading level={1}>Heading 1</Heading>
					<Heading level={2}>Heading 2</Heading>
					<Heading level={3}>Heading 3</Heading>
				</Example>
				<Example label="Body">
					<P>
						A paragraph with a <Link href="#">link</Link> and a{" "}
						<Span>span</Span>.
					</P>
					<Quote>A blockquote for emphasis.</Quote>
					<Ol>
						<Li>First</Li>
						<Li>Second</Li>
					</Ol>
					<Ul>
						<Li>Bullet</Li>
					</Ul>
				</Example>
				<Example label="Code (Shiki)">
					<Code language="tsx" code={'const greet = () => "hi";'} />
				</Example>
			</Section>

			<Section>
				<Heading level={2}>Layout</Heading>
				<Example label="Flex">
					<Flex gap={12} items="center">
						<PrimaryButton>One</PrimaryButton>
						<SecondaryButton>Two</SecondaryButton>
					</Flex>
				</Example>
				<Example label="Grid">
					<Grid cols={3} gap={8}>
						<GridHeader headers={["A", "B", "C"]} />
						<GridRow>
							<span>1</span>
							<span>2</span>
							<span>3</span>
						</GridRow>
					</Grid>
				</Example>
			</Section>

			<Section>
				<Heading level={2}>Form</Heading>
				<Example label="Inputs">
					<Form>
						<Input id="name" type="text" label="Name" />
						<Select
							label="Pick one"
							options={[
								{ value: "a", label: "Alpha" },
								{ value: "b", label: "Beta" },
							]}
						/>
						<Flex gap={8}>
							<PrimaryButton>Submit</PrimaryButton>
							<SecondaryButton>Cancel</SecondaryButton>
						</Flex>
					</Form>
				</Example>
			</Section>

			<Section>
				<Heading level={2}>Media</Heading>
				<Example label="Icon">
					<Flex gap={12}>
						<Icon name="Mountain" aria-label="mountain" />
						<Icon name="Tent" aria-label="tent" />
						<Icon name="TreePine" aria-label="tree" />
					</Flex>
				</Example>
				<Example label="Image / Figure">
					<Figure
						src="https://placehold.co/240x120"
						alt="placeholder"
						width={240}
						caption="A captioned figure"
					/>
				</Example>
			</Section>

			<Section>
				<Heading level={2}>Interactions</Heading>
				<Example label="PageTurner (Ctrl+Shift+Arrows)">
					<PageTurner onNext={() => {}} onPrev={() => {}}>
						<P>Page content with navigation arrows.</P>
					</PageTurner>
				</Example>
			</Section>
		</Reading>
	);
}
