import React from "react";
import { useCookies } from "react-cookie";
import { setLang } from "./services/translation";
import { SettingsModal } from "./components/SettingsModal";

export function App() {
	const [cookies] = useCookies(["mogboard_language"]);
	setLang(cookies.mogboard_language);

	return (
		<div>
			<SettingsModal />
		</div>
	);
}
