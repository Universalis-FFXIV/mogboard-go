import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { ISC_GROUPS } from "../../../../data/ISC_GROUPS";
import { ITEM_SEARCH_CATEGORY_ICONS } from "../../../../data/ITEM_SEARCH_CATEGORY_ICONS";
import ItemSearchCategories from "../../../../services/data/ItemSearchCategories";
import { t } from "../../../../services/translation";
import { CategoryView } from "../CategoryView";
import styles from "./Categories.module.scss";

export function Categories() {
	const [viewOpen, setViewOpen] = useState(false);
	const [currentCategory, setCurrentCategory] = useState(9);

	return (
		<div>
			<div className={styles.categories}>
				<div className={styles.navBox}>
					<div className={styles.navHeading}>{t("WEAPONS", "nav_weapons")}</div>
					<div>
						<CategoryGroup
							type="weapons"
							categoryIds={ISC_GROUPS.DOW}
							setViewOpen={setViewOpen}
							setCurrentCategory={setCurrentCategory}
						/>
						<hr />
						<CategoryGroup
							type="weapons"
							categoryIds={ISC_GROUPS.DOM}
							setViewOpen={setViewOpen}
							setCurrentCategory={setCurrentCategory}
						/>
						<hr />
						<CategoryGroup
							type="weapons"
							categoryIds={ISC_GROUPS.DOH}
							setViewOpen={setViewOpen}
							setCurrentCategory={setCurrentCategory}
						/>
						<hr />
						<CategoryGroup
							type="weapons"
							categoryIds={ISC_GROUPS.DOL}
							setViewOpen={setViewOpen}
							setCurrentCategory={setCurrentCategory}
						/>
					</div>
				</div>
				<div className={styles.navBox}>
					<div className={styles.navHeading}>{t("ARMOR", "nav_armor")}</div>
					<div>
						<CategoryGroup
							type="armor"
							categoryIds={ISC_GROUPS.ARMOR}
							setViewOpen={setViewOpen}
							setCurrentCategory={setCurrentCategory}
						/>
					</div>
				</div>
				<div className={styles.navBox}>
					<div className={styles.navHeading}>{t("ITEMS", "nav_items")}</div>
					<div>
						<CategoryGroup
							type="items"
							categoryIds={ISC_GROUPS.ITEMS}
							setViewOpen={setViewOpen}
							setCurrentCategory={setCurrentCategory}
						/>
					</div>
				</div>
				<div className={styles.navBox}>
					<div className={styles.navHeading}>{t("HOUSING", "nav_housing")}</div>
					<div>
						<CategoryGroup
							type="housing"
							categoryIds={ISC_GROUPS.HOUSING}
							setViewOpen={setViewOpen}
							setCurrentCategory={setCurrentCategory}
						/>
					</div>
				</div>
			</div>
			{viewOpen ? (
				<OutsideClickHandler onOutsideClick={() => setViewOpen(false)}>
					<CategoryView
						items={ItemSearchCategories.getCategoryEx(currentCategory).map((cat) => {
							return {
								itemId: cat[0],
								name: cat[1],
								iconFragment: cat[2].slice(3),
								itemLevel: cat[3],
								rarity: cat[4],
								roles: cat[5],
							};
						})}
					/>
				</OutsideClickHandler>
			) : (
				<></>
			)}
		</div>
	);
}

function CategoryGroup(props: CategoryGroupProps) {
	return (
		<div>
			{props.categoryIds.map((id) => (
				<CategoryButton
					key={id}
					type={props.type}
					categoryId={id}
					setViewOpen={props.setViewOpen}
					setCurrentCategory={props.setCurrentCategory}
				/>
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
			onClick={() => {
				props.setCurrentCategory(props.categoryId);
				props.setViewOpen(true);
			}}
		>
			<i className={`xiv-${ITEM_SEARCH_CATEGORY_ICONS[props.categoryId]}`}></i>
			<span>{ItemSearchCategories.getCategoryName(props.categoryId)}</span>
		</button>
	);
}

interface CategoryGroupProps {
	type: Category;
	categoryIds: number[];
	setViewOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setCurrentCategory: React.Dispatch<React.SetStateAction<number>>;
}

interface CategoryButtonProps {
	type: Category;
	categoryId: number;
	setViewOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setCurrentCategory: React.Dispatch<React.SetStateAction<number>>;
}

type Category = "weapons" | "armor" | "items" | "housing";
