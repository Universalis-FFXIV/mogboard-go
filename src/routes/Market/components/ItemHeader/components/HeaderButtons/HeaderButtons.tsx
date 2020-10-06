import React from "react";
import styles from "./HeaderButtons.module.scss";

export function HeaderButtons(props: HeaderButtonsProps) {
	return (
		<div className={styles.boxLists}>
			<a
				href={`https://www.garlandtools.org/db/#item/${props.itemId}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				<button type="button" className={`${styles.btn} ${styles.btnGt}`}>
					Show on GarlandTools
				</button>
			</a>
			<a
				href={`https://ffxivteamcraft.com/db/en/item/${props.itemId}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				<button type="button" className={`${styles.btn} ${styles.btnGt}`}>
					Show on Teamcraft
				</button>
			</a>

			<button className={`${styles.btn} ${styles.btnAddTo}`}>Lists</button>
			<button className={`${styles.btn} ${styles.btnAddTo}`}>
				<span>Favourite</span>
			</button>
		</div>
	);
}

export interface HeaderButtonsProps {
	itemId: number;
}
