import Image from "next/image"
import "@/styles/components/ComingSoon.scss"
import { Button } from "@/elements"

export default function ComingSoon() {

	return (
		<section id="coming-soon" className="container-ui">
			<Image
				src="/images/coming-soon-illustration.png"
				alt="not-found"
				width={ 271 }
				height={ 180 }
			/>

			<p className="info-message text-huge">
				Coming soon
			</p>

			<p className="coming-soon-description">
				The Feature or Route that you are trying to access does not exist yet.
			</p>

			<div className="error-boundary-buttons">
				<Button.Back />
				<Button.Home />
			</div>
		</section>
	)
}
