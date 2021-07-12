import React from "react";
import UserIcon from "../../assets/user.png";
import "./WidgetLg.css";
export default function WidgetLg() {
	const Button = ({ type }) => {
		return <button className={"widgetLgButton " + type}>{type}</button>;
	};
	return (
		<div className="widgetLg">
			<h3 className="widgetLgTitle">Latest Deliveries</h3>
			<table className="widgetLgTable">
				<thead>
					<tr className="widgetLgTr">
						<th className="widgetLgTh">Customer</th>
						<th className="widgetLgTh">Date</th>
						<th className="widgetLgTh">Amount</th>
						<th className="widgetLgTh">Status</th>
					</tr>
				</thead>
				<tbody>
					<tr className="widgetLgTr">
						<td className="widgetLgUser">
							<img src={UserIcon} alt="" className="widgetLgImg" />
							<span className="widgetLgName">Susan Carol</span>
						</td>
						<td className="widgetLgDate">2 Jun 2021</td>
						<td className="widgetLgAmount">$122.00</td>
						<td className="widgetLgStatus">
							<Button type="Delivered" />
						</td>
					</tr>
					<tr className="widgetLgTr">
						<td className="widgetLgUser">
							<img src={UserIcon} alt="" className="widgetLgImg" />
							<span className="widgetLgName">Susan Carol</span>
						</td>
						<td className="widgetLgDate">2 Jun 2021</td>
						<td className="widgetLgAmount">$122.00</td>
						<td className="widgetLgStatus">
							<Button type="Ontransit" />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
