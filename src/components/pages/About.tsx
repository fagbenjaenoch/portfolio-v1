import { Link } from "react-router";
import profilePhoto from "../../assets/me.jpg";
import Footer from "../Footer";
import Layout from "../Layout";

export default function About() {
	return (
		<Layout>
			<section className="px-4 lg:max-w-5xl lg:mx-auto pt-[10rem]">
				<span className="inline-block text-secondary-muted ml-4">A bit</span>
				<h1 className="text-7xl font-bold lg:text-7xl mt-[-5px]">About me</h1>
			</section>
			<section className="px-4 lg:max-w-5xl lg:mx-auto mt-8 relative">
				<div className="space-y-2 min-h-5/6">
					<img
						src={profilePhoto}
						alt="Enoch"
						className="w-[250px] float-right pl-8"
					/>
					<p>Hi, I'm Enoch and I'm fascinated by computers.</p>
					<p>
						I got the opportunity to use one when my dad got a Toshiba{" "}
						<i>circa 2010</i> and ever since then, I have constantly been awed
						by the engineering behind it.
					</p>
					<p>
						After years of dabbling as a very young enthusiast, I outgrew
						regular use and playing games (I still do!) and desired to do{" "}
						<i>more</i>.
					</p>
					<p>
						Long story cut short, during my holiday breaks in secondary school,
						I picked up Graphic Design, Video editing, PHP and MYSQL. I built a
						simple dashboard application that retrieves (or was supposed to XD)
						user mailing information and organize them. I also implemented basic
						authentication and authorization features for the app. Looking back
						in hindsight, I'm grateful I built it, it gave me the motivation to
						learn web applications further.
					</p>
					<p>
						Recently, I've worked with a few startups that built products for
						hundreds of users and it exposed me to professional environments.
					</p>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias,
						officia quasi laborum possimus sunt soluta expedita accusantium
						ullam et fugiat. Quo enim repellendus obcaecati pariatur accusantium
						magnam totam mollitia perspiciatis similique, qui doloremque illum,
						adipisci ipsam, molestiae laudantium. Dolor labore neque veniam
						delectus suscipit a accusamus quasi inventore nam voluptate,
						mollitia consequatur pariatur, nostrum corrupti repellat culpa
						corporis repudiandae ipsa ducimus, minima saepe aperiam
						exercitationem. Minus ipsa tempora rerum ex, praesentium porro unde
						tempore magnam, aliquid quod optio, repudiandae temporibus nulla
						ducimus nesciunt odio ipsam exercitationem culpa inventore suscipit
						error reiciendis aspernatur! Quam, nostrum nemo corrupti maxime ea
						repellendus modi?
					</p>
				</div>
				<Link
					to={"/"}
					className="underline underline-offset-4 inline-block mt-16"
				>
					⬅️ Go back to home
				</Link>
			</section>
			<Footer />
		</Layout>
	);
}
