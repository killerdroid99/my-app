import React from "react";
import "../styles.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import reactDom from "react-dom";

export default function FooterIcons() {
	return (
		<div className="fIcons">
			<LinkedInIcon
				className="footbtn"
				onClick={(event) =>
					(window.location.href = "https://www.linkedin.com/")
				}
			/>
			<GitHubIcon
				className="footbtn"
				onClick={(event) =>
					(window.location.href = "https://github.com/killerdroid99")
				}
			/>
			<FacebookIcon
				className="footbtn"
				onClick={(event) =>
					(window.location.href =
						"https://www.facebook.com/profile.php?id=100019262228106")
				}
			/>
		</div>
	);
}
