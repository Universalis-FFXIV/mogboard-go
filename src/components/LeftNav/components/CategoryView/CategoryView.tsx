import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { ScrollBar } from "../../../ScrollBar";
import styles from "./CategoryView.module.scss";

export function CategoryView(props: CategoryViewProps) {
	return (
		<div className={styles.marketCategoryView}>
			<ScrollBar className={styles.scrollbar}>
				<div className={styles.gap} />
				{props.items.map((item) => (
					<CategoryItem {...item} />
				))}
			</ScrollBar>
		</div>
	);
}

function CategoryItem(props: CategoryItem) {
	return (
		<Link className={`rarity-${props.rarity}`} to={`/market/${props.itemId}`}>
			<span>
				<LazyLoadImage
					src={`https://universalis-ffxiv.github.io/universalis-assets/icon2x/${props.iconFragment}`}
					height={32}
					width={32}
					placeholderSrc="http://xivapi.com/mb/loading.svg"
					onError={(e) => {
						e.currentTarget.src = "http://xivapi.com/mb/loading.svg";
					}}
				/>
			</span>
			<span>
				<div>
					<span className={styles.itemLevel}>{props.itemLevel}</span>
					{props.name}
				</div>
				<small>{props.roles}</small>
			</span>
		</Link>
	);
}

export interface CategoryViewProps {
	items: CategoryItem[];
}

interface CategoryItem {
	itemId: string;
	name: string;
	iconFragment: string;
	itemLevel: string;
	rarity: string;
	roles: string;
}
