import printf from "printf";
import React, { useEffect, useState } from "react";
import { CITY_ICONS } from "../../../../../../data/CITY_ICONS";
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
			const resTaxRates = await Universalis.taxRates(settings.mogboardServer);
			setTaxRates(resTaxRates);
		})();
	}, [settings.mogboardServer]);

	return (
		<div className={`${styles.flex} ${styles.updatesBox}`}>
			<div className={styles.updatesBoxContent}>
				<h5>
					{printf(
						t("Current Market Tax Rates on %s", "home_current_tax_rates"),
						settings.mogboardServer,
					)}
				</h5>
				<br />
				<div className={styles.flex}>
					<div className={styles.flex50}>
						<img src={`https://xivapi.com${CITY_ICONS[1]}`} alt="" /> {taxRates["Limsa Lominsa"]}%
					</div>
					<div className={styles.flex50}>
						<img src={`https://xivapi.com${CITY_ICONS[2]}`} alt="" /> {taxRates.Gridania}%
					</div>
					<div className={styles.flex50}>
						<img src={`https://xivapi.com${CITY_ICONS[3]}`} alt="" /> {taxRates["Ul'dah"]}%
					</div>
					<div className={styles.flex50}>
						<img src={`https://xivapi.com${CITY_ICONS[4]}`} alt="" /> {taxRates.Ishgard}%
					</div>
					<div className={styles.flex50}>
						<img src={`https://xivapi.com${CITY_ICONS[7]}`} alt="" /> {taxRates.Kugane}%
					</div>
					<div className={styles.flex50}>
						<img src={`https://xivapi.com${CITY_ICONS[10]}`} alt="" /> {taxRates.Crystarium}%
					</div>
				</div>
			</div>
		</div>
	);
}
