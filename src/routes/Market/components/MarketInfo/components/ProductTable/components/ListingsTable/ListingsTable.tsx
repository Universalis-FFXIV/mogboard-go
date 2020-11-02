import React, { useMemo } from "react";
import { useSortBy, useTable } from "react-table";
import { WorldNamePartial } from "../../../../../../../../models";
import { MarketBoardItemListing } from "../../../../../../../../services/api/universalis/models";
import styles from "../../ProductTable.module.scss";
import hqIcon from "../../../../../../../../images/hq.png";
import { CITY_ICONS } from "../../../../../../../../data/CITY_ICONS";

export function ListingsTable(props: ListingsTableProps) {
	const data = useMemo(
		() =>
			props.listings.map((listing, i) => {
				return {
					key: i + 1,
					worldName: listing.worldName,
					hq: listing.hq ? <img className={styles.hqIcon} src={hqIcon} alt="" /> : undefined,
					materia: [] as JSX.Element[],
					ppu: listing.pricePerUnit,
					quantity: listing.quantity,
					total: listing.total,
					percDiff: <></>,
					retainer: (
						<span>
							{listing.retainerName}
							<img
								src={`https://xivapi.com${CITY_ICONS[listing.retainerCity]}`}
								alt=""
								className={styles.priceCityFlag}
							></img>
						</span>
					),
					creatorName: listing.creatorName ? listing.creatorName : "?",
				};
			}) as TableSchema[],
		[props.listings],
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
					Header: "Mat",
					accessor: "materia",
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
					Header: "Retainer",
					accessor: "retainer",
				},
				{
					Header: "Creator",
					accessor: "creatorName",
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
										case 4:
											cellProps.className = styles.priceCurrent;
											break;
										case 5:
											cellProps.className = styles.priceQty;
											break;
										case 6:
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

export interface ListingsTableProps {
	listings: (MarketBoardItemListing & WorldNamePartial)[];
	history?: never;
}

interface TableSchema {
	key: number;
	worldName: string;
	hq?: JSX.Element;
	materia: JSX.Element[];
	ppu: number;
	quantity: number;
	total: number;
	percDiff: JSX.Element;
	retainer: JSX.Element;
	creatorName: string;
}
