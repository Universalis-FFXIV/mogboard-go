import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import * as R from "remeda";
import { t } from "../../../../../../services/translation";
import styles from "./UploadCountsGraph.module.scss";
import { WorldUploadCounts } from "../../../../../../services/api/universalis/models";
import Universalis from "../../../../../../services/api/universalis/Universalis";
import { useSettings } from "../../../../../../hooks";

export function UploadCountsGraph() {
	const [settings] = useSettings();
	const [worldUploadCounts, setWorldUploadCounts] = useState<WorldUploadCounts | {}>({});

	useEffect(() => {
		(async () => {
			const resWuc = await Universalis.worldUploadCounts();
			setWorldUploadCounts(resWuc);
		})();
	}, []);

	return (
		<div className={`${styles.flex} ${styles.updatesBox}`}>
			<div>
				<h5>{t("Upload Counts by World", "home_upload_counts_world")}</h5>
				<br />
				<div className={styles.flex}>
					<Graph worldUploadCounts={worldUploadCounts} server={settings.mogboardServer} />
				</div>
			</div>
		</div>
	);
}

function Graph(props: GraphProps) {
	if (Object.keys(props.worldUploadCounts).length === 0) {
		return <div style={{ height: 300, width: 340 }} />;
	}
	return (
		<HighchartsReact
			highcharts={Highcharts}
			options={buildChartOptions(props.worldUploadCounts, props.server)}
		/>
	);
}

interface GraphProps {
	worldUploadCounts: WorldUploadCounts | {};
	server: string;
}

function buildChartOptions(
	worldUploadCounts: WorldUploadCounts,
	server: string,
): Highcharts.Options {
	const seriesData = [
		{
			name: "Proportion",
			colorByPoint: true,
			data: R.pipe(
				Object.keys(worldUploadCounts),
				R.map((worldName) => {
					const wuc = worldUploadCounts[worldName];
					return {
						name: worldName,
						y: wuc.count,
					} as DataPoint;
				}),
				R.sort((a, b) => a.y - b.y),
				R.map((dataPoint) => {
					if (dataPoint.name === server) {
						dataPoint.selected = true;
						dataPoint.sliced = true;
					}
					return dataPoint;
				}),
			),
		},
	];

	const pieColors: Highcharts.ColorType[] = [];

	const baseColor = "#7c6939";
	const gradience = 1.3;
	const shift = 1.2;
	const tweak = 17;

	for (let i = 0; i < seriesData[0].data.length; i++) {
		pieColors.push(
			new Highcharts.Color(baseColor)
				.brighten(
					Math.pow(
						gradience,
						(i - shift * seriesData[0].data.length) / (seriesData[0].data.length / tweak),
					),
				)
				.get(),
		);
	}

	return {
		chart: {
			backgroundColor: undefined,
			borderWidth: undefined,
			height: 300,
			width: 340,
			plotBackgroundColor: undefined,
			plotBorderWidth: undefined,
			plotShadow: false,
			shadow: false,
			type: "pie",
		},
		plotOptions: {
			pie: {
				colors: pieColors,
				dataLabels: {
					enabled: false,
				},
			},
		},
		series: seriesData as any,
		title: {
			text: undefined, // We use the parent flexbox as a container for the title
		},
		credits: {
			text: "",
		},
		tooltip: {
			pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b><br>Count: <b>{point.y}</b>",
		},
	};
}

interface DataPoint {
	y: number;
	name: string;
	selected?: boolean;
	sliced?: boolean;
}
