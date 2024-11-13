import { RuleProps } from "@/types/props"

export default function HRule(props: RuleProps) {
	const className = `h-rule ${ props.className || "" }`

	return (
		<div { ...props } className={ className } />
	)
}
