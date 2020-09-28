import React from "react";
import { Link } from "react-router-dom";
import { t } from "../../../../../../services/translation";
import styles from "./RecentUpdates.module.scss";

export function RecentUpdates() {
	return (
		<div>
			<h4 className={styles.title}>{t("Recent Updates", "home_recent_updates")}</h4>
			<div className={styles.homeBox}>
				<RecentUpdateItem
					itemId={8183}
					itemLevel={70}
					rarity={1}
					name="萨维奈圆葱种子"
					categoryName="栽培用品"
				/>
				<RecentUpdateItem
					itemId={14852}
					itemLevel={null}
					rarity={1}
					name="骏鹰革护胸"
					categoryName="身体防具"
				/>
				<RecentUpdateItem
					itemId={8143}
					itemLevel={30}
					rarity={1}
					name="白光半魔晶石贰型"
					categoryName="魔晶石"
				/>
				<RecentUpdateItem
					itemId={19948}
					itemLevel={320}
					rarity={1}
					name="钯金锭"
					categoryName="金属"
				/>
				<RecentUpdateItem
					itemId={11993}
					itemLevel={65}
					rarity={1}
					name="古鸟革大地手套"
					categoryName="手部防具"
				/>
				<RecentUpdateItem
					itemId={29977}
					itemLevel={480}
					rarity={1}
					name="古巨蜥的粗皮"
					categoryName="皮革"
				/>
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
						alt=""
					/>
				</Link>
			</div>
			<div className={styles.info}>
				<div>
					{(() => {
						if (props.itemLevel != null) {
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
	itemLevel: number | null;
	name: string;
	categoryName: string;
}
