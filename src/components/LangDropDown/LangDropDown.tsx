import React from "react";
import { LANGUAGES } from "../../data/LANGUAGES";
import { t } from "../../services/translation";
import { Lang } from "../../services/translation/models";
import { DropDown, DropDownProps } from "../DropDown";

export function LangDropDown(props: LangDropDownProps) {
	return (
		<DropDown
			defaultValue={props.defaultValue}
			value={props.value}
			onChange={(e) => {
				if (props.onChange) props.onChange(e as LangDropDownChangeEvent);
			}}
		>
			<option disabled={true}>
				{t("- Choose your language -", "option_choose_language_guide")}
			</option>
			{LANGUAGES.map((lang) => (
				<option value={lang.code} key={lang.code}>
					{lang.name}
				</option>
			))}
		</DropDown>
	);
}

export interface LangDropDownProps extends Omit<DropDownProps, "children" | "onChange"> {
	onChange?: (event: LangDropDownChangeEvent) => void;
}

export interface LangDropDownChangeEvent
	extends Omit<React.ChangeEvent<HTMLSelectElement>, "currentTarget"> {
	currentTarget: HTMLSelectElement & {
		value: Lang;
	};
}
