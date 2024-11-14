import { Link, Logo, SearchBar } from "@/elements"
import { UserAccountButton } from "@/components"
import NavigationLinks from "./NavigationLinks"
import { routes } from "@/utils/common"
import "@/styles/components/Header.scss"

export default function Header() {
	return (
		<header id="header-prime" className="header-ui">
			<div className="container-main grid-main">
				<Link href={ routes.home } className="logo-prime">
					<Logo wordmark />
				</Link>
				<nav>
					<SearchBar />
					<NavigationLinks />
				</nav>
				<UserAccountButton />
			</div>
		</header>
	)
}
