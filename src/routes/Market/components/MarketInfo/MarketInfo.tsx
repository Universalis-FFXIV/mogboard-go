import React, { useContext, useEffect, useState } from "react";
import * as R from "remeda";
import { SERVERS } from "../../../../data/SERVERS";
import { useSettings } from "../../../../hooks";
import { DataCenter, WorldNamePartial } from "../../../../models";
import {
	MarketBoardHistoryEntry,
	MarketBoardItemListing,
	MarketDataWorld,
} from "../../../../services/api/universalis/models";
import Universalis from "../../../../services/api/universalis/Universalis";
import { getLang } from "../../../../services/translation";
import { Cheapest } from "./components/Cheapest";
import { LastUploadTimes } from "./components/LastUploadTimes";
import { ItemContext } from "./contexts/ItemContext";
import worlds from "../../../../data/DataExports/World.json";
import { Averages } from "./components/Averages";
import { LoadSpeed } from "./components/LoadSpeed";
import { StackSizeHistogram } from "./components/StackSizeHistogram";
import { avgPpu, avgTotal } from "../../../../util/marketData";
import { ProductTable } from "./components/ProductTable";
import styles from "./MarketInfo.module.scss";
import hqIcon from "../../../../images/hq.png";

export function MarketInfo(props: MarketInfoProps) {
	const [settings] = useSettings();
	const [marketData, setMarketData] = useState<MarketDataWorld[]>([]);
	const [loadSpeed, setLoadSpeed] = useState(0);
	const item = useContext(ItemContext)!;

	const dc = SERVERS.find((server) => server.worlds.includes(settings.mogboardServer))!;

	useEffect(() => {
		(async () => {
			const startTime = performance.now();
			const newMarketData = await Universalis.marketDataCenter(dc.dataCenter, item.ID);
			setLoadSpeed(performance.now() - startTime);
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
				loadSpeed={props.accLoadSpeed + loadSpeed}
			/>
		);
	} else {
		return <SingleWorldMarketInfo worldName={props.server} marketData={marketData} />;
	}
}

export interface MarketInfoProps {
	server: string;
	accLoadSpeed: number;
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
		R.sort((a, b) => {
			let diff = a.pricePerUnit - b.pricePerUnit;
			if (diff === 0) {
				diff = a.total - b.total;
			}
			return diff;
		}),
	);
	const listingsNq = R.filter(listings, (listing) => !listing.hq);
	const listingsHq = R.filter(listings, (listing) => listing.hq);

	const avgListingPerUnitNq = avgPpu(listingsNq);
	const avgListingTotalNq = avgTotal(listingsNq);
	const avgListingPerUnitHq = avgPpu(listingsHq);
	const avgListingTotalHq = avgTotal(listingsHq);

	const historyEntries = R.pipe(
		props.marketData,
		R.map((marketData) =>
			R.map(marketData.recentHistory, (entry) =>
				R.merge(entry, {
					worldName: worlds.find((world) => world.ID === marketData.worldID)!.Name,
				}),
			),
		),
		R.reduce((acc, next) => acc.concat(next), [] as MarketBoardHistoryEntry[]),
		R.sort((a, b) => b.timestamp - a.timestamp),
	);
	const historyEntriesNq = R.filter(historyEntries, (entry) => !entry.hq);
	const historyEntriesHq = R.filter(historyEntries, (entry) => entry.hq);

	const avgHistoryPerUnitNq = avgPpu(historyEntriesNq);
	const avgHistoryTotalNq = avgTotal(historyEntriesNq);
	const avgHistoryPerUnitHq = avgPpu(historyEntriesHq);
	const avgHistoryTotalHq = avgTotal(historyEntriesHq);

	return (
		<div>
			<LastUploadTimes
				dataCenter={props.dataCenter}
				worldNames={props.worldNames}
				marketData={props.marketData}
			/>
			<Cheapest listingNq={listingsNq[0]} listingHq={listingsHq[0]} />
			<StackSizeHistogram marketData={props.marketData} serverName={props.dataCenter} />

			<div style={{ display: "flex" }}>
				<div style={{ paddingRight: "10px", flex: "0 1 50%" }}>
					<h6 className={styles.tableTitle}>
						<img src={hqIcon} alt="" className={styles.hqIcon} height="15" /> HQ Prices (Includes 5%
						GST)
					</h6>
					<ProductTable listings={listingsHq.slice(0, 10)} />
					<br />
					<h6 className={styles.tableTitle}>NQ Prices (Includes 5% GST)</h6>
					<ProductTable listings={listingsNq.slice(0, 10)} />
				</div>
				<div style={{ paddingLeft: "10px", flex: "0 1 50%" }}>
					<h6 className={styles.tableTitle}>
						<img src={hqIcon} alt="" className={styles.hqIcon} height="15" /> HQ Purchase History
					</h6>
					<ProductTable history={historyEntriesHq.slice(0, 10)} />
					<br />
					<h6 className={styles.tableTitle}>NQ Purchase History</h6>
					<ProductTable history={historyEntriesNq.slice(0, 10)} />
				</div>
			</div>

			<br />
			<br />

			<Averages
				ppuListingsNq={avgListingPerUnitNq}
				totalListingsNq={avgListingTotalNq}
				ppuListingsHq={avgListingPerUnitHq}
				totalListingsHq={avgListingTotalHq}
				ppuHistoryNq={avgHistoryPerUnitNq}
				totalHistoryNq={avgHistoryTotalNq}
				ppuHistoryHq={avgHistoryPerUnitHq}
				totalHistoryHq={avgHistoryTotalHq}
			/>
			<LoadSpeed loadSpeed={props.loadSpeed} />
		</div>
	);
}

interface CrossWorldMarketInfoProps {
	dataCenter: DataCenter;
	marketData: MarketDataWorld[];
	worldNames: string[];
	loadSpeed: number;
}

function SingleWorldMarketInfo(props: SingleWorldMarketInfoProps) {
	const { ID } = worlds.find((world) => world.Name === props.worldName)!;

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
		R.filter((listing) => listing.worldName === props.worldName),
		R.sort((a, b) => {
			let diff = a.pricePerUnit - b.pricePerUnit;
			if (diff === 0) {
				diff = a.total - b.total;
			}
			return diff;
		}),
	);

	const historyEntries = R.pipe(
		props.marketData,
		R.map((marketData) => marketData.recentHistory),
		R.reduce((acc, next) => acc.concat(next), [] as MarketBoardHistoryEntry[]),
		R.filter((entry) => entry.worldName === props.worldName),
	);

	return (
		<div>
			<StackSizeHistogram
				marketData={[props.marketData.find((md) => md.worldID === ID)!]}
				serverName={props.worldName}
			/>

			<div style={{ display: "flex" }}>
				<div style={{ paddingRight: "10px", flex: "0 1 50%" }}>
					<ProductTable listings={listings} />
				</div>
				<div style={{ paddingLeft: "10px", flex: "0 1 50%" }}>
					<ProductTable history={historyEntries} />
				</div>
			</div>
		</div>
	);
}

interface SingleWorldMarketInfoProps {
	worldName: string;
	marketData: MarketDataWorld[];
}
