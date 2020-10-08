import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HeaderButtons } from "./components/HeaderButtons";
import styles from "./ItemHeader.module.scss";
import error from "../../../../images/error.png";
import { ItemInfo } from "./components/ItemInfo";
import { ItemContext } from "../MarketInfo/contexts/ItemContext";

export function ItemHeader() {
	const item = useContext(ItemContext)!;

	return (
		<div className={styles.itemHeader}>
			<HeaderButtons itemId={item.ID} />
			<div>
				<LazyLoadImage
					src={`https://universalis-ffxiv.github.io/universalis-assets/icon2x/${item.ID}.png`}
					height={100}
					width={100}
					placeholderSrc="http://xivapi.com/mb/loading.svg"
					onError={(e) => {
						e.currentTarget.src = error;
					}}
				/>
			</div>
			<ItemInfo />
		</div>
	);
}
