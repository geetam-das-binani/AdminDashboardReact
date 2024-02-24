import { useState } from "react";
import "./orders.scss";
import { ordersColumns, ordersRows } from "../../dataSource";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";

const Orders = () => {
	const [rows, setRows] = useState(ordersRows || []);
	const [isDelivered, setIsDelivered] = useState(new Set());

	const handleDelete = (orderId) => {
		const updated = rows.filter((order) => order.id !== Number(orderId));
		setRows(updated);
	};
	const handleStatus = (orderId) => {
		setRows(
			rows.map((order) =>
				order.id === orderId
					? {
							...order,
							status: order.status === "processing" ? "Shipped" : "Delivered",
					  }
					: order
			)
		);
	};
	useEffect(() => {
		const deliveredSet = new Set();
		rows.forEach((order) => {
			if (order.status === "Delivered") {
				deliveredSet.add(order.id);
			}
		});
		setIsDelivered(deliveredSet);
	}, [rows]);
	const actionsColumns = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						{!isDelivered.has(Number(params.row.id)) && (
							<div
								onClick={() => handleStatus(params.row.id)}
								className="viewButton"
							>
								Process Status
							</div>
						)}

						<div
							className="deleteButton"
							onClick={() => handleDelete(params.row.id)}
						>
							Delete
						</div>
					</div>
				);
			},
		},
	];
	return (
		<div className="orders">
			<DataGrid
				className="datagrid"
				rows={rows}
				columns={[...ordersColumns, ...actionsColumns]}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5,
						},
					},
				}}
				checkboxSelection
				pageSizeOptions={[8]}
			/>
		</div>
	);
};

export default Orders;
