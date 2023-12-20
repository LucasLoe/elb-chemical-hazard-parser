import hStatements from "../hStatements";
import pStatements from "../pStatements";
import { hStatement, pStatement } from "../types";

export default function parseSentence(type: "h" | "p", code: string): hStatement | pStatement {
	let allHStatements = hStatements();
	let allPStatements = pStatements();
	console.log('database')
	for (let i = 0; i < "300+310+330".length; i++) {
		let charCode = "300+310+330".charCodeAt(i);
		console.log(`Character: ${"300+310+330"[i]}, Character Code: ${charCode}`);
	}
	console.log('copy')
	for (let i = 0; i < "301+310+330".length; i++) {
		let charCode = "301+310+330".charCodeAt(i);
		console.log(`Character: ${"301+310+330"[i]}, Character Code: ${charCode}`);
	}

	if (type === "h") {
		let sentence = allHStatements.filter(
			(statement) => statement.code.replace(/[^ -~]+/g, "") === code.replace(/[^ -~]+/g, "")
		)[0];
		return sentence;
	} else {
		let sentence = allPStatements.filter(
			(statement) => statement.code.replace(/[^ -~]+/g, "") === code.replace(/[^ -~]+/g, "")
		)[0];
		console.log(sentence);

		return sentence;
	}
}
