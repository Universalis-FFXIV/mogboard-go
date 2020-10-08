import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { SERVERS } from "../../data/SERVERS";
import { useItemAsync, useSettings, useTitle } from "../../hooks";
import { ItemHeader } from "./components/ItemHeader";
import { MarketInfo } from "./components/MarketInfo";
import { ItemContext } from "./components/MarketInfo/contexts/ItemContext";
import { NavBar } from "./components/NavBar";

export function Market() {
	const { itemId } = useParams<{ itemId?: string }>();
	const _itemId = parseInt(itemId || "");

	const [item] = useItemAsync(_itemId);

	useTitle(item == null ? "Universalis" : `${item.Name} - Universalis`);

	const [settings] = useSettings();
	const dc = SERVERS.find((server) => server.worlds.includes(settings.mogboardServer))!;
	const [viewServer, setViewServer] = useState<string>(
		settings.mogboardHomeWorld === "yes" ? settings.mogboardServer : dc.dataCenter,
	);

	if (itemId == null || isNaN(_itemId)) {
		return <Redirect to="/404" />;
	}

	if (item == null) {
		return <main></main>; // Should make loading thing for this and front page
	} else {
		return (
			<main>
				<ItemContext.Provider value={item}>
					<ItemHeader />
					<NavBar viewServer={viewServer} setViewServer={setViewServer} />
					<MarketInfo server={viewServer} />
				</ItemContext.Provider>
			</main>
		);
	}
}
