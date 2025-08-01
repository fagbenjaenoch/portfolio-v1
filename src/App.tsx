import Cog from "./components/ui/Cog";
import Github from "./components/ui/Github";
import X from "./components/ui/X";
import Time from "./components/Time";

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

type contact = {
	name: string;
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
	link: string;
};

const contacts: contact[] = [
	{
		name: "Github",
		Icon: Github,
		link: "https://github.com/fagbenjaenoch",
	},
	{
		name: "X",
		Icon: X,
		link: "https://x.com/fagbenjaenoch",
	},
];

export default function App() {
	return (
		<div>
			<section className="px-4 py-6 backdrop-blur-md fixed top-0 w-[100%] z-10 flex items-center justify-between">
				<span className="">Enoch Fagbenja</span>
				<div className="flex gap-4">
					{navlinks.map(({ title, href }) => (
						<a key={title} href={href}>
							{title}
						</a>
					))}
				</div>
			</section>
			<section className="px-4 h-[100dvh] pt-[20rem]">
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
			</section>
			<section className="px-4 py-[10rem] bg-blue-400">
				<div className="text-3xl">
					I enjoy tackling problems and learning from them.
				</div>
				<div className="mt-4">
					This has helped we deliver well in professional environments.
					Technologies I use: React, Docker, Golang, Nodejs, Hono, Bun,
					Postgres, Monogdb, Nextjs
				</div>
			</section>
			<section className="px-4 py-[4rem]">
				<h2 className="text-3xl font-bold">
					Professional Experience and Selected Projects
				</h2>
				<div className="mt-4">
					<ul>
						<li>
							<div>
								<h4 className="text-2xl">Graphreach [Link]</h4>
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
									accessibility in mind and wrote tests to make sure our
									components worked as expected.
								</p>
								<p className="mt-2">
									{/*// TODO: Replace the margin top with line height*/}
									In order to enforce a similar code convention and automate
									deployments to the cloud we worked with CI/CD pipelines that
									performed tasks from verifying if the code that is being
									pushed follows the company's code conventions to running tests
									to make sure nothing was broken during development and
									automating deployments to the cloud, handling database
									provisioning as well.
								</p>
							</div>
						</li>
						<li className="mt-8">
							<div>
								<h4 className="text-2xl">Copyup [Link]</h4>
								<span className="uppercase">Full Stack Engineer</span>
								<span className="block">2021-2022</span>
								<p className="mt-4">
									At Copyup, we built a premium lms platform for copywriters to
									learn from industry experts. I enjoyed building this project
									as it gave me significant experience with working with user
									access control and insight into frontend architecture, video
									uploading and compression techniques, payment feature
									implementation and content management.
								</p>
							</div>
						</li>
					</ul>
				</div>
			</section>
			<section className="px-4 py-12 text-center">
				<h2 className="text-3xl font-bold mb-4">
					Do I look like a good fit for your company?
				</h2>
				<a
					className="block mx-auto bg-gray-600 text-white w-fit px-4 py-4 rounded-xl"
					href="mailto:fagbenjaenoch73@gmail.com"
				>
					Send me a mail
				</a>
			</section>
			<footer className="px-4 py-8">
				<div className="flex items-center gap-6">
					{contacts.map(({ name, Icon, link }) => (
						<a key={name} href={link}>
							<Icon width={20} height={20} className="inline-block mr-1" />
							{name}
						</a>
					))}
				</div>
				<div className="flex items-center justify-between mt-[5rem]">
					<small>Built by Enoch (◠‿◠)</small>
					<span className="text-sm">
						Lagos <Time />
					</span>
				</div>
			</footer>
		</div>
	);
}
