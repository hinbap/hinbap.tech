"use client";

import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar() {
	const [query, setQuery] = useState("");

	return (
		<div className="group relative flex h-8 w-8 items-center overflow-hidden rounded-full border border-ink bg-paper transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:w-[320px] focus-within:w-[320px] max-w-full">
			<IoSearchOutline
				size={16}
				className="absolute left-3 shrink-0 text-ink"
			/>

			<input
				type="search"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Search"
				aria-label="Search"
				className="ml-12 h-full w-full min-w-0 bg-transparent pr-5 font-sans text-lg text-ink opacity-0 outline-none placeholder:text-ink/40 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
			/>
		</div>
	);
}
