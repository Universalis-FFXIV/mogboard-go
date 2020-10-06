import React from "react";
import AuthClient from "../../../../../../services/auth/AuthClient";
import { t } from "../../../../../../services/translation";
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
					{t("Show on GarlandTools", "ext_garlandtools")}
				</button>
			</a>
			&nbsp;
			<a
				href={`https://ffxivteamcraft.com/db/en/item/${props.itemId}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				<button type="button" className={`${styles.btn} ${styles.btnGt}`}>
					{t("Show on Teamcraft", "ext_teamcraft")}
				</button>
			</a>
			&nbsp;
			{(() => {
				if (AuthClient.isLoggedIn) {
					return (
						<span>
							<button className={`${styles.btn} ${styles.btnAddTo}`}>
								{t("Lists", "generic_lists")}
							</button>
							&nbsp;
							<button className={`${styles.btn} ${styles.btnAddTo}`}>
								{t("Favourite", "generic_favourite")}
							</button>
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
