import AuthService from "../services/Auth";

const apiUrl = process.env.REACT_APP_API_URL;

async function get(url) {
	const requestOptions = {
		method: "GET",
		headers: authHeader(url),
	};

	return await fetch(url, requestOptions)
		.then((response) => response.json())
		.catch((error) => console.error(error));
}

async function post(url, body) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json", ...authHeader(url) },
		credentials: "include",
		body: JSON.stringify(body),
	};
	return await fetch(url, requestOptions)
		.then((response) => response.json())
		.catch((error) => console.error(error));
}

async function put(url, body) {
	const requestOptions = {
		method: "PUT",
		headers: { "Content-Type": "application/json", ...authHeader(url) },
		body: JSON.stringify(body),
	};
	return await fetch(url, requestOptions)
		.then((response) => response.json())
		.catch((error) => console.error(error));
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(url) {
	const requestOptions = {
		method: "DELETE",
		headers: authHeader(url),
	};
	return await fetch(url, requestOptions)
		.then((response) => response.json())
		.catch((error) => console.error(error));
}

// helper functions

function authHeader(url) {
	// return auth header with jwt if user is logged in and request is to the api url
	// const token = AuthService.getCurrentUserToken();
	const token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MjU5OTAwMTJ9.tn_YJwTwC70bDSXxGdM31xO5-hLniTAOGbtH0h3WBPI";
	const isApiUrl = url.startsWith(apiUrl);
	if (token && isApiUrl) {
		return { Authorization: `Bearer ${token}` };
	}
	return {};
}

const fetchWrapper = {
	get,
	post,
	put,
	delete: _delete,
};

export default fetchWrapper;
