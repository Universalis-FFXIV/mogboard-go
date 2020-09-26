import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "./universalis.png";
import loading from "./loading.svg";

export function Header() {
	return (
		<header className={styles.header}>
			<div>
				<div>
					<Link to="/" className={styles.homeButton}>
						<img src={logo} alt="" />
					</Link>
				</div>
				<div className={styles.headerNav}>
					<img src={loading} className={styles.searchLoading} alt="" />
					<input type="text" className={styles.search} placeholder="Search" />
					<button className={styles.marketBoardButton}>
						<i className="xiv-Market" />
						<span>Market</span>
					</button>
				</div>
			</div>
			<div>
				<div>
					<Link className={styles.myAccount} to="/account">
						My Account
					</Link>
					<span className={styles.username}>karashiiro</span>
				</div>
				<div>
					<button className={styles.settingsButton} data-tippy-content="Site Settings">
						<span className="xiv-app_drawer_setting" />
					</button>
				</div>
			</div>
		</header>
	);
}
