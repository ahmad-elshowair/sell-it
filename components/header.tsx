import Link from "next/link";

const Header = ({ font }: { font: string }) => {
	return (
		<header className="py-3 bg-gradient-to-tr from-green-600 via-orange-200 to-green-400">
			<nav className="flex justify-between px-12 mx-auto">
				<Link className="" href="/">
					<span className={`lowercase  text-orange-50 font-bold text-2xl`}>
						<span className="text-4xl">🏪</span> Sell it
					</span>
				</Link>
				<Link className="" href="/">
					<span className="lowercase text-orange-400 font-bold">
						Add Product
					</span>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
