"use client"
import { useState } from "react"
import "@/styles/elements/TextArea.scss"

type TextAreaProps = React.ComponentProps<"textarea"> & {
	icon?: JSX.Element
}

export default function TextArea({ icon, ...props }: TextAreaProps) {
	const [content, setContent] = useState(props.placeholder)
	function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
		props.onChange?.(e)
		setContent(e.target.value || props.placeholder)
	}

	return (
		<div className="text-area">
			{ icon }
			<div className="text-area-container">
				<p className="pseudo-content">
					{ content }
				</p>
				<textarea { ...props } onChange={ handleInput } />
			</div>
		</div>
	)
}
