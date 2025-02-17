import { UserInput } from "@/components/UserInput";

export default async function UserAdd() {
	return (
		<div>
			<div className="text-center bg-blue-500 text-white">ユーザ追加</div>
			<UserInput type="add" />
		</div>
	);
}
