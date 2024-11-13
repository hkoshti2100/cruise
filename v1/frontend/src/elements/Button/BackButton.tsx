"use client"
import { useRouter } from "next/navigation"
import Button from "./Button"
import { ArrowLeftIcon } from "@/assets/icons"

export default function Back() {
	const router = useRouter()

	return (
		<Button variant="primary" onClick={ () => router.back() }>
			<ArrowLeftIcon className="icon-text" />
			Back
		</Button>
	)
}
