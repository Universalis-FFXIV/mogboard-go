import React from "react";
import { Link } from "react-router-dom";
import { t } from "../../../../../../services/translation";
import styles from "./TheBigNewsPost.module.scss";
import bg from "./bg.png";

export function TheBigNewsPost() {
	return (
		<div
			className={styles.theBigNewsPost}
			style={{
				backgroundImage: `url(${bg})`,
			}}
		>
			<h4>{t("Welcome to Universalis!", "news_universalis_welcome")}</h4>
			<p>
				{t(
					"Universalis is a market board data site with crowd sourced information, based on mogboard. It can aggregate market board information from multiple sources, so if you want to help out, please check out our contributing page.",
					"news_product_blurb",
				)}
			</p>
			<p>{t("Thank you, and enjoy your stay!", "news_enjoy")}</p>

			<Link to="/contribute">{t("Contribute to market board data", "news_contribute")}</Link>
		</div>
	);
}
