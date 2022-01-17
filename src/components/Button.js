import React from "react";
import "../styles.scss";
import reactDom from "react-dom";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function ButtonArray() {
	return (
		<div className="btn-container">
			<button className="btn email">
				<EmailIcon />
				<a href="mailto:wiiwii2114@gmail.com">Email</a>
			</button>
			<button className="btn linkedin">
				<LinkedInIcon />
				<a href="https://www.linkedin.com" target="_blank">
					LinkedIn
				</a>
			</button>
		</div>
	);
}
