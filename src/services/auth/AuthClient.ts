class AuthClient {
	private _loggedIn: boolean;

	private _username: string;
	private _token: string;

	constructor() {
		this._loggedIn = true;

		this._username = "karashiiro";
		this._token = "";
	}

	get isLoggedIn() {
		return this._loggedIn;
	}

	get username() {
		return this._username;
	}
}

export default Object.freeze(new AuthClient());
