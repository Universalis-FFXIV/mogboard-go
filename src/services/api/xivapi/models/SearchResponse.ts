import { SearchResultItem } from ".";

export interface SearchResponse {
	Pagination: {
		Page: number;
		PageNext: number;
		PagePrev: number;
		PageTotal: number;
		Results: number;
		ResultsPerPage: number;
		ResultsTotal: number;
	};
	Results: SearchResultItem[];
	SpeedMs: number;
}
