import { useState, useEffect } from "react";
import { getGameDataProvider } from "../services/api/xivapi";
import { Item } from "../services/api/xivapi/models";
import { Lang } from "../services/translation/models";

export function useItemAsync(itemId: number, language?: Lang): [Item | null, LoadSpeed] {
	const [loadSpeed, setLoadSpeed] = useState(0);
	const [item, setItem] = useState<Item | null>(null);
	useEffect(() => {
		(async () => {
			const startTime = performance.now();
			const _item = await getGameDataProvider().item(itemId, language);
			setLoadSpeed(performance.now() - startTime);
			setItem(_item);
		})();
	}, [itemId, language]);
	return [item, loadSpeed];
}

type LoadSpeed = number;
