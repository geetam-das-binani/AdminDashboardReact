import { DriveFolderUpload } from "@mui/icons-material";
import "./new.scss";

const New = () => {
	return (
		<>
			<div className="newTop">
				<h1>Add New User</h1>
			</div>
			<div className="newBottom">
				<div className="left">
					<img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" />
				</div>
				<div className="right">
					<form>
						<div className="formInput">
							<label htmlFor="file">
								Image
								<DriveFolderUpload className="icon" />
							</label>
							<input hidden id="file" type="file" />
						</div>
						<div className="formInput">
							<label>Username</label>
							<input type="text" placeholder="john" />
						</div>
						<div className="formInput">
							<label>Name and Surname</label>
							<input type="text" placeholder="John Doe" />
						</div>
						<div className="formInput">
							<label>Email</label>
							<input type="email" placeholder="johndoe@gmail.com" />
						</div>
						<div className="formInput">
							<label>Phone</label>
							<input type="text" placeholder="+1 234 567 89" />
						</div>
						<div className="formInput">
							<label>Password</label>
							<input type="password" />
						</div>
						<div className="formInput">
							<label>Address</label>
							<input type="text" placeholder="Elton St. 216 NewYork" />
						</div>{" "}
						<div className="formInput">
							<label>Country</label>
							<input type="text" placeholder="USA" />
						</div>
						<button type="submit">Send</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default New;
