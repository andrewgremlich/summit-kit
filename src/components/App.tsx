import { Reading } from "@/Areas";
import { TextInput } from "@/Form";
import { H1, P } from "@/Text";

export const App = () => {
	return (
		<Reading>
			<H1>Summit Kit | React</H1>

			<P>On this page is the React Component Library for the Summit Kit.</P>

			<P>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
				earum, odio maxime ad sapiente porro neque. Dolor expedita quam sint sed
				est minima tenetur earum inventore! Pariatur ab corporis saepe?
			</P>

			<TextInput type="text" label="Text Input" />
			<TextInput type="password" label="Password Input" />
			<TextInput type="email" label="Email Input" />
		</Reading>
	);
};
