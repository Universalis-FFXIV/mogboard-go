import * as R from "remeda";
import { findTimeZone, getUTCOffset, listTimeZones } from "timezone-support";

export function getTimeZones() {
	const now = new Date();
	const timezones = R.pipe(
		listTimeZones(),
		R.map((tz) => {
			const tzOffset = getUTCOffset(now, findTimeZone(tz));
			const offsetAsHours = tzOffset.offset / 60;

			const sign = offsetAsHours > 0 ? "+" : "-";
			const hourComponent = Math.trunc(offsetAsHours);
			const minuteComponent = 60 * (offsetAsHours - hourComponent);

			return {
				zone: tz,
				abbreviation: tzOffset.abbreviation,
				offset: tzOffset.offset,
				formattedOffset: `(UTC${sign}${padWithZeroes(Math.abs(hourComponent), 2)}:${padWithZeroes(
					minuteComponent,
					2,
				)}) ${tz.substr(tz.lastIndexOf("/") + 1).replace(/_/g, " ")}`,
			};
		}),
		R.filter((tz) => !tz.zone.startsWith("Etc/") && tz.zone.includes("/")),
		R.sort((a, b) => a.offset - b.offset),
	);

	return timezones;
}

function padWithZeroes(input: number | string, count: number): string {
	let out = "";
	for (let i = 0; i < count; i++) {
		out += "0";
	}
	out += input;
	return out.substr(out.length - count);
}
