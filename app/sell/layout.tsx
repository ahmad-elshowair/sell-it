import { getCanonicalUrl } from "@/utils";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "sell it - add product",
	description: "add your product to sell it.",
	openGraph: {
		images: [`${getCanonicalUrl()}/assets/logo-color.png`],
	},
	alternates: {
		canonical: `/products/add-product`,
	},
};
function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}

export default Layout;
