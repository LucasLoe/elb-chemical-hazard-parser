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
		// click-action: copy stuff
		copy(props.elbOutput);
		// animation handling:
		setTimeout(() => {
			// Small delay to wait the animation before changing the button text
			setButtonText("Copied");
			// Set a timeout to revert button back to normal
			setTimeout(() => {
				setButtonText("Copy to Clipboard");
			}, 1000);
		}, 100);
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
