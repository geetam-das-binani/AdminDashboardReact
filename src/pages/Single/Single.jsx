import { useParams } from "react-router-dom";
import "./single.scss";

const Single = () => {
	const { userId } = useParams();
	return <div>{userId}</div>;
};

export default Single;
