import React from "react";
import { Link } from "react-router-dom";
import { t } from "../../../../../../services/translation";
import styles from "./AdBox.module.scss";
import notPatreon from "./contribute.png";
import discord from "./discord.png";

export function AdBox() {
	return (
		<div className={`${styles.homeBox} ${styles.patreonDiscord}`}>
			<a
				href="https://discord.gg/JcMvMxD"
				className={styles.discord}
				target="_blank"
				rel="noopener noreferrer"
			>
				<span>
					<img src={discord} alt="" /> {t("DISCORD", "discord_capitalized")}
				</span>
			</a>
			<Link to="/contribute" className={styles.patreon}>
				<span>
					<img src={notPatreon} alt="" />
				</span>
			</Link>
		</div>
	);
}
