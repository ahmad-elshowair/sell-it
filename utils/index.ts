export const getCanonicalUrl = () => {
	let deployUrl = "";
	return process.env.NODE_ENV !== "production"
		? "http://localhost:3000"
		: deployUrl;
};

export const getIMageUrl = (imageUrl: string) => {
	return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/sellit-storage/${imageUrl}`;
};
