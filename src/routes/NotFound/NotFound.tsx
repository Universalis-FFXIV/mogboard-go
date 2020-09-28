import React, { useEffect } from "react";
import { t } from "../../services/translation";
import styles from "./NotFound.module.scss";
import titan from "../../images/patch_titan.png";

export function NotFound() {
	useEffect(() => {
		document.title = t("404 Not Found", "error_404") + " - Universalis";
	});

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
