"use server";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPE = [
	"image/jpeg",
	"image/png",
	"image/webp",
	"image/jpg",
];
export async function sellItemAction(pervState: any, formData: FormData) {
	const schema = z.object({
		productName: z
			.string()
			.min(6, `product name length must be at least 6 characters`),
		description: z
			.string()
			.min(50, `Your product's description must be at least 50 characters!`),
		contactEmail: z.string().email("NEEDS TO BE AN EMAIL!"),
		price: z.string().min(1, `must give a price at least 1 digit !`),
		imageUrl: z
			.any()
			.refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB`)
			.refine(
				(file) => ACCEPTED_IMAGE_TYPE.includes(file?.type),
				`Only .jpg, jpeg, png, and webp formats are supported`,
			),
	});

	const validatedFields = schema.safeParse({
		productName: formData.get("product-name"),
		description: formData.get("description"),
		contactEmail: formData.get("contact-email"),
		price: formData.get("price"),
		imageUrl: formData.get("image-url"),
	});
	if (!validatedFields.success) {
		console.log(validatedFields.error);

		return {
			type: "error",
			errors: validatedFields.error.flatten().fieldErrors,
			message: "Missing Fields",
		};
	}

	const { productName, description, imageUrl, price, contactEmail } =
		validatedFields.data;

	try {
		const fileName = `${Math.random()}-${imageUrl.name}`;
		const supabase = createServerActionClient({ cookies });
		const { data, error } = await supabase.storage
			.from("sellit-storage")
			.upload(fileName, imageUrl, {
				cacheControl: "3600",
				upsert: false,
			});
		if (error) {
			return {
				type: "error",
				message: `Database Error: ${(error as Error).message}`,
			};
		}
		if (data) {
			const path = data.path;
			const { error: productError } = await supabase.from("products").insert({
				name: productName,
				description: description,
				imageUrl: path,
				price: price,
				contactEmail: contactEmail,
			});
		}
	} catch (error) {
		console.error(`Error: ${(error as Error).message}`);
		return {
			type: "error",
			message: `Database Error catch: ${(error as Error).message}`,
		};
	}

	revalidatePath("/");
	redirect("/");
}
