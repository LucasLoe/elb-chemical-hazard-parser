import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useState } from "react";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

interface TooltipProps {
	children?: ReactNode;
	text: string;
}

const TooltipOuterFrame: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className='relative z-50 flex h-fit w-72 max-w-[calc(100vw-3rem)] items-center justify-center border border-border bg-popover p-2 text-popover-foreground shadow-[0_20px_80px_oklch(0_0_0/0.35)]'>
			{children}
		</div>
	);
};

const TooltipInnerFrame: React.FC<{ children: ReactNode }> = ({ children }) => {
	return <div className='w-full border border-primary/70 p-3'>{children}</div>;
};

const TooltipIcon = () => {
	return <FontAwesomeIcon icon={faCircleInfo} className='relative h-5 w-5 text-primary' />;
};

const TooltipText = ({ text }: { text: string }) => {
	return <p className='font-mono text-xs leading-5 text-popover-foreground'>{text}</p>;
};

const TooltipBox = ({ text, visible }: { text: string; visible: boolean }) => {
	return visible ? (
		<div className='absolute right-0 top-8'>
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
			className='absolute right-4 top-4 cursor-help'
			onClick={() => setHovered(true)}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			tabIndex={0}
			onFocus={() => setHovered(true)}
			onBlur={() => setHovered(false)}
		>
			<TooltipIcon />
			<TooltipBox text={props.text} visible={hovered} />
			{props.children}
		</div>
	);
};

export default Tooltip;
