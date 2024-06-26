import Card from "@/components/card";
import { createClient } from "@/supabase/client";
import { notFound } from "next/navigation";

export const revalidate = 3600;
export default async function Home() {
	// const products = [
	// 	{
	// 		id: 1,
	// 		name: "Product 1",
	// 		price: 10.99,
	// 		description: "This is product 1",
	// 		image:
	// 			"https://cdn.pixabay.com/photo/2023/05/03/13/25/paste-7967719_640.jpg",
	// 	},
	// ];

	const supabase = createClient();
	const { data: products, error: productsError } = await supabase
		.from("products")
		.select();
	if (!products) {
		return notFound();
	}

	const { data: boostedProducts, error: boostedProductsError } = await supabase
		.from("products")
		.select()
		.eq("isBoosted", true);

	return (
		<main className="min-h-screen m-auto">
			<div className="px-12 py-8">
				<section className="flex flex-col xl:flex-row gap-2 xl:gap-40">
					<article className="flex flex-col sm:mb-12 xl:pt-20">
						<h2 className="text-5xl font-bold mb-16">Top Products</h2>
						<p className="text-2xl text-gray-400">
							You may pay to boost your products here 👉
						</p>
					</article>
					<article className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-12">
						{boostedProducts ? (
							boostedProducts.map((product) => (
								<Card key={`${product.name}-${product.id}`} {...product} />
							))
						) : (
							<h1 className="pt-20 text-xl font-extrabold">
								No Boosted Products yet!
							</h1>
						)}
					</article>
				</section>

				<h1 className="pl-6 py-2 relative inline-block text-4xl mt-20 mb-16 capitalize">
					<span className="text-orange-400 text-8xl">-</span>
					<span className="relative font-extrabold">All products</span>
					<span className="text-orange-400 text-8xl">-</span>
				</h1>
				<section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 xl:gap-16">
					{products.map((product) => (
						<Card key={`${product.name}-${product.id}`} {...product} />
					))}
				</section>
			</div>
		</main>
	);
}
