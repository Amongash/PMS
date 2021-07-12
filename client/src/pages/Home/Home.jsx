import React from "react";
import Featured from "../../components/Featured/Featured";
import Chart from "../../components/Chart/Chart";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import "./Home.css";

export default function Home() {
	return (
		<div className="home">
			<Featured />
			<Chart />
			<div className="homeWidgets">
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	);
}
