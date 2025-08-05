import Cog from "./components/ui/Cog";
import Time from "./components/Time";
import Layout from "./components/Layout";
import { contacts } from "./utils";

export default function App() {
	return (
		<Layout>
			<div className="absolute z-1 h-[100dvh] w-[100%]">
				<section className="px-4 lg:max-w-5xl lg:mx-auto h-[100dvh] pt-[20rem]">
					<h1 className="text-7xl font-bold lg:text-9xl">Software Developer</h1>
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
				<section className="px-4 py-[10rem] lg:max-w-5xl lg:mx-auto">
					<p className="text-3xl italic">
						I enjoy tackling problems, tinkering and learning from them.
					</p>
					<div className="mt-4">
						This has helped we deliver well in professional environments.
						Technologies I use: React, Docker, Golang, Nodejs, Hono, Bun,
						Postgres, Monogdb, Nextjs, Drizzle, Express, Postman, Git .
					</div>
				</section>
				<section className="px-4 py-[4rem] lg:max-w-5xl lg:mx-auto">
					<h2 className="text-3xl font-bold lg:text-5xl">Proof of Work</h2>
					<div className="mt-4">
						<ul>
							<li>
								<div>
									<h4 className="text-2xl">Graphreach [Link]</h4>
									<span className="uppercase">Full Stack Engineer</span>
									<span className="block">2022-2023</span>
									<p className="mt-4">
										At Graphreach we were building a social media automation
										solution for content creators. I really enjoyed my stay
										there. My role exposed me much better to production
										environments where I got experience with monitoring and
										logging (Observability), containerization with docker and
										writing code using clean architecture.
									</p>
									<p className="mt-2">
										Using React we built maintainable components with user
										accessibility in mind and wrote tests to make sure our
										components worked as expected.
									</p>
									<p className="mt-2">
										In order to enforce a similar code convention and automate
										deployments to the cloud we worked with CI/CD pipelines that
										performed tasks from verifying if the code that is being
										pushed follows the company's code conventions to running
										tests to make sure nothing was broken during development and
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
										At Copyup, we built a premium lms platform for copywriters
										to learn from industry experts. I enjoyed building this
										project as it gave me significant experience with working
										with user access control and insight into frontend
										architecture, video uploading and compression techniques,
										payment feature implementation and content management.
									</p>
									<p className="mt-2">
										I also got hands-on experience with visualization of data in
										react using [visualization library] and data aggregation and
										pipelines in MongoDB.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</section>
				<section className="px-4 py-[10rem] text-center">
					<h2 className="text-3xl font-bold mb-4 lg:text-5xl lg:mb-8">
						Do I look like a good fit for your company?
					</h2>
					<a
						className="block mx-auto bg-secondary text-bg w-fit px-4 py-4 rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
						href="mailto:fagbenjaenoch73@gmail.com?subject=Interested%20to%20work%20with%20you."
					>
						I'd love to work with you!
					</a>
				</section>
				<footer className="px-4 py-8 lg:max-w-5xl lg:mx-auto">
					<div className="flex items-center gap-6">
						{contacts.map(({ name, Icon, link }) => (
							<a key={name} href={link}>
								<Icon
									width={20}
									height={20}
									className="inline-block mr-1 fill-current"
								/>
								{name}
							</a>
						))}
					</div>
					<div className="flex items-center justify-between mt-[5rem]">
						<small>Built with a step out of comfort</small>
						<span className="text-sm">
							Lagos <Time />
						</span>
					</div>
					<div className="text-center text-sm">
						<p>Scrolled down here? 👀 You're a legend!</p>
						<p className="opacity-70 mt-4">
							©Enoch Fagbenja. All Rights reserved
						</p>
					</div>
				</footer>
			</div>
		</Layout>
	);
}
