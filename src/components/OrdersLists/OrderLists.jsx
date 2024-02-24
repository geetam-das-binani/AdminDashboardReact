import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const OrderLists = () => {
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

export default OrderLists;
