import { DriveFolderUpload } from "@mui/icons-material";
import "./new.scss";
import { useState } from "react";

const New = ({ inputs, title }) => {
	const [file, setFile] = useState("");

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
								? URL.createObjectURL(file)
								: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
						}
					/>
				</div>
				<div className="right">
					<form>
						<div className="formInput">
							<label htmlFor="file">
								Image
								<DriveFolderUpload className="icon" />
							</label>
							<input
								onChange={(e) => setFile(e.target.files[0])}
								accept="image/*"
								type="file"
								hidden
								id="file"
							/>
						</div>
						{inputs.map((input) => (
							<div key={input.id} className="formInput">
								<label>{input.label}</label>
								<input type={input.type} placeholder={input.placeholder} />
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
