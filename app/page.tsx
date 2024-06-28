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

	const { data: boostedProducts } = await supabase
		.from("products")
		.select()
		.eq("isBoosted", true)
		.limit(3);

	return (
		<main className="min-h-screen m-auto">
			<div className="px-12 py-8">
				<section className="grid grid-cols-1 gap-10 xl:grid-cols-2">
					<article className="flex flex-col sm:mb-12 justify-center">
						<h2 className="md:text-5xl font-bold mb-16 text-3xl">
							<span className="relative md:top-5 text-orange-400 text-4xl">
								-
							</span>
							Top Products
							<span className="relative md:top-5 text-orange-400 text-4xl xl:hidden">
								-
							</span>
						</h2>
						<p className="text-lg md:text-3xl text-gray-400">
							You may pay to boost your products here
							<span className="hidden xl:inline text-4xl">👉</span>
							<span className="xl:hidden block text-4xl text-center mt-10">
								👇
							</span>
						</p>
					</article>
					<article className="w-full grid md:grid-cols-2 md:gap-8 xs:gap-4 xl:grid-cols-3">
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

				<h1 className="pl-6 py-2 text-4xl mt-20 mb-16 capitalize  xs:text-3xl text-center xl:text-start">
					<span className="text-orange-400 text-8xl xs:text-6xl">-</span>
					<span className="font-extrabold">All products</span>
					<span className="text-orange-400 text-8xl xs:text-6xl">-</span>
				</h1>
				<section className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 xl:gap-16">
					{products.map((product) => (
						<Card key={`${product.name}-${product.id}`} {...product} />
					))}
				</section>
			</div>
		</main>
	);
}
