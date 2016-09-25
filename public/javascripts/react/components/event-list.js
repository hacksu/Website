"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var event_view_1 = require("./event-view");
var Accordian_1 = require("./Accordian");
var EventList = (function (_super) {
    __extends(EventList, _super);
    function EventList(props) {
        _super.call(this, props);
        this.state = { events: this.props.events.map(function (event) { return event; }) };
    }
    EventList.prototype.collapseAll = function () {
        this.state.events.forEach(function (event) { event.expanded = false; });
    };
    EventList.prototype.render = function () {
        var _this = this;
        var events = this.state.events
            .filter(function (event) { return (event.date > new Date); })
            .slice(0, 4)
            .map(function (event) { return React.createElement(event_view_1.EventView, {key: event.title + event.date, title: event.title, content: event.content, date: event.date, expanded: event.expanded, onToggled: function (e) {
            var current_state = event.expanded;
            _this.collapseAll();
            event.expanded = !current_state;
            _this.setState({ events: _this.state.events });
        }}); });
        return React.createElement(Accordian_1.Accordian, null, events);
    };
    return EventList;
}(React.Component));
exports.EventList = EventList;
//# sourceMappingURL=event-list.js.map