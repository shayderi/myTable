import React from "react";
import ReactDOM from "react-dom";
import MyTable from "./Table/MyTable";

ReactDOM.render(
	<MyTable/>,
	document.getElementById("app")
);

module.hot.accept();