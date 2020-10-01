import { Lang } from "../services/translation/models";

// Should probably work out a better solution to this
export const LANG_LOCALE: {
	[T in Lang]: string;
} = {
	en: "en-US",
	fr: "fr-FR",
	de: "de-DE",
	ja: "ja-JP",
	zh: "zh-CN",
	ko: "ko-KR",
};
