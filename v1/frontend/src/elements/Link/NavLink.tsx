import NextLink from "next/link"
import type { LinkProps } from "@/types/props"
import useLinkContext from "./context"

export default function NavLink(props: LinkProps) {
	const { className } = useLinkContext()

	return (
		<NextLink
			{ ...props }
			className={ className }
		/>
	)
}
