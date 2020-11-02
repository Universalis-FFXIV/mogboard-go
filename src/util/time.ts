import * as R from "remeda";
import { findTimeZone, getUTCOffset, listTimeZones } from "timezone-support";
import { getLocale } from "../services/translation";

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

export function dateTimeToString(dateTime: number): string {
	const now = new Date();
	const then = new Date(dateTime);
	const timeDiff = now.getTime() - dateTime;

	if (timeDiff < 3600000) {
		const minutes = Math.trunc(timeDiff / 60000);
		return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
	} else if (timeDiff < 86400000) {
		const hours = Math.trunc(timeDiff / 3600000);
		return `${hours} hour${hours > 1 ? "s" : ""} ago`;
	} else {
		return then.toLocaleString(getLocale());
	}
}

function padWithZeroes(input: number | string, count: number): string {
	let out = "";
	for (let i = 0; i < count; i++) {
		out += "0";
	}
	out += input;
	return out.substr(out.length - count);
}
