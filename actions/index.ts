"use server";

export const sellItemAction = async (pervState: any, formData: FormData) => {
	console.log(formData.get("product-name"));
};
