import React from "react";
import { AdBox } from "./components/AdBox";
import { RecentUpdates } from "./components/RecentUpdates";
import { TaxRates } from "./components/TaxRates";
import { UploadCountsGraph } from "./components/UploadCountsGraph";
import { UploadCountsTotal } from "./components/UploadCountsTotal";

export function RightZone(props: RightZoneProps) {
	return (
		<div className={props.className}>
			<AdBox />
			<RecentUpdates />
			<TaxRates />
			<UploadCountsGraph />
			<UploadCountsTotal />
		</div>
	);
}

export interface RightZoneProps {
	className?: string;
}
