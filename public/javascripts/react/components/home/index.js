"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var jumbotron_1 = require("./jumbotron");
var zebra_1 = require("../layout/zebra");
var pic_info_1 = require("./pic-info");
var what_we_teach_1 = require("./what-we-teach");
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        _super.apply(this, arguments);
    }
    Home.prototype.render = function () {
        console.log("made it");
        return React.createElement("div", {id: "wrap"}, 
            React.createElement(jumbotron_1.Jumbotron, null, 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-xs-4"}, 
                        React.createElement("h1", {className: "title"}, " Learn "), 
                        React.createElement("h1", {className: "title"}, " Grow "), 
                        React.createElement("h1", {className: "title"}, " Create "))
                )
            ), 
            React.createElement(zebra_1.Zebra, null, 
                React.createElement(pic_info_1.PicInfo, {id: "about-info", img: "/images/2.jpg"}, 
                    React.createElement("h2", null, " Who are we? "), 
                    React.createElement("p", {className: "lead"}, "Hacksu is a student organization at Kent" + ' ' + "State University focused on learning and" + ' ' + "utilizing contemporary web and mobile" + ' ' + "technologies. We are a very diverse" + ' ' + "community, spanning multiple majors from" + ' ' + "Fashion Design to Zoology and are open to" + ' ' + "students of any skill level. Everyone is" + ' ' + "welcome.")), 
                React.createElement(what_we_teach_1.WhatWeTeach, {img: "/images/1.jpg"}), 
                React.createElement(pic_info_1.PicInfo, {img: "/images/3.jpg"}, 
                    React.createElement("h2", null, " How do I get involved? "), 
                    React.createElement("p", {className: "lead"}, 
                        "We recommend coming to our weekly meetings," + ' ' + "held during the semester, on Tuesdays at" + ' ' + "the Honors College in Room 060 at 7:00pm." + ' ' + "You can also join our", 
                        React.createElement("a", {href: "http://www.facebook.com/groups/hacksu"}, "Facebook page"), 
                        "and follow us on", 
                        React.createElement("a", {href: "http://www.twitter.com/_hacksu"}, "Twitter"), 
                        "to see what we are up to!"), 
                    React.createElement("p", {className: "lead"}, "Sign up to our mailing list so we can keep" + ' ' + "you updated on our weekly meetings and other" + ' ' + "goings ons."), 
                    React.createElement("form", {className: "newsletter", action: "/api/mailinglist", method: "post"}, 
                        React.createElement("label", null, "Email: "), 
                        React.createElement("input", {type: "email", name: "email", id: "email", required: true}), 
                        React.createElement("input", {type: "submit", value: "Register"})))));
    };
    return Home;
}(React.Component));
exports.Home = Home;
//# sourceMappingURL=index.js.map