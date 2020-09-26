import { RestClient } from "typed-rest-client";
import { Item } from "./models";

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
}

export default Object.freeze(new Xivapi());
