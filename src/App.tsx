import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { setLang } from "./services/translation";
import { Home } from "./routes/Home";
import { Footer } from "./components/Footer";
import { useSettings } from "./hooks";
import { Header } from "./components/Header";
import { ToastContainer } from "./components/ToastContainer";
import { LeftNav } from "./components/LeftNav";
import { NotFound } from "./routes/NotFound";
import { ErrorPage } from "./routes/ErrorPage";
import { Market } from "./routes/Market";

export function App() {
	const [settings] = useSettings();
	setLang(settings.mogboardLanguage);

	return (
		<div>
			<LeftNav enabled={settings.mogboardLeftNav === "yes"} />
			<div
				style={{
					marginLeft: settings.mogboardLeftNav === "yes" ? "250px" : "inherit",
					position: "relative",
				}}
			>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/market/:_itemId" component={Market} />
					<Route path="/404" component={NotFound} />
					<Route path="/:error" component={ErrorPage} />
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
