import { getLang } from "../../../services/translation";
import cafeMaker, { CafeMaker } from "./CafeMaker";
import xivapi, { Xivapi } from "./Xivapi";

export function getGameDataProvider(): Readonly<CafeMaker | Xivapi> {
	return getLang() === "zh" ? cafeMaker : xivapi;
}
