import Header from "@/components/header";
import Socials from "@/components/socials";
import Image from "next/image";

export default function Home() {
	return (

		<div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden">
			<Header />
			<section
				id="top"
				className="relative z-10 flex flex-col items-center justify-center"
			>
				<div className="mx-auto px-8">
					<p
						data-reveal
						className="mb-5 font-mono text-xs uppercase tracking-[0.08em] text-accent"
					>
						Updated. 2026.10.21
					</p>

					<h1
						data-reveal
						className="m-0 font-serif text-[clamp(4rem,12vw,9rem)] leading-[0.92] tracking-[-0.02em] text-ink"
					>
						@hinbap
					</h1>
				</div>
			</section>

			<div className="pointer-events-none absolute inset-x-0 bottom-0">
				<div className="relative w-full">
					<Image
						src="/bird.png"
						alt="Two birds sitting on a wire"
						width={2048}
						height={202}
						className="block h-auto w-full"
					/>

					{/* Icons centered above the wire */}
					<div className="pointer-events-auto absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-full pb-[2px]">
						<Socials />
					</div>
				</div>
			</div>
		</div>
	);
}
