import { Users } from "@/components/Users";
import Link from "next/link";

export default function UsersPage() {
	return (
		<div>
			<div className="text-lg bg-blue-500 text-white">
				<div className="text-center">ユーザ一覧</div>
				<Link href="/">掲示板へ</Link>
			</div>
			<div className="flex my-2">
				<Link href="/users/add" className="bg-blue-300 px-4 py-2 mx-2 rounded">
					ユーザ追加
				</Link>
			</div>
			<Users />
		</div>
	);
}
