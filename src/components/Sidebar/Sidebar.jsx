import "./sidebar.scss";
import { Link } from "react-router-dom";
import { useStateContext } from "../../Context/Context";
const Sidebar = () => {
	const { handleMode } = useStateContext();
	return (
		<div className="sidebar">
			<div className="top">
				<Link style={{ textDecoration: "none" }} to={"/"}>
					<span className="logo">Admin</span>
				</Link>
			</div>
			<hr />
			<div className="center">
				<ul>
					<p className="title">MAIN</p>
					<Link style={{ textDecoration: "none" }} to={"/"}>
						<li>
							<i className="ri-dashboard-fill icon"></i>
							<span>Dashboard</span>
						</li>
					</Link>
					<p className="title">LISTS</p>
					<Link style={{ textDecoration: "none" }} to={"/users"}>
						<li>
							<i className="ri-user-line icon"></i>
							<span>Users</span>
						</li>
					</Link>

					<Link style={{ textDecoration: "none" }} to={"/products"}>
						<li>
							<i className="ri-store-3-fill icon"></i>
							<span>Products</span>
						</li>
					</Link>

					<Link style={{ textDecoration: "none" }} to={"/orders"}>
						<li>
							<i className="ri-store-3-line icon"></i>
							<span>Orders</span>
						</li>
					</Link>

					<p className="title">USEFUL</p>
					<li>
						<i className="ri-bar-chart-box-line icon"></i>
						<span>Stats</span>
					</li>
					<li>
						<i className="ri-notification-3-fill icon"></i>
						<span>Notifications</span>
					</li>
					<p className="title">SERVICE</p>
					<li>
						<i className="ri-spam-fill icon"></i>
						<span>System Health</span>
					</li>
					<li>
						<i className="ri-news-fill icon"></i>
						<span>Logs</span>
					</li>
					<li>
						<i className="ri-settings-2-line icon"></i>
						<span>Settings</span>
					</li>
				</ul>
			</div>
			<div className="bottom">
				<div onClick={() => handleMode("light")} className="colorOption"></div>
				<div onClick={() => handleMode("dark")} className="colorOption"></div>
			</div>
		</div>
	);
};

export default Sidebar;
