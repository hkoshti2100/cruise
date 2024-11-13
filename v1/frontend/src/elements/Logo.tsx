import { CruiseLogoIcon, CruiseWordmarkIcon } from "@/assets/icons"

type LogoProps = {
	wordmark?: boolean
}

export default function Logo(props: LogoProps) {
	return (
		<div>
			<CruiseLogoIcon />

			{ props.wordmark && (
				<CruiseWordmarkIcon />
			) }
		</div>
	)
}
