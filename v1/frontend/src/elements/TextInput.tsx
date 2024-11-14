import "@/styles/elements/TextInput.scss"

type TextInputProps = React.ComponentProps<"input"> & {
	icon?: JSX.Element
}

export default function TextInput({ icon, ...props }: TextInputProps) {
	return (
		<div className="text-input">
			{ icon }

			<input { ...props } />
		</div>
	)
}
