import { getUsers } from "@/actions/user";
import { SubmitButton } from "./SubmitButton";
import { addBoard } from "@/actions/board";
import { revalidatePath } from "next/cache";

export const BoardForm = async () => {
	const users = await getUsers();

	const formAction = async (formData: FormData) => {
		"use server";
		const userId = Number(formData.get("userId"));
		const content = formData.get("content") as string;
		await addBoard(userId, content);
		revalidatePath("/");
	};
	return (
		<form action={formAction}>
			<select name="userId" className="border p-2 mt-2 rounded">
				{users.map((user) => (
					<option key={user.id} value={user.id}>
						{user.name}
					</option>
				))}
			</select>
			<div className="mx-2 my-2">
				<textarea
					name="content"
					className="border p-2 rounded w-full"
					placeholder="投稿内容を入力"
				/>
			</div>
			<div className="flex justify-end">
				<SubmitButton>投稿</SubmitButton>
			</div>
		</form>
	);
};
