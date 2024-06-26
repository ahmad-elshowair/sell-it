import Image from "next/image";
import Link from "next/link";

type CardProps = {
	id?: number;
	name: string;
	description?: string;
	imageUrl: string;
	price: number;
};
const Card: React.FC<CardProps> = ({ id, name, imageUrl, price }) => {
	return (
		<Link href={`/products/${id}`}>
			<article className="max-w-lg rounded h-full flex flex-col justify-between bg-orange-400 mb-3 shadow shadow-gray-600 hover:scale-95 hover:shadow-xl hover:shadow-green-600 duration-700 transition-all ease-out ">
				<picture className="relative h-96 bg-center">
					<Image
						className="rounded-t"
						src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/sellit-storage/${imageUrl}`}
						alt={name}
						layout="fill"
						style={{ objectFit: "cover" }}
					/>
				</picture>
				<div className="p-4 flex  flex-col justify-between gap-3">
					<h2 className="text-2xl font-bold text-red-200 uppercase line-clamp-1">
						{name}
					</h2>
					<span className="text-white font-semibold border-2 px-5 py-1 rounded-xl hover:bg-white hover:text-orange-400 transition-all ease-in-out duration-200 max-w-[200px] self-end">
						{price} $
					</span>
				</div>
			</article>
		</Link>
	);
};
export default Card;
