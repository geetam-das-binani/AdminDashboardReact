import {
	AccountBalanceOutlined,
	ArrowDownward,
	ShoppingCartOutlined,
} from "@mui/icons-material";
import "./widgets.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Person2Icon from "@mui/icons-material/Person2";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useStateContext } from "../../Context/Context";
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
	const { alluserRows, allproductRows } = useStateContext();
	let data;

	switch (type) {
		case "user":
			data = {
				title: "USERS",
				isMoney: false,
				link: "See all users",
				url: "/users",
				diff: 10,

				totalUsers: alluserRows.length,
				icon: (
					<Person2Icon
						style={{
							color: "crimson",
							backgroundColor: "rgba(255, 0, 0, 0.2)",
						}}
						className="icon"
					/>
				),
			};
			break;
		case "products":
			data = {
				title: "PRODUCTS",
				isMoney: false,
				link: "View All products",
				url: "/products",
				diff: "20",
				totalProducts: allproductRows.length,
				icon: (
					<ShoppingCartOutlined
						style={{
							color: "goldenrod",
							backgroundColor: "rgba(218, 165, 32, 0.2)",
						}}
						className="icon"
					/>
				),
			};
			break;
		case "earning":
			data = {
				title: "EARNINGS",
				isMoney: true,
				link: "View net earnings",
				diff: 18,
				icon: (
					<MonetizationOnIcon
						style={{
							color: "green",
							backgroundColor: "rgba(0, 128, 0, 0.2)",
						}}
						className="icon"
					/>
				),
			};
			break;
		case "balance":
			data = {
				title: "BALANCE",
				isMoney: true,
				link: "See details",
				diff: 26,
				icon: (
					<AccountBalanceOutlined
						style={{
							color: "purple",
							backgroundColor: "rgba(128, 0, 128, 0.2)",
						}}
						className="icon"
					/>
				),
			};
			break;
		default:
			break;
	}

	return (
		<div className="widget">
			<div className="left">
				<span className="title">{data.title}</span>
				<span className="counter">
					{data.isMoney && "$"}
					{data.isMoney
						? "100"
						: data.title === "USERS"
						? data.totalUsers
						: data.totalProducts}
				</span>
				<Link
					to={data?.url || "#"}
					style={{ textDecoration: "none", color: "inherit" }}
					className="link"
				>
					{data.link}
				</Link>
			</div>
			<div className="right">
				<div
					className={`percentage ${data.diff >= 20 ? "positive" : "negative"}`}
				>
					{data.diff >= 20 ? <ArrowUpwardIcon /> : <ArrowDownward />}
					{data.diff}%
				</div>
				{data.icon}
			</div>
		</div>
	);
};

export default Widget;
