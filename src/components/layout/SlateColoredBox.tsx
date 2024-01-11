import { ReactNode } from "react";

const SlateColoredBox: React.FC<{ children: ReactNode }> = ({ children }) => {
	return <div className='w-full py-8 px-2 bg-slate-800 rounded-xl relative'>{children}</div>;
};

export default SlateColoredBox