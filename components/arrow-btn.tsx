
const ArrowBtn = ({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) => (
	<a
		href={href}
		className="group inline-flex items-center gap-2 rounded-none border border-line bg-transparent px-5 py-[11px] text-[15px] font-medium tracking-[-0.005em] text-ink transition-colors hover:border-ink"
	>
		{children}
		<span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
	</a>
);

export default ArrowBtn;
