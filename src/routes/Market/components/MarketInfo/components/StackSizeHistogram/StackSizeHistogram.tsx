import React, { useContext } from "react";
import * as R from "remeda";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { t } from "../../../../../../services/translation";
import styles from "./StackSizeHistogram.module.scss";
import { ItemContext } from "../../contexts/ItemContext";
import { MarketDataWorld } from "../../../../../../services/api/universalis/models";

export function StackSizeHistogram(props: StackSizeHistogramProps) {
	const item = useContext(ItemContext)!;
	const canBeHq = item.CanBeHq === 1;

	if (item.StackSize === 1) {
		return <></>;
	} else {
		return (
			<div className={styles.histogram}>
				<h6>STACK SIZE HISTOGRAM</h6>
				<div className={styles.highcharts}>
					<HighchartsReact
						highcharts={Highcharts}
						options={buildChartOptions(canBeHq, props.serverName, props.marketData)}
					/>
				</div>
			</div>
		);
	}
}

export interface StackSizeHistogramProps {
	marketData: MarketDataWorld[];
	serverName: string;
}

function buildChartOptions(canBeHq: boolean, serverName: string, marketData: MarketDataWorld[]) {
	const options = {
		chart: {
			height: 200,
		},
		credits: {
			text: "",
		},
		title: {
			text: "",
		},
		xAxis: [
			{
				allowDecimals: false,
				type: "category",
			},
		],
		yAxis: [
			{
				allowDecimals: false,
				title: {
					text: "Quantity",
				},
			},
		],
		series: [
			{
				id: `histogram_all_${serverName}`,
				name: t("Total", "generic_total"),
				data: R.pipe(
					marketData,
					R.map((marketDataWorld) => marketDataWorld.stackSizeHistogram),
					getTransformedHistogramData,
				),
				zIndex: -2,
			},
			{
				id: `histogram_all_NQ_${serverName}`,
				name: "(Normal Quality) Stack Size Histogram",
				data: R.pipe(
					marketData,
					R.map((marketDataWorld) => marketDataWorld.stackSizeHistogramNQ),
					getTransformedHistogramData,
				),
				zIndex: -1,
			},
		],
		tooltip: {
			backgroundColor: "rgba(0, 0, 0, 0.9)",
			pointFormat: "{series.name}: <b>{point.y}</b>",
			style: {
				color: "#ffffff",
			},
		},
	};

	if (canBeHq) {
		options.series!.push({
			id: `histogram_all_HQ_${serverName}`,
			name: "(High Quality) Stack Size Histogram",
			data: R.pipe(
				marketData,
				R.map((marketDataWorld) => marketDataWorld.stackSizeHistogramHQ),
				getTransformedHistogramData,
			),
			zIndex: 0,
		});
	}

	return options;
}

function getTransformedHistogramData(histograms: { [key: number]: number }[]): DataPoint[] {
	return Object.entries(
		R.reduce(
			histograms,
			(acc, next) => {
				for (const key in next) {
					if (next.hasOwnProperty(key)) {
						if (acc[key] != null) {
							acc[key] += next[key];
						} else {
							acc[key] = next[key];
						}
					}
				}
				return acc;
			},
			{} as { [key: number]: number },
		),
	).map((kvp) => {
		return {
			y: kvp[1],
			name: kvp[0],
		};
	});
}

interface DataPoint {
	y: number;
	name: string;
}
