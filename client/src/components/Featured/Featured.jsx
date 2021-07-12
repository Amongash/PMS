import React from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./Featured.css";
export default function Featured() {
	return (
		<div className="featured">
			<div className="featuredItem">
				<span className="featuredTitle">Revenue</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">12345</span>
					<span className="featuredMoneyRate">
						44 <ArrowDownward className="featuredIcon negative" />
					</span>
				</div>
				<span className="featuredSub">Previous Month</span>
			</div>
			<div className="featuredItem">
				<span className="featuredTitle">Deliveries</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">12345</span>
					<span className="featuredMoneyRate">
						44 <ArrowDownward className="featuredIcon negative" />
					</span>
				</div>
				<span className="featuredSub">Previous Month</span>
			</div>
			<div className="featuredItem">
				<span className="featuredTitle">Customers</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">12345</span>
					<span className="featuredMoneyRate">
						44 <ArrowUpward className="featuredIcon" />
					</span>
					<span className="featuredSub">Previous Month</span>
				</div>
			</div>
		</div>
	);
}
