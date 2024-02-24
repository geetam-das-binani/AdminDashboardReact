import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ListIcon from "@mui/icons-material/List";
import { useStateContext } from "../../Context/Context";
const Navbar = () => {
	const { toggleMode } = useStateContext();
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="search">
					<input type="text" placeholder="Search..." />
					<SearchIcon className="icon" />
				</div>
				<div className="items">
					<div className="item">
						<LanguageIcon className="icon" />
					</div>
					<div className="item">
						<DarkModeIcon onClick={toggleMode} className="icon" />
					</div>{" "}
					<div className="item">
						<FullscreenExitIcon className="icon" />
					</div>{" "}
					<div className="item">
						<NotificationsNoneIcon className="icon" />
						<div className="counter">1</div>
					</div>{" "}
					<div className="item">
						<ChatBubbleOutlineIcon className="icon" />
						<div className="counter">1</div>
					</div>{" "}
					<div className="item">
						<ListIcon className="icon" />
					</div>
					<div className="item">
						<img
							src="https://images.pexels.com/photos/6898858/pexels-photo-6898858.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt="avatar"
							className="avatar"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
