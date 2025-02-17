import { Boards } from "@/components/Boards";
import Link from "next/link";
import { BoardForm } from "@/components/BoardForm";

export default async function Home() {
	return (
		<div>
			<div className="text-lg bg-blue-500 text-white">
				<div className="text-center">掲示板</div>
				<Link href="/users">ユーザ一覧</Link>
			</div>
			<BoardForm />
			<hr className="my-2" />
			<Boards />
		</div>
	);
}
