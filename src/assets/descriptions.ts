export function wikipediaSearchHoverText() {
	return "Here you can enter a search string and try to get the data in one click from the Wikipedia database. Please note, that this is not a 'fuzzy' search: you have to enter the chemical name with correct writing and whitespaces.";
}

export function manualGHSParsingHoverText() {
	return (
		"Please enter your respective H and P code numbers below. Separate them by '-' and connect statements by " +
		" as used by Wikipedia. In rare cases, the combinatory P statements of Wikipedia do not follow the European Law. These will be ignored and not shown/copied. \n Example: '225-304-315-316d-372+373-310'"
	);
}

export function introText() {
	return `Start by using one of the two methods of retrieving your GHS statements: Try to fetch them from Wikipedia by chemical name or copy-paste them from Wikipedia. Click ⓘ for more information.`;
}

export function copyToClipboardExplanationText() {
	return `Use the Copy-To-Clipboard button and paste it into the source code (View -> Source Code) of your ELB entry.`;
}

export function WebsiteHeadingText(){
	return "Wikipedia to eLab Generator"
}
