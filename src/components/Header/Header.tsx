import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "./universalis.png";
import { SearchBar } from "./components/SearchBar";
import { SettingsButton } from "./components/SettingsButton";
import { t } from "../../services/translation";
import { AuthClient } from "../../services/auth";
import { DiscordLoginButton } from "./components/DiscordLoginButton";

export function Header() {
	return (
		<header className={styles.header}>
			<div>
				<div>
					<Link to="/" className={styles.homeButton}>
						<img src={logo} alt="" />
					</Link>
				</div>
				<SearchBar />
			</div>
			<div>
				{(() => {
					if (AuthClient.isLoggedIn) {
						return (
							<div>
								<Link className={styles.myAccount} to="/account">
									{t("My Account", "header_myaccount")}
								</Link>
								<span className={styles.username}>{AuthClient.username}</span>
							</div>
						);
					} else {
						return <DiscordLoginButton />;
					}
				})()}

				<SettingsButton />
			</div>
		</header>
	);
}
