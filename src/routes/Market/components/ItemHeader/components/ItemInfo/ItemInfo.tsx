import React from "react";
import { ITEM_SEARCH_CATEGORY_ICONS } from "../../../../../../data/ITEM_SEARCH_CATEGORY_ICONS";
import { Item } from "../../../../../../services/api/xivapi/models";
import { t } from "../../../../../../services/translation";
import styles from "./ItemInfo.module.scss";

export function ItemInfo(props: Item) {
	return (
		<div>
			<div className={styles.itemInfo}>
				<h1 className={`rarity-${props.Rarity}`}>
					<span>{props.LevelItem}</span>
					&nbsp;{props.Name}
				</h1>
			</div>
			<div className={styles.itemInfo2}>
				<div>
					<i className={`xiv-${ITEM_SEARCH_CATEGORY_ICONS[props.ItemSearchCategory.ID]}`} />
					&nbsp;{props.ItemKind.Name}
					&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{props.ItemUICategory.Name}
					&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
					{t("Stack:", "generic_stack_size_colon")}
					&nbsp;{props.StackSize}
				</div>
				<div>{props.Description}</div>
			</div>
		</div>
	);
}
