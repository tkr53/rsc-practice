import type { userTable } from "@/database/schema";
import { DeleteButton } from "./DeleteButton";
import Link from "next/link";

export const UserItem = ({ user }: { user: typeof userTable.$inferSelect }) => {
	return (
		<div className="flex flex-col">
			<div className="border p-2 my-2 mx-2 rounded">
				<p>名前: {user.name}</p>
				<p>年齢: {user.age}</p>
				<p>メールアドレス: {user.email}</p>
				<Link
					href={`/users/edit/${user.id}`}
					className="bg-blue-500 text-white px-4 py-3 mr-2 rounded"
				>
					編集
				</Link>
				<DeleteButton id={user.id} />
			</div>
		</div>
	);
};
