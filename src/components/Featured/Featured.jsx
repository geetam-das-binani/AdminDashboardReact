import {
	KeyboardArrowDown,
	KeyboardArrowUp,
	MoreVert,
} from "@mui/icons-material";
import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
	return (
		<div className="featured">
			<div className="top">
				<div className="title">Total Revenue</div>
				<MoreVert fontSize="small" />
			</div>
			<div className="bottom">
				<div className="featuredChart">
					<CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
				</div>
				<p className="title">Total sales made today</p>
				<p className="amount">$420</p>
				<p className="desc">
					Previous transactions Processing.Last payment may not be included
				</p>

				<div className="summary">
					<div className="item">
						<div className="itemTitle">Target</div>
						<div className="itemResult ">
							<KeyboardArrowDown fontSize="small" />
							<div className="resultAmount">$12.4k</div>
						</div>
					</div>
					<div className="item">
						<div className="itemTitle">Last week</div>
						<div className="itemResult positive ">
							<KeyboardArrowUp fontSize="small" />
							<div className="resultAmount">$12.4k</div>
						</div>
					</div>{" "}
					<div className="item">
						<div className="itemTitle">Month</div>
						<div className="itemResult ">
							<KeyboardArrowDown fontSize="small" />
							<div className="resultAmount">$12.4k</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
