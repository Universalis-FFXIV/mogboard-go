import React, { useContext } from "react";
import { getLocale } from "../../../../../../services/translation";
import { ItemContext } from "../../contexts/ItemContext";
import styles from "./Cheapest.module.scss";

export function Cheapest(props: CheapestProps) {
	const item = useContext(ItemContext)!;
	const canBeHq = item.CanBeHq === 1;

	return (
		<div className={styles.crossWorldMarkets}>
			<Price quality="HQ" canBeHq={canBeHq} listing={props.listingHq} />
			<Price quality="NQ" canBeHq={canBeHq} listing={props.listingNq} />
		</div>
	);
}

export interface CheapestProps {
	listingNq: {
		pricePerUnit: number;
		quantity: number;
		total: number;
		worldName: string;
	};
	listingHq?: {
		pricePerUnit: number;
		quantity: number;
		total: number;
		worldName: string;
	};
}

function Price(props: PriceProps) {
	if (props.listing == null) {
		return (
			<div>
				<h2>Cheapest {props.quality}</h2>
				<p>No {props.quality} for sale.</p>
			</div>
		);
	} else if (props.quality === "HQ" && !props.canBeHq) {
		return (
			<div>
				<h2>Cheapest HQ</h2>
				<p>Item has no HQ variant.</p>
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
	canBeHq: boolean;
	quality: "NQ" | "HQ";
}
