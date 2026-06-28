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
			className='h-11 w-full border border-primary bg-primary px-5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-[background-color,transform] hover:bg-chart-2 active:translate-y-px focus:outline-none focus:ring-2 focus:ring-ring/60 md:w-56'
		>
			{buttonText}
		</button>
	);
}
