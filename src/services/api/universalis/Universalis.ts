import { RestClient } from "typed-rest-client";
import { buildQueryString } from "../../../util/url";
import { RecentlyUpdated, TaxRates, UploadHistory, WorldUploadCounts } from "./models";

class Universalis {
	private rest: RestClient;

	constructor() {
		this.rest = new RestClient(null, "https://universalis.app");
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
