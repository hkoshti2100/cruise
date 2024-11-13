import { SearchIcon } from "@/assets/icons"
import "@/styles/elements/SearchBar.scss"

export default function SearchBar() {
	return (
		<div id="search-bar-prime">
			<SearchIcon className="icon-text" />

			<input
				type="text"
				id="search-prime"
				placeholder="Search"
				size={ 10 }
			/>
		</div>
	)
}
