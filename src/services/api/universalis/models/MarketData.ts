import { DataCenter } from "../../../../models";

export type MarketData = MarketDataWorld | MarketDataDataCenter;
export type MarketDataWorld = MarketDataBasic & WorldPartial;
export type MarketDataDataCenter = MarketDataBasic & DataCenterPartial;

interface MarketDataBasic {
	itemID: number;
	lastUploadTime: number;
	listings: Array<any>;
	recentHistory: Array<any>;
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
	worldID?: number;
}

interface DataCenterPartial {
	dcName?: DataCenter;
}
