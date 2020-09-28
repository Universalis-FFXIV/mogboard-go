import React from "react";
import { t } from "../../../../services/translation";
import styles from "./LeftZone.module.scss";

export function LeftZone() {
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
