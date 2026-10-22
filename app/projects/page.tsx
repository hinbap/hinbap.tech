import Image from "next/image";
import Header from "@/components/header";


interface Project {
	no: string;
	name: string;
	date: string;
	blurb: string;
	img: string;
	tags: string[];
	status?: string;
}

const PROJECTS: Project[] = [
	{
		no: "Exhibit A",
		name: "AquaPilot",
		date: "May 2025 ~ Present",
		blurb:
			"Software for designing siphonic roof drainage systems — pipe-network layout, hydraulic checks, and drawing export for engineers.",
		img: "/img.png",
		tags: ["TypeScript", "Geometry", "Engineering"],
		status: "In development",
	},
	{
		no: "Exhibit B",
		name: "Lattice",
		date: "May 2025 ~ Present",
		blurb:
			"An interactive linear-algebra visualizer — drag vectors, change bases, and watch the SVD become a picture instead of a formula.",
		tags: ["Rust", "WebGL", "WASM"],
		img: "/img.png",
	},
	{
		no: "Exhibit C",
		name: "Marginalia",
		date: "May 2025 ~ Present",
		blurb:
			"A reading-notes engine that turns highlights into spaced-repetition cards, with one search box across everything you've kept.",
		tags: ["Python", "SQLite", "CLI"],
		img: "/img.png",
	},
];

export default function ProjectsPage() {
	return (
		<main className="relative flex min-h-dvh flex-col overflow-x-hidden">
			<Header />
			<section id="writing" className="mt-auto w-full pt-28 pb-12 lg:mt-16 lg:pt-[18vh]">
				<div className="mx-auto w-full max-w-4xl px-8">
					<div>
						{PROJECTS.map((p) => (
							<a
								key={p.name}
								href="#"
								data-reveal
								className="group grid grid-cols items-baseline gap-8 py-[22px] text-ink transition-none max-[720px]:grid-cols-1 max-[720px]:gap-1.5 max-[720px]:py-[18px]"
							>
								<span className="font-mono text-xs tabular-nums text-accent">
									{p.date}
								</span>

								<div>
									<h3 className="m-0 font-sans text-lg tracking-[-0.005em] underline decoration-transparent decoration-[1.5px] underline-offset-4 transition-[text-decoration-color] group-hover:decoration-ink group-focus-visible:decoration-ink max-[720px]:text-base">
										{p.name}
									</h3>

									<p className="m-0 mt-1 text-sm font-light text-muted">
										{p.blurb}
									</p>

									<span className="font-mono text-xs text-muted">
										{p.tags.map((tag, index) => (
											<p key={index}>{tag}</p>
										))}
									</span>
								</div>

							</a>
						))}
					</div>
				</div>
			</section>
		</main >
	);
}


