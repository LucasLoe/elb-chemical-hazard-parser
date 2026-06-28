import { hStatement, pStatement } from "../types";
import { HRow, PRow } from "./GHSDisplayRow";

type GHSDisplayBoxProps = {
	hStatements: hStatement[];
	pStatements: pStatement[];
};

const GHSDisplayBox = (props: GHSDisplayBoxProps) => {
	const { hStatements, pStatements } = props;
	return (
		<div className='flex w-full flex-col gap-10'>
			<h2 className='border-b border-border pb-3 font-mono text-xs uppercase tracking-[0.28em] text-primary'>H-Sätze</h2>
			{hStatements.length != 0 ? (
				hStatements.map((h) => HRow(h))
			) : (
				<p className='border border-dashed border-border bg-background p-5 text-sm text-muted-foreground'>
					No H-Statements found for your chemical.
				</p>
			)}
			<h2 className='border-b border-border pb-3 font-mono text-xs uppercase tracking-[0.28em] text-primary'>P-Sätze</h2>
			{pStatements.length != 0 ? (
				pStatements.map((p) => PRow(p))
			) : (
				<p className='border border-dashed border-border bg-background p-5 text-sm text-muted-foreground'>
					No P-Statements found for your chemical.
				</p>
			)}
		</div>
	);
};

export default GHSDisplayBox;
