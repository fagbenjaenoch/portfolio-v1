import Background from "./Background";
import Navbar from "./Navbar";

export default function Layout({
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props}>
			<Navbar />
			{children}
			<Background />
		</div>
	);
}
