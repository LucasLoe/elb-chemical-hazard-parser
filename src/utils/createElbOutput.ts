import { hStatement, pStatement } from "../types";
import pictograms from "../pictograms";

export default function createElbOutput(hStatements: hStatement[], pStatements: pStatement[]) {
	function pictogramElement(pictogramName: string) {
		let imgSrc = pictograms()
			.filter((p) => p.name === pictogramName)
			.map((p) => p.imgLocal)[0];

		return `<img src="${imgSrc}" width="${100}" height="${100}" />`;
	}

	function codeElement(code: string) {
		return `<td style="border: 1px solid #ddd; background-color: #ffffff; padding: 8px;">${code}</td>`;
	}

	function textElement(text: string) {
		return `<td style="border: 1px solid #ddd; background-color: #ffffff; padding: 8px;">${text}</td>`;
	}

	function pictogramElementList(pictogramArray: string[]) {
		return `<td style="border: 1px solid #ddd; background-color: #ffffff; padding: 8px;">${pictogramArray
			.map(pictogramElement)
			.join("<br>\n")}</td>`;
	}

	const hTable = `
        <thead>
            <tr>
                <th style="border: 1px solid #ddd; background-color: #ffffff; padding: 8px;">Code</th>
                <th style="border: 1px solid #ddd; background-color: #ffffff; padding: 8px;">Text</th>
                <th style="border: 1px solid #ddd; background-color: #ffffff; padding: 8px;">Pictograms</th>
            </tr>
        </thead>
        <tbody>
            ${hStatements
							.map((h) => {
								return `
                <tr>
                    ${codeElement(h.code)}
                    ${textElement(h.text)}
                    ${pictogramElementList(h.pictograms)}
                </tr>`;
							})
							.join("\n")}
        </tbody>
    `;

	const pTable = `
        <thead>
            <tr>
                <th style="border: 1px solid #ddd; background-color: #ffffff; padding: 8px;">Code</th>
                <th style="border: 1px solid #ddd; background-color: #ffffff; padding: 8px;">Text</th>
            </tr>
        </thead>
        <tbody>
            ${pStatements
							.map((p) => {
								return `
                <tr>
                    ${codeElement(p.code)}
                    ${textElement(p.text)}
                </tr>`;
							})
							.join("\n")}
        </tbody>
    `;

	return `
    <table style="border-collapse: collapse; width: 40%;" border="1">
        <caption style="text-align: center; font-weight: bold;">H Statements</caption>
        ${hTable}
    </table>

    <table style="border-collapse: collapse; width: 40%;" border="1">
        <caption style="text-align: center; font-weight: bold;">P Statements</caption>
        ${pTable}
    </table>`;
}
