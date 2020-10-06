import React from "react";
import styles from "./ItemInfo.module.scss";

export function ItemInfo() {
	return (
		<div>
			<div className={styles.itemInfo}>
				<h1 className={`rarity-1`}>
					<span>30</span>
					&nbsp;Earth Materia II
				</h1>
			</div>
			<div className={styles.itemInfo2}>
				<div>
					<i className="xiv-ItemCategory_Materia" />
					&nbsp;Other&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;Materia&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;Stack:
					999
				</div>
				<div>
					A crystal that was once believed to be capable of enhancing a piece of equipment's earth
					resistance.
				</div>
			</div>
		</div>
	);
}
