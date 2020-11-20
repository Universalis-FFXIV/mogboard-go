import printf from "printf";
import React, { useContext } from "react";
import { WorldNamePartial } from "../../../../../../models";
import { MarketBoardItemListing } from "../../../../../../services/api/universalis/models";
import { getLocale, t } from "../../../../../../services/translation";
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
	listingNq: MarketBoardItemListing & WorldNamePartial;
	listingHq?: MarketBoardItemListing & WorldNamePartial;
}

function Price(props: PriceProps) {
	if (props.quality === "HQ" && !props.canBeHq) {
		return (
			<div>
				<h2>{printf(t("Cheapest %s", "market_board_cheapest_title"), t("HQ", "generic_hq"))}</h2>
				<p>{printf(t("No %s for sale.", "market_board_none_for_sale"), t("HQ", "generic_hq"))}</p>
			</div>
		);
	} else if (props.listing == null) {
		return (
			<div>
				<h2>{printf(t("Cheapest %s", "market_board_cheapest_title"), t(props.quality, `generic_${props.quality.toLowerCase()}`))}</h2>
				<p>{printf(t("No %s for sale.", "market_board_none_for_sale"), t(props.quality, `generic_${props.quality.toLowerCase()}`))}</p>
			</div>
		);
	} else {
		return (
			<div>
				<h2>{printf(t("Cheapest %s", "market_board_cheapest_title"), t(props.quality, `generic_${props.quality.toLowerCase()}`))}</h2>
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
						{t("Server:", "generic_server_colon")} <strong>{props.listing.worldName}</strong> - {t("Total:", "generic_total_colon")}&nbsp;
						<strong>{props.listing.total.toLocaleString(getLocale())}</strong>
					</span>
				</div>
			</div>
		);
	}
}

interface PriceProps {
	listing?: MarketBoardItemListing & WorldNamePartial;
	canBeHq: boolean;
	quality: "NQ" | "HQ";
}
