import Header from "@/components/header";


interface Post {
	date: string;
	title: string;
	blurb: string;
	tag: string;
	accent?: boolean;
}


const POSTS: Post[] = [
	{
		date: "Oct 07, 2026",
		title: "Building intuition for the spectral theorem",
		blurb: "Every proof I forgot came back the moment I could draw it.",
		tag: "Math",
	},
	{
		date: "Aug 22, 2026",
		title: "A tiny lambda calculus in Rust",
		blurb: "An evaluator, a type checker, and the moment recursion stops being magic.",
		tag: "PL · Rust",
	},
	{
		date: "Jun 15, 2026",
		title: "Gradient descent, drawn by hand",
		blurb: "What actually happens when the learning rate is too big — in pencil.",
		tag: "ML",
	},
	{
		date: "Apr 02, 2026",
		title: "Notes from implementing a SAT solver",
		blurb: "CDCL without the folklore: watched literals, learnt clauses, and debugging.",
		tag: "Algorithms",
	},
	{
		date: "Feb 19, 2026",
		title: "Why I draw every algorithm I learn",
		blurb: "A sketch is a proof you can hold. Also: it sticks.",
		tag: "Sketching",
		accent: true,
	},
];

export default function ArticlesPage() {
	return (
		<main className="relative flex min-h-dvh flex-col overflow-x-hidden">
			<Header />

			<section id="writing" className="mt-auto w-full pt-28 pb-12 lg:mt-16 lg:pt-[18vh]">
				<div className="mx-auto w-full max-w-4xl px-8">
					<div>
						{POSTS.map((p) => (
							<a
								key={p.title}
								href="#"
								data-reveal
								className="group grid grid-cols-[120px_1fr_100px] items-baseline gap-8 py-[22px] text-ink transition-none max-[720px]:grid-cols-1 max-[720px]:gap-1.5 max-[720px]:py-[18px]"
							>
								<span className="font-mono text-xs tabular-nums text-accent">
									{p.date}
								</span>

								<div>
									<h3 className="m-0 font-sans text-lg tracking-[-0.005em] underline decoration-transparent decoration-[1.5px] underline-offset-4 transition-[text-decoration-color] group-hover:decoration-ink group-focus-visible:decoration-ink max-[720px]:text-base">
										{p.title}
									</h3>

									<p className="m-0 mt-1 text-sm font-light text-muted">
										{p.blurb}
									</p>
								</div>

								<span className="text-right font-mono text-xs text-muted max-[720px]:text-left">
									{p.tag}
								</span>
							</a>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}

