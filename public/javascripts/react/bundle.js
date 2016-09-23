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
	        return React.createElement("div", null, React.createElement(jumbotron_1.Jumbotron, null, React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-4"}, React.createElement("h1", {className: "title"}, " Learn "), React.createElement("h1", {className: "title"}, " Grow "), React.createElement("h1", {className: "title"}, " Create ")))), React.createElement(zebra_1.Zebra, null, React.createElement(pic_info_1.PicInfo, {id: "about-info", img: "/images/2.jpg", title: "Who are we?", content: "Hacksu is a student organization at Kent\n                        State University focused on learning and\n                        utilizing contemporary web and mobile\n                        technologies. We are a very diverse\n                        community, spanning multiple majors from\n                        Fashion Design to Zoology and are open to\n                        students of any skill level. Everyone is\n                        welcome."}), React.createElement(pic_info_1.PicInfo, {img: "/images/2.jpg", title: "Who are we?", content: "Hacksu is a student organization at Kent\n                        State University focused on learning and\n                        utilizing contemporary web and mobile\n                        technologies. We are a very diverse\n                        community, spanning multiple majors from\n                        Fashion Design to Zoology and are open to\n                        students of any skill level. Everyone is\n                        welcome."})));
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
	            var element = React.cloneElement(item, { left: i % 2 == 0 });
	            if (i % 2 == 0) {
	                return React.createElement("div", {className: "container"}, element);
	            }
	            else {
	                return React.createElement("div", {className: "color-bg"}, React.createElement("div", {className: "container"}, element));
	            }
	        });
	        return React.createElement("div", null, zebra_items);
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
	            return React.createElement("div", {className: "row", id: this.props.id}, React.createElement("div", {className: "col-md-4"}, React.createElement("img", {className: "img-circle img-responsive img-info", src: this.props.img, alt: "Kent State"})), React.createElement("div", {className: "col-md-7 col-md-offset-1"}, React.createElement("h2", null, " ", this.props.title, " "), React.createElement("p", {className: "lead"}, this.props.content)));
	        }
	        else {
	            return React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-7"}, React.createElement("h2", null, " ", this.props.title, " "), React.createElement("p", {className: "lead"}, this.props.content)), React.createElement("div", {className: "col-md-4 col-md-offset-1"}, React.createElement("img", {className: "img-circle img-responsive img-info", src: this.props.img, alt: "Kent State"})));
	        }
	    };
	    return PicInfo;
	}(React.Component));
	exports.PicInfo = PicInfo;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map