"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<div className="text-center">
			<button
				type="submit"
				className=" w-full border-2 border-green-700 bg-green-300 text-green-700  font-sans font-semibold text-lg rounded-md p-2 hover:bg-green-700 hover:text-white transition-all duration-700 ease-in-out"
				disabled={pending}>
				{pending ? "loading..." : "Add"}
			</button>
		</div>
	);
}
