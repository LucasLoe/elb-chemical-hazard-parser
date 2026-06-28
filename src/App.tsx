import { ReactNode, useEffect, useState } from "react";
import TextInput from "./components/TextInput";
import parseWikipediaInput from "./utils/parseWikipediaInput";
import { UserData, appStatus, hStatement, pStatement } from "./types";
import parseSentence from "./utils/parseSentence";
import CopyToClipboardButton from "./components/CopyToClipboardButton";
import createElbOutput from "./utils/createElbOutput";
import WikipediaInput from "./components/WikipediaInput";
import Tooltip from "./components/Tooltip";
import {
	WebsiteHeadingText,
	copyToClipboardExplanationText,
	introText,
	manualGHSParsingHoverText,
	wikipediaSearchHoverText,
} from "./assets/descriptions";
import GHSDisplayBox from "./components/GHSDisplayBox";
import StatusBox from "./components/StatusBox";

function ImportSection({
	title,
	description,
	tooltip,
	children,
}: {
	title: string;
	description: string;
	tooltip: string;
	children: ReactNode;
}) {
	return (
		<div className='relative text-card-foreground'>
			<Tooltip text={tooltip} />
			<div className='mb-6 pr-8'>
				<p className='mb-2 font-mono text-xs uppercase tracking-[0.28em] text-primary'>{title}</p>
				<p className='text-sm leading-6 text-muted-foreground'>{description}</p>
			</div>
			<div className='flex flex-col gap-5'>{children}</div>
		</div>
	);
}

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
		<main className='min-h-screen bg-background text-foreground lg:h-screen lg:overflow-hidden'>
			<div className='mx-auto flex min-h-screen w-full max-w-[1600px] flex-col gap-4 p-4 sm:p-6 lg:h-screen lg:flex-row lg:overflow-hidden lg:p-8'>
				<aside className='flex w-full shrink-0 flex-col gap-4 lg:h-full lg:w-[26rem] lg:overflow-y-auto'>
					<header className='border border-border bg-sidebar p-6 text-sidebar-foreground'>
						<p className='mb-4 font-mono text-xs uppercase tracking-[0.32em] text-sidebar-primary'>
							GHS Parser
						</p>
						<h1 className='text-xl font-semibold tracking-[-0.04em] text-balance sm:text-3xl'>
							{WebsiteHeadingText()}
						</h1>
						<p className='mt-5 text-sm leading-6 text-muted-foreground'>{introText()}</p>
					</header>

					<section className='border border-border bg-card p-5 shadow-[0_16px_48px_oklch(0_0_0/0.18)]'>
						<ImportSection
							title='Import chemical'
							description='Search Wikipedia by exact chemical name and pull matching H/P statements.'
							tooltip={wikipediaSearchHoverText()}
						>
							<WikipediaInput setStatements={setStatements} setAppStatus={setAppStatus} />
							<StatusBox appStatus={appStatus} />
						</ImportSection>

						<div className='my-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground'>
							<div className='h-px flex-1 bg-border' />
							<span>or</span>
							<div className='h-px flex-1 bg-border' />
						</div>

						<ImportSection
							title='Import statements'
							description='Paste H and P statement numbers manually when Wikipedia search is not exact enough.'
							tooltip={manualGHSParsingHoverText()}
						>
							<TextInput value={parseInputH} setValue={setParseInputH} title='H Statements' />
							<TextInput value={parseInputP} setValue={setParseInputP} title='P Statements' />
						</ImportSection>
					</section>
				</aside>

				<section className='min-h-0 flex-1 border border-border bg-card text-card-foreground lg:h-full lg:overflow-hidden'>
					<div className='flex h-full flex-col'>
						<header className='border-b border-border p-5 sm:p-6'>
							<div className='flex flex-col gap-5 md:flex-row md:items-center md:justify-between'>
								<div className='max-w-2xl'>
									<p className='mb-2 font-mono text-xs uppercase tracking-[0.28em] text-primary'>
										ELB Output
									</p>
									<p className='text-sm leading-6 text-muted-foreground'>
										{copyToClipboardExplanationText()}
									</p>
								</div>
								<CopyToClipboardButton elbOutput={userData.elbOutput} />
							</div>
						</header>

						<div className='min-h-0 flex-1 overflow-y-auto p-5 sm:p-6 lg:p-8'>
							<GHSDisplayBox hStatements={userData.hSaetze} pStatements={userData.pSaetze} />
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}

export default App;
