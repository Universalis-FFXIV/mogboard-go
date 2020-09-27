import React from "react";
import { t } from "../../../../../../services/translation";
import styles from "./MarketBoardButton.module.scss";

export function MarketBoardButton(props: MarketBoardButtonProps) {
	return (
		<div>
			<button className={styles.marketBoardButton} onClick={props.onClick}>
				<i className="xiv-Market" />
				<span>{t("Market", "header_market")}</span>
			</button>
		</div>
	);
}

export interface MarketBoardButtonProps {
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
