import { getBoards } from "@/actions/board";
import { BoardItem } from "./BoardItem";

export const Boards = async () => {
	const boards = await getBoards();

	return (
		<div>
			{boards.map((board) => (
				<BoardItem key={board.id} board={board} />
			))}
		</div>
	);
};
