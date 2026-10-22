import type { Metadata } from "next";
import {
	Noto_Sans,
	Noto_Sans_KR,
	Alegreya,
	JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
	subsets: ["latin"],
	variable: "--font-noto-sans",
	display: "swap",
});

const notoSansKR = Noto_Sans_KR({
	subsets: ["latin"],
	variable: "--font-noto-sans-kr",
	display: "swap",
});

const alegreya = Alegreya({
	subsets: ["latin"],
	variable: "--font-alegreya",
	display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
	display: "swap",
});

export const metadata: Metadata = {
	title: "hinap",
	description: "hinbap's portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`
          ${notoSans.variable}
          ${notoSansKR.variable}
          ${alegreya.variable}
          ${jetbrainsMono.variable}
					h-full
        `}
		>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
