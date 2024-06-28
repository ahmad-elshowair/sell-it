import Link from "next/link";

const Footer = ({ font }: { font: string }) => {
	const date = new Date();
	return (
		<footer
			className={`py-4 px-12 bg-gradient-to-tr from-green-600 via-orange-200 to-green-400 ${font} text-center`}>
			<h3 className="font-bold text-4xl text-orange-50">
				©{" "}
				<Link
					href={"https://www.linkedin.com/in/ahmad-elshowair/"}
					className="hover:underline duration-500 transition-all ease-in-out">
					A.E.DEV
				</Link>{" "}
				{date.getFullYear()}
			</h3>
		</footer>
	);
};

export default Footer;
