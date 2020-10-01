import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Universalis from "../../../../../../services/api/universalis/Universalis";
import { getGameDataProvider } from "../../../../../../services/api/xivapi";
import { Item } from "../../../../../../services/api/xivapi/models";
import { t } from "../../../../../../services/translation";
import styles from "./RecentUpdates.module.scss";
import error from "./error.png";

export function RecentUpdates() {
	const [items, setItems] = useState<Array<Item>>([]);

	useEffect(() => {
		(async () => {
			const recentlyUpdated = await Universalis.recentlyUpdated();
			const newItems: Item[] = [];
			for (const item of recentlyUpdated.items.slice(0, 6)) {
				newItems.push(await getGameDataProvider().item(item));
			}
			setItems(newItems);
		})();
	}, []);

	return (
		<div>
			<h4 className={styles.title}>{t("Recent Updates", "home_recent_updates")}</h4>
			<div className={styles.homeBox}>
				{items.map((item, i) => (
					<RecentUpdateItem
						key={i}
						itemId={item.ID}
						itemLevel={item.LevelItem}
						rarity={item.Rarity}
						name={item.Name}
						categoryName={item.ItemKind.Name}
					/>
				))}
			</div>
		</div>
	);
}

function RecentUpdateItem(props: RecentUpdateItemProps) {
	return (
		<div className={styles.item}>
			<div className={styles.icon}>
				<Link to={`/market/${props.itemId}`}>
					<img
						src={`https://universalis-ffxiv.github.io/universalis-assets/icon2x/${props.itemId}.png`}
						onError={(e) => {
							e.currentTarget.src = error;
						}}
						alt=""
					/>
				</Link>
			</div>
			<div className={styles.info}>
				<div>
					{(() => {
						if (props.itemLevel !== 1) {
							return <em className={styles.ilv}>{props.itemLevel}</em>;
						}
					})()}
					<Link to={`/market/${props.itemId}`} className={`rarity-${props.rarity}`}>
						{props.name}
					</Link>
				</div>
				<small>{props.categoryName}</small>
			</div>
		</div>
	);
}

interface RecentUpdateItemProps {
	itemId: number;
	rarity: number;
	itemLevel: number;
	name: string;
	categoryName: string;
}
