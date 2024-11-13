import type { ButtonProps } from "@/types/props"
import Back from "./BackButton"
import Home from "./HomeButton"

export default function Button({ variant, ...props }: ButtonProps) {
	const className = `variant ${ variant } ${ props.className || "" }`

	return (
		<button { ...props } className={ className } />
	)
}

Button.Back = Back
Button.Home = Home
