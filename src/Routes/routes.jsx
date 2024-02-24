import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

import List from "../pages/List/List";
import SingleUser from "../pages/Single/SingleUser";
import New from "../pages/New/New";
import UsersLists from "../components/Users/UsersLists";
import ProductsLists from "../components/Products/ProductsLists";
import { productInputs, userInputs } from "../formSource";
import App from "../App.jsx";
import SingleProduct from "../pages/Single/SingleProduct";
import NotFound from "../components/NotFound/NotFound";
import Orders from "../pages/Orders/Orders";
import OrderLists from "../components/OrdersLists/OrderLists";
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
						element: <List title={"Add New User"} path={"users"} />,
					},
					{
						path: ":userId",
						element: <SingleUser />,
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
						element: <List title={"Add New Product"} path={"products"} />,
					},
					{
						path: ":productId",
						element: <SingleProduct />,
					},
					{
						path: "new",
						element: <New inputs={productInputs} title={"Add New Product"} />,
					},
				],
			},
			{
				path: "orders",
				element: <OrderLists />,
				children: [
					{
						path: "",
						element: <Orders />,
					},
				],
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);
