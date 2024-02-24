import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes.jsx";
import "remixicon/fonts/remixicon.css";
import { DarkModeContextProvider } from "./Context/Context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<DarkModeContextProvider>
			<RouterProvider router={router} />
		</DarkModeContextProvider>
	</React.StrictMode>
);
