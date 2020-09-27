import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ScrollBar } from "../../../../../ScrollBar";
import styles from "./SearchResults.module.scss";
import { SearchResultItem } from "../../../../../../services/api/xivapi/models";

export function SearchResults(props: SearchResultsProps) {
	return (
		<div
			className={styles.searchResultsContainer}
			style={{
				display: props.typing ? "block" : "none",
			}}
		>
			<div className={styles.searchResults}>
				<div className={styles.itemSearchHeader}>
					{(() => {
						return props.headerTextOverride != null ? (
							<div>{props.headerTextOverride}</div>
						) : (
							<div>
								Found {props.results.length} / {props.totalItems} for <strong>{props.term}</strong>
							</div>
						);
					})()}
					<div></div>
				</div>
				<ScrollBar className={styles.itemSearchList}>
					{props.results.map((result) => (
						<SearchResult
							id={result.ID}
							rarity={result.Rarity}
							icon={result.Icon}
							itemLevel={result.LevelItem}
							name={result.Name}
							category={result.ItemKind.Name}
							key={result.ID}
						></SearchResult>
					))}
				</ScrollBar>
			</div>
		</div>
	);
}

function SearchResult(props: {
	id: number;
	rarity: number;
	icon: string;
	itemLevel: number;
	name: string;
	category: string;
}) {
	return (
		<Link className={`rarity-${props.rarity}`} to={`/market/${props.id}`}>
			<span className={styles.itemIcon}>
				<LazyLoadImage
					src={`https://xivapi.com${props.icon}`}
					height={40}
					width={40}
					placeholderSrc="http://xivapi.com/mb/loading.svg"
				/>
			</span>
			<span className={styles.itemLevel}>{props.itemLevel}</span>
			{props.name}
			<span className={styles.itemCategory}>{props.category}</span>
		</Link>
	);
}

export interface SearchResultsProps {
	results: SearchResultItem[];
	totalItems: number;
	term: string;
	typing: boolean;
	headerTextOverride?: string;
}
