export interface SearchResultItem {
	ID: number;
	Icon: string;
	ItemKind: {
		ID: number;
		Name: string;
	};
	LevelItem: number;
	Name: string;
	Rarity: number;
}
