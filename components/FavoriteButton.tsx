"use client";

import { addFavorite } from "@/actions/board";
import { useTransition } from "react";

export const FavoriteButton = ({
	id,
	count,
}: { id: number; count: number }) => {
	const [isPending, startTransition] = useTransition();
	return (
		<button
			type="button"
			onClick={() => startTransition(() => addFavorite(id, count + 1))}
			className="text-center bg-blue-500 text-white py-2 px-4 rounded"
		>
			お気に入り: {isPending ? "Loading..." : count}
		</button>
	);
};
