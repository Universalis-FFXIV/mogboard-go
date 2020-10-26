import React from "react";
import { HistoryTable, HistoryTableProps } from "./components/HistoryTable";
import { ListingsTable, ListingsTableProps } from "./components/ListingsTable";

export function ProductTable(props: ProductTableProps) {
	if (props.listings) {
		return <ListingsTable listings={props.listings} />;
	} else {
		return <HistoryTable history={props.history} />;
	}
}

export type ProductTableProps = ListingsTableProps | HistoryTableProps;
