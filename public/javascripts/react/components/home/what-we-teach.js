"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var event_fetch_1 = require("../event-fetch");
var WhatWeTeach = (function (_super) {
    __extends(WhatWeTeach, _super);
    function WhatWeTeach() {
        _super.apply(this, arguments);
    }
    WhatWeTeach.prototype.render = function () {
        var content = React.createElement("div", null, 
            React.createElement("h2", null, " What do we teach? "), 
            React.createElement("p", {className: "lead"}, "We teach a wide variety of technologies, both" + ' ' + "front end and back end. These include things" + ' ' + "like jQuery Mobile, Python, Django, Node.js," + ' ' + "Android, iOS, Heroku, and much more. All of this" + ' ' + "is in hopes that you fall in love with one or" + ' ' + "many of these technologies and construct" + ' ' + "something cool."));
        if (this.props.left) {
            return React.createElement("div", {className: "row", id: this.props.id}, 
                React.createElement("div", {className: "col-md-4"}, 
                    React.createElement("img", {className: "img-circle img-responsive img-info", src: this.props.img, alt: "Kent State"})
                ), 
                React.createElement("div", {className: "col-md-7 col-md-offset-1"}, content), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-md-7 col-md-offset-5"}, 
                        React.createElement(event_fetch_1.EventFetch, {src: "/api/events"})
                    )
                ));
        }
        else {
            return React.createElement("div", {className: "row"}, 
                React.createElement("div", {className: "col-md-7"}, content), 
                React.createElement("div", {className: "col-md-4 col-md-offset-1"}, 
                    React.createElement("img", {className: "img-circle img-responsive img-info", src: this.props.img, alt: "Kent State"})
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-md-7"}, 
                        React.createElement(event_fetch_1.EventFetch, {src: "/api/events"})
                    )
                ));
        }
    };
    return WhatWeTeach;
}(React.Component));
exports.WhatWeTeach = WhatWeTeach;
//# sourceMappingURL=what-we-teach.js.map