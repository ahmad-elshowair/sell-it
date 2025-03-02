import Link from "next/link";

const Header = ({ font }: { font?: string }) => {
	return (
		<header
			className={`py-4 bg-gradient-to-tr from-green-600 via-orange-200 to-green-400 ${font}`}>
			<nav className="flex justify-between items-center px-12 mx-auto">
				<Link
					className=" hover:scale-105 hover:drop-shadow-xl duration-700 ease-out"
					href="/">
					<span className="lowercase  text-orange-50 font-bold text-4xl">
						<span className="text-4xl">🏪</span>Sell it
					</span>
				</Link>
				<Link
					className="text-4xl hover:scale-105 duration-500 ease-in hover:drop-shadow-xl"
					href="/sell">
					<span className="lowercase text-orange-50 font-bold">
						Add Product
					</span>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
