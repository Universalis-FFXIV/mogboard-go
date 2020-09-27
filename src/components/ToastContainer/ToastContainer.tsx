import React from "react";
import { ToastContainer as LibToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toast-overrides.scss";

export function ToastContainer() {
	return (
		<LibToastContainer
			position="bottom-right"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			pauseOnHover
		/>
	);
}
