const PageText = (props: { text: string }) => {
	return (
		<div className='max-w-2xl w-full mt-8 mb-16'>
			<p className='text-gray-400 mb-4 text-left'>{props.text}</p>
		</div>
	);
};

export default PageText;
