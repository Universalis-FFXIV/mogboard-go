import React from "react";
import styles from "./Home.module.scss";
import { LeftZone } from "./components/LeftZone";
import { CenterZone } from "./components/CenterZone";
import { RightZone } from "./components/RightZone";
import { useTitle } from "../../hooks";

export function Home() {
	useTitle("Universalis");

	return (
		<main>
			<div className={styles.home}>
				<LeftZone />
				<CenterZone className={styles.centerZone} />
				<RightZone className={styles.rightZone} />
			</div>
		</main>
	);
}
