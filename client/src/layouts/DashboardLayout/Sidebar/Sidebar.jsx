import React from "react";
import { Link } from "react-router-dom";
import {
	LineStyle as HomeIcon,
	LabelImportant as ParcelIcon,
	People as UserIcon,
	AttachMoney as CostIcon,
	PersonAdd as CustomerIcon,
} from "@material-ui/icons";
import "./Sidebar.css";
export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Dashboard</h3>
					<ul className="sidebarList">
						<Link to="/" className="link">
							<li className="sidebarListItem">
								<HomeIcon className="sidebarIcon" />
								Home
							</li>
						</Link>
						<Link to="/parcels" className="link">
							<li className="sidebarListItem">
								<ParcelIcon className="sidebarIcon" />
								Parcels
							</li>
						</Link>
						<Link to="/users" className="link">
							<li className="sidebarListItem">
								<UserIcon className="sidebarIcon" />
								Users
							</li>
						</Link>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Management</h3>
					<ul className="sidebarList">
						<Link to="/users/create" className="link">
							<li className="sidebarListItem">
								<CustomerIcon className="sidebarIcon" />
								New Customer
							</li>
						</Link>
						{/* <Link to="/parcels/cost" className="link">
							<li className="sidebarListItem">
								<CostIcon className="sidebarIcon" />
								Delivery Cost
							</li>
						</Link> */}
					</ul>
				</div>
			</div>
		</div>
	);
}
