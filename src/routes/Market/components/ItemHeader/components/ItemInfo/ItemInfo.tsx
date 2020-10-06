import React from "react";
import styles from "./ItemInfo.module.scss";

export function ItemInfo() {
	return (
		<div>
			<div className={styles.itemInfo}>
				<h1 className={`rarity-1`}>
					<span>30</span>
					Earth Materia II
				</h1>
			</div>
			<div className={styles.itemInfo2}>
				<div>
					<i className="xiv-ItemCategory_Materia" />
					Other - Materia - Stack: 999
				</div>
				<div>
					A crystal that was once believed to be capable of enhancing a piece of equipment's earth
					resistance.
				</div>
			</div>
		</div>
	);
}
