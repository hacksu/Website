"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var accordian_content_1 = require("./accordian-content");
var AccordianItem = (function (_super) {
    __extends(AccordianItem, _super);
    function AccordianItem(props) {
        _super.call(this, props);
        this.state = {};
    }
    AccordianItem.prototype.render = function () {
        var _this = this;
        return React.createElement("div", null, 
            React.createElement("div", {className: "header", onClick: function () { return _this.props.onToggled(_this); }}, this.props.title), 
            React.createElement(accordian_content_1.AccordianContent, {expanded: this.props.expanded}, this.props.children));
    };
    return AccordianItem;
}(React.Component));
exports.AccordianItem = AccordianItem;
//# sourceMappingURL=accordian-item.js.map