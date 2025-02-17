import { addUser, updateUser } from "@/actions/user";
import { redirect } from "next/navigation";
import { SubmitButton } from "./SubmitButton";

type userInput = {
	type: "add" | "edit";
	id?: number;
	name?: string;
	age?: number;
	email?: string;
};

export const UserInput = (userInput: userInput) => {
	const formAction = async (formData: FormData) => {
		"use server";
		const name = formData.get("name") as string;
		const age = Number(formData.get("age"));
		const email = formData.get("email") as string;
		if (userInput.type === "add") {
			await addUser(name, age, email);
		} else {
			userInput.id && (await updateUser(userInput.id, name, age, email));
		}
		redirect("/users");
	};

	return (
		<div className="justify-center mx-auto">
			<form
				className="flex flex-col border mx-2 mt-2 rounded"
				action={formAction}
			>
				<input type="hidden" name="id" value={userInput.id} />
				<input
					type="text"
					name="name"
					placeholder="名前"
					defaultValue={userInput.name}
					className="mx-2 border rounded my-2"
				/>
				<input
					type="number"
					name="age"
					placeholder="年齢"
					defaultValue={userInput.age}
					className="mx-2 border rounded my-2"
				/>
				<input
					type="email"
					name="email"
					placeholder="メールアドレス"
					defaultValue={userInput.email}
					className="mx-2 border rounded my-2"
				/>
				<SubmitButton>
					{userInput.type === "add" ? "追加" : "編集"}
				</SubmitButton>
			</form>
		</div>
	);
};
