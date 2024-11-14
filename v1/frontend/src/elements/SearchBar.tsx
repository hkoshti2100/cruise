import { SearchIcon } from "@/assets/icons"
import { TextInput } from "@/elements"

export default function SearchBar() {
	return (
		<div id="search-bar-prime">
			<TextInput
				icon={ <SearchIcon className="icon-text" /> }
				type="text"
				id="search-prime"
				placeholder="Search"
				size={ 10 }
			/>
		</div>
	)
}
