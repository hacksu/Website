"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var event_list_1 = require("../event-list");
var events_editor_1 = require("./events-editor");
var EventsEditorProps = (function (_super) {
    __extends(EventsEditorProps, _super);
    function EventsEditorProps(props) {
        _super.call(this, props);
        this.addEvent = this.addEvent.bind(this);
        this.removeEvent = this.removeEvent.bind(this);
        this.editEvent = this.editEvent.bind(this);
    }
    EventsEditorProps.prototype.addEvent = function (event) {
    };
    EventsEditorProps.prototype.removeEvent = function (event) {
    };
    EventsEditorProps.prototype.editEvent = function (event) {
    };
    EventsEditorProps.prototype.render = function () {
        return React.createElement("div", null, 
            React.createElement(events_editor_1.EventsEditor, {events: this.state.events, onChange: this.addEvent, onRemove: this.removeEvent, onAdd: this.editEvent}), 
            React.createElement(event_list_1.EventList, {events: this.state.events}));
    };
    return EventsEditorProps;
}(React.Component));
exports.EventsEditorProps = EventsEditorProps;
//# sourceMappingURL=index.js.map