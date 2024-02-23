import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import List from "../pages/List/List";
import Single from "../pages/Single/Single";
import New from "../pages/New/New";
import UsersLists from "../components/Users/UsersLists";
import ProductsLists from "../components/Products/ProductsLists.jsx";
import { productInputs, userInputs } from "../formSource";
import App from "../App.jsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <Home />,
			},

			{
				path: "users",
				element: <UsersLists />,
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
						element: <New inputs={userInputs} title="Add New User" />,
					},
				],
			},
			{
				path: "products",
				element: <ProductsLists />,
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
						element: <New inputs={productInputs} title={"Add New Product"} />,
					},
				],
			},
		],
	},

	{
		path: "login",
		element: <Login />,
	},
]);
