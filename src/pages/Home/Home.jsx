import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./home.scss";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";
import Widget from "../../components/Widget/Widget";
import Featured from "../../components/Featured/Featured";
import Chart from "../../components/Chart/Chart";
import List from "../../components/Table/List";

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
					<div className="charts">
						<Featured />
						<Chart />
					</div>

					<div className="listContainer">
						<div className="listTitle">Latest Transactions</div>
						<List />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Home;
