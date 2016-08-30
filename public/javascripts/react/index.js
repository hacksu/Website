"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var EventList_1 = require("./components/EventList");
var NextEvent_1 = require("./components/NextEvent");
ReactDOM.render(React.createElement("div", null, 
    React.createElement(EventList_1.EventList, {src: "http://hacksu.cs.kent.edu/api/events"})
), document.getElementById("events"));
ReactDOM.render(React.createElement(NextEvent_1.NextEvent, {src: "http://hacksu.cs.kent.edu/api/events"}), document.getElementById("nextup"));
//# sourceMappingURL=index.js.map