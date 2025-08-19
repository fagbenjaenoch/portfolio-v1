import Github from "./ui/Github";

interface ProjectCardProps {
	projectName: string;
	description: string;
	img: string;
	link: {
		live: string | null;
		github: string;
	};
}

export default function ProjectCard({
	projectName,
	link,
	img,
	description,
}: ProjectCardProps) {
	return (
		<div className="bg-white/20 backdrop-blur-md border-1 border-white/40 rounded-2xl w-[400px] h-[250px] transition-shadow duration-300 hover:shadow-xl flex flex-col gap-8 overflow-clip group">
			<div className="p-4">
				<div className="flex justify-between">
					<h3 className="text-2xl">{projectName}</h3>
					<div className="flex items-center gap-2">
						<a className="inline-block" href={link.github}>
							<Github width={20} />
						</a>
						<a className="inline-block" href={link.live ?? "google.com"}>
							🌐
						</a>
					</div>
				</div>
				<p className="text-secondary-muted">{description}</p>
			</div>
			<div className="w-[90%] h-[100%] rounded-tr-xl overflow-clip">
				<img
					src={img}
					alt={"alt text"}
					className="transition-transform duration-500 object-cover group-hover:scale-110"
				/>
			</div>
		</div>
	);
}
