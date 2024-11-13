import "@/styles/components/ActivityBar.scss"
import { Advertisement } from "@/components"

export default function ActivityBar() {
	return (
		<div id="activity-bar">

			<div id="trending-bar" className="container-ui"></div>
			<Advertisement.Google />

		</div>
	)
}
