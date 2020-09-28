import React from "react";
import styles from "./Home.module.scss";
import { LeftZone } from "./components/LeftZone";
import { CenterZone } from "./components/CenterZone/CenterZone";
import { RightZone } from "./components/RightZone";

export function Home() {
	return (
		<main>
			<div className={styles.home}>
				<LeftZone />
				<CenterZone />
				<RightZone />
			</div>
		</main>
	);
}
