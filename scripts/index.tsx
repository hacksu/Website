import * as React from "react";
import * as ReactDOM from "react-dom";

import { EventList } from "./components/EventList";

ReactDOM.render(
    <div>
        <EventList src="http://localhost:3000/events"/>
    </div>,
    document.getElementById("events")
);
console.log("Loaded");
