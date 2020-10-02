import React from "react";
import { Link } from "react-router-dom";
import { t } from "../../../../../../services/translation";
import styles from "./BecomeMember.module.scss";
import universalis_bodge from "../../../../../../images/universalis_bodge.png";
import homepage from "./homepage.png";

export function BecomeMember() {
	return (
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
	);
}
