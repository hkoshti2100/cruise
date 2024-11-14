import Trending from "./Trending"
import { Advertisement } from "@/components"
import "@/styles/components/ActivityBar.scss"

export default function ActivityBar() {
	return (
		<div id="activity-bar">

			<Trending />
			<Advertisement.Google />

		</div>
	)
}
