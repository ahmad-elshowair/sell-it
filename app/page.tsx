import Card from "@/components/card";
import { createClient } from "@/supabase/client";

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
	const { data: products, error } = await supabase.from("products").select();
	if (!products) {
		return <h1 className="text-8xl">Not Products Found!</h1>;
	}

	return (
		<main className="min-h-screen m-auto">
			<div className="px-12 py-8">
				<section className="flex flex-col xl:flex-row gap-2 xl:gap-40">
					<article className="flex flex-col sm:mb-12 xl:pt-20">
						<h2 className="text-5xl font-bold mb-16">Top Products</h2>
						<p className="text-2xl text-gray-400">
							You may pay to boost your products here!
						</p>
					</article>
					<article className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-12">
						{products.map((product) => (
							<Card key={`${product.name}-${product.id}`} {...product} />
						))}
					</article>
				</section>

				<h1 className="pl-6 py-2 relative inline-block text-4xl mt-20 mb-16 capitalize after:block after:absolute after:content-['---'] after:text-8xl after:-right-32 after:-top-6 after:text-orange-500">
					<span className="relative font-extrabold">All products</span>
				</h1>
				<section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
					{products.map((product) => (
						<Card key={`${product.name}-${product.id}`} {...product} />
					))}
				</section>
			</div>
		</main>
	);
}
