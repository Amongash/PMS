import React from "react";
import { useHistory } from "react-router-dom";
import { ExitToApp as Logout } from "@material-ui/icons";
import AuthService from "../../../services/Auth";
import "./Topbar.css";
export default function Topbar() {
	const history = useHistory();
	const logout = () => {
		AuthService.logout();
		history.push("/login");
	};
	return (
		<div className="topbar">
			<div className="topbarWrapper">
				<div className="topLeft">
					<span className="logo">Parcel Management System</span>
				</div>

				<div className="topRight">
					<div className="topbarIconContainer">
						<Logout onClick={logout} />
					</div>
				</div>
			</div>
		</div>
	);
}
