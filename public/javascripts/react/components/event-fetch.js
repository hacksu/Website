"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var event_list_1 = require("./event-list");
var EventFetch = (function (_super) {
    __extends(EventFetch, _super);
    function EventFetch(props) {
        var _this = this;
        _super.call(this, props);
        this.request = $.get(props.src, function (data) {
            _this.setState({ events: data.events.map(function (event) {
                    event.date = new Date(event.date);
                    return event;
                }) });
        });
        this.state = { events: [] };
    }
    EventFetch.prototype.componentWillUnmount = function () {
        this.request.abort();
    };
    EventFetch.prototype.render = function () {
        return React.createElement(event_list_1.EventList, {events: this.state.events});
    };
    return EventFetch;
}(React.Component));
exports.EventFetch = EventFetch;
//# sourceMappingURL=event-fetch.js.map