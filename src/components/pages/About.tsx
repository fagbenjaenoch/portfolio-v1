import { contacts } from "../../utils";
import Layout from "../Layout";
import Time from "../Time";

export default function About() {
	return (
		<Layout>
			<div className="absolute z-1 h-[100dvh] w-[100%]">
				<section className="px-4 lg:max-w-5xl lg:mx-auto h-[100dvh] pt-[10rem]">
					<h1 className="text-7xl font-bold lg:text-7xl">About Me</h1>
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
						<p className="opacity-70 mt-4">
							©Enoch Fagbenja. All Rights reserved
						</p>
					</div>
				</footer>
			</div>
		</Layout>
	);
}
