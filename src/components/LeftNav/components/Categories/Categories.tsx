import React from "react";
import { ISC_GROUPS } from "../../../../data/ISC_GROUPS";
import { ITEM_SEARCH_CATEGORY_ICONS } from "../../../../data/ITEM_SEARCH_CATEGORY_ICONS";
import ItemSearchCategories from "../../../../services/data/ItemSearchCategories";
import { t } from "../../../../services/translation";
import styles from "./Categories.module.scss";

export function Categories() {
	return (
		<div className={styles.categories}>
			<div className={styles.navBox}>
				<div className={styles.navHeading}>{t("WEAPONS", "nav_weapons")}</div>
				<div>
					<CategoryGroup type="weapons" categoryIds={ISC_GROUPS.DOW} />
					<hr />
					<CategoryGroup type="weapons" categoryIds={ISC_GROUPS.DOM} />
					<hr />
					<CategoryGroup type="weapons" categoryIds={ISC_GROUPS.DOH} />
					<hr />
					<CategoryGroup type="weapons" categoryIds={ISC_GROUPS.DOL} />
				</div>
			</div>
			<div className={styles.navBox}>
				<div className={styles.navHeading}>{t("ARMOR", "nav_armor")}</div>
				<div>
					<CategoryGroup type="armor" categoryIds={ISC_GROUPS.ARMOR} />
				</div>
			</div>
			<div className={styles.navBox}>
				<div className={styles.navHeading}>{t("ITEMS", "nav_items")}</div>
				<div>
					<CategoryGroup type="items" categoryIds={ISC_GROUPS.ITEMS} />
				</div>
			</div>
			<div className={styles.navBox}>
				<div className={styles.navHeading}>{t("HOUSING", "nav_housing")}</div>
				<div>
					<CategoryGroup type="housing" categoryIds={ISC_GROUPS.HOUSING} />
				</div>
			</div>
		</div>
	);
}

function CategoryGroup(props: CategoryGroupProps) {
	return (
		<div>
			{props.categoryIds.map((id) => (
				<CategoryButton key={id} type={props.type} categoryId={id} />
			))}
		</div>
	);
}

function CategoryButton(props: CategoryButtonProps) {
	return (
		<button
			className={(() => {
				switch (props.type) {
					case "weapons":
						return styles.typeWeapons;
					case "armor":
						return styles.typeArmor;
					case "items":
						return styles.typeItems;
					case "housing":
						return styles.typeHousing;
				}
			})()}
		>
			<i className={`xiv-${ITEM_SEARCH_CATEGORY_ICONS[props.categoryId]}`}></i>
			<span>{ItemSearchCategories.getCategoryName(props.categoryId)}</span>
		</button>
	);
}

interface CategoryGroupProps {
	type: "weapons" | "armor" | "items" | "housing";
	categoryIds: number[];
}

interface CategoryButtonProps {
	type: "weapons" | "armor" | "items" | "housing";
	categoryId: number;
}
