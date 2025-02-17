import { deleteUser } from "@/actions/user";
import { redirect } from "next/navigation";

export const DeleteButton = ({ id }: { id: number }) => {
	const formAction = async () => {
		"use server";
		await deleteUser(id);
		redirect("/users");
	};
	return (
		<div className="inline-block">
			<form action={formAction}>
				<button
					type="submit"
					className="bg-red-600 text-white rounded px-4 py-2"
				>
					削除
				</button>
			</form>
		</div>
	);
};
