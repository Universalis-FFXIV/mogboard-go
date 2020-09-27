import React from "react";
import styles from "./MarketBoardButton.module.scss";

export function MarketBoardButton(props: MarketBoardButtonProps) {
	return (
		<div>
			<button className={styles.marketBoardButton} onClick={props.onClick}>
				<i className="xiv-Market" />
				<span>Market</span>
			</button>
		</div>
	);
}

export interface MarketBoardButtonProps {
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
