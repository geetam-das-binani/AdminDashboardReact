import DataTable from "../../components/DataTable/DataTable";
import "./list.scss";

const List = ({ title, path }) => {
	return (
		<div className="datatable">
			<DataTable title={title} path={path} />
		</div>
	);
};

export default List;
