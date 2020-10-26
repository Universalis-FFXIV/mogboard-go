import { RestClient } from "typed-rest-client";
import { buildQueryString } from "../../../util/url";
import { Item, SearchResponse, SearchResultItem } from "./models";

export class Xivapi {
	private rest: RestClient;

	constructor(baseUrl = "https://xivapi.com") {
		this.rest = new RestClient(null, baseUrl);
	}

	async item(id: number, language?: string | null): Promise<Item> {
		const res = await this.rest.get<Item>(
			`/Item/${id}${buildQueryString({
				language: language || "en",
			})}`,
		);
		if (res.result == null) {
			throw new Error("Item not found!");
		}

		return res.result;
	}

	async search(
		term: string,
		language?: string | null,
	): Promise<[SearchResultItem[], TotalResults]> {
		const params1 = {
			indexes: "item",
			filters: "ItemSearchCategory.ID>=1",
			columns:
				"ID,Icon,Name,LevelItem,Rarity,ItemSearchCategory.Name,ItemSearchCategory.ID,ItemKind.Name",
			string: term.trim(),
			limit: "100",
			sort_field: "LevelItem",
			sort_order: "desc",
			language: language || "en",
		};

		const params2 = {
			...params1,
			string_algo: "fuzzy",
		};

		let res = await this.rest.get<SearchResponse>(`/search${buildQueryString(params1)}`);
		const fuzzyRes = await this.rest.get<SearchResponse>(`/search${buildQueryString(params2)}`);
		if (!res.result) {
			res = fuzzyRes;
		} else {
			res.result.Results = res.result.Results.concat(fuzzyRes.result?.Results || []);
			res.result.Pagination.Results += fuzzyRes.result?.Pagination.Results || 0;
			res.result.Pagination.ResultsTotal += fuzzyRes.result?.Pagination.ResultsTotal || 0;
			res.result.SpeedMs += fuzzyRes.result?.SpeedMs || 0;
		}

		return [res.result?.Results || [], res.result?.Pagination.ResultsTotal || 0];
	}
}

export type TotalResults = number;

export default Object.freeze(new Xivapi());
