export default function AdGoogle() {
	return (
		<div id="ad-google" className="container-ui">
			<p className="ad-title container-ui-content container-ui-title">
				Suggested for you

				<img
					src="/images/powered-by-google-ads.png"
					alt="google ads"
				/>
			</p>

			<div className="ad-banner flex-correct">
				<img
					src="images/ad-banner-spotify.png"
					alt="spotify"
					className="ad-image rounded-inner"
				/>
			</div>
		</div>
	)
}
