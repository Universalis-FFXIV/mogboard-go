import React from "react";
import { HistoryTable, HistoryTableProps } from "./components/HistoryTable";
import { ListingsTable, ListingsTableProps } from "./components/ListingsTable";

export function ProductTable(props: ProductTableProps) {
	if (props.listings) {
		return <ListingsTable listings={props.listings} averagePpu={props.averagePpu} />;
	} else {
		return <HistoryTable history={props.history} averagePpu={props.averagePpu} />;
	}
}

export type ProductTableProps = ListingsTableProps | HistoryTableProps;
