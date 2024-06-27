import { createClient } from "@/supabase/client";
import { getIMageUrl } from "@/utils";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 0;

type productProps = {
	params: { slug: string };
};
const supabase = createClient();

export async function generateMetadata(
	{ params }: productProps,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	// read route params
	const id = params.slug;

	// fetch data
	const { data: product, error: errorProduct } = await supabase
		.from("products")
		.select()
		.match({ id })
		.single();

	if (errorProduct || !product) {
		console.error("Error fetching product:", errorProduct);
		return { title: "", description: "" };
	}

	// optionally access and extend (rather than replace) parent metadata
	// const previousImages = (await parent).openGraph?.images || [];

	return {
		title: product.name,
		description: product.description,
		openGraph: {
			images: [getIMageUrl(product.imageUrl)],
		},
		alternates: {
			canonical: `/products/${id}`,
		},
	};
}

export async function generateStaticParams() {
	// fetching data
	const { data: products, error: productsError } = await supabase
		.from("products")
		.select("id");

	if (productsError || !products) {
		console.error("Error fetching products:", productsError);
		return [];
	}

	return products?.map(({ id }) => ({
		slug: id,
	}));
}

async function Product({ params }: productProps) {
	const { data: product, error: errorProduct } = await supabase
		.from("products")
		.select()
		.match({ id: params.slug })
		.single();

	if (errorProduct || !product) {
		console.error("Error fetching product:", errorProduct);
		return notFound();
	}

	return (
		<section className="px-36 my-8">
			<header className="flex justify-between bg-slate-200 py-4 px-8 rounded-xl mb-2">
				<h1 className="text-4xl text-green-500 font-extrabold">
					{product.name}
				</h1>
				{product.isBoosted && <span className="text-4xl">⭐</span>}
				<a
					href={`mailto:${product.email}`}
					className="p-2 font-semibold drop-shadow-md text-gray-700 rounded bg-gradient-to-tr from-green-600 via-orange-200 to-green-400 hover:from-green-400 hover:via-orange-100 hover:to-green-200 hover:text-gray-500 transition-all duration-200">
					Contact seller
				</a>
			</header>
			<article className="flex gap-3 mb-2 w-2xl">
				<figure className="bg-slate-200 py-4 px-8 rounded-xl w-1/2">
					<Image
						className="h-[600px]  rounded-xl w-full"
						width={600}
						height={600}
						alt={product.name}
						src={getIMageUrl(product.imageUrl)}
					/>
				</figure>
				<article className="bg-slate-200 py-4 px-8 rounded-xl w-1/2">
					<div className="flex justify-between border-b-2 border-dashed border-orange-300 pb-2 mb-8">
						<h3 className="text-2xl font-extrabold uppercase">
							<span className="text-4xl">💵</span> Price
						</h3>
						<p className="font-semibold text-2xl">{product.price} 💲</p>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="font-bold text-xl uppercase ">
							<span className="text-2xl">📖</span>description
						</h3>
						<p className="font-sans italic font-semibold text-gray-500">
							{product.description}
						</p>
					</div>
				</article>
			</article>
			<Link
				className="bg-slate-200 py-4 px-8 rounded-xl mt-2 block text-center hover:bg-slate-100 duration-200 transition-all ease-in-out hover:text-sky-600"
				href={"/"}>
				<h2 className="font-extrabold text-xl tracking-widest">
					More Products
				</h2>
			</Link>
		</section>
	);
}
export default Product;
