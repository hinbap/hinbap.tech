"use client";

import { useState } from "react";

export default function LanguageToggle() {
	const [lang, setLang] = useState<"en" | "ko">("en");

	return (
		<div className="flex items-center gap-2">
			<span className="font-mono text-xs text-ink">EN</span>

			<button
				type="button"
				role="switch"
				aria-checked={lang === "ko"}
				aria-label="Switch language"
				onClick={() => setLang(lang === "en" ? "ko" : "en")}
				className="relative h-5 w-9 shrink-0 cursor-pointer rounded-full border border-ink bg-transparent"
			>
				<span
					className={`absolute left-[2px] top-[2px] h-3.5 w-3.5 rounded-full border border-ink bg-paper transition-transform duration-300 ease-in-out motion-reduce:transition-none ${lang === "ko" ? "translate-x-4" : "translate-x-0"
						}`}
				/>
			</button>

			<span className="font-ko text-xs text-ink">한</span>
		</div>
	);
}
