import React from "react";
import { AuthClient } from "../../../../services/auth";
import { t } from "../../../../services/translation";
import styles from "./LeftZone.module.scss";
import hammer from "./hammer.png";
import bellsLight from "./bells-light.svg";
import thListLight from "./th-list-light.svg";
import personDollyLight from "./person-dolly-light.svg";

export function LeftZone() {
	if (!AuthClient.isLoggedIn) {
		return <LoggedOutLeftZone />;
	}
	return <LoggedInLeftZone />;
}

function LoggedInLeftZone() {
	return (
		<div className={styles.homeNav}>
			<div>
				<button type="button" data-tab="market_activity">
					<img src={hammer} alt="" /> Market Activity
				</button>
			</div>
			<h3>
				<img src={bellsLight} alt="" /> Alerts
			</h3>
			<div>
				<button type="button" className={styles.btnDisabled}>
					<span className={styles.textGrey}>You have no alerts.</span>
				</button>
			</div>
			<h3>
				<img src={thListLight} alt="" /> Lists
			</h3>
			<div>
				<button type="button" className={styles.btnDisabled}>
					<span className={styles.textGrey}>You have no lists.</span>
				</button>
			</div>
			<h3>
				<img src={personDollyLight} alt="" /> Retainers
			</h3>
			<div>
				<button type="button" className={styles.btnDisabled}>
					<span className={styles.textGrey}>You have no retainers.</span>
				</button>
			</div>
		</div>
	);
}

function LoggedOutLeftZone() {
	return (
		<div className={styles.homeNav}>
			<section className={styles.tac}>
				<strong>{t("Logged-out", "home_logged_out")}</strong>
				<p className={styles.textGrey}>
					{t(
						"Lists, Alerts, Market activity and retainer links will show here when you are logged into the site.",
						"home_logged_out_guide",
					)}
				</p>
			</section>
		</div>
	);
}
