import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "./universalis.png";
import { SearchBar } from "./components/SearchBar";
import { SettingsButton } from "./components/SettingsButton";

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
				<div>
					<Link className={styles.myAccount} to="/account">
						My Account
					</Link>
					<span className={styles.username}>karashiiro</span>
				</div>
				<SettingsButton />
			</div>
		</header>
	);
}
