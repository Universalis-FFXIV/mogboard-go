import React, { useMemo } from "react";
import { MarketBoardHistoryEntry } from "../../../../../../../../services/api/universalis/models";

export function HistoryTable(props: HistoryTableProps) {
	const data = useMemo(() => [] as TableSchema[], []);

	return (
		<table>
			<thead>
				<tr>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td></td>
				</tr>
			</tbody>
		</table>
	);
}

export interface HistoryTableProps {
	listings?: never;
	history: MarketBoardHistoryEntry[];
}

interface TableSchema {
	key: number;
	worldName: string;
	hq: JSX.Element;
	ppu: number;
	quantity: number;
	total: number;
	percDiff: string;
	creatorName: string;
	date: string;
}
