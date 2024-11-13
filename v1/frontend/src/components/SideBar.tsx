import { Advertisement } from "@/components"
import "@/styles/components/SideBar.scss"

export default function SideBar() {
	return (
		<aside id="sidebar-main">

			<div id="user-profile" className="container-ui"></div>
			<Advertisement.Premium />

		</aside>
	)
}
