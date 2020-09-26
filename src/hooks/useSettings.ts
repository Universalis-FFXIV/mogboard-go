import { useCookies } from "react-cookie";
import { setLang } from "../services/translation";
import { Lang } from "../services/translation/models";

export function useSettings(): [Settings, SaveSettings] {
	const [cookies, setCookie] = useCookies([
		"mogboard_server",
		"mogboard_language",
		"mogboard_timezone",
		"mogboard_leftnav",
		"mogboard_homeworld",
	]);
	const settings = {
		mogboard_server: cookies.mogboard_server || "Adamantoise",
		mogboard_language: cookies.mogboard_language || "en",
		mogboard_timezone: cookies.mogboard_timezone || "Pacific/Apia",
		mogboard_leftnav: cookies.mogboard_leftnav || "no",
		mogboard_homeworld: cookies.mogboard_homeworld || "no",
	};
	const saveSettings = () => {
		setCookie("mogboard_server", settings.mogboard_server, { path: "/", sameSite: "strict" });
		setCookie("mogboard_language", settings.mogboard_language, { path: "/", sameSite: "strict" });
		setCookie("mogboard_timezone", settings.mogboard_timezone, { path: "/", sameSite: "strict" });
		setCookie("mogboard_leftnav", settings.mogboard_leftnav, { path: "/", sameSite: "strict" });
		setCookie("mogboard_homeworld", settings.mogboard_homeworld, { path: "/", sameSite: "strict" });

		setLang(settings.mogboard_language);
	};

	return [settings, saveSettings];
}

interface Settings {
	mogboard_server: string;
	mogboard_language: Lang;
	mogboard_timezone: string;
	mogboard_leftnav: "yes" | "no";
	mogboard_homeworld: "yes" | "no";
}

type SaveSettings = () => void;
