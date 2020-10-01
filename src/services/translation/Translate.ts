import { Lang, TranslationItem } from "./models";

import deLang from "../../translations/Universalis_German.json";
import zhLang from "../../translations/Universalis_Chinese_simplified.json";
import { LANG_LOCALE } from "../../data/LANG_LOCALE";

class Translate {
	private lang?: Lang | null;
	private currentLangFile?: TranslationItem[] | null;

	constructor(lang: Lang = "en") {
		this.setLang(lang);
	}

	t(text: string, key: string): string {
		const translation = this.currentLangFile?.find((tl) => tl.context === key)?.definition;
		if (translation != null) {
			return translation;
		}
		return text;
	}

	setLang(lang: Lang) {
		this.lang = lang;

		switch (this.lang) {
			case "fr":
			case "ja":
			case "en":
				this.currentLangFile = null;
				break;
			case "de":
				this.currentLangFile = deLang;
				break;
			case "zh":
				this.currentLangFile = zhLang;
				break;
			default:
				this.currentLangFile = null;
				break;
		}
	}

	getLang(): Lang | null | undefined {
		return this.lang;
	}

	getLocale(): string {
		return LANG_LOCALE[this.getLang() || "en"];
	}
}

// Methods in this class need to be redeclared in the index file.
export default new Translate();
