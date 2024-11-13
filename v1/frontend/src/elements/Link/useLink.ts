import NextLink from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { TransitionNavLink, TransitionLink, NavLink } from "./index"
import type { LinkProps } from "@/types/props"
import { sleep } from "@/utils/common"
import { $root } from "@/utils/elements"

export default function useLink({ transition, navlink, ...props }: LinkProps) {
	const LinkComponent = transition
		? (navlink ? TransitionNavLink : TransitionLink)
		: (navlink ? NavLink : NextLink)

	const path = usePathname()
	const router = useRouter()
	
	const className = `nav-link ${ path === props.href ? "current" : "" } ${ props.className || "" }`

	async function pageTransition(e: React.MouseEvent<HTMLAnchorElement>) {
		if(path !== props.href) {
			e.preventDefault()

			const duration = $root.getPropertyValueAsNumber("--page-transition-duration")

			const body = document.body
			body.classList.add("transition-active", "leave")

			await sleep(duration)
			router.push(props.href)
			body.classList.replace("leave", "enter")

			await sleep(duration)
			body.classList.remove("transition-active", "enter")
		}
	}

	function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
		props.onClick?.(e)
		pageTransition(e)
	}

	return { LinkComponent, className, handleClick }
}
