import React from "react";
import { AdBox } from "./components/AdBox";
import { RecentUpdates } from "./components/RecentUpdates";
import { TaxRatesPanel } from "./components/TaxRatesPanel";
import { UploadCountsGraph } from "./components/UploadCountsGraph";
import { UploadCountsTotal } from "./components/UploadCountsTotal";

export function RightZone(props: RightZoneProps) {
	return (
		<div className={props.className}>
			<AdBox />
			<RecentUpdates />
			<TaxRatesPanel />
			<UploadCountsGraph />
			<UploadCountsTotal />
		</div>
	);
}

export interface RightZoneProps {
	className?: string;
}
