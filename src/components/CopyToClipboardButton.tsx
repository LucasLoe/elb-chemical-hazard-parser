import { useState } from "react";

type inputProps = {
	elbOutput: string;
};

export default function CopyToClipboardButton(props: inputProps) {
	const [buttonText, setButtonText] = useState("Copy to Clipboard");

	function copy(text: string) {
		navigator.clipboard.writeText(text);
	}

	const handleClick = () => {
		// copy stuff
		copy(props.elbOutput);
		// display "Copied" for 3 seconds and show normal button afterwards.
		setTimeout(() => {
			// Set the state to true after the delay
			setButtonText("Copied");

			// Set a timeout to revert the state back to false after 3 seconds
			setTimeout(() => {
				setButtonText("Copy to Clipboard");
			}, 3000);
		}, 50);
	};

	return (
		<button
			onClick={() => {
				handleClick();
			}}
			className=' w-56 bg-transparent hover:bg-amber-500 font-mono text-grey-700 hover:text-white py-2 px-4 border-2 border-amber-500 hover:border-transparent rounded transform active:scale-x-75 transition-transform'
		>
			{buttonText}
		</button>
	);
}
