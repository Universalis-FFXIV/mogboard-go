import { RestClient } from "typed-rest-client";
import { buildQueryString } from "../../../util/url";
import { Item, SearchResultItem } from "./models";

export class Xivapi {
	private rest: RestClient;

	constructor(baseUrl = "https://xivapi.com") {
		this.rest = new RestClient(null, baseUrl);
	}

	async item(id: number): Promise<Item> {
		const res = await this.rest.get<Item>(`/Item/${id}`);
		if (res.result == null) {
			throw new Error("Item not found!");
		}

		return res.result;
	}

	async search(
		term: string,
		language?: string | null,
	): Promise<[SearchResultItem[], TotalResults]> {
		const res = await this.rest.get<{
			Pagination: {
				Page: number;
				PageNext: number;
				PagePrev: number;
				PageTotal: number;
				Results: number;
				ResultsPerPage: number;
				ResultsTotal: number;
			};
			Results: SearchResultItem[];
			SpeedMs: number;
		}>(
			`/search${buildQueryString({
				indexes: "item",
				filters: "ItemSearchCategory.ID>=1",
				columns:
					"ID,Icon,Name,LevelItem,Rarity,ItemSearchCategory.Name,ItemSearchCategory.ID,ItemKind.Name",
				string: term.trim(),
				limit: "100",
				sort_field: "LevelItem",
				sort_order: "desc",
				language: language || "en",
			})}`,
		);

		return [res.result?.Results || [], res.result?.Pagination.ResultsTotal || 0];
	}
}

export type TotalResults = number;

export default Object.freeze(new Xivapi());
