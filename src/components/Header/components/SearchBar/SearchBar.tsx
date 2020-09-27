import React from "react";
import { MarketBoardButton } from "./components/MarketBoardButton";
import loading from "./loading.svg";
import styles from "./SearchBar.module.scss";

export function SearchBar() {
	return (
		<div className={styles.searchNav}>
			<img src={loading} className={styles.searchLoading} alt="" />
			<input type="text" className={styles.search} placeholder="Search" />
			<MarketBoardButton />
		</div>
	);
}
