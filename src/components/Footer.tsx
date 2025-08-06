import { contacts } from "../utils";
import Time from "./Time";

export default function Footer({
	showAppreciationText = false,
}: {
	showAppreciationText?: boolean;
}) {
	return (
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
				{showAppreciationText && <p>Scrolled down here? 👀 You're a legend!</p>}
				<p className="text-secondary-muted mt-4">
					©Enoch Fagbenja. All Rights reserved
				</p>
			</div>
		</footer>
	);
}
