import { useState, useEffect } from "react";
import { getGameDataProvider } from "../services/api/xivapi";
import { Item } from "../services/api/xivapi/models";

export function useItemAsync(itemId: number): [Item | null] {
	const [item, setItem] = useState<Item | null>(null);
	useEffect(() => {
		(async () => {
			const _item = await getGameDataProvider().item(itemId);
			setItem(_item);
		})();
	}, [itemId]);
	return [item];
}
