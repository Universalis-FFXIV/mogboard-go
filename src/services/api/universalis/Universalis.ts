import { IRestResponse, RestClient } from "typed-rest-client";
import { SERVERS } from "../../../data/SERVERS";
import { DataCenter } from "../../../models";
import { buildQueryString } from "../../../util/url";
import {
	MarketData,
	MarketDataWorld,
	RecentlyUpdated,
	TaxRates,
	UploadHistory,
	WorldUploadCounts,
} from "./models";

class Universalis {
	private rest: RestClient;

	constructor() {
		this.rest = new RestClient(null, "https://universalis.app");
	}

	async market(worldOrDC: string | number, itemId: number): Promise<MarketData> {
		const res = await this.rest.get<MarketData>(`/api/${worldOrDC}/${itemId}`);
		return res.result!;
	}

	async marketDataCenter(dataCenter: DataCenter, itemId: number): Promise<MarketDataWorld[]> {
		const requests: Promise<IRestResponse<MarketDataWorld>>[] = [];
		const { worlds } = SERVERS.find((server) => server.dataCenter === dataCenter)!;
		for (const world of worlds) {
			const request = this.rest.get<MarketDataWorld>(`/api/${world}/${itemId}`);
			requests.push(request);
		}

		return (await Promise.all(requests)).map((res) => res.result!);
	}

	async recentlyUpdated(): Promise<RecentlyUpdated> {
		const res = await this.rest.get<RecentlyUpdated>("/api/extra/stats/recently-updated");
		return res.result!;
	}

	async uploadHistory(): Promise<UploadHistory> {
		const res = await this.rest.get<UploadHistory>("/api/extra/stats/upload-history");
		return res.result!;
	}

	async taxRates(world: string | number): Promise<TaxRates> {
		const res = await this.rest.get<TaxRates>(
			`/api/tax-rates${buildQueryString({ world: world.toString() })}`,
		);
		return res.result!;
	}

	async worldUploadCounts(): Promise<WorldUploadCounts> {
		const res = await this.rest.get<WorldUploadCounts>("/api/extra/stats/world-upload-counts");
		return res.result!;
	}
}

export default Object.freeze(new Universalis());
