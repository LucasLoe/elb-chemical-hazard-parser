export default function parseWikipediaInput(input: string) {
	return input
		.replace(/\[.*?\]/g, "")
		.replace(/[\u200B-\u200D\uFEFF]/g, "")
		.replace(/[‐‑‒–—−]/g, "-")
		.split(/\s*-\s*/)
		.map((group) => group.trim().replace(/\b[HP](?=\d{3})/gi, ""))
		.filter(Boolean);
}
