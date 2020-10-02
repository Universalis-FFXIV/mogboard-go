import React from "react";
import { AuthClient } from "../../../../services/auth";
import { BecomeMember } from "./components/BecomeMember";
import { TheBigNewsPost } from "./components/TheBigNewsPost";

export function CenterZone(props: CenterZoneProps) {
	return (
		<div className={props.className}>
			<TheBigNewsPost />
			{(() => {
				if (!AuthClient.isLoggedIn) {
					return <BecomeMember />;
				}
				return <></>;
			})()}
		</div>
	);
}

export interface CenterZoneProps {
	className?: string;
}
