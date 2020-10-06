export interface Item {
	ID: number;
	ItemKind: {
		ID: number;
		Name: string;
	};
	ItemSearchCategory: {
		ID: number;
	};
	ItemUICategory: {
		ID: number;
		Name: string;
	};
	LevelItem: number;
	Name: string;
	Description: string;
	Rarity: number;
	StackSize: number;
}
