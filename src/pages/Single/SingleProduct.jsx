import { useParams } from "react-router-dom";
import "./single.scss";
import React, { useEffect, useState } from "react";
import Chart from "../../components/Chart/Chart";
import List from "../List/List";
import { productRows } from "../../dataSource";
const SingleProduct = () => {
	const { productId } = useParams();
	const [prodDetails, setProdDetails] = useState({});

	const handleSingleProduct = () => {
		const prodData = productRows.filter(
			(prod) => prod.id === parseInt(productId)
		);

		setProdDetails(prodData[0]);
	};

	useEffect(() => {
		handleSingleProduct();
	}, [productId]);
	return (
		<React.Fragment>
			<div className="singleTop">
				<div className="left">
					<h1 className="title">Information</h1>
					<div className="item">
						<img
							src={prodDetails?.image || ""}
							alt="userimage"
							className="itemImg"
						/>
						<div className="details">
							<h1 className="itemTitle">{prodDetails?.title || ""}</h1>
							<div className="detailItem">
								<div className="itemKey">Description:</div>
								<div className="itemValue">
									{prodDetails?.description || ""}
								</div>
							</div>
							<div className="detailItem">
								<div className="itemKey">Category:</div>
								<div className="itemValue">{prodDetails?.category || ""}</div>
							</div>
							<div className="detailItem">
								<div className="itemKey">Price:</div>
								<div className="itemValue">{prodDetails?.price || ""}</div>
							</div>
							<div className="detailItem">
								<div className="itemKey">Stock:</div>
								<div className="itemValue">{prodDetails?.stock || ""}</div>
							</div>
						</div>
					</div>
				</div>

				<div className="right">
					<Chart title={"Product Usage (Last 5 months)"} aspect={3 / 1} />
				</div>
			</div>
		</React.Fragment>
	);
};

export default SingleProduct;
