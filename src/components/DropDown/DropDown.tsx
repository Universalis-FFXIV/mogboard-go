import React, { ReactNode } from "react";
import styles from "./DropDown.module.scss";

export function DropDown(props: DropDownProps) {
	return (
		<select
			className={styles.dropDown}
			defaultValue={props.defaultValue}
			value={props.value}
			onChange={props.onChange}
		>
			{props.children}
		</select>
	);
}

export interface DropDownProps {
	children: ReactNode;
	defaultValue?: string;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
