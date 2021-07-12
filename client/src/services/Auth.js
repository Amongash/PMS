import fetchWrapper from "../utils/fetchWrapper";

const API_URL = process.env.REACT_APP_API_URL;

class AuthService {
	async login(email, password) {
		return await fetchWrapper
			.post(API_URL + "/auth/login", {
				email,
				password,
			})
			.then((response) => {
				if (response.accessToken) {
					localStorage.setItem("user", JSON.stringify(response.accessToken));
				}
				return response;
			})
			.catch((error) => console.error(error));
	}

	logout() {
		localStorage.removeItem("user");
	}

	register(username, email, password) {
		return fetchWrapper.post(API_URL + "auth/register", {
			username,
			email,
			password,
		});
	}

	getCurrentUserToken() {
		return JSON.parse(localStorage.getItem("user"));
	}
}

export default new AuthService();
