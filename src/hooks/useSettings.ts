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
	const settings: Settings = {
		mogboardServer: cookies.mogboard_server || "Adamantoise",
		mogboardLanguage: cookies.mogboard_language || "en",
		mogboardTimezone: cookies.mogboard_timezone || "Pacific/Apia",
		mogboardLeftNav: cookies.mogboard_leftnav || "no",
		mogboardHomeWorld: cookies.mogboard_homeworld || "no",
	};
	const saveSettings = () => {
		setCookie("mogboard_server", settings.mogboardServer, { path: "/", sameSite: "strict" });
		setCookie("mogboard_language", settings.mogboardLanguage, { path: "/", sameSite: "strict" });
		setCookie("mogboard_timezone", settings.mogboardTimezone, { path: "/", sameSite: "strict" });
		setCookie("mogboard_leftnav", settings.mogboardLeftNav, { path: "/", sameSite: "strict" });
		setCookie("mogboard_homeworld", settings.mogboardHomeWorld, { path: "/", sameSite: "strict" });

		setLang(settings.mogboardLanguage);
	};

	return [settings, saveSettings];
}

interface Settings {
	mogboardServer: string;
	mogboardLanguage: Lang;
	mogboardTimezone: string;
	mogboardLeftNav: "yes" | "no";
	mogboardHomeWorld: "yes" | "no";
}

type SaveSettings = () => void;
