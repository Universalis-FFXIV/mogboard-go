import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { ItemHeader } from "./components/ItemHeader";

export function Market() {
	let itemId: number;
	let { _itemId } = useParams<{ _itemId?: string }>();
	if (_itemId == null || isNaN((itemId = parseInt(_itemId)))) {
		return <Redirect to="/404" />;
	}

	return (
		<div>
			<ItemHeader itemId={itemId} />
		</div>
	);
}
