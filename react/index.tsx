import * as React from "react";
import * as ReactDOM from "react-dom";

import { EventList } from "./components/EventList";
import { NextEvent } from "./components/NextEvent";

ReactDOM.render(
    <div>
        <EventList src="http://hacksu.cs.kent.edu/api/events"/>
    </div>,
    document.getElementById("events")
);

ReactDOM.render(
        <NextEvent src="http://hacksu.cs.kent.edu/api/events"/>,
    document.getElementById("nextup")
);