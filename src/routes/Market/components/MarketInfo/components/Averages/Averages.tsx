import React from "react";
import { getLocale, t } from "../../../../../../services/translation";
import styles from "./Averages.module.scss";

export function Averages(props: AveragesProps) {
	return (
		<div className={styles.crossWorldMarkets}>
			<Average avgPerUnit={props.ppuListings} avgTotal={props.totalListings} />
			<Average avgPerUnit={props.ppuHistory} avgTotal={props.totalHistory} />
		</div>
	);
}

export interface AveragesProps {
	ppuListings: number;
	totalListings: number;
	ppuHistory: number;
	totalHistory: number;
}

function Average(props: AverageProps) {
	return (
		<div>
			<div className={`${styles.flex} ${styles.censusBox}`}>
				<div>
					<h5>{t("Avg. Per Unit", "market_board_avg_perunit")}</h5>
					<br />
					<div className={`${styles.flex} ${styles.avgPrices}`}>
						<div className={styles.flex100}>{props.avgPerUnit.toLocaleString(getLocale())}</div>
					</div>
				</div>
				<div>
					<h5>{t("Avg. Total", "market_board_avg_total")}</h5>
					<br />
					<div className={`${styles.flex} ${styles.avgPrices}`}>
						<div className={styles.flex100}>{props.avgTotal.toLocaleString(getLocale())}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

interface AverageProps {
	avgPerUnit: number;
	avgTotal: number;
}
