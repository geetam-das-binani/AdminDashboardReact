import "./sidebar.scss";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="top">
				<span className="logo">Admin</span>
			</div>
			<hr />
			<div className="center">
				<ul>
					<p className="title">MAIN</p>
					<li>
						<i className="ri-dashboard-fill icon"></i>
						<span>Dashboard</span>
					</li>
					<p className="title">LISTS</p>
					<li>
						<i className="ri-user-line icon"></i>
						<span>Users</span>
					</li>
					<li>
						<i className="ri-store-3-fill icon"></i>
						<span>Products</span>
					</li>
					<li>
						<i className="ri-store-3-line icon"></i>
						<span>Orders</span>
					</li>
					<li>
						<i className="ri-truck-fill icon"></i>
						<span>Delivery</span>
					</li>
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
					<p className="title">USER</p>
					<li>
						<i className="ri-profile-line icon"></i>
						<span>Profile</span>
					</li>
					<li>
						<i className="ri-logout-box-r-fill icon"></i>
						<span>Logout</span>
					</li>
				</ul>
			</div>
			<div className="bottom">
				<div className="colorOption"></div>
				<div className="colorOption"></div>
			</div>
		</div>
	);
};

export default Sidebar;
