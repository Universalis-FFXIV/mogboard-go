import React from "react";
import { getLocale, t } from "../../../../../../services/translation";
import styles from "./Averages.module.scss";
import hqIcon from "../../../../../../images/hq.png";

export function Averages(props: AveragesProps) {
	return (
		<div className={styles.crossWorldMarkets}>
			<Average
				avgPerUnitNq={props.ppuListingsNq}
				avgTotalNq={props.totalListingsNq}
				avgPerUnitHq={props.ppuListingsHq}
				avgTotalHq={props.totalListingsHq}
			/>
			<Average
				avgPerUnitNq={props.ppuHistoryNq}
				avgTotalNq={props.totalHistoryNq}
				avgPerUnitHq={props.ppuListingsHq}
				avgTotalHq={props.totalListingsHq}
			/>
		</div>
	);
}

export interface AveragesProps {
	ppuListingsNq: number;
	totalListingsNq: number;
	ppuHistoryNq: number;
	totalHistoryNq: number;
	ppuListingsHq?: number;
	totalListingsHq?: number;
	ppuHistoryHq?: number;
	totalHistoryHq?: number;
}

function Average(props: AverageProps) {
	return (
		<div>
			<div className={`${styles.flex} ${styles.censusBox}`}>
				<div>
					<h5>{t("Avg. Per Unit", "market_board_avg_perunit")}</h5>
					<br />
					<PricesPerUnit {...props} />
				</div>
				<div>
					<h5>{t("Avg. Total", "market_board_avg_total")}</h5>
					<br />
					<Totals {...props} />
				</div>
			</div>
		</div>
	);
}

function PricesPerUnit(props: AverageProps) {
	if (!props.avgPerUnitHq) {
		return (
			<div className={`${styles.flex} ${styles.avgPrices}`}>
				<div className={styles.flex100}>{props.avgPerUnitNq.toLocaleString(getLocale())}</div>
			</div>
		);
	} else {
		return (
			<div className={`${styles.flex} ${styles.avgPrices}`}>
				<div className={`${styles.flex50} ${styles.priceHq}`}>
					<img className={styles.hqIcon} src={hqIcon} alt="" />
					{props.avgPerUnitHq.toLocaleString(getLocale())}
				</div>
				<div className={styles.flex50}>{props.avgPerUnitNq.toLocaleString(getLocale())}</div>
			</div>
		);
	}
}

function Totals(props: AverageProps) {
	if (!props.avgTotalHq) {
		return (
			<div className={`${styles.flex} ${styles.avgPrices}`}>
				<div className={styles.flex100}>{props.avgTotalNq.toLocaleString(getLocale())}</div>
			</div>
		);
	} else {
		return (
			<div className={`${styles.flex} ${styles.avgPrices}`}>
				<div className={`${styles.flex50} ${styles.priceHq}`}>
					<img className={styles.hqIcon} src={hqIcon} alt="" />
					{props.avgTotalHq.toLocaleString(getLocale())}
				</div>
				<div className={styles.flex50}>{props.avgTotalNq.toLocaleString(getLocale())}</div>
			</div>
		);
	}
}

interface AverageProps {
	avgPerUnitNq: number;
	avgTotalNq: number;
	avgPerUnitHq?: number;
	avgTotalHq?: number;
}
