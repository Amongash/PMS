import React from "react";
import { Route } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";

export default function MainRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) => (
				<MainLayout>
					<Component {...props} />
				</MainLayout>
			)}
		/>
	);
}
