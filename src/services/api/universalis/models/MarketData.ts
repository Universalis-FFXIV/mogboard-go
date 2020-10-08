import { DataCenter } from "../../../../models";

export type MarketData = MarketDataWorld | MarketDataDataCenter;
export type MarketDataWorld = MarketDataBasic & WorldPartial;
export type MarketDataDataCenter = MarketDataBasic & DataCenterPartial;

interface MarketDataBasic {
	itemID: number;
	lastUploadTime: number;
	listings: Array<MarketBoardItemListing>;
	recentHistory: Array<MarketBoardHistoryEntry>;
	regularSaleVelocity: number;
	nqSaleVelocity: number;
	hqSaleVelocity: number;
	averagePrice: number;
	averagePriceNQ: number;
	averagePriceHQ: number;
	stackSizeHistogram: { [key: number]: number };
	stackSizeHistogramNQ: { [key: number]: number };
	stackSizeHistogramHQ: { [key: number]: number };
}

interface WorldPartial {
	worldID: number;
}

interface DataCenterPartial {
	dcName: DataCenter;
}

export interface MarketBoardItemListing {
	creatorID: string;
	lastReviewTime: number;
	listingID: string;
	pricePerUnit: number;
	quantity: number;
	retainerID: string;
	sellerID: string;
	stainID: number;
	creatorName: string;
	hq: boolean;
	isCrafted: boolean;
	materia: [];
	onMannequin: boolean;
	retainerCity: number;
	retainerName: string;
	total: number;
}

export interface MarketBoardHistoryEntry {
	hq: boolean;
	pricePerUnit: number;
	quantity: number;
	timestamp: number;
	worldName: string;
	buyerName: string;
	total: number;
}
