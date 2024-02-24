import "./datatable.scss";
import { userColumns, productColumns } from "../../dataSource";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useStateContext } from "../../Context/Context";

const DataTable = ({ title, path }) => {
	const { alluserRows, allproductRows } = useStateContext();
	const [rows, setRows] = useState([]);
	const [columns, setColumns] = useState([]);

	const handleDelete = (userId) =>
		setRows(rows.filter((row) => row.id !== parseInt(userId)));

	useEffect(() => {
		if (title === "Add New User") {
			setRows(alluserRows);
			setColumns(userColumns);
		} else {
			setRows(allproductRows);
			setColumns(productColumns);
		}
	}, [title, allproductRows, alluserRows]);

	const actionsColumns = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						<Link
							to={`/${path === "users" ? "users" : "products"}/${
								params.row.id
							}`}
							style={{ textDecoration: "none" }}
						>
							<div className="viewButton">View</div>
						</Link>
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
		<>
			{title && (
				<div className="dataTableTitle">
					{title}
					<Link
						className="link"
						style={{ textDecoration: "none" }}
						to={`/${path === "users" ? "users" : "products"}/new`}
					>
						{title === "Add New User" ? "Add New" : "Add New"}
					</Link>
				</div>
			)}

			<DataGrid
				className="datagrid"
				rows={rows}
				columns={[...columns, ...actionsColumns]}
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
		</>
	);
};

export default DataTable;
