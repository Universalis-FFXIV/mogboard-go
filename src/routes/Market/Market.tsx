import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { useTitle } from "../../hooks";
import { getGameDataProvider } from "../../services/api/xivapi";
import { Item } from "../../services/api/xivapi/models";
import { ItemHeader } from "./components/ItemHeader";

export function Market() {
	const { _itemId } = useParams<{ _itemId?: string }>();
	const itemId = parseInt(_itemId || "");

	const [item, setItem] = useState<Item | null>(null);
	useEffect(() => {
		(async () => {
			const _item = await getGameDataProvider().item(itemId);
			setItem(_item);
		})();
	}, [itemId]);

	useTitle(`${item?.Name || ""} - Universalis`);

	if (_itemId == null || isNaN(itemId)) {
		return <Redirect to="/404" />;
	}

	if (item == null) {
		return <main></main>; // Should make loading thing for this and front page
	} else {
		return (
			<main>
				<ItemHeader itemId={item.ID} />
			</main>
		);
	}
}
