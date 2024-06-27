import { Product } from "@/types";
import { getIMageUrl } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const Card: React.FC<Product> = ({ id, name, imageUrl, price }) => {
	return (
		<Link href={`/products/${id}`}>
			<article className="max-w-lg rounded h-full flex flex-col justify-between bg-orange-400 mb-3 shadow shadow-gray-600 hover:scale-95 hover:shadow-xl hover:shadow-green-600 duration-700 transition-all ease-out ">
				<picture className="relative h-96 bg-center">
					<Image
						className="rounded-t"
						src={`${getIMageUrl(imageUrl)}`}
						alt={name}
						fill={true}
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
