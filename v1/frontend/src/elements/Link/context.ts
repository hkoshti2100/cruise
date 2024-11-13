import { createContext, useContext } from "react"

type LinkContextType = {
	className: string,
	handleClick: React.MouseEventHandler<HTMLAnchorElement>
}

export const LinkContext = createContext<LinkContextType | undefined>(undefined)

export default function useLinkContext() {
	const context = useContext(LinkContext)

	if(!context) {
		throw new Error(`The hook "useLinkContext()" should be used within LinkContext Provider with valid value(s) only!`)
	}

	return context
}
