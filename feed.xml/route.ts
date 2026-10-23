import { generateRSS } from "@/lib/feeds";
import { getPublishedFeedEntries } from "@/lib/content";

export const dynamic = "force-static";

export async function GET() {
	const entries = await getPublishedFeedEntries();

	const xml = generateRSS(entries, {
		title: "My Portfolio — All Updates",
		description: "Writing, projects, and study updates",
		feedPath: "/feed.xml",
	});

	return new Response(xml, {
		headers: {
			"Content-Type": "application/rss+xml; charset=utf-8",
		},
	});
}
