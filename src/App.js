import React from "react";
import "./styles.scss";
import reactDom from "react-dom";
import Pfp from "./components/Top";
import MidContent from "./components/MainContent";
import FooterIcons from "./components/Bottom";

export default function MainBody() {
	return (
		<div className="Main-Body-Box">
			<Pfp />
			<MidContent />
			<FooterIcons />
		</div>
	);
}
