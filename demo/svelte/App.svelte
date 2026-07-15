<script lang="ts">
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
		Input,
		Li,
		Link,
		Ol,
		P,
		PageTurner,
		PrimaryButton,
		Quote,
		Reading,
		Section,
		SecondaryButton,
		Select,
		setTheme,
		Span,
		toggleTheme,
		Ul,
	} from "../../src/svelte/index.ts";
</script>

<Reading>
	<header class="demo-header">
		<h1>Summit Kit</h1>
		<span class="demo-badge">Svelte</span>
		<a href="../">← All demos</a>
	</header>

	<div class="demo-toolbar">
		<PrimaryButton onclick={() => toggleTheme()}>Toggle theme</PrimaryButton>
		<SecondaryButton onclick={() => setTheme("system")}>System</SecondaryButton>
	</div>

	<Section>
		<Heading level={2}>Text</Heading>
		<div class="demo-example">
			<span class="demo-label">Headings</span>
			<Heading level={1}>Heading 1</Heading>
			<Heading level={2}>Heading 2</Heading>
			<Heading level={3}>Heading 3</Heading>
		</div>
		<div class="demo-example">
			<span class="demo-label">Body</span>
			<P>
				A paragraph with a <Link href="#">link</Link> and a <Span>span</Span>.
			</P>
			<Quote>A blockquote for emphasis.</Quote>
			<Ol><Li>First</Li><Li>Second</Li></Ol>
			<Ul><Li>Bullet</Li></Ul>
		</div>
		<div class="demo-example">
			<span class="demo-label">Code (Shiki)</span>
			<Code language="ts" code={'const greet = () => "hi";'} />
		</div>
	</Section>

	<Section>
		<Heading level={2}>Layout</Heading>
		<div class="demo-example">
			<span class="demo-label">Flex</span>
			<Flex gap={12} items="center">
				<PrimaryButton>One</PrimaryButton>
				<SecondaryButton>Two</SecondaryButton>
			</Flex>
		</div>
		<div class="demo-example">
			<span class="demo-label">Grid</span>
			<Grid cols={3} gap={8}>
				<GridHeader headers={["A", "B", "C"]} />
				<GridRow>
					<span>1</span><span>2</span><span>3</span>
				</GridRow>
			</Grid>
		</div>
	</Section>

	<Section>
		<Heading level={2}>Form</Heading>
		<div class="demo-example">
			<span class="demo-label">Inputs</span>
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
		</div>
	</Section>

	<Section>
		<Heading level={2}>Media</Heading>
		<div class="demo-example">
			<span class="demo-label">Icon</span>
			<Flex gap={12}>
				<Icon name="Mountain" aria-label="mountain" />
				<Icon name="Tent" aria-label="tent" />
				<Icon name="TreePine" aria-label="tree" />
			</Flex>
		</div>
		<div class="demo-example">
			<span class="demo-label">Image / Figure</span>
			<Figure
				src="https://placehold.co/240x120"
				alt="placeholder"
				width={240}
				caption="A captioned figure"
			/>
		</div>
	</Section>

	<Section>
		<Heading level={2}>Interactions</Heading>
		<div class="demo-example">
			<span class="demo-label">PageTurner (Ctrl+Shift+Arrows)</span>
			<PageTurner onNext={() => {}} onPrev={() => {}}>
				<P>Page content with navigation arrows.</P>
			</PageTurner>
		</div>
	</Section>
</Reading>
