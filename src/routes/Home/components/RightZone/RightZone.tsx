import React from "react";
import { AdBox } from "./components/AdBox";
import { RecentUpdates } from "./components/RecentUpdates";
import { TaxRates } from "./components/TaxRates";
import styles from "./RightZone.module.scss";

export function RightZone() {
	return (
		<div className={styles.rightZone}>
			<AdBox />
			<RecentUpdates />
			<TaxRates />

			<div className="flex updates_box">
				<div>
					<h5>各服务器上传数</h5>
					<br />
					<div className="flex avg_prices"></div>
				</div>
			</div>

			<div>
				<div>
					<div className="flex updates_box">
						<div>
							<h5>今日上传</h5>
							<br />
							<div className="flex avg_prices">
								<div className="flex_50">527,456</div>
							</div>
						</div>
						<div>
							<h5>本周上传</h5>
							<br />
							<div className="flex avg_prices">
								<div className="flex_50">15,179,441</div>
							</div>
						</div>
					</div>
					<p className="mog-honorable">感谢您！</p>
				</div>
			</div>
		</div>
	);
}
