import { routes } from "@/utils/common"
import { Link } from "@/elements"
import {
	BellFalseIcon,
	BellTrueIcon,
	GroupFalseIcon,
	GroupTrueIcon,
	HomeFalseIcon,
	HomeTrueIcon,
	PlaneFalseIcon,
	PlaneTrueIcon
} from "@/assets/icons"
import "@/styles/components/NavigationLinks.scss"

export default function NavigationLinks() {
	const navigationLinks = [
		{
			icon: {
				default: <HomeFalseIcon className="icon-text" />,
				current: <HomeTrueIcon className="icon-text" />
			},
			label: "Home",
			path: routes.home
		},
		{
			icon: {
				default: <BellFalseIcon className="icon-text" />,
				current: <BellTrueIcon className="icon-text" />
			},
			label: "Notifications",
			path: routes.notifications
		},
		{
			icon: {
				default: <PlaneFalseIcon className="icon-text" />,
				current: <PlaneTrueIcon className="icon-text" />
			},
			label: "Messages",
			path: routes.messages
		},
		{
			icon: {
				default: <GroupFalseIcon className="icon-text" />,
				current: <GroupTrueIcon className="icon-text" />
			},
			label: "Groups",
			path: routes.groups
		}
	]

	return (
		<div className="navigation-links">

			{ navigationLinks.map((link) => (
				<Link
					key={ link.label }
					href={ link.path }
					navlink
					className="navigation-link"
				>
					<div className="link-icon-default">
						{ link.icon.default }
					</div>

					<div className="link-icon-current">
						{ link.icon.current }
					</div>

					<p className="link-label">
						{ link.label }
					</p>
				</Link>
			)) }

		</div>
	)
}