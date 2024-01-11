import { useEffect, useState } from "react";
import "./App.css";
import WikipediaTextInput from "./components/WikipediaTextInput";
import parseWikipediaInput from "./utils/parseWikipediaInput";
import { UserData, appStatus, hStatement, pStatement } from "./types";
import parseSentence from "./utils/parseSentence";
import CopyToClipboardButton from "./components/CopyToClipboardButton";
import createElbOutput from "./utils/createElbOutput";
import WikipediaInput from "./components/WikipediaInput";
import Tooltip from "./components/Tooltip";
import {
	copyToClipboardExplanationText,
	introText,
	manualGHSParsingHoverText,
	wikipediaSearchHoverText,
} from "./assets/descriptions";
import SlateColoredBox from "./components/layout/SlateColoredBox";
import PageText from "./components/text/PageText";
import Heading from "./components/text/Heading";
import GHSDisplayBox from "./components/GHSDisplayBox";
import StatusBox from "./components/StatusBox";

function App() {
	const [parseInputH, setParseInputH] = useState("");
	const [parseInputP, setParseInputP] = useState("");

	const [appStatus, setAppStatus] = useState<appStatus>({
		status: "idle",
		message: "",
	});

	const [statements, setStatements] = useState({ hStatements: [""], pStatements: [""] });

	const [userData, setUserData] = useState<UserData>({
		hSaetze: [],
		pSaetze: [],
		elbOutput: "",
	});

	useEffect(() => {
		// keep data synchronized with manual inputs
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

	useEffect(() => {
		// keep data synchronized with wikipedia search function
		const hTempArray = statements.hStatements
			.map((h) => parseSentence("h", h) as hStatement)
			.filter((h) => h !== undefined) as hStatement[];
		const pTempArray = statements.pStatements
			.map((p) => parseSentence("p", p) as pStatement)
			.filter((p) => p !== undefined) as pStatement[];

		setUserData((userData) => ({
			...userData,
			hSaetze: hTempArray,
			pSaetze: pTempArray,
			elbOutput: createElbOutput(hTempArray, pTempArray),
		}));
	}, [statements]);

	return (
		<>
			<Heading text={"Wikipedia to eLab generator"} />
			<PageText text={introText()} />
			<SlateColoredBox>
				<WikipediaInput setStatements={setStatements} setAppStatus={setAppStatus} />
				<Tooltip text={wikipediaSearchHoverText()} />
				<StatusBox appStatus={appStatus} />
			</SlateColoredBox>
			<p className='my-8 text-xl text-gray-400'>{`OR`}</p>
			<SlateColoredBox>
				<div className='w-full flex flex-col justify-center items-center gap-4'>
					<Tooltip text={manualGHSParsingHoverText()} />
					<WikipediaTextInput value={parseInputH} setValue={setParseInputH} title='H-Sätze' />
					<WikipediaTextInput value={parseInputP} setValue={setParseInputP} title='P-Sätze' />
				</div>
			</SlateColoredBox>
			<PageText text={copyToClipboardExplanationText()} />
			<div className='my-8 mx-auto'>
				<CopyToClipboardButton elbOutput={userData.elbOutput} />
			</div>
			<GHSDisplayBox hStatements={userData.hSaetze} pStatements={userData.pSaetze} />
		</>
	);
}

export default App;
