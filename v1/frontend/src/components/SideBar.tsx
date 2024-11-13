import "@/styles/components/SideBar.scss"
import AdPremium from "./Advertisement/AdPremium"

export default function SideBar() {
	return (
		<aside id="sidebar-main">

			<div id="user-profile" className="container-ui"></div>
			<AdPremium />

		</aside>
	)
}
