import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { setLang } from "./services/translation";
import { Home } from "./routes/Home";
import { Footer } from "./components/Footer";
import { useSettings } from "./hooks/useSettings";
import { Header } from "./components/Header";
import { ToastContainer } from "./components/ToastContainer";
import { LeftNav } from "./components/LeftNav";

export function App() {
	const [settings] = useSettings();
	setLang(settings.mogboard_language);

	return (
		<div>
			<LeftNav enabled={settings.mogboard_leftnav === "yes"} />
			<div
				style={{
					marginLeft: settings.mogboard_leftnav === "yes" ? "250px" : "inherit",
					position: "relative",
				}}
			>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="*">
						<Redirect to="/404" />
					</Route>
				</Switch>
				<Footer />
				<ToastContainer />
			</div>
		</div>
	);
}
