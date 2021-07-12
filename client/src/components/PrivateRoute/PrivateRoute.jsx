import React from "react";
import { Route, Redirect } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import AuthService from "../../services/Auth";

export default function PrivateRoute({ component: Component, ...rest }) {
	const user = AuthService.getCurrentUserToken();
	return (
		<Route
			{...rest}
			render={(props) => {
				if (!user) {
					// not logged in so redirect to login page with the return url
					return (
						<Redirect
							to={{ pathname: "/login", state: { from: props.location } }}
						/>
					);
				}

				// logged in so return component
				return (
					<DashboardLayout>
						<Component {...props} />
					</DashboardLayout>
				);
			}}
		/>
	);
}
