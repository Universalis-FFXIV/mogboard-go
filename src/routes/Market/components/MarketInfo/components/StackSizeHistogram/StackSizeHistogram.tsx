import React, { useContext } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { t } from "../../../../../../services/translation";
import styles from "./StackSizeHistogram.module.scss";
import { ItemContext } from "../../contexts/ItemContext";
import { MarketDataWorld } from "../../../../../../services/api/universalis/models";

export function StackSizeHistogram(props: StackSizeHistogramProps) {
	const item = useContext(ItemContext)!;
	const canBeHq = item.CanBeHq === 1;

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

export interface StackSizeHistogramProps {
	marketData: MarketDataWorld[];
	serverName: string;
}

function buildChartOptions(canBeHq: boolean, serverName: string, marketData: MarketDataWorld[]) {
	const options = {
		chart: {
			height: 200,
		},
		plotOptions: {
			series: {
				type: "histogram",
			},
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
				data: [],
				zIndex: -2,
			},
			{
				id: `histogram_all_NQ_${serverName}`,
				name: "(Normal Quality) Stack Size Histogram",
				data: [],
				zIndex: -1,
			},
		],
	};

	if (canBeHq) {
		options.series.push({
			id: `histogram_all_HQ_${serverName}`,
			name: "(High Quality) Stack Size Histogram",
			data: [],
			zIndex: 0,
		});
	}

	return options;
}
