export const getCanonicalUrl = () => {
	let deployUrl = "";
	return process.env.NODE_ENV !== "production"
		? "http://localhost:3000"
		: deployUrl;
};
