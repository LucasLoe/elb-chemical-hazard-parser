import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useState } from "react";

interface TooltipProps {
	children?: ReactNode;
	text: string;
}

const TooltipOuterFrame: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className='w-32 h-fit p-4 rounded-xl flex justify-center items-center bg-slate-700'>
			{children}
		</div>
	);
};

const TooltipInnerFrame: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className='rounded-xl p-2 w-full outline outline-2 outline-amber-500'>{children}</div>
	);
};

const TooltipIcon = () => {
	return <FontAwesomeIcon icon={"circle-info"} className='text-amber-500 relative' />;
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
		<div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
			<TooltipIcon />
			<TooltipBox text={props.text} visible={hovered} />
			{props.children}
		</div>
	);
};

export default Tooltip;
