import type { boardTable } from "@/database/schema";
import { getUser } from "@/actions/user";
import { FavoriteButton } from "./FavoriteButton";

export const BoardItem = async ({
	board,
}: { board: typeof boardTable.$inferSelect }) => {
	const user = await getUser(board.userId);
	return (
		<div className="flex flex-col">
			<div className="border p-2 my-2 mx-2 rounded">
				<p>名前: {user[0].name}</p>
				<p>投稿: {board.content}</p>
				<p>投稿日時: {new Date(board.created_at).toLocaleString()}</p>
				<FavoriteButton id={board.id} count={board.favorite} />
			</div>
		</div>
	);
};
