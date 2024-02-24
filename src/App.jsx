import React from "react";
import { Outlet } from "react-router-dom";
import "./style/dark.scss";
import { useStateContext } from "./Context/Context";

const App = () => {
	const { darkMode } = useStateContext();
	return (
		<div className={`app ${darkMode && "dark"}`}>
			<Outlet />
		</div>
	);
};

export default App;
