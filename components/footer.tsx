export const Footer = () => {
	const date = new Date();
	return (
		<footer>
			<h3>© A.E {date.getFullYear()}</h3>
		</footer>
	);
};
