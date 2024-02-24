import { DriveFolderUpload } from "@mui/icons-material";
import "./new.scss";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../Context/Context";

const New = ({ inputs, title }) => {
	const { alluserRows, allproductRows, addNewProduct, addNewUser } =
		useStateContext();
	const [file, setFile] = useState("");
	const [userDetails, setUserDetails] = useState({});
	const [prodDetails, setProdDetails] = useState({});
	const navigate = useNavigate();

	const handleFile = (e) => {
		const fileReader = new FileReader();

		fileReader.onload = () => {
			setFile(fileReader.result);
		};
		fileReader.readAsDataURL(e.target.files[0]);
	};

	const handleAddNewUserOrProduct = (e) => {
		e.preventDefault();
		if (title === "Add New User") {
			const allDetailsOfUser = {
				...userDetails,
				img: file
					? file
					: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
				status: "active",

				id: alluserRows.length + 1,
			};
			addNewUser(allDetailsOfUser);
			navigate("/users");
		} else {
			const allDetailsOfProduct = {
				...prodDetails,
				image: file
					? file
					: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
				id: allproductRows.length + 1,
			};

			addNewProduct(allDetailsOfProduct);
			navigate("/products");
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (title === "Add New User") {
			setUserDetails({
				...userDetails,
				[name]: value,
			});
		} else {
			setProdDetails({
				...prodDetails,
				[name]: value,
			});
		}
	};

	return (
		<>
			<div className="newTop">
				<h1>{title}</h1>
			</div>
			<div className="newBottom">
				<div className="left">
					<img
						src={
							file
								? file
								: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
						}
					/>
				</div>
				<div className="right">
					<form onSubmit={handleAddNewUserOrProduct}>
						<div className="formInput">
							<label htmlFor="file">
								Image
								<DriveFolderUpload className="icon" />
							</label>
							<input
								onChange={handleFile}
								accept="image/*"
								type="file"
								hidden
								id="file"
							/>
						</div>
						{inputs.map((input) => (
							<div key={input.id} className="formInput">
								<label>{input.label}</label>
								<input
									onChange={handleChange}
									name={input.name}
									type={input.type}
									placeholder={input.placeholder}
									required
								/>
							</div>
						))}

						<button type="submit">Send</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default New;
