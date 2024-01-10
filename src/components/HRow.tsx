import pictograms from "../pictograms";
import { hStatement } from "../types";

export default function HRow(hStatement: hStatement) {
	const pictogramElement = (pictogramName: string) => {
		let imgWebSrc = pictograms()
			.filter((p) => p.name === pictogramName)
			.map((p) => p.imgWeb)[0];
		return <img key={pictogramName} src={imgWebSrc} width={100} height={100} className='object-cover h-12 w-12' />;
	};

	if (hStatement === undefined) return null;

	return (
		<div key={hStatement.code} className='w-full flex flex-row'>
			<div className='w-2/12'>
				<p>{hStatement.code}</p>
			</div>
			<div className='w-7/12 text-left'>
				<p>{hStatement.text}</p>
			</div>
			<div className='w-3/12 flex flex-row justify-center items-center'>
				<p>{hStatement.pictograms.map((pictText) => pictogramElement(pictText))}</p>
			</div>
		</div>
	);
}
