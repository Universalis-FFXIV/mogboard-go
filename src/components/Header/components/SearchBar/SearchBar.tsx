import React, { useState } from "react";
import { SearchResultItem } from "../../../../services/api/xivapi/models";
import Xivapi from "../../../../services/api/xivapi/Xivapi";
import { MarketBoardButton } from "./components/MarketBoardButton";
import { SearchResults } from "./components/SearchResults";
import loading from "./loading.svg";
import styles from "./SearchBar.module.scss";

export function SearchBar() {
	const [term, setTerm] = useState("");
	const [results, setResults] = useState<SearchResultItem[]>([]);
	const [totalItems, setTotalItems] = useState(0);

	const search = async (term: string) => {
		if (term.length >= 2) {
			const [res, _totalItems] = await Xivapi.search(term);
			setResults(res);
			setTotalItems(_totalItems);
		} else {
			setResults([]);
			setTotalItems(0);
		}
	};

	return (
		<div>
			<div className={styles.searchNav}>
				<img src={loading} className={styles.searchLoading} alt="" />
				<input
					type="text"
					className={styles.search}
					placeholder="Search"
					onChange={(e) => {
						setTerm(e.currentTarget.value);
						search(term);
					}}
				/>
				<MarketBoardButton />
			</div>
			<SearchResults results={results} totalItems={totalItems} term={term} />
		</div>
	);
}
