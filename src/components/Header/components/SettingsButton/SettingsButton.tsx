import React, { useState } from "react";
import { SettingsModal } from "../../../SettingsModal";
import { Tooltip } from "../../../Tooltip";
import styles from "./SettingsButton.module.scss";

export function SettingsButton() {
	const [modalOpen, setModalOpen] = useState(false);
	const closeModal = () => setModalOpen(false);

	return (
		<div>
			<button
				className={styles.settingsButton}
				data-tip
				data-for="settings"
				onClick={() => setModalOpen(true)}
			>
				<span className="xiv-app_drawer_setting" />
			</button>
			<Tooltip text="Site Settings" id="settings" place="bottom" />
			<SettingsModal open={modalOpen} onRequestClose={closeModal} />
		</div>
	);
}
