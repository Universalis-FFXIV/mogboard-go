import React, { useEffect, useState } from "react";
import Universalis from "../../../../../../services/api/universalis/Universalis";
import { getLocale, t } from "../../../../../../services/translation";
import styles from "./UploadCountsTotal.module.scss";

export function UploadCountsTotal() {
	const [uploadsToday, setUploadsToday] = useState(0);
	const [uploadsThisWeek, setUploadsThisWeek] = useState(0);

	useEffect(() => {
		(async () => {
			const uploadHistory = await Universalis.uploadHistory();
			setUploadsToday(uploadHistory.uploadCountByDay[0]);
			setUploadsThisWeek(
				uploadHistory.uploadCountByDay.slice(0, 7).reduce((prev, next) => prev + next, 0),
			);
		})();
	}, []);

	return (
		<div>
			<div>
				<div className={`${styles.flex} ${styles.updatesBox}`} style={{ marginBottom: 0 }}>
					<div>
						<h5>{t("Uploads today", "home_uploads_today")}</h5>
						<br />
						<div className={styles.flex}>
							<div className={styles.flex50}>{uploadsToday.toLocaleString(getLocale())}</div>
						</div>
					</div>
					<div>
						<h5>{t("Uploads this week", "home_uploads_week")}</h5>
						<br />
						<div className={styles.flex}>
							<div className={styles.flex50}>{uploadsThisWeek.toLocaleString(getLocale())}</div>
						</div>
					</div>
				</div>
				<p className={styles.mogHonorable}>{t("Thank you!", "thank_you")}</p>
			</div>
		</div>
	);
}
