import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import { LeftZone } from "./components/LeftZone";
import { CenterZone } from "./components/CenterZone/CenterZone";
import { RightZone } from "./components/RightZone";

export function Home() {
	useEffect(() => {
		document.title = "Universalis";
	});

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
