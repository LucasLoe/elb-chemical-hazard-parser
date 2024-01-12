import { ReactNode } from "react";

const FlexColumnLayoutBox = ({ children }: { children: ReactNode }) => {
	return <div className='w-full flex flex-col justify-center items-center gap-8'> {children} </div>;
};

export default FlexColumnLayoutBox;
