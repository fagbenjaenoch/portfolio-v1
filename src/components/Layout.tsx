import Background from "./Background";
import Navbar from "./Navbar";

export default function Layout({
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props}>
			<Navbar />
			<div className="absolute z-1 h-[100dvh] w-[100%] text-sm lg:text-base pt-[10rem]">
				{children}
			</div>
			<Background />
		</div>
	);
}
