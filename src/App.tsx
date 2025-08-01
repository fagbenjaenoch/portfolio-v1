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
	{
		title: "Resumé",
		href: "/resumé",
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
				<div className="mt-4">
					<ul>
						<li>
							<div>
								<h4 className="text-2xl">Graphreach</h4>
								<span className="uppercase">Full Stack Engineer</span>
								<span className="block">2022-2023</span>
								<p className="mt-4">
									At Graphreach we were building a social media automation
									solution for content creators. I really enjoyed my stay there.
									My role exposed me much better to production environments
									example of things I got experience with was monitoring and
									logging (Observability), containerization with docker and
									writing code using clean architecture.
								</p>
								<p className="mt-2">
									{/*// TODO: Replace the margin top with line height*/}
									Using React we built maintainable components with user
									accessibility and wrote tests to make sure our components
									worked as expected.
								</p>
								<p className="mt-2">
									{/*// TODO: Replace the margin top with line height*/}
									In order to enforce a similar code convention and automate
									deployments to the cloud we worked with CI/CD pipelines that
									performs tasks from verifying if the code that is being pushed
									follows the company's code conventions to automating
									deployments to the cloud, handling database provisioning as
									well.
								</p>
							</div>
						</li>
						<li className="mt-8">
							<div>
								<h4 className="text-2xl">Copyup</h4>
								<span className="uppercase">Full Stack Engineer</span>
								<span className="block">2021-2022</span>
								<p className="mt-2"></p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
