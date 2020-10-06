import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HeaderButtons } from "./components/HeaderButtons";
import styles from "./ItemHeader.module.scss";
import error from "../../../../images/error.png";
import { ItemInfo } from "./components/ItemInfo";
import { Item } from "../../../../services/api/xivapi/models";

export function ItemHeader(props: Item) {
	return (
		<div className={styles.itemHeader}>
			<HeaderButtons itemId={props.ID} />
			<div>
				<LazyLoadImage
					src={`https://universalis-ffxiv.github.io/universalis-assets/icon2x/${props.ID}.png`}
					height={100}
					width={100}
					placeholderSrc="http://xivapi.com/mb/loading.svg"
					onError={(e) => {
						e.currentTarget.src = error;
					}}
				/>
			</div>
			<ItemInfo {...props} />
		</div>
	);
}
