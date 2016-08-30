"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var NextEvent = (function (_super) {
    __extends(NextEvent, _super);
    function NextEvent(props) {
        var _this = this;
        _super.call(this, props);
        this.request = $.get(props.src, function (data) {
            console.log(data);
            for (var i = 0; i < data.events.length; ++i) {
                if (new Date(data.events[i].date) > new Date()) {
                    data.events[i].date = new Date(data.events[i].date);
                    _this.setState({ event: data.events[i] });
                    return;
                }
                ;
            }
        });
        this.state = { event: undefined };
    }
    NextEvent.prototype.componentWillUnmount = function () {
        this.request.abort();
    };
    NextEvent.prototype.render = function () {
        return React.createElement("a", {href: "/#events"}, 
            React.createElement("i", {className: "material-icons", style: { fontSize: "20px", display: "inline" }}, "date_range"), 
            React.createElement("span", {style: { display: "inline", verticalAlign: "top", paddingLeft: "0.5rem" }}, this.state.event ? this.state.event.title : ""));
    };
    return NextEvent;
}(React.Component));
exports.NextEvent = NextEvent;
//# sourceMappingURL=NextEvent.js.map