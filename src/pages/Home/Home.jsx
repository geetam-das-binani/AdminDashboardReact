import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./home.scss";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";
import Widget from "../../components/Widget/Widget";

const Home = () => {
	return (
		<React.Fragment>
			<div className="home">
				<Sidebar />

				<div className="homeContainer">
					<Navbar />
					<div className="widgets">
						<Widget type="user" />
						<Widget type="order" />
						<Widget type="earning" />
						<Widget type="balance" />
					</div>
				</div>
			</div>
			<Outlet />
		</React.Fragment>
	);
};

export default Home;
