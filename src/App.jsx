import React from "react";
import { Outlet } from "react-router-dom";
import "./style/dark.scss";
const App = () => {
	return (
		<div className="app dark">
			<Outlet />
		</div>
	);
};

export default App;
