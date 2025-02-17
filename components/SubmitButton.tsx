"use client";

import type { ReactNode } from "react";
import { useFormStatus } from "react-dom";

export const SubmitButton = ({ children }: { children: ReactNode }) => {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			disabled={pending}
			// ボタンを右寄せにする
			className={`${!pending ? "bg-blue-300" : "bg-gray-400"} px-4 py-2 mx-2 rounded`}
		>
			{children}
		</button>
	);
};
