const Footer = ({ font }: { font: string }) => {
	const date = new Date();
	return (
		<footer
			className={`py-4 px-12 bg-gradient-to-tr from-green-600 via-orange-200 to-green-400 ${font}`}>
			<h3 className="font-bold text-xl text-orange-50  lowercase">
				© A.E.DEV {date.getFullYear()}
			</h3>
		</footer>
	);
};

export default Footer;
