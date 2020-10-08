import React, { useContext } from "react";
import { ITEM_SEARCH_CATEGORY_ICONS } from "../../../../../../data/ITEM_SEARCH_CATEGORY_ICONS";
import { t } from "../../../../../../services/translation";
import { ItemContext } from "../../../MarketInfo/contexts/ItemContext";
import styles from "./ItemInfo.module.scss";

export function ItemInfo() {
	const item = useContext(ItemContext)!;

	return (
		<div>
			<div className={styles.itemInfo}>
				<h1 className={`rarity-${item.Rarity}`}>
					<span>{item.LevelItem}</span>
					&nbsp;{item.Name}
				</h1>
			</div>
			<div className={styles.itemInfo2}>
				<div>
					<i className={`xiv-${ITEM_SEARCH_CATEGORY_ICONS[item.ItemSearchCategory.ID]}`} />
					&nbsp;{item.ItemKind.Name}
					{"   "}-{"   "}
					{item.ItemUICategory.Name}
					{"   "}-{"   "}
					{t("Stack:", "generic_stack_size_colon")}
					&nbsp;{item.StackSize}
				</div>
				<div>{item.Description}</div>
			</div>
		</div>
	);
}
