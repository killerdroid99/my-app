import React from "react";
import "./styles.scss";
import reactDom from "react-dom";
import MainBody from "./App";

// function Greet() {
// 	return (
// 		<div>
// 			<h1 className="page-one">Hello world!</h1>
// 		</div>
// 	);
// }

reactDom.render(<MainBody />, document.getElementById("root"));
