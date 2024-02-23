import "./datatable.scss";
import { userColumns, userRows } from "../../dataSource";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
const DataTable = () => {
	const actionsColumns = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						<Link to={"/users/test"} style={{ textDecoration: "none" }}>
							<div
								className="viewButton"
								onClick={() => handleView(params.row.id)}
							>
								View
							</div>
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
			<div className="dataTableTitle">
				Add New User
				<Link
					className="link"
					style={{ textDecoration: "none" }}
					to={"/users/new"}
				>
					Add New
				</Link>
			</div>

			<DataGrid
				rows={userRows}
				columns={[...userColumns, ...actionsColumns]}
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
