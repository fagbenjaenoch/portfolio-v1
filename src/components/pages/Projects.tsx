import { Link } from "react-router";
import Curator from "../../assets/og -curator(1).png";
import Footer from "../Footer";
import Layout from "../Layout";

export default function Projects() {
	return (
		<Layout>
			<section className="px-4 lg:max-w-5xl lg:mx-auto mb-8">
				<h1 className="text-5xl font-bold lg:text-7xl">
					Projects I've worked on
				</h1>
			</section>
			<section className="px-4 lg:max-w-5xl lg:mx-auto">
				<div className="backdrop-blur-md border-1 border-accent rounded-2xl w-[400px] h-[300px] transition-shadow duration-300 hover:shadow-xl flex flex-col gap-8 overflow-clip group">
					<div className="p-4">
						<h3 className="text-xl">Curator</h3>
						<a href="https://link.com">Links</a>
						<p>Description</p>
					</div>
					<div className="w-[90%] h-[100%] rounded-tr-xl overflow-clip">
						<img
							src={Curator}
							alt={"alt text"}
							className="transition-transform object-cover group-hover:scale-110"
						/>
					</div>
				</div>
			</section>
			<section className="px-4 lg:max-w-5xl lg:mx-auto mt-8 flex flex-col">
				<Link to={"/"} className="underline underline-offset-4 block">
					⬅️ Go back to home
				</Link>
			</section>
			<Footer />
		</Layout>
	);
}
