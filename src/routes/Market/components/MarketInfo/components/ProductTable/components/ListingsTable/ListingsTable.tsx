import React, { useMemo } from "react";
import { WorldNamePartial } from "../../../../../../../../models";
import { MarketBoardItemListing } from "../../../../../../../../services/api/universalis/models";

export function ListingsTable(props: ListingsTableProps) {
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

export interface ListingsTableProps {
	listings: (MarketBoardItemListing & WorldNamePartial)[];
	history?: never;
}

interface TableSchema {
	key: number;
	worldName: string;
	hq: JSX.Element;
	materia: JSX.Element[];
	ppu: number;
	quantity: number;
	total: number;
	percDiff: string;
	retainer: JSX.Element;
	creatorName: string;
}
