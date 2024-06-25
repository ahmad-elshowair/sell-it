import Image from "next/image";
import Link from "next/link";

type CardProps = {
	id?: number;
	name: string;
	description?: string;
	image: string;
	price: number;
};
const Card: React.FC<CardProps> = ({ name, image, price }) => {
	return (
		<Link href="/">
			<article className="max-w-lg rounded h-full flex flex-col justify-between bg-orange-400 mb-3 overflow-hidden">
				<picture className="relative h-96 bg-center">
					<Image
						className="rounded-t"
						src={image}
						alt={name}
						layout="fill"
						style={{ objectFit: "cover" }}
					/>
				</picture>
				<div className="p-4 flex justify-between">
					<h2 className="text-2xl lg:text-4xl font-bold text-red-200 uppercase line-clamp-1">
						{name}
					</h2>
					<span className="text-white font-semibold border-2 px-5 py-1 rounded-xl hover:bg-white hover:text-orange-400 transition-all ease-in-out duration-200">
						{price}
					</span>
				</div>
			</article>
		</Link>
	);
};
export default Card;
