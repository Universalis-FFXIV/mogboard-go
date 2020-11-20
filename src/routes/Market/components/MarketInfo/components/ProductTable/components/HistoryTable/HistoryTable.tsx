import React, { useMemo } from "react";
import { MarketBoardHistoryEntry } from "../../../../../../../../services/api/universalis/models";
import styles from "../../ProductTable.module.scss";
import hqIcon from "../../../../../../../../images/hq.png";
import { dateTimeToString } from "../../../../../../../../util/time";
import { useSortBy, useTable } from "react-table";
import { percentDifference } from "../../../../../../../../util/math";
import { getLang, t } from "../../../../../../../../services/translation";

export function HistoryTable(props: HistoryTableProps) {
	const data = useMemo(
		() =>
			props.history.map((entry, i) => {
				const percDiff = Math.floor(percentDifference(entry.pricePerUnit, props.averagePpu));

				return {
					key: i + 1,
					worldName: entry.worldName,
					hq: entry.hq ? <img className={styles.hqIcon} src={hqIcon} alt="" /> : undefined,
					ppu: entry.pricePerUnit,
					quantity: entry.quantity,
					total: entry.total,
					percDiff: `${percDiff > 0 ? "+" + percDiff : percDiff.toString()}%`,
					buyerName: entry.buyerName,
					date: dateTimeToString(entry.timestamp * 1000),
				};
			}) as TableSchema[],
		[props.averagePpu, props.history],
	);

	const columns = useMemo(
		() =>
			[
				{
					Header: t("#", "generic_quantity_shorthand"),
					accessor: "key",
				},
				{
					Header: t("Server", "generic_server"),
					accessor: "worldName",
				},
				{
					Header: t("HQ", "generic_hq"),
					accessor: "hq",
				},
				{
					Header: t("Price", "generic_price"),
					accessor: "ppu",
				},
				{
					Header: t("QTY", "generic_quantity_shorthand"),
					accessor: "quantity",
				},
				{
					Header: t("Total", "generic_total"),
					accessor: "total",
				},
				{
					Header: t("%Diff", "generic_percent_difference_shorthand"),
					accessor: "percDiff",
				},
				{
					Header: t("Buyer", "generic_buyer"),
					accessor: "buyerName",
				},
				{
					Header: t("Date", "generic_date"),
					accessor: "date",
				},
			] as any[],
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[getLang()],
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
										case 6:
											const cellValNumber = parseInt(cell.value.replace(/[^-\d]/, ""));
											if (cellValNumber > 20) {
												cellProps.className = styles.priceDiffBad;
											} else if (cellValNumber < -14) {
												cellProps.className = styles.priceDiffGood;
											} else {
												cellProps.className = styles.priceDiffOk;
											}
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
	averagePpu: number;
}

interface TableSchema {
	key: number;
	worldName: string;
	hq: JSX.Element;
	ppu: number;
	quantity: number;
	total: number;
	percDiff: string;
	buyerName: string;
	date: string;
}
