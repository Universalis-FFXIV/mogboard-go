import React, { ReactNode } from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "./simplebar-override.scss";

export function ScrollBar(props: ScrollBarProps) {
	return (
		<SimpleBar className={props.className} forceVisible="y" autoHide={true}>
			{props.children}
		</SimpleBar>
	);
}

export interface ScrollBarProps {
	children: ReactNode;
	className?: string;
}
