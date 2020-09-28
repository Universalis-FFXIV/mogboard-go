import React from "react";
import { Link } from "react-router-dom";
import { ScrollBar } from "../ScrollBar";
import { Categories } from "./components/Categories";
import styles from "./LeftNav.module.scss";
import logo from "../../images/universalis_bodge.png";

export function LeftNav(props: LeftNavProps) {
	if (!props.enabled) return <></>;

	return (
		<aside className={styles.sidebar}>
			<ScrollBar className={styles.scrollbar}>
				<Link className={styles.navHome} to="/">
					<img src={logo} alt="" />
				</Link>
				<Categories />
			</ScrollBar>
		</aside>
	);
}

export interface LeftNavProps {
	enabled: boolean;
}
