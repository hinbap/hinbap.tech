import Header from "@/components/header";

interface Schedule {
	id: string,
	name: string,
	plan: string,
	altered: string,
	link: string | null,
}

const SCHEDULES: Schedule[] = [
	{
		id: "2026-10-22",
		name: "Oct 22nd, 2026",
		plan: "Finish Portfolio",
		altered: "",
		link: null,
	},

	{
		id: "2026-10-23",
		name: "Oct 23rd, 2026",
		plan: "Finish Portfolio",
		altered: "",
		link: null,
	},
]


export default function SchedulePage() {
	return (
		<main className="relative flex min-h-dvh flex-col overflow-x-hidden">
			<Header />
			<section
				id="schedule"
				className="mt-auto w-full pt-28 pb-12 lg:mt-16 lg:pt-[18vh]"
			>

				{SCHEDULES.map((s, index) => (

					<div key={s.id} className="flex justify-center items-baseline gap-10 pt-2">

						<span className="font-mono text-xs tabular-nums text-accent">
							<a href={`${s.link}`}>
								{index + 1}
							</a>
						</span>
						<span className="font-sans text-xs tabular-nums text-ink">
							{s.name}
						</span>

						<p className="font-sans m-0 mt-1 text-xs text-muted">
							{s.plan}
						</p>
						{s.altered}
					</div>
				))}
			</section>
		</main>
	)
}
