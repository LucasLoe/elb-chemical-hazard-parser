import { appStatus } from "../types";

const StatusBox = ({ appStatus }: { appStatus: appStatus }) => {
	const { status, message } = appStatus;

	const statusStyles = {
		idle: "border-border text-muted-foreground",
		success: "border-chart-2 text-chart-2",
		loading: "border-chart-1 text-chart-1",
		failure: "border-destructive text-destructive",
	};

	return (
		status !== "idle" ? (
			<div className={`h-fit w-full border bg-background px-3 py-2 ${statusStyles[status] || statusStyles.idle}`}>
				<p className='font-mono text-xs leading-5'>{message}</p>
			</div>
		) : null
	);
};

export default StatusBox;
