import { RestClient } from "typed-rest-client";

class Universalis {
	private rest: RestClient;

	constructor() {
		this.rest = new RestClient(null, "https://universalis.app");
	}
}

export default Object.freeze(new Universalis());
