import React from "react";
import { t } from "../../services/translation";
import { DropDown, DropDownProps } from "../DropDown";

export function YesNoDropDown(props: YesNoDropDownProps) {
	return (
		<DropDown
			defaultValue={props.defaultValue}
			value={props.value}
			onChange={(e) => {
				if (props.onChange) props.onChange(e as YesNoDropDownChangeEvent);
			}}
		>
			<option value="yes">{t("Yes", "generic_yes")}</option>
			<option value="no">{t("No", "generic_no")}</option>
		</DropDown>
	);
}

export interface YesNoDropDownProps extends Omit<DropDownProps, "children" | "onChange"> {
	onChange?: (event: YesNoDropDownChangeEvent) => void;
}

export interface YesNoDropDownChangeEvent
	extends Omit<React.ChangeEvent<HTMLSelectElement>, "currentTarget"> {
	currentTarget: HTMLSelectElement & {
		value: "yes" | "no";
	};
}
