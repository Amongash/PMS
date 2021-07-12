import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import fetchWrapper from "../../utils/fetchWrapper";
import { Switch } from "@material-ui/core";

import "./ParcelList.css";

export default function ParcelList() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchWrapper
			.get(process.env.REACT_APP_API_URL + "/parcels")
			.then((response) => {
				setData(response.data.parcels);
			});
	}, []);

	const columns = [
		{ field: "_id", headerName: "ID", width: 90 },
		{ field: "recipient", headerName: "Recipient", width: 200 },
		{ field: "delivery_location", headerName: "Location", width: 200 },
		{
			field: "status",
			headerName: "Status",
			width: 120,
		},
		{
			field: "delivered",
			headerName: "Delivered",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Switch />
					</>
				);
			},
		},
	];

	return (
		<div className="parcelList">
			<DataGrid
				getRowId={(row) => row._id}
				rows={data}
				columns={columns}
				pageSize={8}
				checkboxSelection
				disableSelectionOnClick
			/>
		</div>
	);
}
