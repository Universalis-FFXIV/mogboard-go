import React from "react";
import AuthClient from "../../../../../../services/auth/AuthClient";
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
			&nbsp;
			<a
				href={`https://ffxivteamcraft.com/db/en/item/${props.itemId}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				<button type="button" className={`${styles.btn} ${styles.btnGt}`}>
					Show on Teamcraft
				</button>
			</a>
			&nbsp;
			{(() => {
				if (AuthClient.isLoggedIn) {
					return (
						<span>
							<button className={`${styles.btn} ${styles.btnAddTo}`}>Lists</button>
							&nbsp;
							<button className={`${styles.btn} ${styles.btnAddTo}`}>Favourite</button>
						</span>
					);
				}
			})()}
		</div>
	);
}

export interface HeaderButtonsProps {
	itemId: number;
}
