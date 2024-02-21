import { useParams } from "react-router-dom";
import "./single.scss";
import React from "react";
import Chart from "../../components/Chart/Chart";
import List from "../List/List";
const Single = () => {
	const { userId } = useParams();
	return (
		<React.Fragment>
			<div className="singleTop">
				<div className="left">
					<div className="editButton">Edit</div>
					<h1 className="title">Information</h1>
					<div className="item">
						<img
							src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
							alt="userimage"
							className="itemImg"
						/>
						<div className="details">
							<h1 className="itemTitle">Jane Doe</h1>
							<div className="detailItem">
								<div className="itemKey">Email:</div>
								<div className="itemValue">janedoe@gmail.com</div>
							</div>
							<div className="detailItem">
								<div className="itemKey">Phone:</div>
								<div className="itemValue">+1 2313 64 89</div>
							</div>
							<div className="detailItem">
								<div className="itemKey">Address:</div>
								<div className="itemValue">
									Elton St. 234 Garden Yd. NewYork
								</div>
							</div>
							<div className="detailItem">
								<div className="itemKey">Country:</div>
								<div className="itemValue">USA</div>
							</div>
						</div>
					</div>
				</div>

				<div className="right">
					<Chart title={"User Spending (Last 6 months)"} aspect={3 / 1} />
				</div>
			</div>
			<div className="bottom">
				<h1 className="title">Last Transactions</h1>
				<List />
			</div>
		</React.Fragment>
	);
};

export default Single;
