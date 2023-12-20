type inputProps = {
	elbOutput: string;
};

export default function CopyToClipboardButton(props: inputProps) {
	function copy(text: string) {
		navigator.clipboard.writeText(text);
	}
	return (
		<button
			onClick={() => copy(props.elbOutput)}
			className='bg-transparent hover:bg-red-500 font-mono text-grey-700 hover:text-white py-2 px-4 border-2 border-red-500 hover:border-transparent rounded'
		>
			Copy to Clipboard
		</button>
	);
}
