import React from "react";
import Modal from "react-modal";
import styles from "./SettingsModal.module.scss";
import { DropDown } from "../DropDown";
import { getTimeZones } from "../../util/time";
import { t } from "../../services/translation";
import { useSettings } from "../../hooks";
import { YesNoDropDown } from "../YesNoDropDown";
import { LangDropDown } from "../LangDropDown";
import { ServerDropDown } from "../ServerDropDown";
import { toast } from "react-toastify";

export function SettingsModal(props: SettingsModalProps) {
	const [settings, saveSettings] = useSettings();

	return (
		<Modal
			overlayClassName={styles.modalOverlay}
			className={styles.modal}
			isOpen={props.open}
			onRequestClose={props.onRequestClose}
			appElement={document.getElementById("root")!}
		>
			<div className={`${styles.flex} ${styles.row}`}>
				<div className={styles.flex50}>
					<label>{t("Your Server", "generic_your_server")}</label>
					<ServerDropDown
						defaultValue={settings.mogboardServer}
						onChange={(e) => (settings.mogboardServer = e.currentTarget.value)}
					/>
				</div>
				<div className={styles.flex50}>
					<label>{t("Language", "generic_language")}</label>
					<LangDropDown
						defaultValue={settings.mogboardLanguage}
						onChange={(e) => (settings.mogboardLanguage = e.currentTarget.value)}
					/>
				</div>
			</div>
			<div className={styles.row}>
				<label>{t("Timezone", "generic_timezone")}</label>
				<DropDown
					defaultValue={settings.mogboardTimezone}
					onChange={(e) => (settings.mogboardTimezone = e.currentTarget.value)}
				>
					<option disabled={true}>
						{t("- Choose your timezone -", "option_choose_timezone_guide")}
					</option>
					{getTimeZones().map((timezone) => (
						<option value={timezone.zone} key={timezone.zone}>
							{timezone.formattedOffset}
						</option>
					))}
				</DropDown>
			</div>
			<div className={`${styles.flex} ${styles.row}`}>
				<div className={styles.flex50}>
					<label>{t("Left Navigation", "generic_left_navigation")}</label>
					<div className={styles.text}>
						<small>
							{t(
								"This enables a quick-access left-navigation of all market categories.",
								"option_left_nav_guide",
							)}
						</small>
					</div>
					<YesNoDropDown
						defaultValue={settings.mogboardLeftNav}
						onChange={(e) => (settings.mogboardLeftNav = e.currentTarget.value)}
					/>
				</div>
				<div className={styles.flex50}>
					<label>{t("Default Home World", "generic_default_home_world")}</label>
					<div className={styles.text}>
						<small>
							{t(
								"This will show prices/history on your home world by default instead of cross-world.",
								"option_default_home_world_guide",
							)}
						</small>
					</div>
					<YesNoDropDown
						defaultValue={settings.mogboardHomeWorld}
						onChange={(e) => (settings.mogboardHomeWorld = e.currentTarget.value)}
					/>
				</div>
			</div>
			<div className={styles.row}>
				<button
					className={styles.saveButton}
					onClick={() => {
						saveSettings();
						toast.success("Settings saved!");
						props.onRequestClose();
					}}
				>
					{t("Save Settings", "option_save_settings")}
				</button>
			</div>
			<button className={styles.closeButton} onClick={props.onRequestClose}>
				<i className="xiv-NavigationClose" />
			</button>
		</Modal>
	);
}

export interface SettingsModalProps {
	open: boolean;
	onRequestClose: () => void;
}
