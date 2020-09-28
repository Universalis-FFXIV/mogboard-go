import printf from "printf";
import React from "react";
import { useSettings } from "../../../../../../hooks/useSettings";
import { t } from "../../../../../../services/translation";
import styles from "./TaxRates.module.scss";

export function TaxRates() {
	const [settings] = useSettings();

	return (
		<div className={`${styles.flex} ${styles.updatesBox}`}>
			<div className={styles.updatesBoxContent}>
				<h5>
					{printf(
						t("Current Market Tax Rates on %s", "home_current_tax_rates"),
						settings.mogboard_server,
					)}
				</h5>
				<br />
				<div className={styles.flex}>
					<div className={styles.flex50}>
						<img src="https://xivapi.com/i/060000/060881.png" alt="" /> 2%
					</div>
					<div className={styles.flex50}>
						<img src="https://xivapi.com/i/060000/060882.png" alt="" /> 0%
					</div>
					<div className={styles.flex50}>
						<img src="https://xivapi.com/i/060000/060883.png" alt="" /> 0%
					</div>
					<div className={styles.flex50}>
						<img src="https://xivapi.com/i/060000/060884.png" alt="" /> 2%
					</div>
					<div className={styles.flex50}>
						<img src="https://xivapi.com/i/060000/060885.png" alt="" /> 0%
					</div>
					<div className={styles.flex50}>
						<img src="https://xivapi.com/i/060000/060886.png" alt="" /> 0%
					</div>
				</div>
			</div>
		</div>
	);
}
