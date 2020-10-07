import React, { useEffect, useState } from "react";
import { SERVERS } from "../../../../data/SERVERS";
import { useSettings } from "../../../../hooks";
import { DataCenter } from "../../../../models";
import { MarketDataWorld } from "../../../../services/api/universalis/models";
import Universalis from "../../../../services/api/universalis/Universalis";
import { getLang } from "../../../../services/translation";
import { Cheapest } from "./components/Cheapest";
import { LastUploadTimes } from "./components/LastUpdateTimes";

export function MarketInfo(props: MarketInfoProps) {
	const [settings] = useSettings();
	const [marketData, setMarketData] = useState<MarketDataWorld[]>([]);

	const dc = SERVERS.find((server) => server.worlds.includes(settings.mogboardServer))!;

	useEffect(() => {
		(async () => {
			const newMarketData = await Universalis.marketDataCenter(dc.dataCenter, props.itemId);
			setMarketData(newMarketData);
		})();
	}, [dc.dataCenter, props.itemId]);

	if (props.server === dc.dataCenter) {
		return (
			<CrossWorldMarketInfo
				dataCenter={props.server}
				worldNames={
					getLang() === "zh" ? (dc.worldsZh != null ? dc.worldsZh : dc.worlds) : dc.worlds
				}
				marketData={marketData}
			/>
		);
	} else {
		return <SingleWorldMarketInfo world={props.server} marketData={marketData} />;
	}
}

export interface MarketInfoProps {
	server: string;
	itemId: number;
}

function CrossWorldMarketInfo(props: CrossWorldMarketInfoProps) {
	return (
		<div>
			<LastUploadTimes
				dataCenter={props.dataCenter}
				worldNames={props.worldNames}
				marketData={props.marketData}
			/>
			<Cheapest />
		</div>
	);
}

interface CrossWorldMarketInfoProps {
	dataCenter: DataCenter;
	marketData: MarketDataWorld[];
	worldNames: string[];
}

function SingleWorldMarketInfo(props: SingleWorldMarketInfoProps) {
	return <div></div>;
}

interface SingleWorldMarketInfoProps {
	world: string;
	marketData: MarketDataWorld[];
}
