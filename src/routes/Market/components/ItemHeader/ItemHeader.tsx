import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HeaderButtons } from "./components/HeaderButtons";
import styles from "./ItemHeader.module.scss";
import error from "../../../../images/error.png";
import { ItemInfo } from "./components/ItemInfo";

export function ItemHeader(props: ItemHeaderProps) {
	return (
		<div className={styles.itemHeader}>
			<HeaderButtons itemId={props.itemId} />
			<div>
				<LazyLoadImage
					src={`https://universalis-ffxiv.github.io/universalis-assets/icon2x/${props.itemId}.png`}
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

export interface ItemHeaderProps {
	itemId: number;
}
