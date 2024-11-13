import NextLink from "next/link"
import type { LinkProps } from "@/types/props"
import useLinkContext from "./context"

export default function TransitionNavLink(props: LinkProps) {
	const { className, handleClick } = useLinkContext()

	return (
		<NextLink
			{ ...props }
			className={ className }
			onClick={ handleClick }
		/>
	)
}
