import Image from "next/image"
import { Button } from "@/elements"
import "@/styles/app/not-found.scss"

export default function NotFound() {

	return (
		<section id="not-found" className="container-ui">
			<Image
				src="/images/404-illustration.png"
				alt="not-found"
				width={ 271 }
				height={ 180 }
			/>

			<p className="error-message text-huge">
				Error 404! ( page not found )
			</p>

			<p className="error-description">
				Invalid URL! This path does not exist.
			</p>

			<div className="error-boundary-buttons">
				<Button.Back />
				<Button.Home />
			</div>
		</section>
	)
}
