import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { setLang } from "./services/translation";
import { Home } from "./routes/Home";
import { SettingsModal } from "./components/SettingsModal";
import { Footer } from "./components/Footer";
import { useSettings } from "./hooks/useSettings";
import { Header } from "./components/Header";

export function App() {
	const [settings] = useSettings();
	setLang(settings.mogboard_language);

	return (
		<div>
			<Header />
			<SettingsModal />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="*">
					<Redirect to="/404" />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}
