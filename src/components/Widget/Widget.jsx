import "./widgets.scss";

const Widget = () => {
	return (
		<div className="widget">
			<div className="left">
				<span className="title">USERS</span>
				<span className="counter">21312</span>
				<span className="link">See all users</span>
			</div>
			<div className="right">
				<div className="percentage positive">
					<i className="ri-arrow-up-line"></i>
					20%
				</div>
				<i className="ri-user-line icon"></i>
			</div>
		</div>
	);
};

export default Widget;
