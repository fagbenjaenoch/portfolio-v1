import Github from "./components/ui/Github";
import X from "./components/ui/X";

type contact = {
	name: string;
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
	link: string;
};

export const contacts: contact[] = [
	{
		name: "Github",
		Icon: Github,
		link: "https://github.com/fagbenjaenoch",
	},
	{
		name: "X",
		Icon: X,
		link: "https://x.com/fagbenjaenoch",
	},
];
