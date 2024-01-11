import { hStatement, pStatement } from "../types";
import { HRow, PRow } from "./GHSDisplayRow";

type GHSDisplayBoxProps = {
	hStatements: hStatement[];
	pStatements: pStatement[];
};

const GHSDisplayBox = (props: GHSDisplayBoxProps) => {
	const { hStatements, pStatements } = props;
	return (
		<div className='w-full flex flex-col gap-8 max-w-2xl'>
			<h2 className='mb-4 w-full border-b-2 border-gray-600 text-xl pb-2'>H-Sätze</h2>
			{hStatements.length != 0 ? (
				hStatements.map((h) => HRow(h))
			) : (
				<p className='text-gray-400'> No H-Statements found for your chemical.</p>
			)}
			<h2 className='mb-4 w-full border-b-2 border-gray-600 text-xl pb-2'>P-Sätze</h2>
			{pStatements.length != 0 ? (
				pStatements.map((p) => PRow(p))
			) : (
				<p className='text-gray-400'> No H-Statements found for your chemical.</p>
			)}
		</div>
	);
};

export default GHSDisplayBox;
