import { Advertisement, UserProfile } from "@/components"
import "@/styles/components/SideBar.scss"

export default function SideBar() {
	return (
		<aside id="sidebar-main">

			<UserProfile />
			<Advertisement.Premium />

		</aside>
	)
}
