import React from "react";
import Topbar from "./Topbar/Topbar";
import Sidebar from "./Sidebar/Sidebar";

export default function DashboardLayout({ children }) {
	return (
		<div>
			<Topbar />
			<div style={{ display: "flex", marginTop: "10px" }}>
				<Sidebar />
				{children}
			</div>
		</div>
	);
}
