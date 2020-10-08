import React from "react";
import printf from "printf";
import { t } from "../../../../../../services/translation";
import styles from "./LoadSpeed.module.scss";

export function LoadSpeed(props: { loadSpeed: number }) {
	return (
		<small className={styles.crossWorldFootnote}>
			{printf(t("Load Speed: %f", "load_speed"), props.loadSpeed / 1000)}
		</small>
	);
}
