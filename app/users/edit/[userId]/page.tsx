import { UserInput } from "@/components/UserInput";
import { getUser } from "@/actions/user";

export default async function UserEdit({
	params,
}: { params: Promise<{ userId: number }> }) {
	const userId = (await params).userId;
	const user = await getUser(userId);

	if (!user) {
		return <div>ユーザが見つかりません</div>;
	}

	return (
		<div>
			<div className="text-center bg-blue-500 text-white">ユーザ編集</div>
			<UserInput
				type="edit"
				id={user[0].id}
				name={user[0].name}
				age={user[0].age}
				email={user[0].email}
			/>
		</div>
	);
}
