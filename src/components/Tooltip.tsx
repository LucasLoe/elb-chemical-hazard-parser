import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useState } from "react";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

interface TooltipProps {
	children?: ReactNode;
	text: string;
}

const TooltipOuterFrame: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className='max-w-xl w-64 h-fit p-2 rounded-xl flex justify-center items-center bg-slate-700 z-50 relative'>
			{children}
		</div>
	);
};

const TooltipInnerFrame: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className='rounded-lg p-2 w-full outline outline-2 outline-amber-500'>{children}</div>
	);
};

const TooltipIcon = () => {
	return <FontAwesomeIcon icon={faCircleInfo} className='text-amber-500 relative w-6 h-6' />;
};

const TooltipText = ({ text }: { text: string }) => {
	return <p className='text-grey-200 text-sm font-mono'>{text}</p>;
};

const TooltipBox = ({ text, visible }: { text: string; visible: boolean }) => {
	return visible ? (
		<div className='absolute top-4 right-4'>
			<TooltipOuterFrame>
				<TooltipInnerFrame>
					<TooltipText text={text} />
				</TooltipInnerFrame>
			</TooltipOuterFrame>
		</div>
	) : null;
};

const Tooltip: React.FC<TooltipProps> = (props: TooltipProps) => {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			className='absolute top-2 right-2'
			onClick={() => setHovered(true)}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<TooltipIcon />
			<TooltipBox text={props.text} visible={hovered} />
			{props.children}
		</div>
	);
};

export default Tooltip;
