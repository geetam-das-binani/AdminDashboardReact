import "./datatable.scss";
import { userColumns, userRows } from "../../dataSource";
import { DataGrid } from "@mui/x-data-grid";
const DataTable = () => {
	const actionsColumns = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						<div
							className="viewButton"
							onClick={() => handleView(params.row.id)}
						>
							View
						</div>
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
			// rowsPerPageOptions={[10]}
			pageSizeOptions={[8]}
		/>
	);
};

export default DataTable;
