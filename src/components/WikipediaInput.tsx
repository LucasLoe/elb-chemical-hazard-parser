import { Dispatch, SetStateAction, useState } from "react";
import { getGHSHazardStatements } from "../utils/fetchWikipediaPage";
import WikipediaTextInput from "./WikipediaTextInput";
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
			console.log(res);
			if (res) {
				setStatements(res);
			}
		} catch (error) {
			console.error("Error fetching statements:", error);
		}
	}

	return (
		<div className='w-full max-w-md mx-auto flex items-center justify-center gap-4'>
			<WikipediaTextInput value={query} setValue={setQuery} title='Wiki query' />
			<button
				onClick={() => fetchStatements(query)}
				className='bg-transparent hover:bg-amber-500 font-mono text-sm text-grey-700 hover:text-white py-2 px-4 border-2 border-amber-500 hover:border-transparent rounded transform active:scale-x-75 transition-transform'
			>
				Search
			</button>
		</div>
	);
}
