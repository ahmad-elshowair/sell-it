import Card from "@/components/card";
import { createClient } from "@/supabase/client";
import { notFound } from "next/navigation";

export const revalidate = 3600;

/**
 * The Home page component.
 *
 * This component fetches products from Supabase and displays them in two sections:
 * 1. Top Products: Displays boosted products.
 * 2. All Products: Displays all products.
 *
 * @returns Promise{JSX.Element} The Home page component.
 */

export default async function Home() {
	/**
	 * Create a Supabase client instance.
	 *
	 * @returns {SupabaseClient} The Supabase client instance.
	 */
	const supabase = createClient();

	/**
	 * Fetch all products from Supabase.
	 *
	 * @returns {Promise<{ data: Product[], error: Error | null }>} The promise resolving to an object with data and error properties.
	 */
	const { data: products, error: productsError } = await supabase
		.from("products")
		.select();
	if (!products || productsError) {
		return notFound();
	}

	/**
	 * Fetch boosted products from Supabase.
	 *
	 * @returns {Promise<{ data: Product[], error: Error | null }>} The promise resolving to an object with data and error properties.
	 */

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
