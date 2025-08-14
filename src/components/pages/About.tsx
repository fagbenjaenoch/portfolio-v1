import { Link } from "react-router";
import profilePhoto from "../../assets/me.jpg";
import Footer from "../Footer";
import Layout from "../Layout";

export default function About() {
	return (
		<Layout>
			<section className="px-4 lg:max-w-5xl lg:mx-auto pt-[10rem]">
				<h1 className="text-7xl font-bold lg:text-7xl">About Me</h1>
			</section>
			<section className="px-4 lg:max-w-5xl lg:mx-auto mt-8 relative">
				<img
					src={profilePhoto}
					alt="Enoch"
					className="w-[300px] float-right p-4"
				/>
				<p>Hi, I'm Enoch </p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum debitis
					iure facilis distinctio error, eligendi sequi maiores impedit ducimus
					aperiam voluptate eos eveniet itaque suscipit? Quia blanditiis
					repellendus quasi aut dolorum, placeat consequatur corporis. Harum eos
					voluptatum iure, quis maxime modi ipsa impedit iusto doloribus
					quibusdam alias autem enim eaque sit nostrum nihil nesciunt
					repellendus omnis architecto laborum deserunt placeat eligendi
					blanditiis culpa. Quasi saepe totam labore hic natus! Eaque sint
					tempora rem aliquam veniam autem pariatur voluptatum ex consequatur
					expedita quibusdam perferendis officia quo, neque, deserunt eius
					nostrum quas veritatis voluptates. Nostrum corrupti, magnam iste
					temporibus ipsam atque eaque eius libero quis voluptates illum
					molestiae impedit. Pariatur vero accusamus unde doloribus quis
					dignissimos optio accusantium odit consectetur, ratione magni amet
					repellendus repellat mollitia consequuntur maiores. Aspernatur ipsum
					nostrum eveniet a labore est et. Mollitia maxime rerum id nisi eius,
					saepe, minus nobis quidem veniam nemo error omnis laborum ducimus
					provident illo doloremque hic accusamus dolorem deleniti eveniet neque
					inventore, vel facere. Vero odit iure reiciendis quas placeat fugiat
					ut! Autem animi accusantium officia iusto saepe quod, vitae amet in
					quasi facilis explicabo hic? Impedit molestiae facere quas laudantium,
					est officiis placeat alias enim omnis voluptatum quaerat laboriosam
					adipisci? Ea adipisci iure consectetur architecto dolorem, corrupti
					pariatur ratione ducimus quae quisquam explicabo atque doloremque et!
					Dolor perspiciatis, repellendus aut corrupti neque obcaecati quas quae
					at maiores dolores cum, consequatur nemo! Illo et aliquid distinctio
					aliquam molestias, alias officia assumenda aut nobis vitae odit nihil
					tenetur corrupti eligendi rerum eveniet porro id explicabo vero
					laudantium. Veritatis magni consequuntur perferendis adipisci autem
					iusto qui quaerat. Commodi exercitationem unde sed labore eius. Quo
					harum laboriosam temporibus mollitia voluptatibus illo a explicabo
					omnis quam tempora consequatur odit incidunt aut perferendis dolores
					nobis, quae magnam quod natus quis, nulla blanditiis iure modi? Quas,
					eius nulla.
				</p>
				<Link to={"/"} className="underline underline-offset-4 block">
					⬅️ Go back to home
				</Link>
			</section>
			<Footer />
		</Layout>
	);
}
