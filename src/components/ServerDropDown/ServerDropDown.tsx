import React from "react";
import { SERVERS } from "../../data/SERVERS";
import { getLang, t } from "../../services/translation";
import { DropDown, DropDownProps } from "../DropDown";

export function ServerDropDown(props: ServerDropDownProps) {
	return (
		<DropDown defaultValue={props.defaultValue} value={props.value} onChange={props.onChange}>
			<option disabled={true}>
				{t("- Please Choose a Server -", "option_choose_server_guide")}
			</option>
			{SERVERS.map((server) => (
				<optgroup
					label={`${
						getLang() === "zh"
							? server.dataCenterZh != null
								? server.dataCenterZh
								: server.dataCenter
							: server.dataCenter
					} - ${server.locale}`}
					key={server.dataCenter}
				>
					{server.worlds.map((world, i) => (
						<option value={world} key={world}>
							{getLang() === "zh"
								? server.worldsZh != null
									? server.worldsZh[i]
									: server.worlds[i]
								: world}
						</option>
					))}
				</optgroup>
			))}
		</DropDown>
	);
}

export type ServerDropDownProps = Omit<DropDownProps, "children">;
