import React from "react";
import { AdBox } from "./components/AdBox";
import { RecentUpdates } from "./components/RecentUpdates";
import { TaxRates } from "./components/TaxRates";
import { UploadCountsGraph } from "./components/UploadCountsGraph";
import { UploadCountsTotal } from "./components/UploadCountsTotal";
import styles from "./RightZone.module.scss";

export function RightZone() {
	return (
		<div className={styles.rightZone}>
			<AdBox />
			<RecentUpdates />
			<TaxRates />
			<UploadCountsGraph />
			<UploadCountsTotal />
		</div>
	);
}
