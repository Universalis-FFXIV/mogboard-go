import React from "react";
import { Link } from "react-router-dom";
import { t } from "../../../../services/translation";
import styles from "./DiscordLoginButton.module.scss";

export function DiscordLoginButton() {
	return (
		<Link to="/account/login/discord" className={styles.loginButton}>
			{t("Login via Discord", "header_discordlogin")}
		</Link>
	);
}
