import { Dispatch, SetStateAction, useState } from "react";
import { getGHSHazardStatements } from "../utils/fetchWikipediaPage";
import TextInput from "./TextInput";
import { appStatus } from "../types";

type WikipediaInputProps = {
	setStatements: (statements: { hStatements: string[]; pStatements: string[] }) => void;
	setAppStatus: Dispatch<SetStateAction<appStatus>>;
};

export default function WikipediaInput(props: WikipediaInputProps) {
	const [query, setQuery] = useState("");
	const { setStatements, setAppStatus } = props;
	

	async function fetchStatements(query: string) {
		try {
			const res = await getGHSHazardStatements(query, setAppStatus);
			if (res) {
				setStatements(res);
			}
		} catch (error) {
			console.error("Error fetching statements:", error);
		}
	}

	return (
		<div className='flex w-full flex-col gap-3 sm:flex-row sm:items-end'>
			<TextInput value={query} setValue={setQuery} title='Wiki query' />
			<button
				onClick={() => fetchStatements(query)}
				className='h-11 shrink-0 border border-primary bg-primary px-5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-[background-color,transform] hover:bg-chart-2 active:translate-y-px focus:outline-none focus:ring-2 focus:ring-ring/60'
			>
				Search
			</button>
		</div>
	);
}
