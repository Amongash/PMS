import React from "react";
import Topbar from "./Topbar/Topbar";

export default function MainLayout({ children }) {
	return (
		<div>
			<Topbar />
			<div>{children}</div>
		</div>
	);
}
