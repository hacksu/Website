"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var EventList_1 = require("./components/EventList");
ReactDOM.render(React.createElement("div", null, 
    React.createElement(EventList_1.EventList, {src: "http://localhost:3000/api/events"})
), document.getElementById("events"));
ReactDOM.render(React.createElement("a", {href: "/#events"}, 
    React.createElement("i", {className: "material-icons", style: { fontSize: "20px" }}, "date_range"), 
    React.createElement("span", {style: { float: "right" }}, "Welcome Back ")), document.getElementById("nextup"));
//# sourceMappingURL=index.js.map