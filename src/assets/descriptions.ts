export function wikipediaSearchHoverText() {
	return "Here you can enter a search string and try to get the data in one click from the Wikipedia database. Please note, that this is not a 'fuzzy' search: you have to enter the chemical name with correct writing and whitespaces.";
}

export function manualGHSParsingHoverText() {
	return (
		"Enter codes separated by dashes. Normal hyphens, Wikipedia dashes, and H/P prefixes are accepted. Keep combined statements with '+'. Example: H225-H304 or P301+330+331-P310."
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
