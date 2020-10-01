import React from "react";
import { getLocale, t } from "../../../../../../services/translation";
import styles from "./UploadCountsTotal.module.scss";

export function UploadCountsTotal() {
	return (
		<div>
			<div>
				<div className={`${styles.flex} ${styles.updatesBox}`}>
					<div>
						<h5>{t("Uploads today", "home_uploads_today")}</h5>
						<br />
						<div className={styles.flex}>
							<div className={styles.flex50}>{(527456).toLocaleString(getLocale())}</div>
						</div>
					</div>
					<div>
						<h5>{t("Uploads this week", "home_uploads_week")}</h5>
						<br />
						<div className={styles.flex}>
							<div className={styles.flex50}>{(15179441).toLocaleString(getLocale())}</div>
						</div>
					</div>
				</div>
				<p className={styles.mogHonorable}>{t("Thank you!", "thank_you")}</p>
			</div>
		</div>
	);
}
