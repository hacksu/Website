import * as React from "react";
import * as ReactDOM from "react-dom";

import { EventList } from "./components/EventList";
ReactDOM.render(
    <div>
        <EventList src="http://localhost:3000/api/events"/>
    </div>,
    document.getElementById("events")
);

ReactDOM.render(
    <a href="/#events">
        <i className="material-icons" style={{fontSize: "20px", display: "inline"}}>date_range</i>
        <span style={{display: "inline", verticalAlign: "top", paddingLeft: "0.5rem"}}>Welcome Back </span>
    </a>,
    document.getElementById("nextup")
);