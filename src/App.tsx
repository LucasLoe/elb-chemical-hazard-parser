import { useEffect, useState } from "react";
import "./App.css";
import WikipediaTextInput from "./components/WikipediaTextInput";
import parseWikipediaInput from "./utils/parseWikipediaInput";
import { UserData, hStatement, pStatement } from "./types";
import parseSentence from "./utils/parseSentence";
import HRow from "./components/HRow";
import { testH, testP } from "./utils/testInput";
import PRow from "./components/PRow";
import CopyToClipboardButton from "./components/CopyToClipboardButton";
import createElbOutput from "./utils/createElbOutput";

function App() {
	const [parseInputH, setParseInputH] = useState(testH());
	const [parseInputP, setParseInputP] = useState(testP());

	const [userData, setUserData] = useState<UserData>({
		hSaetze: [],
		pSaetze: [],
		elbOutput: "",
	});

	useEffect(() => {
		const hTempArray = parseWikipediaInput(parseInputH)
			.map((h) => parseSentence("h", h) as hStatement)
			.filter((h) => h !== undefined) as hStatement[];

		const pTempArray = parseWikipediaInput(parseInputP)
			.map((p) => parseSentence("p", p) as pStatement)
			.filter((p) => p !== undefined) as pStatement[];

		setUserData((userData) => ({
			...userData,
			hSaetze: hTempArray,
			pSaetze: pTempArray,
			elbOutput: createElbOutput(hTempArray, pTempArray),
		}));
	}, [parseInputH, parseInputP]);

	return (
		<>
			<h1 className='text-4xl mt-4 mb-12 font-mono tracking-wider font-light'>
				Wikipedia to eLab generator
			</h1>
			<div className='max-w-2xl w-full mt-8 mb-16'>
				<p className='text-gray-400 mb-2 text-left'>
					{`1) Please enter your respective H and P code numbers below. Separate them by "-" and connect statements by "+" as used by Wikipedia.`}
				</p>
				<p className='text-gray-400 mb-4 text-left'>{`	Example: "225-304-315-316d-372+373-310`}</p>
				<p className='text-gray-400 mb-4 text-left'>{`2) Check if the rendered output matches your expectations`}</p>
				<p className='text-gray-400 mb-4 text-left'>{`3) Use the Copy-To-Clipboard button and paste it into the source code (View -> Source Code) of your ELB entry `}</p>
			</div>
			<div className='w-full my-8 flex flex-col justify-center items-center gap-4'>
				<WikipediaTextInput value={parseInputH} setValue={setParseInputH} title='H-Sätze' />
				<WikipediaTextInput value={parseInputP} setValue={setParseInputP} title='P-Sätze' />
			</div>
			<div className='my-8 mx-auto'>
				<CopyToClipboardButton elbOutput={userData.elbOutput} />
			</div>
			<div className='w-full flex flex-col gap-8 max-w-2xl'>
				<h2 className='mb-4 w-full border-b-2 border-gray-600 text-xl pb-2'>H-Sätze</h2>
				{userData.hSaetze.length != 0 && userData.hSaetze.map((h) => HRow(h))}
				<h2 className='mb-4 w-full border-b-2 border-gray-600 text-xl pb-2'>P-Sätze</h2>
				{userData.pSaetze.length != 0 && userData.pSaetze.map((p) => PRow(p))}
			</div>
		</>
	);
}

export default App;
