import Cog from "./components/ui/Cog";

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
];

export default function App() {
	return (
		<div>
			<div className="px-4 py-6 backdrop-blur-md fixed top-0 w-[100%] z-10 flex items-center justify-between">
				<span className="">Enoch Fagbenja</span>
				<div className="flex gap-4">
					{navlinks.map(({ title, href }) => (
						<a key={title} href={href}>
							{title}
						</a>
					))}
					<a href="/resumé" className="cursor-pointer">
						Resumé
					</a>
				</div>
			</div>
			<div className="px-4 h-[100dvh] pt-[20rem]">
				<h1 className="text-7xl font-bold">Software Developer</h1>
				<div className="flex flex-col absolute bottom-[5rem] right-[8rem]">
					<p className="text-2xl uppercase flex items-center gap-4">
						Open to work
						<Cog
							className="will-change-transform animate-slow-spin"
							width={25}
							height={25}
						/>
					</p>
					<span className="text-sm">Based in Lagos</span>
				</div>
			</div>
			<div className="px-4 py-[10rem] bg-blue-400">
				<div className="text-3xl">
					I enjoy tackling problems and learning from them.
				</div>
				<div className="mt-4">
					This has helped we deliver well in professional environments.
					Technologies I use: React, Docker, Golang, Nodejs, Hono, Bun,
					Postgres, Monogdb, Nextjs
				</div>
			</div>
			<div className="px-4 py-[4rem]">
				<h2 className="text-3xl font-bold">
					Professional Experience and Selected Projects
				</h2>
			</div>
		</div>
	);
}
