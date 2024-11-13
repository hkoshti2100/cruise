export function selectById(id: string) {
	const element = document.getElementById(id)

	if(!element) {
		throw new Error(`Element with id ${ id } not found!`)
	}

	return element
}
