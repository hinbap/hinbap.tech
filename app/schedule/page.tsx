import Header from "@/components/header";
import React from "react";

interface Schedule {
	id: string,
	name: string,
	plan: string,
	link: string | null,
}

const SCHEDULES: Schedule[] = [
	{
		id: "2026-10-22",
		name: "Oct 22",
		plan: "Finish Portfolio",
		link: null,
	},

	{
		id: "2026-10-23",
		name: "Oct 23",
		plan: "Work on Portfolio",
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

				<div className="mx-auto grid w-fit grid-cols-[40px_100px_300px] items-center gap-x-6 gap-y-3 pb-4">

					<span className="text-center font-sans font-medium text-sm tabular-nums text-ink">
						#
					</span>

					<span className="text-center font-sans font-medium text-sm tabular-nums text-ink">
						Date
					</span>

					<span className="text-center font-sans font-medium text-sm tabular-nums text-ink">
						Topic
					</span>
				</div>
				<div className="mx-auto grid w-fit grid-cols-[40px_100px_300px] items-center gap-x-6 gap-y-3">
					{SCHEDULES.map((s, index) => (
						<React.Fragment key={s.id}>

							<span className="text-center font-mono uppercase text-xs tabular-nums text-muted">
								{index + 1}
							</span>

							<span className="text-center font-mono uppercase text-xs tabular-nums text-ink">
								{s.link ? <a href={s.link}>{s.name}</a> : <p>{s.name}</p>}
							</span>

							<p className="m-0 text-center font-sans text-sm text-muted">
								{s.plan}
							</p>
						</React.Fragment>
					))}
				</div>
			</section>
		</main>
	)
}
