import Menu from "@/components/menu";
import LanguageToggle from "@/components/lan-toggle";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
	return (
		<header className="absolute inset-x-0 top-0 z-50 h-20">
			{/* Theme toggle — left */}
			<div className="absolute left-8 top-6 flex h-12 items-center">
				<ThemeToggle />
			</div>

			{/* Menu — center */}
			<div className="absolute left-1/2 top-6 -translate-x-1/2">
				<Menu />
			</div>

			{/* Language toggle — right */}
			<div className="absolute right-8 top-6 flex h-12 items-center">
				<LanguageToggle />
			</div>
		</header>
	);
}
