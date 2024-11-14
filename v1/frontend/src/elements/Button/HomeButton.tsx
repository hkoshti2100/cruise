"use client"
import { useRouter } from "next/navigation"
import { routes } from "@/utils/common"
import { HomeFalseIcon } from "@/assets/icons"
import Button from "./Button"

export default function Home() {
	const router = useRouter()

	return (
		<Button variant="secondary" onClick={ () => router.push(routes.home) }>
			<HomeFalseIcon className="icon-text" />
			Home
		</Button>
	)
}
