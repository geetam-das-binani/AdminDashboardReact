import { useParams } from "react-router-dom";
import "./single.scss";
import React, { useEffect, useState } from "react";
import Chart from "../../components/Chart/Chart";
import List from "../List/List";

import { useStateContext } from "../../Context/Context";

const Single = () => {
	const { userId } = useParams();
	const { alluserRows } = useStateContext();
	const [userDetails, setUserDetails] = useState({});

	const handleSingleUser = () => {
		const userData = alluserRows.filter((user) => user.id === parseInt(userId));

		setUserDetails(userData[0]);
	};

	useEffect(() => {
		handleSingleUser();
	}, [userId]);
	return (
		<React.Fragment>
			<div className="singleTop">
				<div className="left">
					<div className="editButton">Edit</div>
					<h1 className="title">Information</h1>
					<div className="item">
						<img
							src={userDetails?.img || ""}
							alt="userimage"
							className="itemImg"
						/>
						<div className="details">
							<h1 className="itemTitle">{userDetails?.username || ""}</h1>
							<div className="detailItem">
								<div className="itemKey">Email:</div>
								<div className="itemValue">{userDetails?.email || ""}</div>
							</div>
							<div className="detailItem">
								<div className="itemKey">Phone:</div>
								<div className="itemValue">{userDetails?.phone || ""}</div>
							</div>
							<div className="detailItem">
								<div className="itemKey">Address:</div>
								<div className="itemValue">{userDetails?.address || ""}</div>
							</div>
							<div className="detailItem">
								<div className="itemKey">Country:</div>
								<div className="itemValue">{userDetails?.country || ""}</div>
							</div>
						</div>
					</div>
				</div>

				<div className="right">
					<Chart title={"User Spending (Last 5 months)"} aspect={3 / 1} />
				</div>
			</div>
			<div className="bottom">
				<List title={"Add New User"} path={"users"} />
			</div>
		</React.Fragment>
	);
};

export default Single;
