import { appStatus } from "../types";

const StatusBox = ({ appStatus }: { appStatus: appStatus }) => {
	const { status, message } = appStatus;

	enum BoxColors {
		idle = "outline-gray-400",
		success = "outline-green-400",
		loading = "outline-amber-400",
		failure = "outline-red-400",
	}

	enum TextColors {
		idle = "text-gray-400",
		success = "text-green-400",
		loading = "text-amber-400",
		failure = "text-red-400",
	}

	return (
		<>
			{status !== "idle" ? (
				<div
					className={`w-full px-1 py-2 max-w-md mx-auto h-fit outline outline-2 rounded-sm ${
						BoxColors[status] || BoxColors.idle
					}`}
				>
					<p className={`font-mono text-sm ${TextColors[status] || TextColors.idle}`}>{message}</p>
				</div>
			) : null}
		</>
	);
};

export default StatusBox;
