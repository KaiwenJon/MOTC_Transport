import React from "react";
import ReactDOM from "react-dom";

import { HashRouter, Route, NavLink  ,withRouter} from "react-router-dom"
// import SpotApp from "./containers/SpotApp";
import Main from "./containers/Main";

ReactDOM.render(
    // <SpotApp className="scenic-spot__root" />,
    <Main />,
    document.getElementById("root")
);

