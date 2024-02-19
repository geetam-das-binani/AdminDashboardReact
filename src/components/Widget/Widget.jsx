import {
	AccountBalanceOutlined,
	ShoppingCartOutlined,
} from "@mui/icons-material";
import "./widgets.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Person2Icon from "@mui/icons-material/Person2";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
const Widget = ({ type }) => {
	let data;

	const amount = 100;
	const diff = 20;
	switch (type) {
		case "user":
			data = {
				title: "USERS",
				isMoney: false,
				link: "See all users",
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
		case "order":
			data = {
				title: "ORDERS",
				isMoney: false,
				link: "View All Orders",
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
					{amount}
				</span>
				<span className="link">{data.link}</span>
			</div>
			<div className="right">
				<div className="percentage positive">
					<ArrowUpwardIcon />
					{diff}%
				</div>
				{data.icon}
			</div>
		</div>
	);
};

export default Widget;
