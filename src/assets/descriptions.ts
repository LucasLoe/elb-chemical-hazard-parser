export function wikipediaSearchHoverText() {
	return "Here you can enter a search string and try to get the data in one click from the Wikipedia database. Please note, that this is not a 'fuzzy' search: you have to enter the chemical name with correct writing and whitespaces.";
}

export function manualGHSParsingHoverText() {
	return (
		"Please enter your respective H and P code numbers below. Separate them by '-' and connect statements by " +
		" as used by Wikipedia. In rare cases, the combinatory P statements of Wikipedia do not follow the European Law. These will be ignored and not shown/copied. \n Example: '225-304-315-316d-372+373-310'"
	);
}
