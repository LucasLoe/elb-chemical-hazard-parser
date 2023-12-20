import { pStatement } from "../types";

export default function PRow(pStatement: pStatement) {
	if (pStatement === undefined) return null;

	return (
		<div key={pStatement.code} className='w-full flex flex-row justify-around'>
			<div className='w-2/12'>
				<p>{pStatement.code}</p>
			</div>
			<div className='w-10/12 text-left'>
				<p>{pStatement.text}</p>
			</div>
		</div>
	);
}
