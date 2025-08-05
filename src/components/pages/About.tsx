import Footer from "../Footer";
import Layout from "../Layout";

export default function About() {
	return (
		<Layout>
			<div className="absolute z-1 h-[100dvh] w-[100%]">
				<section className="px-4 lg:max-w-5xl lg:mx-auto h-[100dvh] pt-[10rem]">
					<h1 className="text-7xl font-bold lg:text-7xl">About Me</h1>
				</section>

				<Footer />
			</div>
		</Layout>
	);
}
