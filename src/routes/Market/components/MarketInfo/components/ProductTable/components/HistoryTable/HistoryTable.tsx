import React, { useMemo } from "react";
import { MarketBoardHistoryEntry } from "../../../../../../../../services/api/universalis/models";
import styles from "../../ProductTable.module.scss";
import hqIcon from "../../../../../../../../images/hq.png";
import { dateTimeToString } from "../../../../../../../../util/time";
import { useSortBy, useTable } from "react-table";

export function HistoryTable(props: HistoryTableProps) {
	const data = useMemo(
		() =>
			props.history.map((entry, i) => {
				return {
					key: i + 1,
					worldName: entry.worldName,
					hq: entry.hq ? <img className={styles.hqIcon} src={hqIcon} alt="" /> : undefined,
					ppu: entry.pricePerUnit,
					quantity: entry.quantity,
					total: entry.total,
					percDiff: <></>,
					buyerName: entry.buyerName,
					date: dateTimeToString(entry.timestamp * 1000),
				};
			}) as TableSchema[],
		[props.history],
	);

	const columns = useMemo(
		() =>
			[
				{
					Header: "#",
					accessor: "key",
				},
				{
					Header: "Server",
					accessor: "worldName",
				},
				{
					Header: "HQ",
					accessor: "hq",
				},
				{
					Header: "Price",
					accessor: "ppu",
				},
				{
					Header: "QTY",
					accessor: "quantity",
				},
				{
					Header: "Total",
					accessor: "total",
				},
				{
					Header: "%Diff",
					accessor: "percDiff",
				},
				{
					Header: "Buyer",
					accessor: "buyerName",
				},
				{
					Header: "Date",
					accessor: "date",
				},
			] as any[],
		[],
	);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
		{
			columns,
			data,
		},
		useSortBy,
	);

	return (
		<div className={styles.productTable}>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column, i) => {
								const headerProps = column.getHeaderProps(
									(column as any) /* Escape hatch for incomplete TS typings in the lib */
										.getSortByToggleProps(),
								);
								if (i === 0) {
									headerProps.className = styles.tac;
								}
								return <th {...headerProps}>{column.render("Header")}</th>;
							})}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell, i) => {
									const cellProps = cell.getCellProps();
									switch (i) {
										case 0:
											cellProps.className = `${styles.priceNum} ${styles.tac}`;
											break;
										case 1:
											cellProps.className = styles.priceServer;
											break;
										case 3:
											cellProps.className = styles.priceCurrent;
											break;
										case 4:
											cellProps.className = styles.priceQty;
											break;
										case 5:
											cellProps.className = styles.priceTotal;
											break;
										default:
											cellProps.className = styles.priceMisc;
											break;
									}
									return <td {...cellProps}>{cell.render("Cell")}</td>;
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
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
	percDiff: JSX.Element;
	buyerName: string;
	date: string;
}
