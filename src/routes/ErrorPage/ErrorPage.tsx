import React from "react";
import styles from "./ErrorPage.module.scss";
import titan from "../../images/patch_titan.png";
import { t } from "../../services/translation";
import { useTitle } from "../../hooks";

export function ErrorPage() {
	useTitle(t("Something went wrong", "error_generic_tabtitle") + " - Universalis");

	return (
		<main>
			<div className={styles.errorPage}>
				<img src={titan} alt="" />
				<h2>{t("Something went wrong!", "error_generic_title")}</h2>
				<p>400</p>
				<p>
					{t(
						"If you continue to run into this issue, please jump on the Discord for help!",
						"error_generic_not_aware",
					)}
				</p>
			</div>
		</main>
	);
}
