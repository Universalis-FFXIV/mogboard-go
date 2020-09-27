import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { version } from "../../version";
import { t } from "../../services/translation";

export function Footer() {
	return (
		<footer className={styles.footer}>
			<small>
				<div>
					Universalis v{version}, {t("based on", "footer_basedon")} Mogboard v2.2
					&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
					<Link to="/about">{t("About", "footer_about")}</Link>
					&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
					<Link to="/docs">{t("API Documentation", "footer_docs")}</Link>
					&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
					<a href="https://github.com/Universalis-FFXIV/Universalis">
						{t("GitHub", "footer_github")}
					</a>
					&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
					<a href="https://discord.gg/JcMvMxD">{t("Discord", "generic_discord")}</a>
				</div>
				<div>
					{t(
						"FINAL FANTASY XIV © 2010 - 2020 SQUARE ENIX CO., LTD. All Rights Reserved.",
						"footer_license",
					)}
				</div>
			</small>
		</footer>
	);
}
