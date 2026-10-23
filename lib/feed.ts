import { Feed } from "feed";

export type FeedEntry = {
	id: string;
	type: "article" | "project";
	title: string;
	description: string;
	url: string;
	publishedAt: Date;
	updatedAt?: Date;
	tags: string[];
};

const feeds: FeedEntry[] = [
	{
		id: "article:made-sense-to-me",
		type: "article",
		title: "It Made Sense to Me",
		description: "The story of Aquapilot and the lessons I learned about turning an idea into working software, collaborating with others, and building something people actually use.",
		url: "/writing/imstm",
		publishedAt: new Date("2026-10-22T12:00:00Z"),
		tags: ["Software"],
	},
	{
		id: "project:aquapilot",
		type: "project",
		title: "AquaPilot",
		description: " to pressure calculations...",
		url: "/projects/aquapilot",
		publishedAt: new Date("2026-10-21T12:00:00Z"),
		tags: ["go", "tsx", "python", "postgresql", "railway", "bernoulli's"],
	},
];

const siteUrl = "https://hinbap.tech";

export function generateRSS(
	entries: FeedEntry[],
	options: {
		title: string;
		description: string;
		feedPath: string;
	}
) {
	const feed = new Feed({
		title: options.title,
		description: options.description,
		id: siteUrl,
		link: siteUrl,
		feedLinks: {
			rss2: new URL(options.feedPath, siteUrl).href,
		},
		language: "en",
		copyright: "All rights reserved",
	});

	const sorted = [...entries].sort(
		(a, b) =>
			b.publishedAt.getTime() - a.publishedAt.getTime()
	);

	for (const entry of sorted.slice(0, 30)) {
		feed.addItem({
			id: entry.id,
			title: entry.title,
			link: new URL(entry.url, siteUrl).href,
			description: entry.description,
			date: entry.publishedAt,
			category: entry.tags.map((tag) => ({ name: tag })),
		});
	}

	return feed.rss2();
}
