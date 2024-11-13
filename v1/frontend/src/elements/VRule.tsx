import { RuleProps } from "@/types/props"

export default function VRule(props: RuleProps) {
	const className = `v-rule ${ props.className || "" }`

	return (
		<div { ...props } className={ className } />
	)
}
