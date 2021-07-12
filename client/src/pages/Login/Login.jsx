import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import AuthService from "../../services/Auth";
import "./Login.css";
export default function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [error, setError] = useState();
	const history = useHistory();
	const user = AuthService.getCurrentUserToken();
	if (user) {
		return <Redirect to="/" />;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await AuthService.login(email, password);

		if (response && response.data) {
			setError(response.data.error);
		}
		if (response && response.accessToken) {
			history.push("/");
		}
	};
	return (
		<div className="login">
			<h1 className="loginTitle">Login to PMS</h1>
			<form className="loginForm" onSubmit={handleSubmit}>
				{error && <div className="loginError">{error}</div>}
				<div className="loginFormItem">
					<label>Email</label>
					<input type="email" onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div className="loginFormItem">
					<label>Password</label>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button className="loginButton" type="submit">
					Login
				</button>
			</form>
		</div>
	);
}
