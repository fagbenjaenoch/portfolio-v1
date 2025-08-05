import { Link } from "react-router";

type navlink = {
	title: string;
	href: string;
};

const navlinks: navlink[] = [
	{
		title: "About",
		href: "/about",
	},
	{
		title: "Projects",
		href: "/projects",
	},
	{
		title: "Resumé",
		href: "/resumé",
	},
];

export default function Navbar() {
	return (
		<section className="backdrop-blur-md fixed top-0 w-[100%] z-10">
			<div className="px-4 py-6 lg:max-w-5xl lg:mx-auto flex items-center justify-between">
				<Link to={"/"}>Enoch Fagbenja</Link>
				<div className="flex gap-4">
					{navlinks.map(({ title, href }) => (
						<Link key={title} to={href}>
							{title}
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
