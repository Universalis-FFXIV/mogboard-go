import * as R from "remeda";

export function buildQueryString(obj: { [key: string]: string }): string {
	const queryString = R.pipe(
		Object.keys(obj),
		R.filter((key) => obj.hasOwnProperty(key)),
		R.map((key) => `${key}=${obj[key]}`),
		R.reduce((acc, param) => `${acc}${param}&`, "?"),
	);
	return queryString.slice(0, queryString.length - 1);
}
