import Translate from "./Translate";

export const t = Translate.t.bind(Translate);
export const setLang = Translate.setLang.bind(Translate);
export const getLang = Translate.getLang.bind(Translate);
export const getLocale = Translate.getLocale.bind(Translate);
