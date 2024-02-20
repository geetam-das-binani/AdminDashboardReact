import "./datatable.scss";
import { userColumns, userRows } from "../../dataSource";
import { DataGrid } from "@mui/x-data-grid";
const DataTable = () => {
	return (
		<DataGrid
			rows={userRows}
			columns={userColumns}
			initialState={{
				pagination: {
					paginationModel: {
						pageSize: 5,
					},
				},
			}}
			pageSizeOptions={[5]}
			checkboxSelection
			disableRowSelectionOnClick
		/>
	);
};

export default DataTable;
