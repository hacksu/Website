/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var home_1 = __webpack_require__(3);
	ReactDOM.render(React.createElement(home_1.Home, null), document.getElementById("react"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var jumbotron_1 = __webpack_require__(4);
	var zebra_1 = __webpack_require__(5);
	var pic_info_1 = __webpack_require__(6);
	var Home = (function (_super) {
	    __extends(Home, _super);
	    function Home() {
	        _super.apply(this, arguments);
	    }
	    Home.prototype.render = function () {
	        console.log("made it");
	        return React.createElement("div", {id: "wrap"}, React.createElement(jumbotron_1.Jumbotron, null, React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-4"}, React.createElement("h1", {className: "title"}, " Learn "), React.createElement("h1", {className: "title"}, " Grow "), React.createElement("h1", {className: "title"}, " Create ")))), React.createElement(zebra_1.Zebra, null, React.createElement(pic_info_1.PicInfo, {id: "about-info", img: "/images/2.jpg"}, React.createElement("h2", null, " Who are we? "), React.createElement("p", {className: "lead"}, "Hacksu is a student organization at Kent" + ' ' + "State University focused on learning and" + ' ' + "utilizing contemporary web and mobile" + ' ' + "technologies. We are a very diverse" + ' ' + "community, spanning multiple majors from" + ' ' + "Fashion Design to Zoology and are open to" + ' ' + "students of any skill level. Everyone is" + ' ' + "welcome.")), React.createElement(pic_info_1.PicInfo, {img: "/images/1.jpg"}, React.createElement("h2", null, "What do we teach?"), React.createElement("p", {className: "lead"}, "We teach a wide variety of technologies, both" + ' ' + "front end and back end. These include things like jQuery" + ' ' + "Mobile, Python, Django, Node.js, Android, iOS, Heroku," + ' ' + "and much more. All of this is in hopes that you fall in" + ' ' + "love with one or many of these technologies and construct" + ' ' + "something cool.")), React.createElement(pic_info_1.PicInfo, {img: "/images/3.jpg"}, React.createElement("h2", null, " How do I get involved? "), React.createElement("p", {className: "lead"}, "We recommend coming to our weekly meetings," + ' ' + "held during the semester, on Tuesdays at" + ' ' + "the Honors College in Room 060 at 7:00pm." + ' ' + "You can also join our", React.createElement("a", {href: "http://www.facebook.com/groups/hacksu"}, "Facebook page"), "and follow us on", React.createElement("a", {href: "http://www.twitter.com/_hacksu"}, "Twitter"), "to see what we are up to!"), React.createElement("p", {className: "lead"}, "Sign up to our mailing list so we can keep" + ' ' + "you updated on our weekly meetings and other" + ' ' + "goings ons."), React.createElement("form", {className: "newsletter", action: "/api/mailinglist", method: "post"}, React.createElement("label", null, "Email: "), React.createElement("input", {type: "email", name: "email", id: "email", required: true}), React.createElement("input", {type: "submit", value: "Register"})))));
	    };
	    return Home;
	}(React.Component));
	exports.Home = Home;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Jumbotron = (function (_super) {
	    __extends(Jumbotron, _super);
	    function Jumbotron() {
	        _super.apply(this, arguments);
	    }
	    Jumbotron.prototype.render = function () {
	        var footer_items = React.Children.map(this.props.children, function (item) { return React.createElement("li", null, item); });
	        return React.createElement("div", {className: "jumbotron"}, React.createElement("div", {className: "container"}, this.props.children));
	    };
	    return Jumbotron;
	}(React.Component));
	exports.Jumbotron = Jumbotron;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Zebra = (function (_super) {
	    __extends(Zebra, _super);
	    function Zebra() {
	        _super.apply(this, arguments);
	    }
	    Zebra.prototype.render = function () {
	        var zebra_items = React.Children.map(this.props.children, function (item, i) {
	            if (typeof item !== "object") {
	                return item;
	            }
	            var element = React.cloneElement(item, { left: i % 2 == 0 });
	            if (i % 2 == 0) {
	                return React.createElement("div", {className: "container"}, element);
	            }
	            else {
	                return React.createElement("div", {className: "color-bg"}, React.createElement("div", {className: "container"}, element));
	            }
	        });
	        return React.createElement("div", {id: "wrap"}, zebra_items);
	    };
	    return Zebra;
	}(React.Component));
	exports.Zebra = Zebra;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var PicInfo = (function (_super) {
	    __extends(PicInfo, _super);
	    function PicInfo() {
	        _super.apply(this, arguments);
	    }
	    PicInfo.prototype.render = function () {
	        if (this.props.left) {
	            return React.createElement("div", {className: "row", id: this.props.id}, React.createElement("div", {className: "col-md-4"}, React.createElement("img", {className: "img-circle img-responsive img-info", src: this.props.img, alt: "Kent State"})), React.createElement("div", {className: "col-md-7 col-md-offset-1"}, this.props.children));
	        }
	        else {
	            return React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-7"}, this.props.children), React.createElement("div", {className: "col-md-4 col-md-offset-1"}, React.createElement("img", {className: "img-circle img-responsive img-info", src: this.props.img, alt: "Kent State"})));
	        }
	    };
	    return PicInfo;
	}(React.Component));
	exports.PicInfo = PicInfo;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map