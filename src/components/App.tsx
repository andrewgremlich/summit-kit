import { Reading } from "@/Areas";
import { TextInput } from "@/Form";
import { H1, H2, P } from "@/Text";

export const App = () => {
	return (
		<Reading>
			<H1>Summit Kit | React Demo</H1>

			<P>On this page is the React Component Library for the Summit Kit.</P>

			<P>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
				earum, odio maxime ad sapiente porro neque. Dolor expedita quam sint sed
				est minima tenetur earum inventore! Pariatur ab corporis saepe?
			</P>

			<H2>Form Elements</H2>

			<TextInput type="text" label="Text Input" id="text-input" />
			<TextInput type="password" label="Password Input" id="password-input" />
			<TextInput type="email" label="Email Input" id="email-input" />
		</Reading>
	);
};
