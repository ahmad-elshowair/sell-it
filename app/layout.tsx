import Footer from "@/components/footer";
import Header from "@/components/header";
import { getCanonicalUrl } from "@/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
