import { useEffect } from "react";

export const M = {
	theme: {
		colors: {
			paper: "#FCFCFC",
			ink: "#140812",
			muted: "#6C7178",
			line: "#E0E3E7",
			accent: "#035719",
			accent2: "#449843",
		},

		fontFamily: {
			display: ["Gloock", "serif"],
			serif: ["Iowan Old Style", "Charter", "Georgia", "Times New Roman", "serif"],
			body: [
				"sans-serif",
			],
			mono: [
				"ui-monospace",
				"'JetBrains Mono'",
				"'SF Mono'",
				"Menlo",
				"monospace",
			],
		},
	}
}
function useReveal(): void {
	useEffect(() => {
		const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
		const reduced =
			typeof window.matchMedia === "function" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		if (!els.length || reduced || !("IntersectionObserver" in window)) {
			els.forEach((el) => el.classList.add("is-in"));
			return;
		}

		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;
					const el = entry.target as HTMLElement;
					const scope = el.closest("section") || document.body;
					const group = Array.from(scope.querySelectorAll<HTMLElement>("[data-reveal]"));
					const idx = Math.max(0, group.indexOf(el));
					el.style.transitionDelay = `${Math.min(idx * 70, 350)}ms`;
					el.classList.add("is-in");
					io.unobserve(el);
				});
			},
			{ rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
		);
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
}

