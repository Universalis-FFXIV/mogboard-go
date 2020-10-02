import printf from "printf";
import React, { useEffect, useState } from "react";
import { useSettings } from "../../../../../../hooks";
import { TaxRates } from "../../../../../../services/api/universalis/models";
import Universalis from "../../../../../../services/api/universalis/Universalis";
import { t } from "../../../../../../services/translation";
import styles from "./TaxRatesPanel.module.scss";

export function TaxRatesPanel() {
	const [settings] = useSettings();
	const [taxRates, setTaxRates] = useState<TaxRates>({
		Crystarium: 0,
		Gridania: 0,
		Ishgard: 0,
		Kugane: 0,
		"Limsa Lominsa": 0,
		"Ul'dah": 0,
	});

	useEffect(() => {
		(async () => {
			const resTaxRates = await Universalis.taxRates(settings.mogboard_server);
			setTaxRates(resTaxRates);
		})();
	}, [settings.mogboard_server]);

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
						<img src="https://xivapi.com/i/060000/060881.png" alt="" /> {taxRates["Limsa Lominsa"]}%
					</div>
					<div className={styles.flex50}>
						<img src="https://xivapi.com/i/060000/060882.png" alt="" /> {taxRates.Gridania}%
					</div>
					<div className={styles.flex50}>
						<img src="https://xivapi.com/i/060000/060883.png" alt="" /> {taxRates["Ul'dah"]}%
					</div>
					<div className={styles.flex50}>
						<img src="https://xivapi.com/i/060000/060884.png" alt="" /> {taxRates.Ishgard}%
					</div>
					<div className={styles.flex50}>
						<img src="https://xivapi.com/i/060000/060885.png" alt="" /> {taxRates.Kugane}%
					</div>
					<div className={styles.flex50}>
						<img src="https://xivapi.com/i/060000/060886.png" alt="" /> {taxRates.Crystarium}%
					</div>
				</div>
			</div>
		</div>
	);
}
