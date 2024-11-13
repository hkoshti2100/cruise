import NextLink from "next/link"
import type { LinkProps } from "@/types/props"
import useLinkContext from "./context"

export default function TransitionLink(props: LinkProps) {
	const { handleClick } = useLinkContext()

	return (
		<NextLink
			{ ...props }
			onClick={ handleClick }
		/>
	)
}
