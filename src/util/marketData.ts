import * as R from "remeda";
import {
	MarketBoardItemListing,
	MarketBoardHistoryEntry,
} from "../services/api/universalis/models";

export function avgPpu(entries: (MarketBoardItemListing | MarketBoardHistoryEntry)[]): number {
	return Math.ceil(
		R.pipe(
			entries,
			R.map((entry) => entry.pricePerUnit),
			R.reduce((acc, next) => acc + next, 0),
		) / entries.length,
	);
}

export function avgTotal(entries: (MarketBoardItemListing | MarketBoardHistoryEntry)[]): number {
	return Math.ceil(
		R.pipe(
			entries,
			R.map((entry) => entry.total),
			R.reduce((acc, next) => acc + next, 0),
		) / entries.length,
	);
}
