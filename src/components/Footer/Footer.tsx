import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { version } from "../../version";

export function Footer() {
	return (
		<footer className={styles.footer}>
			<small>
				<div>
					Universalis v{version}, based on Mogboard v2.2 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
					<Link to="/about">About</Link>
					&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
					<Link to="/docs">API Documentation</Link>
					&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
					<a href="https://github.com/Universalis-FFXIV/Universalis">GitHub</a>
					&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
					<a href="https://discord.gg/JcMvMxD">Discord</a>
				</div>
				<div>FINAL FANTASY XIV © 2010 - 2020 SQUARE ENIX CO., LTD. All Rights Reserved.</div>
			</small>
		</footer>
	);
}
