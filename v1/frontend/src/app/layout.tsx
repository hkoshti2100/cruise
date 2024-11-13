import type { Metadata } from "next"
import type { ChildrenProps } from "@/types/props"
import { Header, SideBar, ActivityBar } from "@/components"
import "@/styles/global.scss"
import "@/styles/theme.scss"

export const metadata: Metadata = {
	title: "Cruise | Social Platform",
	description: "A Social media platform to share your thoughts, activities, friends and life",
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/favicons/cruise-logo-dark.svg"
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/favicons/cruise-logo-light.svg"
			}
		]
	}
}

export default function RootLayout(props: ChildrenProps) {
	return (
		<html lang="en">
			<body>
				<Header />

				<main className="container-main grid-main">
					<SideBar />

					<div id="main-content">
						{ props.children }
					</div>

					<ActivityBar />
				</main>

			</body>
		</html>
	)
}
