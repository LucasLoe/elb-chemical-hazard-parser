export async function getGHSHazardStatements(chemical: string) {
	try {
		const response = await fetch(
			`https://en.wikipedia.org/w/api.php?origin=*&action=query&titles=${chemical}&prop=revisions&rvprop=content&format=json`,
			{
				method: "GET",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			}
		);

		const data = await response.json();

		const pages = data.query.pages;
		const pageId = Object.keys(pages)[0];
		const content = pages[pageId].revisions[0]["*"];

		const hStatements = parseGHSStatements(content, "H");
		const pStatements = parseGHSStatements(content, "P");

		const hazardStatements = {
			hStatements,
			pStatements,
		};

		return hazardStatements;
	} catch (error) {
		console.error("Error fetching Wikipedia content:", error);
		return null;
	}
}

function parseGHSStatements(content: string, type: "H" | "P") {
	/** 
	function prefixEntry(str: string, type: "H" | "P") {
		if (/^\d+$/.test(str)) {
			return type + str;
		} else {
			return str
				.split("+")
				.map((entry) => type + entry)
				.join("+");
		}
	}
	 */

	function cleanPhrasesString(str: string) {
		const ghsArr: string[] = [];

		const curlyString = str.match(/\{\{([^}]+)\}\}/);

		if (curlyString) {
			curlyString[1]
				.split("|")
				.slice(1)
				// .map((entry) => prefixEntry(entry, type))
				.map((entry) => ghsArr.push(entry));
		}

		return ghsArr;
	}

	const filteredContent = content
		.split("\n")
		.filter((entry) => entry.includes(`${type}Phrases`))[0];

	return cleanPhrasesString(filteredContent);
}
