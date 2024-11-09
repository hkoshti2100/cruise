import type { Metadata } from "next"
import type { ChildrenProps } from "@/types/props"
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
				<header></header>

				<main>
					{ props.children }
				</main>

				<footer></footer>
			</body>
		</html>
	)
}
