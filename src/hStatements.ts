import { hStatement } from "./types";

export default function hStatements(): hStatement[] {
	return [
		{ code: "200", text: "Instabil, explosiv", pictograms: ["explosion"] },
		{ code: "201", text: "Explosiv, Gefahr der Massenexplosion.", pictograms: ["explosion"] },
		{
			code: "202",
			text: "Explosiv; große Gefahr durch Splitter, Spreng- und Wurfstücke.",
			pictograms: ["explosion"],
		},
		{
			code: "203",
			text: "Explosiv; Gefahr durch Feuer, Luftdruck oder Splitter, Spreng- und Wurfstücke.",
			pictograms: ["explosion"],
		},
		{
			code: "204",
			text: "Gefahr durch Feuer oder Splitter, Spreng- und Wurfstücke.",
			pictograms: ["explosion", "danger"],
		},
		{ code: "H05", text: "Gefahr der Massenexplosion bei Feuer.", pictograms: [] },
		{
			code: "206",
			text: "Gefahr durch Feuer, Druckstoß oder Sprengstücke; erhöhte Explosionsgefahr, wenn das Desensibilisierungsmittel reduziert wird.",
			pictograms: ["flame"],
		},
		{
			code: "207",
			text: "Gefahr durch Feuer oder Sprengstücke; erhöhte Explosionsgefahr, wenn das Desensibilisierungsmittel reduziert wird.",
			pictograms: ["flame"],
		},
		{
			code: "208",
			text: "Gefahr durch Feuer; erhöhte Explosionsgefahr, wenn das Desensibilisierungsmittel reduziert wird.",
			pictograms: ["flame"],
		},
		{ code: "209", text: "Explosiv.", pictograms: ["explosion"] },
		{ code: "210", text: "Sehr empfindlich.", pictograms: ["explosion"] },
		{ code: "211", text: "Kann empfindlich sein.", pictograms: ["explosion"] },
		{ code: "220", text: "Extrem entzündbares Gas.", pictograms: ["flame"] },
		{ code: "221", text: "Entzündbares Gas.", pictograms: [] },
		{
			code: "222",
			text: "Extrem entzündbares Aerosol.",
			pictograms: ["flame"],
		},
		{ code: "223", text: "Entzündbares Aerosol.", pictograms: ["flame"] },
		{
			code: "224",
			text: "Flüssigkeit und Dampf extrem entzündbar.",
			pictograms: ["flame"],
		},
		{
			code: "225",
			text: "Flüssigkeit und Dampf leicht entzündbar.",
			pictograms: ["flame"],
		},
		{
			code: "226",
			text: "Flüssigkeit und Dampf entzündbar.",
			pictograms: ["flame"],
		},
		{ code: "227", text: "Brennbare Flüssigkeit.", pictograms: [] },
		{ code: "228", text: "Entzündbarer Feststoff.", pictograms: ["flame"] },
		{
			code: "229",
			text: "Behälter steht unter Druck: kann bei Erwärmung bersten.",
			pictograms: [],
		},
		{
			code: "230",
			text: "Kann auch in Abwesenheit von Luft explosionsartig reagieren.",
			pictograms: ["flame"],
		},
		{
			code: "231",
			text: "Kann auch in Abwesenheit von Luft bei erhöhtem Druck und/oder erhöhter Temperatur explosionsartig reagieren.",
			pictograms: [],
		},
		{
			code: "232",
			text: "Kann sich bei Kontakt mit Luft spontan entzünden.",
			pictograms: ["flame"],
		},
		{
			code: "240",
			text: "Erwärmung kann Explosion verursachen.",
			pictograms: ["explosion"],
		},
		{
			code: "241",
			text: "Erwärmung kann Brand oder Explosion verursachen.",
			pictograms: ["explosion", "flame"],
		},
		{
			code: "242",
			text: "Erwärmung kann Brand verursachen.",
			pictograms: ["flame"],
		},
		{
			code: "250",
			text: "Entzündet sich in Berührung mit Luft von selbst.",
			pictograms: ["flame"],
		},
		{
			code: "251",
			text: "Selbsterhitzungsfähig; kann in Brand geraten.",
			pictograms: ["flame"],
		},
		{
			code: "252",
			text: "In großen Mengen selbsterhitzungsfähig; kann in Brand geraten.",
			pictograms: ["flame"],
		},
		{
			code: "260",
			text: "In Berührung mit Wasser entstehen entzündbare Gase, die sich spontan entzünden können.",
			pictograms: ["flame"],
		},
		{
			code: "261",
			text: "In Berührung mit Wasser entstehen entzündbare Gase.",
			pictograms: ["flame"],
		},
		{
			code: "270",
			text: "Kann Brand verursachen oder verstärken; Oxidationsmittel.",
			pictograms: ["flameCircle"],
		},
		{
			code: "271",
			text: "Kann Brand oder Explosion verursachen; starkes Oxidationsmittel.",
			pictograms: ["flameCircle"],
		},
		{
			code: "272",
			text: "Kann Brand verstärken; Oxidationsmittel.",
			pictograms: ["flameCircle"],
		},
		{
			code: "280",
			text: "Enthält Gas unter Druck; kann bei Erwärmung explodieren.",
			pictograms: ["gasCylinder"],
		},
		{
			code: "281",
			text: "Enthält tiefgekühltes Gas; kann Kälteverbrennungen oder -verletzungen verursachen.",
			pictograms: ["gasCylinder"],
		},
		{
			code: "282",
			text: "Extrem entzündbare Chemikalie unter Druck; kann bei Erwärmung explodieren.",
			pictograms: ["flame", "gasCylinder"],
		},
		{
			code: "283",
			text: "Entzündbare Chemikalie unter Druck; kann bei Erwärmung explodieren.",
			pictograms: ["flame", "gasCylinder"],
		},
		{
			code: "284",
			text: "Chemikalie unter Druck; kann bei Erwärmung explodieren.",
			pictograms: ["gasCylinder"],
		},
		{
			code: "290",
			text: "Kann gegenüber Metallen korrosiv sein.",
			pictograms: ["corrosive"],
		},
		{
			code: "300",
			text: "Lebensgefahr bei Verschlucken.",
			pictograms: ["toxic"],
		},
		{
			code: "301",
			text: "Giftig bei Verschlucken.",
			pictograms: ["toxic"],
		},
		{
			code: "302",
			text: "Gesundheitsschädlich bei Verschlucken.",
			pictograms: ["danger"],
		},
		{
			code: "303",
			text: "Kann bei Verschlucken gesundheitsschädlich sein.",
			pictograms: [],
		},
		{
			code: "304",
			text: "Kann bei Verschlucken und Eindringen in die Atemwege tödlich sein.",
			pictograms: ["cancerous"],
		},
		{
			code: "305",
			text: "Kann bei Verschlucken und Eindringen in die Atemwege gesundheitsschädlich sein.",
			pictograms: ["cancerous"],
		},
		{
			code: "310",
			text: "Lebensgefahr bei Hautkontakt.",
			pictograms: ["toxic"],
		},
		{
			code: "311",
			text: "Giftig bei Hautkontakt.",
			pictograms: ["toxic"],
		},
		{
			code: "312",
			text: "Gesundheitsschädlich bei Hautkontakt.",
			pictograms: ["danger"],
		},
		{
			code: "313",
			text: "Kann bei Hautkontakt gesundheitsschädlich sein.",
			pictograms: [],
		},
		{
			code: "314",
			text: "Verursacht schwere Verätzungen der Haut und schwere Augenschäden.",
			pictograms: ["corrosive"],
		},
		{
			code: "315",
			text: "Verursacht Hautreizungen.",
			pictograms: ["danger"],
		},
		{ code: "316", text: "Verursacht leichte Hautreizungen.", pictograms: [] },
		{
			code: "317",
			text: "Kann allergische Hautreaktionen verursachen.",
			pictograms: ["danger"],
		},
		{
			code: "318",
			text: "Verursacht schwere Augenschäden.",
			pictograms: ["corrosive"],
		},
		{
			code: "319",
			text: "Verursacht schwere Augenreizung.",
			pictograms: ["danger"],
		},
		{ code: "320", text: "Verursacht Augenreizung.", pictograms: [] },
		{
			code: "330",
			text: "Lebensgefahr bei Einatmen.",
			pictograms: ["toxic"],
		},
		{
			code: "331",
			text: "Giftig bei Einatmen.",
			pictograms: ["toxic"],
		},
		{
			code: "332",
			text: "Gesundheitsschädlich bei Einatmen.",
			pictograms: ["danger"],
		},
		{
			code: "333",
			text: "Kann bei Einatmen gesundheitsschädlich sein.",
			pictograms: [],
		},
		{
			code: "334",
			text: "Kann bei Einatmen Allergie, asthmaartige Symptome oder Atembeschwerden verursachen.",
			pictograms: ["cancerous"],
		},
		{
			code: "335",
			text: "Kann die Atemwege reizen.",
			pictograms: ["danger"],
		},
		{
			code: "336",
			text: "Kann Schläfrigkeit und Benommenheit verursachen.",
			pictograms: ["danger"],
		},
		{
			code: "340",
			text: "Kann genetische Defekte verursachen (Expositionsweg angeben, sofern schlüssig belegt ist, dass diese Gefahr bei keinem anderen Expositionsweg besteht).",
			pictograms: ["cancerous"],
		},
		{
			code: "341",
			text: "Kann vermutlich genetische Defekte verursachen (Expositionsweg angeben, sofern schlüssig belegt ist, dass diese Gefahr bei keinem anderen Expositionsweg besteht).",
			pictograms: ["cancerous"],
		},
		{
			code: "350",
			text: "Kann Krebs erzeugen (Expositionsweg angeben, sofern schlüssig belegt ist, dass diese Gefahr bei keinem anderen Expositionsweg besteht).",
			pictograms: ["cancerous"],
		},
		{
			code: "350i",
			text: "Kann bei Einatmen Krebs erzeugen.",
			pictograms: ["cancerous"],
		},
		{
			code: "351",
			text: "Kann vermutlich Krebs erzeugen (Expositionsweg angeben, sofern schlüssig belegt ist, dass diese Gefahr bei keinem anderen Expositionsweg besteht).",
			pictograms: ["cancerous"],
		},
		{
			code: "360",
			text: "Kann die Fruchtbarkeit beeinträchtigen oder das Kind im Mutterleib schädigen (konkrete Wirkung angeben, sofern bekannt) (Expositionsweg angeben, sofern schlüssig belegt ist, dass die Gefahr bei keinem anderen Expositionsweg besteht).",
			pictograms: ["cancerous"],
		},
		{
			code: "360F",
			text: "Kann die Fruchtbarkeit beeinträchtigen.",
			pictograms: ["cancerous"],
		},
		{
			code: "360D",
			text: "Kann das Kind im Mutterleib schädigen.",
			pictograms: ["cancerous"],
		},
		{
			code: "360FD",
			text: "Kann die Fruchtbarkeit beeinträchtigen. Kann das Kind im Mutterleib schädigen.",
			pictograms: ["cancerous"],
		},
		{
			code: "360Fd",
			text: "Kann die Fruchtbarkeit beeinträchtigen. Kann vermutlich das Kind im Mutterleib schädigen.",
			pictograms: ["cancerous"],
		},
		{
			code: "360Df",
			text: "Kann das Kind im Mutterleib schädigen. Kann vermutlich die Fruchtbarkeit beeinträchtigen.",
			pictograms: ["cancerous"],
		},
		{
			code: "361",
			text: "Kann vermutlich die Fruchtbarkeit beeinträchtigen oder das Kind im Mutterleib schädigen (konkrete Wirkung angeben, sofern bekannt) (Expositionsweg angeben, sofern schlüssig belegt ist, dass die Gefahr bei keinem anderen Expositionsweg besteht).",
			pictograms: ["cancerous"],
		},
		{
			code: "361f",
			text: "Kann vermutlich die Fruchtbarkeit beeinträchtigen.",
			pictograms: ["cancerous"],
		},
		{
			code: "361d",
			text: "Kann vermutlich das Kind im Mutterleib schädigen.",
			pictograms: ["cancerous"],
		},
		{
			code: "361fd",
			text: "Kann vermutlich die Fruchtbarkeit beeinträchtigen. Kann vermutlich das Kind im Mutterleib schädigen.",
			pictograms: ["cancerous"],
		},
		{
			code: "362",
			text: "Kann Säuglinge über die Muttermilch schädigen.",
			pictograms: [],
		},
		{
			code: "370",
			text: "Schädigt die Organe (oder alle betroffenen Organe nennen, sofern bekannt) (Expositionsweg angeben, sofern schlüssig belegt ist, dass diese Gefahr bei keinem anderen Expositionsweg besteht).",
			pictograms: ["cancerous"],
		},
		{
			code: "371",
			text: "Kann die Organe schädigen (oder alle betroffenen Organe nennen, sofern bekannt) (Expositionsweg angeben, sofern schlüssig belegt ist, dass diese Gefahr bei keinem anderen Expositionsweg besteht).",
			pictograms: ["cancerous"],
		},
		{
			code: "372",
			text: "Schädigt die Organe (alle betroffenen Organe nennen) bei längerer oder wiederholter Exposition (Expositionsweg angeben, wenn schlüssig belegt ist, dass diese Gefahr bei keinem anderen Expositionsweg besteht).",
			pictograms: ["cancerous"],
		},
		{
			code: "373",
			text: "Kann die Organe schädigen (alle betroffenen Organe nennen, sofern bekannt) bei längerer oder wiederholter Exposition (Expositionsweg angeben, wenn schlüssig belegt ist, dass diese Gefahr bei keinem anderen Expositionsweg besteht).",
			pictograms: ["cancerous"],
		},
		{
			code: "300+310",
			text: "Lebensgefahr bei Verschlucken oder Hautkontakt.",
			pictograms: ["toxic"],
		},
		{
			code: "300+330",
			text: "Lebensgefahr bei Verschlucken oder Einatmen.",
			pictograms: ["toxic"],
		},
		{
			code: "310+330",
			text: "Lebensgefahr bei Hautkontakt oder Einatmen.",
			pictograms: ["toxic"],
		},
		{
			code: "300+310+330",
			text: "Lebensgefahr bei Verschlucken, Hautkontakt oder Einatmen.",
			pictograms: ["toxic"],
		},
		{
			code: "301+311",
			text: "Giftig bei Verschlucken oder Hautkontakt.",
			pictograms: ["toxic"],
		},
		{
			code: "301+331",
			text: "Giftig bei Verschlucken oder Einatmen.",
			pictograms: ["toxic"],
		},
		{
			code: "311+331",
			text: "Giftig bei Hautkontakt oder Einatmen.",
			pictograms: ["toxic"],
		},
		{
			code: "301+311+331",
			text: "Giftig bei Verschlucken, Hautkontakt oder Einatmen.",
			pictograms: ["toxic"],
		},
		{
			code: "302+312",
			text: "Gesundheitsschädlich bei Verschlucken oder Hautkontakt.",
			pictograms: ["danger"],
		},
		{
			code: "302+332",
			text: "Gesundheitsschädlich bei Verschlucken oder Einatmen.",
			pictograms: ["danger"],
		},
		{
			code: "312+332",
			text: "Gesundheitsschädlich bei Hautkontakt oder Einatmen.",
			pictograms: ["danger"],
		},
		{
			code: "302+312+332",
			text: "Gesundheitsschädlich bei Verschlucken, Hautkontakt oder Einatmen.",
			pictograms: ["danger"],
		},
		{
			code: "400",
			text: "Sehr giftig für Wasserorganismen.",
			pictograms: ["ecoToxic"],
		},
		{
			code: "401",
			text: "Giftig für Wasserorganismen.",
			pictograms: [],
		},
		{
			code: "402",
			text: "Schädlich für Wasserorganismen.",
			pictograms: [],
		},
		{
			code: "410",
			text: "Sehr giftig für Wasserorganismen mit langfristiger Wirkung.",
			pictograms: ["ecoToxic"],
		},
		{
			code: "411",
			text: "Giftig für Wasserorganismen, mit langfristiger Wirkung.",
			pictograms: ["ecoToxic"],
		},
		{
			code: "412",
			text: "Schädlich für Wasserorganismen, mit langfristiger Wirkung.",
			pictograms: [],
		},
		{
			code: "413",
			text: "Kann für Wasserorganismen schädlich sein, mit langfristiger Wirkung.",
			pictograms: [],
		},
		{
			code: "420",
			text: "Schädigt die öffentliche Gesundheit und die Umwelt durch Ozonabbau in der äußeren Atmosphäre.",
			pictograms: ["danger"],
		},
	];
}
