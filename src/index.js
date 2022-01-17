import React from "react";
import "./dist/css/styles.css";
import reactDom from "react-dom";

function Greet() {
	return (
		<div>
			<h1 className="page-one">Hello world!</h1>
		</div>
	);
}

reactDom.render(<Greet />, document.getElementById("root"));
