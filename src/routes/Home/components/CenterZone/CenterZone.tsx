import React from "react";
import { Link } from "react-router-dom";
import { t } from "../../../../services/translation";
import styles from "./CenterZone.module.scss";
import bg from "./bg.png";
import universalis_bodge from "../../../../images/universalis_bodge.png";
import homepage from "./homepage.png";

export function CenterZone() {
	return (
		<div className={styles.centerZone}>
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
			<div
				className={styles.homeLoggedOut}
				style={{
					backgroundImage: `url(${homepage})`,
				}}
			>
				<div>
					<img src={universalis_bodge} alt="" height="42" />
				</div>
				<br />
				<strong>{t("Become a member!", "home_become_member")}</strong>
				<br />
				<p>
					{t(
						"Create alerts, make lists, add your retainers and get a personalised home page feed!",
						"home_become_member_guide",
					)}
				</p>
				<br />
				<br />
				<Link
					to="/account/login/discord"
					dangerouslySetInnerHTML={{
						__html: t("Login via <strong>Discord</strong>", "home_login_discord"),
					}}
				></Link>
			</div>
		</div>
	);
}
