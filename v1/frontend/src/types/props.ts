import type { LinkProps as NextLinkProps } from "next/link"

export type ChildrenProps = Readonly<{
	children: React.ReactNode
}>

export type LinkProps = React.ComponentProps<"a"> & NextLinkProps & {
	transition?: boolean,
	navlink?: boolean
}

export type ButtonProps = React.ComponentProps<"button"> & {
	variant: "primary" | "secondary" | "iconic" | "floating"
}

export type AppRouteParams = {
	params: Promise<{ id: string }>,
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
