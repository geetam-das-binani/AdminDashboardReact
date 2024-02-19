import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import List from "../pages/List/List";
import Single from "../pages/Single/Single";
import New from "../pages/New/New";
import App from "../App";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		children: [
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "users",
				children: [
					{
						path: "",
						element: <List />,
					},
					{
						path: ":userId",
						element: <Single />,
					},
					{
						path: "new",
						element: <New />,
					},
				],
			},
			{
				path: "products",
				children: [
					{
						path: "",
						element: <List />,
					},
					{
						path: ":productId",
						element: <Single />,
					},
					{
						path: "new",
						element: <New />,
					},
				],
			},
		],
	},
]);
