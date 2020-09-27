import React from "react";
import ReactTooltip from "react-tooltip";
import styles from "./Tooltip.module.scss";
import "./tooltip-overrides.scss";

export function Tooltip(props: TooltipProps) {
	return (
		<ReactTooltip
			id={props.id}
			place="bottom"
			type="dark"
			effect="solid"
			backgroundColor="#333"
			className={styles.tooltipContainer}
		>
			<p className={styles.tooltip}>{props.text}</p>
		</ReactTooltip>
	);
}

export interface TooltipProps {
	text: string;
	id: string;
}
