import React from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
	return (
		<div className="App">
			{/* <Navbar /> */}
			<Outlet />
			<Sidebar />
		</div>
	);
};

export default App;
