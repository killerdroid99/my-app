import React from "react";
import "../styles.scss";
import image from "../images/profile.jpg";
import reactDom from "react-dom";

export default function Pfp() {
	return <img src={image} alt="Profile-Image" className="pfp" />;
}
