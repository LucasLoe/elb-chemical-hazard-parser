import hStatements from "../hStatements";
import pStatements from "../pStatements";
import { hStatement, pStatement } from "../types";

export default function parseSentence(type: "h" | "p", code: string): hStatement | pStatement {
	let allHStatements = hStatements();
	let allPStatements = pStatements();

	if (type === "h") {
		let sentence = allHStatements.filter(
			(statement) => statement.code.replace(/[^ -~]+/g, "") === code.replace(/[^ -~]+/g, "")
		)[0];
		return sentence;
	} else {
		let sentence = allPStatements.filter(
			(statement) => statement.code.replace(/[^ -~]+/g, "") === code.replace(/[^ -~]+/g, "")
		)[0];

		return sentence;
	}
}
