import React from "react";
import { getLocale } from "../../../../../../services/translation";
import styles from "./Cheapest.module.scss";

export function Cheapest() {
	return (
		<div className={styles.crossWorldMarkets}>
			<Price quality="HQ" />
			<Price
				quality="NQ"
				listing={{
					pricePerUnit: 4200,
					quantity: 1,
					total: 4200,
					worldName: "Malboro",
				}}
			/>
		</div>
	);
}

function Price(props: PriceProps) {
	if (props.listing == null) {
		return (
			<div>
				<h2>Cheapest {props.quality}</h2>
				<p>Item has no {props.quality} variant.</p>
			</div>
		);
	} else {
		return (
			<div>
				<h2>Cheapest {props.quality}</h2>
				<div className={styles.cheapestPrice}>
					<i className="xiv-Gil" />
					&nbsp;
					<em>{props.listing.quantity.toLocaleString(getLocale())} x</em>
					&nbsp;
					<span className={styles.value}>
						{props.listing.pricePerUnit.toLocaleString(getLocale())}
					</span>
					&nbsp;
					<span className={styles.info}>
						Server: <strong>{props.listing.worldName}</strong> - Total:&nbsp;
						<strong>{props.listing.total.toLocaleString(getLocale())}</strong>
					</span>
				</div>
			</div>
		);
	}
}

interface PriceProps {
	listing?: {
		pricePerUnit: number;
		quantity: number;
		total: number;
		worldName: string;
	};
	quality: "NQ" | "HQ";
}
