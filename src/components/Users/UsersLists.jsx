import { Outlet } from "react-router-dom";
import "./userLists.scss";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

const UsersLists = () => {
	return (
		<div className="list">
			<Sidebar />
			<div className="listContainer">
				<Navbar />
				<Outlet />
			</div>
		</div>
	);
};

export default UsersLists;
