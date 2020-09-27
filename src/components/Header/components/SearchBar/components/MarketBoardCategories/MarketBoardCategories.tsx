import React from "react";
import printf from "printf";
import { ISC_GROUPS } from "../../../../../../data/ISC_GROUPS";
import { ITEM_SEARCH_CATEGORY_ICONS } from "../../../../../../data/ITEM_SEARCH_CATEGORY_ICONS";
import { SearchResultItem } from "../../../../../../services/api/xivapi/models";
import ItemSearchCategories from "../../../../../../services/data/ItemSearchCategories";
import { t } from "../../../../../../services/translation";
import { Tooltip } from "../../../../../Tooltip";
import styles from "./MarketBoardCategories.module.scss";

export function MarketBoardCategories(props: MarketBoardCategoriesProps) {
	return (
		<div
			className={styles.marketBoardContainer}
			style={{
				display: props.active ? "block" : "none",
			}}
		>
			<div className={styles.marketBoard}>
				<MarketBoardCategory
					name={t("WEAPONS", "nav_weapons")}
					categories={ISC_GROUPS.WEAPONS}
					populateSearchResults={props.onReqPopulateSearchResults}
				/>
				<MarketBoardCategory
					name={t("ARMOR", "nav_armor")}
					categories={ISC_GROUPS.ARMOR}
					populateSearchResults={props.onReqPopulateSearchResults}
				/>
				<MarketBoardCategory
					name={t("ITEMS", "nav_items")}
					categories={ISC_GROUPS.ITEMS}
					populateSearchResults={props.onReqPopulateSearchResults}
				/>
				<MarketBoardCategory
					name={t("HOUSING", "nav_housing")}
					categories={ISC_GROUPS.HOUSING}
					populateSearchResults={props.onReqPopulateSearchResults}
				/>
			</div>
		</div>
	);
}

function MarketBoardCategory(props: MarketBoardCategoryProps) {
	return (
		<div className={styles.categories}>
			<h2>{props.name}</h2>
			<div className={styles.categoriesList}>
				{props.categories.map((miqote) => (
					<CategoryButton
						key={miqote}
						categoryId={miqote}
						categoryName={ItemSearchCategories.getCategoryName(miqote)}
						populateSearchResults={props.populateSearchResults}
					/>
				))}
			</div>
		</div>
	);
}

function CategoryButton(props: CategoryButtonProps) {
	return (
		<div>
			<button
				data-tip
				data-for={props.categoryId.toString()}
				onClick={() => {
					const category = ItemSearchCategories.getCategory(props.categoryId);
					props.populateSearchResults(
						category,
						`${props.categoryName} - ${printf(
							t("%d / %d items", "n_of_m_items"),
							category.length,
							category.length,
						)}`,
					);
				}}
			>
				<span className={`xiv-${ITEM_SEARCH_CATEGORY_ICONS[props.categoryId]}`}></span>
			</button>
			<Tooltip text={props.categoryName} id={props.categoryId.toString()} place="top" />
		</div>
	);
}

export type PopulateSearchResults = (results: SearchResultItem[], headerText: string) => void;

export interface MarketBoardCategoriesProps {
	active: boolean;
	onReqPopulateSearchResults: PopulateSearchResults;
}

interface MarketBoardCategoryProps {
	name: string;
	categories: number[];
	populateSearchResults: PopulateSearchResults;
}

interface CategoryButtonProps {
	categoryId: number;
	categoryName: string;
	populateSearchResults: PopulateSearchResults;
}
