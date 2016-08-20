import * as React from "react";
import * as ReactDOM from "react-dom";

import { EventList } from "./components/EventList";
import {Accordian} from "./components/Accordian";
ReactDOM.render(
    <div>
        <Accordian/>
    </div>,
    document.getElementById("events")
);
console.log("Loaded");
