"use client";

import { useState } from "react";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

interface Link {
	name: string;
	href: string;
}

const LINKS: Link[] = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "Articles",
		href: "/articles",
	},
	{
		name: "Projects",
		href: "/projects",
	},
	{
		name: "Schedule",
		href: "/schedule",
	},
]

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className="relative flex flex-col items-center"
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			{/* Burger icon */}
			<button
				type="button"
				aria-label="Toggle menu"
				aria-expanded={isOpen}
				aria-controls="site-menu"
				onClick={() => setIsOpen((prev) => !prev)}
				className="flex h-12 w-12 cursor-pointer items-center justify-center text-ink"
			>
				<CiMenuBurger size={24} />
			</button>

			{/* Dropdown menu */}
			<nav
				id="site-menu"
				aria-label="Main navigation"
				inert={!isOpen}
				className={`absolute top-full flex flex-col items-center gap-2 whitespace-nowrap font-mono text-sm text-ink transition-all duration-300 ease-out motion-reduce:transition-none ${isOpen
					? "visible translate-y-0 opacity-100"
					: "invisible -translate-y-2 opacity-0"
					}`}
			>

				{LINKS.map((l) => (
					<Link
						key={l.name}
						href={l.href}
						onClick={() => setIsOpen(false)}
						className="transition-opacity uppercase hover:opacity-50"
					>
						{l.name}
					</Link>
				))}
			</nav>
		</div>
	);
}
