import React from "react";
import styles from "./MarketBoardButton.module.scss";

export function MarketBoardButton() {
	return (
		<button className={styles.marketBoardButton}>
			<i className="xiv-Market" />
			<span>Market</span>
		</button>
	);
}
