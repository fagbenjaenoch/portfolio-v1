import { Link } from "react-router";
import Curator from "../../assets/og -curator(1).png";
import Footer from "../Footer";
import Layout from "../Layout";
import ProjectCard from "../ProjectCard";

export default function Projects() {
	return (
		<Layout>
			<section className="px-4 lg:max-w-5xl lg:mx-auto mb-8">
				<h1 className="text-5xl font-bold lg:text-7xl">
					Projects I've worked on
				</h1>
			</section>
			<section className="px-4 lg:max-w-5xl lg:mx-auto">
				<ProjectCard
					projectName="Curator"
					img={Curator}
					description="Helping you research faster"
					link={{ github: "github.com", live: "curator.com" }}
					tags={["go", "react"]}
				/>
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
