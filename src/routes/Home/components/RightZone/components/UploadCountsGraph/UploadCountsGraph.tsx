import React from "react";
import { t } from "../../../../../../services/translation";
import styles from "./UploadCountsGraph.module.scss";

export function UploadCountsGraph() {
	return (
		<div className={`${styles.flex} ${styles.updatesBox}`}>
			<div>
				<h5>{t("Upload Counts by World", "home_upload_counts_world")}</h5>
				<br />
				<div className={styles.flex}></div>
			</div>
		</div>
	);
}
