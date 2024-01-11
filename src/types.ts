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

export type fetchStatus = "idle" | "success" | "failure" | "loading";

export type appStatus = {
	status: fetchStatus;
	message: string;
};
