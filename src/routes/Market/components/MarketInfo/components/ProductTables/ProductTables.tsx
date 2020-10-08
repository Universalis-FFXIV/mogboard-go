import React from "react";
import styles from "./ProductTables.module.scss";

export function ProductTables() {
	return (
		<div className={styles.crossWorldMarkets}>
			<ProductTable />
			<ProductTable />
		</div>
	);
}

function ProductTable() {
	return (
		<div>
			<h6 className={styles.tableHeader}>NQ Prices (Includes 5% GST)</h6>
		</div>
	);
}
