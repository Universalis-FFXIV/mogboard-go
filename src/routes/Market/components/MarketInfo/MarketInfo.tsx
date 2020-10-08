import React, { useContext, useEffect, useState } from "react";
import * as R from "remeda";
import { SERVERS } from "../../../../data/SERVERS";
import { useSettings } from "../../../../hooks";
import { DataCenter, WorldNamePartial } from "../../../../models";
import {
	MarketBoardItemListing,
	MarketDataWorld,
} from "../../../../services/api/universalis/models";
import Universalis from "../../../../services/api/universalis/Universalis";
import { getLang } from "../../../../services/translation";
import { Cheapest } from "./components/Cheapest";
import { LastUploadTimes } from "./components/LastUpdateTimes";
import { ItemContext } from "./contexts/ItemContext";
import worlds from "../../../../data/DataExports/World.json";

export function MarketInfo(props: MarketInfoProps) {
	const [settings] = useSettings();
	const [marketData, setMarketData] = useState<MarketDataWorld[]>([]);
	const item = useContext(ItemContext)!;

	const dc = SERVERS.find((server) => server.worlds.includes(settings.mogboardServer))!;

	useEffect(() => {
		(async () => {
			const newMarketData = await Universalis.marketDataCenter(dc.dataCenter, item.ID);
			setMarketData(newMarketData);
		})();
	}, [dc.dataCenter, item.ID]);

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
}

function CrossWorldMarketInfo(props: CrossWorldMarketInfoProps) {
	const listings = R.pipe(
		props.marketData,
		R.map((marketData) =>
			R.map(marketData.listings, (listing) =>
				R.merge(listing, {
					worldName: worlds.find((world) => world.ID === marketData.worldID)!.Name,
				}),
			),
		),
		R.reduce((acc, next) => acc.concat(next), [] as (MarketBoardItemListing & WorldNamePartial)[]),
		R.sort((a, b) => a.pricePerUnit - b.pricePerUnit),
	);
	const listingsNq = R.filter(listings, (listing) => !listing.hq);
	const listingsHq = R.filter(listings, (listing) => listing.hq);

	return (
		<div>
			<LastUploadTimes
				dataCenter={props.dataCenter}
				worldNames={props.worldNames}
				marketData={props.marketData}
			/>
			<Cheapest listingNq={listingsNq[0]} listingHq={listingsHq[0]} />
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
