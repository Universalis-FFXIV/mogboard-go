export interface Item {
	CanBeHq: 1 | 0;
	Description: string;
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
	Rarity: number;
	StackSize: number;
}
