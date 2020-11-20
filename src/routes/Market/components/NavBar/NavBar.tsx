import React from "react";
import { SERVERS } from "../../../../data/SERVERS";
import { useSettings } from "../../../../hooks";
import AuthClient from "../../../../services/auth/AuthClient";
import { getLang, t } from "../../../../services/translation";
import styles from "./NavBar.module.scss";

export function NavBar(props: NavBarProps) {
	const [settings] = useSettings();

	const dc = SERVERS.find((server) => server.worlds.includes(settings.mogboardServer))!;

	return (
		<div className={styles.worldNav}>
			<div className={styles.servers}>
				<button
					type="button"
					className={dc.dataCenter === props.viewServer ? styles.open : ""}
					onClick={() => props.setViewServer(dc.dataCenter)}
				>
					<i className="xiv-CrossWorld" /> {t("Cross-World", "generic_cross_world")}
				</button>
				{dc.worlds.map((world, i) => (
					<button
						type="button"
						key={world}
						className={`${world === settings.mogboardServer ? styles.homeWorld : ""} ${
							world === props.viewServer ? styles.open : ""
						}`}
						onClick={() => props.setViewServer(world)}
					>
						{(() => {
							if (world === settings.mogboardServer) {
								return <i className="xiv-ItemShard" />;
							}
						})()}
						{getLang() === "zh" ? (dc.worldsZh != null ? dc.worldsZh[i] : dc.worlds[i]) : world}
					</button>
				))}
			</div>
			{(() => {
				if (AuthClient.isLoggedIn) {
					return (
						<div className={styles.custom}>
							<button type="button">
								<i className="xiv-app_drawer_news"></i> {t("Alerts", "generic_alerts")}
							</button>
						</div>
					)
				}
			})()}
		</div>
	);
}

export interface NavBarProps {
	viewServer: string;
	setViewServer: (server: string) => void;
}
