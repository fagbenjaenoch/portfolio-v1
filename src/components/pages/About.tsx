import { Link } from "react-router";
import Footer from "../Footer";
import Layout from "../Layout";

export default function About() {
	return (
		<Layout>
			<section className="px-4 lg:max-w-5xl lg:mx-auto pt-[10rem]">
				<h1 className="text-7xl font-bold lg:text-7xl">About Me</h1>
			</section>
			<section className="px-4 lg:max-w-5xl lg:mx-auto">
				<Link to={"/"} className="underline underline-offset-4 block">
					⬅️ Go back to home
				</Link>
			</section>
			<Footer />
		</Layout>
	);
}
