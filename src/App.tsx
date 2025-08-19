import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Cog from "./components/ui/Cog";

export default function App() {
	return (
		<Layout>
			<div className="absolute z-1 h-[100dvh] w-[100%]">
				<section className="px-4 lg:max-w-5xl lg:mx-auto h-[100dvh] pt-[10rem] lg:pt-[5rem]">
					<h1 className="text-7xl font-bold lg:text-9xl">Software Developer</h1>
					<div className="flex gap-4 absolute bottom-10 right-8 lg:bottom-[5rem] lg:right-[8rem]">
						<div className="space-y-[-5px] lg:space-y-0">
							<h3 className="text-lg lg:text-2xl uppercase">Open to work</h3>
							<span className="text-xs lg:text-sm inline-block">
								Based in Lagos
							</span>
						</div>
						<Cog
							className="will-change-transform animate-slow-spin"
							width={25}
							height={25}
						/>
					</div>
				</section>
				<section className="px-4 py-[10rem] lg:max-w-5xl lg:mx-auto space-y-4">
					<p>
						I'm Enoch and I enjoy using computers. I've been fiddling around
						with them for over a decade and writing programs on them for half
						the time.
					</p>
					<div>
						<p>My philosophy is:</p>
						<p className="text-3xl italic">
							tackling problems, tinkering and learning from them.
						</p>
					</div>
					<p>
						For me, it's all about learning and growth. Sometimes, it requires
						coming out of my comfort zone and that's fine. This has helped me
						deliver well in professional environments.
					</p>
					<div className="mt-4">
						Here are the technologies I use: React, Docker, Golang, Nodejs,
						Hono, Bun, Postgres, Monogdb, Nextjs, Drizzle, Express, Hoppscotch,
						Git (and a few others. Dosen't really matter, right?)
					</div>
				</section>
				<section className="px-4 py-[4rem] lg:max-w-5xl lg:mx-auto">
					<span className="inline-block text-secondary-muted ml-1">
						Here's what matters
					</span>
					<h2 className="text-3xl font-bold lg:text-5xl mt-[-5px]">
						Proof of Work
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
										solution for content creators. I really enjoyed my stay
										there. My role exposed me much better to production
										environments where I got experience with monitoring and
										logging (Observability), containerization with docker and
										writing code using clean architecture.
									</p>
									<p className="mt-2">
										Using React we built maintainable components with user
										accessibility in mind and wrote tests to ensure our
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
						Looking for a new hire?
					</h2>
					<a
						className="block mx-auto bg-secondary text-bg w-fit p-3 lg:p-4 rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
						href="mailto:fagbenjaenoch73@gmail.com?subject=Interested%20to%20work%20with%20you."
					>
						Hit me up!
					</a>
				</section>
				<Footer showAppreciationText />
			</div>
		</Layout>
	);
}
