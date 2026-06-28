import { pStatement } from "../types";
import { hStatement } from "../types";
import pictograms from "../pictograms";

export function PRow(pStatement: pStatement) {
	if (pStatement === undefined) return null;

	return (
		<div key={pStatement.code} className='grid w-full gap-3 border-b border-border/70 py-4 md:grid-cols-[7rem_1fr]'>
			<div>
				<p className='font-mono text-sm text-primary'>{pStatement.code}</p>
			</div>
			<div>
				<p className='text-sm leading-6 text-foreground'>{pStatement.text}</p>
			</div>
		</div>
	);
}

export function HRow(hStatement: hStatement) {
	const pictogramElement = (pictogramName: string) => {
		const imgWebSrc = pictograms()
			.filter((p) => p.name === pictogramName)
			.map((p) => p.imgWeb)[0];
		return (
			<img
				key={pictogramName}
				src={imgWebSrc}
				alt={pictogramName}
				width={100}
				height={100}
				className='h-12 w-12 border border-border bg-white object-cover p-1'
			/>
		);
	};

	if (hStatement === undefined) return null;

	return (
		<div key={hStatement.code} className='grid w-full gap-3 border-b border-border/70 py-4 md:grid-cols-[7rem_1fr_10rem]'>
			<div>
				<p className='font-mono text-sm text-primary'>{hStatement.code}</p>
			</div>
			<div>
				<p className='text-sm leading-6 text-foreground'>{hStatement.text}</p>
			</div>
			<div className='flex flex-row items-center gap-2 md:justify-end'>
				{hStatement.pictograms.map((pictText) => pictogramElement(pictText))}
			</div>
		</div>
	);
}
