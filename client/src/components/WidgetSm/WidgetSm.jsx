import React from "react";
import { Visibility } from "@material-ui/icons";
import UserIcon from "../../assets/user.png";
import "./WidgetSm.css";

export default function WidgetSm() {
	return (
		<div className="widgetSm">
			<span className="widgetSmTitle">Dispatched Parcels</span>
			<ul className="widgetSmList">
				<li className="widgetSmListItem">
					<img src={UserIcon} alt="" className="widgetSmImg" />
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Anna Keller</span>
						<span className="widgetSmUserLocation">Garissa</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
			</ul>
		</div>
	);
}
