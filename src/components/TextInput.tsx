type InputProps = {
	title: string;
	value: string;
	setValue: (text: string) => void;
};

export default function TextInput(props: InputProps) {
	const { value, setValue, title } = props;
	return (
		<div className='flex w-full flex-col gap-2'>
			<label htmlFor={`id-${title}`} className='font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground'>
				{title}
			</label>
			<input
				type='text'
				name={`id-${title}`}
				id={`id-${title}`}
				className='h-11 w-full border border-input bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/50'
				value={value ?? ""}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
}
