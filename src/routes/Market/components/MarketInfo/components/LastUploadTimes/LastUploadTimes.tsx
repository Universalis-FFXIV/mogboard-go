import React from "react";
import { DataCenter } from "../../../../../../models";
import { MarketDataWorld } from "../../../../../../services/api/universalis/models";
import { dateTimeToString } from "../../../../../../util/time";
import styles from "./LastUploadTimes.module.scss";

export function LastUploadTimes(props: LastUploadTimesProps) {
	return (
		<div className={styles.marketUpdateTimes}>
			{props.marketData.map((data, i) => (
				<div key={i}>
					<h4>{props.worldNames[i]}</h4>
					<div>{dateTimeToString(data.lastUploadTime)}</div>
				</div>
			))}
		</div>
	);
}

export interface LastUploadTimesProps {
	dataCenter: DataCenter;
	worldNames: string[];
	marketData: MarketDataWorld[];
}
