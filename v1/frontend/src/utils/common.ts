export function sleep(duration: number) {
	return new Promise((resolve) => setTimeout(resolve, duration))
}

export const routes = {
	home: "/",
	notifications: "/notifications",
	messages: "/messages",
	groups: "/groups"
}
