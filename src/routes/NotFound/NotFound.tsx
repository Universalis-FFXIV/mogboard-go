import React from "react";
import { t } from "../../services/translation";
import styles from "./NotFound.module.scss";
import titan from "../../images/patch_titan.png";

export function NotFound() {
	return (
		<main>
			<div className={styles.errorPage}>
				<img src={titan} alt="" />
				<h2>404</h2>
				<p>{t("Could not find the page you were looking for kupo~!", "error_404_flavortext")}</p>
			</div>
		</main>
	);
}
