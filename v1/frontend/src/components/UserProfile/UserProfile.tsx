import { Button, VRule } from "@/elements"
import "@/styles/components/UserProfile.scss"

export default function UserProfile() {
	const user = {
		banner: "/hjk.png",
		picture: "/hjk.png",
		name: "Himanshu Koshti",
		handle: "@hkoshti2022",
		stats: [
			{ label: "Followers", value: 12 },
			{ label: "Following", value: 19 },
			{ label: "Posts", value: 5 },
		]
	}

	return (
		<div id="user-profile-small" className="container-ui">

			<div className="user-profile-images">
				<img
					src={ user.banner }
					alt=""
					className="user-profile-banner rounded-inner temp-placeholder-image"
				/>

				<img
					src={ user.picture }
					alt=""
					className="user-profile-picture temp-placeholder-image"
				/>
			</div>

			<div className="user-profile-details">
				<p className="user-profile-name">
					{ user.name }
				</p>
				<p className="user-profile-handle sub-text text-small">
					{ user.handle }
				</p>
			</div>

			<div className="user-profile-stats">
				{ user.stats.map((stat) => (
					<>
						<VRule />
						<div key={ stat.label } className="user-profile-stat">
							<p className="stat-value">
								{ stat.value }
							</p>

							<p className="stat-label sub-text text-small">
								{ stat.label }
							</p>
						</div>
					</>
				)) }
			</div>

			<Button variant="primary" className="user-profile-action rounded-inner">
				View my profile
			</Button>

		</div>
	)
}
