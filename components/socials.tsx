import { PiGithubLogoLight, PiLinkedinLogoLight, PiYoutubeLogoLight, PiPaperPlaneTiltLight } from "react-icons/pi";

const socials = [
	{
		name: "GitHub",
		href: "https://github.com/hinbap",
		icon: PiGithubLogoLight,
	},
	{
		name: "Linkedin",
		href: "https://linkedin.com/in/your_username",
		icon: PiLinkedinLogoLight,
	},
	{
		name: "Youtube",
		href: "https://linkedin.com/in/your_username",
		icon: PiYoutubeLogoLight,
	},
	{
		name: "Email",
		href: "mailto:you@example.com",
		icon: PiPaperPlaneTiltLight,
	},
];

export default function Socials() {
	return (
		<nav aria-label="Social links" className="flex items-center gap-8">
			{socials.map(({ name, href, icon: Icon }) => (
				<a
					key={name}
					href={href}
					aria-label={name}
					target={href.startsWith("http") ? "_blank" : undefined}
					rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
					className="text-ink transition-transform duration-300 ease-out hover:-translate-y-1 hover:opacity-60"
				>
					<Icon size={28} />
				</a>
			))}
		</nav>
	);
}
