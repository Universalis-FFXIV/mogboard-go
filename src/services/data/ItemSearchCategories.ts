import * as R from "remeda";
import { getLang } from "../translation";

import categoriesEn from "../../data/DataExports/categories_en.json";
import categoriesDe from "../../data/DataExports/categories_de.json";
import categoriesFr from "../../data/DataExports/categories_fr.json";
import categoriesJa from "../../data/DataExports/categories_ja.json";
import categoriesZh from "../../data/DataExports/categories_zh.json";

import category9 from "../../data/DataExports/ItemSearchCategory_9.json";
import category10 from "../../data/DataExports/ItemSearchCategory_10.json";
import category11 from "../../data/DataExports/ItemSearchCategory_11.json";
import category12 from "../../data/DataExports/ItemSearchCategory_12.json";
import category13 from "../../data/DataExports/ItemSearchCategory_13.json";
import category14 from "../../data/DataExports/ItemSearchCategory_14.json";
import category15 from "../../data/DataExports/ItemSearchCategory_15.json";
import category16 from "../../data/DataExports/ItemSearchCategory_16.json";
import category17 from "../../data/DataExports/ItemSearchCategory_17.json";
import category19 from "../../data/DataExports/ItemSearchCategory_19.json";
import category20 from "../../data/DataExports/ItemSearchCategory_20.json";
import category21 from "../../data/DataExports/ItemSearchCategory_21.json";
import category22 from "../../data/DataExports/ItemSearchCategory_22.json";
import category23 from "../../data/DataExports/ItemSearchCategory_23.json";
import category24 from "../../data/DataExports/ItemSearchCategory_24.json";
import category25 from "../../data/DataExports/ItemSearchCategory_25.json";
import category26 from "../../data/DataExports/ItemSearchCategory_26.json";
import category27 from "../../data/DataExports/ItemSearchCategory_27.json";
import category28 from "../../data/DataExports/ItemSearchCategory_28.json";
import category29 from "../../data/DataExports/ItemSearchCategory_29.json";
import category30 from "../../data/DataExports/ItemSearchCategory_30.json";
import category31 from "../../data/DataExports/ItemSearchCategory_31.json";
import category33 from "../../data/DataExports/ItemSearchCategory_33.json";
import category35 from "../../data/DataExports/ItemSearchCategory_35.json";
import category36 from "../../data/DataExports/ItemSearchCategory_36.json";
import category37 from "../../data/DataExports/ItemSearchCategory_37.json";
import category38 from "../../data/DataExports/ItemSearchCategory_38.json";
import category39 from "../../data/DataExports/ItemSearchCategory_39.json";
import category40 from "../../data/DataExports/ItemSearchCategory_40.json";
import category41 from "../../data/DataExports/ItemSearchCategory_41.json";
import category42 from "../../data/DataExports/ItemSearchCategory_42.json";
import category43 from "../../data/DataExports/ItemSearchCategory_43.json";
import category44 from "../../data/DataExports/ItemSearchCategory_44.json";
import category45 from "../../data/DataExports/ItemSearchCategory_45.json";
import category46 from "../../data/DataExports/ItemSearchCategory_46.json";
import category47 from "../../data/DataExports/ItemSearchCategory_47.json";
import category48 from "../../data/DataExports/ItemSearchCategory_48.json";
import category49 from "../../data/DataExports/ItemSearchCategory_49.json";
import category50 from "../../data/DataExports/ItemSearchCategory_50.json";
import category51 from "../../data/DataExports/ItemSearchCategory_51.json";
import category52 from "../../data/DataExports/ItemSearchCategory_52.json";
import category53 from "../../data/DataExports/ItemSearchCategory_53.json";
import category54 from "../../data/DataExports/ItemSearchCategory_54.json";
import category55 from "../../data/DataExports/ItemSearchCategory_55.json";
import category56 from "../../data/DataExports/ItemSearchCategory_56.json";
import category57 from "../../data/DataExports/ItemSearchCategory_57.json";
import category58 from "../../data/DataExports/ItemSearchCategory_58.json";
import category59 from "../../data/DataExports/ItemSearchCategory_59.json";
import category60 from "../../data/DataExports/ItemSearchCategory_60.json";
import category65 from "../../data/DataExports/ItemSearchCategory_65.json";
import category66 from "../../data/DataExports/ItemSearchCategory_66.json";
import category67 from "../../data/DataExports/ItemSearchCategory_67.json";
import category68 from "../../data/DataExports/ItemSearchCategory_68.json";
import category69 from "../../data/DataExports/ItemSearchCategory_69.json";
import category70 from "../../data/DataExports/ItemSearchCategory_70.json";
import category71 from "../../data/DataExports/ItemSearchCategory_71.json";
import category72 from "../../data/DataExports/ItemSearchCategory_72.json";
import category73 from "../../data/DataExports/ItemSearchCategory_73.json";
import category74 from "../../data/DataExports/ItemSearchCategory_74.json";
import category75 from "../../data/DataExports/ItemSearchCategory_75.json";
import category76 from "../../data/DataExports/ItemSearchCategory_76.json";
import category77 from "../../data/DataExports/ItemSearchCategory_77.json";
import category78 from "../../data/DataExports/ItemSearchCategory_78.json";
import category79 from "../../data/DataExports/ItemSearchCategory_79.json";
import category80 from "../../data/DataExports/ItemSearchCategory_80.json";
import category81 from "../../data/DataExports/ItemSearchCategory_81.json";
import category82 from "../../data/DataExports/ItemSearchCategory_82.json";
import category83 from "../../data/DataExports/ItemSearchCategory_83.json";
import category84 from "../../data/DataExports/ItemSearchCategory_84.json";
import category85 from "../../data/DataExports/ItemSearchCategory_85.json";
import category86 from "../../data/DataExports/ItemSearchCategory_86.json";
import category87 from "../../data/DataExports/ItemSearchCategory_87.json";

