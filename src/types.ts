export type UserData = {
	hSaetze: hStatement[];
	pSaetze: pStatement[];
	elbOutput: string;
};

export type hStatement = {
	code: string;
	text: string;
	pictograms: string[];
};

export type pStatement = {
	code: string;
	text: string;
};

export type pictogram = {
	name: string;
	imgWeb: string;
	imgLocal: string;
};
