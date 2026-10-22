"use client";

import { useEffect, useState } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export default function ThemeToggle() {
	const [dark, setDark] = useState(false);

	useEffect(() => {
		setDark(document.documentElement.classList.contains("dark"));
	}, []);

	function toggleTheme() {
		const next = !dark;
		setDark(next);

		document.documentElement.classList.toggle("dark", next);
		localStorage.setItem("theme", next ? "dark" : "light");
	}

	return (
		<div className="flex items-center gap-2 text-ink">
			<IoSunnyOutline size={14} />

			<button
				type="button"
				role="switch"
				aria-checked={dark}
				aria-label="Toggle dark mode"
				onClick={toggleTheme}
				className="relative h-5 w-9 shrink-0 cursor-pointer rounded-full border border-ink bg-transparent"
			>
				<span
					className={`absolute left-[2px] top-[2px] h-3.5 w-3.5 rounded-full border border-ink bg-paper transition-transform duration-300 ease-in-out motion-reduce:transition-none ${dark ? "translate-x-4" : "translate-x-0"
						}`}
				/>
			</button>

			<IoMoonOutline size={14} />
		</div>
	);
}
