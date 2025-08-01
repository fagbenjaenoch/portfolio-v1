import Cog from "./components/ui/Cog";

export default function App() {
	return (
		<div>
			<div className="px-4 py-6 backdrop-blur-md fixed top-0 w-[100%] z-10">
				<span className="text-2xl">Enoch Fagbenja</span>
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
			<div className="px-4 pt-[10rem] h-[100dvh]">
				<div>I enjoy tackling problems and learning from them.</div>
				<div>
					This has helped we deliver well in professional environments.
					Technologies I use: React, Docker, Golang, Nodejs, Hono, Bun,
					Postgres, Monogdb, Nextjs
				</div>
			</div>
		</div>
	);
}
