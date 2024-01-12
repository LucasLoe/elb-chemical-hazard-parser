type InputProps = {
	title: string;
	value: string;
	setValue: (text: string) => void;
};

export default function TextInput(props: InputProps) {
	const { value, setValue, title } = props;
	return (
		<>
			<div className='relative z-0 w-full group text-slate-50 max-w-md'>
				<input
					type='text'
					step='any'
					name={`id-${title}`}
					id={`id-${title}`}
					className='block py-2.5 px-0 w-full text-md text-slate-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-amber-300 peer'
					required
					value={value ?? ""}
					onChange={(e) => setValue(e.target.value)}
				/>
				<label
					htmlFor={`id-${title}`}
					className='peer-focus:font-medium absolute text-md text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
				>
					{title}
				</label>
			</div>
		</>
	);
}