import _categoryNames from "../../data/DataExports/ItemSearchCategory_Names.json";
import { SearchResultItem } from "../api/xivapi/models";
const categoryNames: {
	[key: string]: {
		Name_en: string;
		Name_de: string;
		Name_fr: string;
		Name_ja: string;
		Name_zh: string;
	};
} = _categoryNames;

const categories: {
	[key: number]: {
		ID: number;
		Icon: string;
		Name_en: string;
		Name_de: string;
		Name_fr: string;
		Name_jp: string;
		Name_chs: string;
		LevelItem: number;
		Rarity: number;
	}[];
} = {
	9: category9,
	10: category10,
	11: category11,
	12: category12,
	13: category13,
	14: category14,
	15: category15,
	16: category16,
	17: category17,
	19: category19,
	20: category20,
	21: category21,
	22: category22,
	23: category23,
	24: category24,
	25: category25,
	26: category26,
	27: category27,
	28: category28,
	29: category29,
	30: category30,
	31: category31,
	33: category33,
	35: category35,
	36: category36,
	37: category37,
	38: category38,
	39: category39,
	40: category40,
	41: category41,
	42: category42,
	43: category43,
	44: category44,
	45: category45,
	46: category46,
	47: category47,
	48: category48,
	49: category49,
	50: category50,
	51: category51,
	52: category52,
	53: category53,
	54: category54,
	55: category55,
	56: category56,
	57: category57,
	58: category58,
	59: category59,
	60: category60,
	65: category65,
	66: category66,
	67: category67,
	68: category68,
	69: category69,
	70: category70,
	71: category71,
	72: category72,
	73: category73,
	74: category74,
	75: category75,
	76: category76,
	77: category77,
	78: category78,
	79: category79,
	80: category80,
	81: category81,
	82: category82,
	83: category83,
	84: category84,
	85: category85,
	86: category86,
	87: category87,
};

class ItemSearchCategories {
	getCategoryName(id: number) {
		switch (getLang()) {
			case "en":
				return categoryNames[id.toString()].Name_en;
			case "de":
				return categoryNames[id.toString()].Name_de;
			case "fr":
				return categoryNames[id.toString()].Name_fr;
			case "ja":
				return categoryNames[id.toString()].Name_ja;
			case "zh":
				return categoryNames[id.toString()].Name_zh;
			default:
				return categoryNames[id.toString()].Name_en;
		}
	}

	getCategory(id: number): SearchResultItem[] {
		return R.pipe(
			categories[id],
			R.map((o) => {
				return {
					ID: o.ID,
					Icon: o.Icon,
					Name: (() => {
						switch (getLang()) {
							case "en":
								return o.Name_en;
							case "de":
								return o.Name_de;
							case "fr":
								return o.Name_fr;
							case "ja":
								return o.Name_jp;
							case "zh":
								return o.Name_chs;
							default:
								return o.Name_en;
						}
					})(),
					LevelItem: o.LevelItem,
					Rarity: o.Rarity,
					ItemKind: {
						ID: id,
						Name: this.getCategoryName(id),
					},
				};
			}),
			R.sort((a, b) => b.LevelItem - a.LevelItem),
		);
	}

	getCategoryEx(id: number) {
		switch (getLang()) {
			case "en":
				return (categoriesEn as Category)[`${id}`];
			case "de":
				return (categoriesDe as Category)[`${id}`];
			case "fr":
				return (categoriesFr as Category)[`${id}`];
			case "ja":
				return (categoriesJa as Category)[`${id}`];
			case "zh":
				return (categoriesZh as Category)[`${id}`];
			default:
				return (categoriesEn as Category)[`${id}`];
		}
	}
}

interface Category {
	[key: string]: string[][];
}

export default Object.freeze(new ItemSearchCategories());
