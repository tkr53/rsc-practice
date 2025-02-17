import { getUsers } from "@/actions/user";
import { UserItem } from "./UserItem";

export const Users = async () => {
	const users = await getUsers();

	return (
		<div>
			{users.map((user) => (
				<UserItem key={user.id} user={user} />
			))}
		</div>
	);
};
