import hStatements from "../hStatements";
import pStatements from "../pStatements";
import { hStatement, pStatement } from "../types";

export default function parseSentence(type: "h" | "p", code: string): hStatement | pStatement {
	const allHStatements = hStatements();
	const allPStatements = pStatements();

	if (type === "h") {
		const sentence = allHStatements.filter(
			(statement) => statement.code.replace(/[^ -~]+/g, "") === code.replace(/[^ -~]+/g, "")
		)[0];
		return sentence;
	} else {
		const sentence = allPStatements.filter(
			(statement) => statement.code.replace(/[^ -~]+/g, "") === code.replace(/[^ -~]+/g, "")
		)[0];

		return sentence;
	}
}
