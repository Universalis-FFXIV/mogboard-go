import React, { useState } from "react";
import OutsideCLickHandler from "react-outside-click-handler";
import { SearchResultItem } from "../../../../services/api/xivapi/models";
import { getGameDataProvider } from "../../../../services/api/xivapi";
import { MarketBoardButton } from "./components/MarketBoardButton";
import { SearchResults } from "./components/SearchResults";
import loading from "./loading.svg";
import styles from "./SearchBar.module.scss";
import { MarketBoardCategories } from "./components/MarketBoardCategories";
import { t } from "../../../../services/translation";

export function SearchBar() {
	const [term, setTerm] = useState("");
	const [typing, setTyping] = useState(false);
	const [results, setResults] = useState<SearchResultItem[]>([]);
	const [totalItems, setTotalItems] = useState(0);
	const [categorySelectActive, setCategorySelectActive] = useState(false);
	const [headerText, setHeaderText] = useState<string | undefined>(undefined);

	const search = async (term: string) => {
		setHeaderText(undefined);
		if (term.length >= 2) {
			const [res, _totalItems] = await getGameDataProvider().search(term);
			setResults(res);
			setTotalItems(_totalItems);
		} else {
			setResults([]);
			setTotalItems(0);
		}
	};

	return (
		<div>
			<OutsideCLickHandler
				onOutsideClick={() => {
					setTyping(false);
					setCategorySelectActive(false);
				}}
			>
				<div className={styles.searchNav}>
					<img src={loading} className={styles.searchLoading} alt="" />
					<input
						type="text"
						className={styles.search}
						placeholder={t("Search", "generic_search")}
						onChange={(e) => {
							setTerm(e.currentTarget.value);
							setTyping(true);
							search(term);
						}}
					/>
					<MarketBoardButton onClick={() => setCategorySelectActive(!categorySelectActive)} />
				</div>
				<SearchResults
					results={results}
					totalItems={totalItems}
					term={term}
					typing={typing}
					headerTextOverride={headerText}
				/>
				<MarketBoardCategories
					active={categorySelectActive}
					onReqPopulateSearchResults={(results, newHeaderText) => {
						setCategorySelectActive(false);
						setResults(results);
						setTyping(true);
						setHeaderText(newHeaderText);
					}}
				/>
			</OutsideCLickHandler>
		</div>
	);
}
