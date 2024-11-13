"use client"
import { LinkContext } from "./context"
import type { LinkProps } from "@/types/props"
import useLink from "./useLink"

export default function Link({ transition, navlink, ...props }: LinkProps) {
	const { LinkComponent, className, handleClick } = useLink({ transition, navlink, ...props })

	return (
		<LinkContext.Provider value={{ className, handleClick }}>
			<LinkComponent { ...props } />
		</LinkContext.Provider>
	)
}
