"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var AccordianItem_1 = require("./AccordianItem");
var Event = (function (_super) {
    __extends(Event, _super);
    function Event(props) {
        _super.call(this, props);
        this.state = { expanded: false };
    }
    Object.defineProperty(Event.prototype, "messageHtml", {
        get: function () {
            return { __html: this.props.content };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "formatedDate", {
        get: function () {
            var months = ["January", "February ", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
            return months[this.props.date.getMonth()] + " " + this.props.date.getDate();
        },
        enumerable: true,
        configurable: true
    });
    Event.prototype.render = function () {
        var title = React.createElement("div", null, 
            React.createElement("span", null, 
                this.props.title, 
                " "), 
            React.createElement("i", {className: "material-icons", style: { color: "rgba(0, 0, 0, 0.7)", fontSize: "20px", float: "right" }}, "date_range"), 
            React.createElement("span", {style: { float: "right" }}, this.formatedDate));
        return React.createElement(AccordianItem_1.AccordianItem, {title: title, expanded: this.props.expanded, onToggled: this.props.onToggled}, 
            React.createElement("span", {dangerouslySetInnerHTML: this.messageHtml})
        );
    };
    return Event;
}(React.Component));
exports.Event = Event;
//# sourceMappingURL=Event.js.map