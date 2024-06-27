import Footer from "@/components/footer";
import Header from "@/components/header";
import { getCanonicalUrl } from "@/utils";
import type { Metadata } from "next";
import { Oswald, Poppins } from "next/font/google";
import "./globals.css";

const PoppinsDefault = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "400", "300", "500", "600", "700", "800", "900"],
});
const oswaldHeader = Oswald({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "sell it",
	description:
		"sell it is a website for easy selling different products with feature of boosting a products.",
	openGraph: {
		images: [`${getCanonicalUrl()}/assets/logo-color.png`],
	},
	alternates: {
		canonical: getCanonicalUrl(),
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={PoppinsDefault.className}>
				<Header font={oswaldHeader.className} />
				{children}
				<Footer font={oswaldHeader.className} />
			</body>
		</html>
	);
}
