import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { SERVERS } from "../../data/SERVERS";
import { useSettings, useTitle } from "../../hooks";
import { getGameDataProvider } from "../../services/api/xivapi";
import { Item } from "../../services/api/xivapi/models";
import { ItemHeader } from "./components/ItemHeader";
import { MarketInfo } from "./components/MarketInfo";
import { NavBar } from "./components/NavBar";

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

	useTitle(item == null ? "Universalis" : `${item.Name} - Universalis`);

	const [settings] = useSettings();
	const dc = SERVERS.find((server) => server.worlds.includes(settings.mogboardServer))!;
	const [viewServer, setViewServer] = useState<string>(
		settings.mogboardHomeWorld === "yes" ? settings.mogboardServer : dc.dataCenter,
	);

	if (_itemId == null || isNaN(itemId)) {
		return <Redirect to="/404" />;
	}

	if (item == null) {
		return <main></main>; // Should make loading thing for this and front page
	} else {
		return (
			<main>
				<ItemHeader {...item} />
				<NavBar viewServer={viewServer} setViewServer={setViewServer} />
				<MarketInfo server={viewServer} itemId={itemId} />
			</main>
		);
	}
}
