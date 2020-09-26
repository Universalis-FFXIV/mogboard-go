import { Xivapi } from "./Xivapi";

export class CafeMaker extends Xivapi {
	constructor() {
		super("https://cafemaker.wakingsands.com");
	}
}

export default Object.freeze(new CafeMaker());
