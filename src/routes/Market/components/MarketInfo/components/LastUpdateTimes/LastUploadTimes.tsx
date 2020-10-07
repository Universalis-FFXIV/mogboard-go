import React from "react";
import { DataCenter } from "../../../../../../models";
import { MarketDataWorld } from "../../../../../../services/api/universalis/models";
import { getLocale } from "../../../../../../services/translation";
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

function dateTimeToString(dateTime: number): string {
	const now = new Date();
	const then = new Date(dateTime);
	const timeDiff = now.getTime() - dateTime;

	if (timeDiff < 3600000) {
		const minutes = Math.trunc(timeDiff / 60000);
		return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
	} else if (timeDiff < 86400000) {
		const hours = Math.trunc(timeDiff / 3600000);
		return `${hours} hour${hours > 1 ? "s" : ""} ago`;
	} else {
		return then.toLocaleString(getLocale());
	}
}
