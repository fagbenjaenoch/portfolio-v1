import Cog from "./components/ui/Cog";

export default function App() {
	return (
		<div>
			<div className="px-4 py-6 backdrop-blur-md fixed top-0">
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
		</div>
	);
}
