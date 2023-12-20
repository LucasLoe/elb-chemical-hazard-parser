export default function parseWikipediaInput(input: string) {
	const result: string[] = [];

	const tempInputArray = input.split(" ");

	if (tempInputArray.length > 1) tempInputArray.shift();

	const cleanedInput = tempInputArray[0];

	const groups = cleanedInput.split('​‐');

	for (const group of groups) {
		result.push(group.trim().replace(/\[.*?\]/g, ""));
	}

	return result;
}
