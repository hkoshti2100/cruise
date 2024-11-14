import { AppRouteParams } from "@/types/props"

export default async function ProfilePage(props: AppRouteParams) {
	const id = (await props.params).id

	return (
		<div id="route-profile" className="container-ui">
			{ id }
		</div>
	)
}
