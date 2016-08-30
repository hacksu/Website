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
	var EventList_1 = __webpack_require__(3);
	ReactDOM.render(React.createElement("div", null, React.createElement(EventList_1.EventList, {src: "http://localhost:3000/api/events"})), document.getElementById("events"));
	ReactDOM.render(React.createElement("a", {href: "/#events"}, React.createElement("i", {className: "material-icons", style: { fontSize: "20px", display: "inline" }}, "date_range"), React.createElement("span", {style: { display: "inline", verticalAlign: "top", paddingLeft: "0.5rem" }}, "Welcome Back ")), document.getElementById("nextup"));


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
	var Event_1 = __webpack_require__(4);
	var Accordian_1 = __webpack_require__(7);
	var EventList = (function (_super) {
	    __extends(EventList, _super);
	    function EventList(props) {
	        var _this = this;
	        _super.call(this, props);
	        this.request = $.get(props.src, function (data) {
	            console.log(data);
	            _this.setState({ events: data.events.map(function (event) {
	                    event.date = new Date(event.date);
	                    return event;
	                }) });
	        });
	        this.state = { events: [] };
	    }
	    EventList.prototype.componentWillUnmount = function () {
	        this.request.abort();
	    };
	    EventList.prototype.collapseAll = function () {
	        this.state.events.forEach(function (event) { event.expanded = false; });
	    };
	    EventList.prototype.render = function () {
	        var _this = this;
	        var events = this.state.events
	            .filter(function (event) { return (event.date > new Date); })
	            .map(function (event) { return React.createElement(Event_1.Event, {key: event.title + event.date, title: event.title, content: event.content, date: event.date, expanded: event.expanded, onToggled: function (e) {
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
	var AccordianItem_1 = __webpack_require__(5);
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
	        var title = React.createElement("div", null, React.createElement("span", null, this.props.title, " "), React.createElement("i", {className: "material-icons", style: { color: "rgba(0, 0, 0, 0.7)", fontSize: "20px", float: "right", marginLeft: "1rem" }}, "date_range"), React.createElement("span", {style: { float: "right" }}, this.formatedDate));
	        return React.createElement(AccordianItem_1.AccordianItem, {title: title, expanded: this.props.expanded, onToggled: this.props.onToggled}, React.createElement("span", {dangerouslySetInnerHTML: this.messageHtml}));
	    };
	    return Event;
	}(React.Component));
	exports.Event = Event;


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
	var AccordianContent_1 = __webpack_require__(6);
	var AccordianItem = (function (_super) {
	    __extends(AccordianItem, _super);
	    function AccordianItem(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    AccordianItem.prototype.render = function () {
	        return React.createElement("div", null, React.createElement("div", {className: "header", onClick: this.props.onToggled}, this.props.title), React.createElement(AccordianContent_1.AccordianContent, {expanded: this.props.expanded}, this.props.children));
	    };
	    return AccordianItem;
	}(React.Component));
	exports.AccordianItem = AccordianItem;


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
	var AccordianContent = (function (_super) {
	    __extends(AccordianContent, _super);
	    function AccordianContent(props) {
	        _super.call(this, props);
	        this.state = { expanded: false, inTransition: false, height: 0 };
	        this.state.expanded = props.expanded;
	    }
	    AccordianContent.prototype.render = function () {
	        var _this = this;
	        if (this.state.expanded != this.props.expanded) {
	            this.state.inTransition = true;
	            this.state.expanded = this.props.expanded;
	        }
	        var style = {
	            "overflow": "hidden",
	            "transition": "height 500ms",
	            "background": "white",
	            "borderBottom": ((this.state.expanded || this.state.inTransition) ? "1px solid  #ddd" : "none")
	        };
	        return React.createElement("div", {style: style, ref: function (content) {
	            if (!content) {
	                return;
	            }
	            var setSize = function () {
	                if (_this.state.inTransition) {
	                    content.style.height = _this.state.expanded ? "0" : _this.state.height + "px";
	                    setTimeout(setSize, 1);
	                    _this.state.inTransition = false;
	                    setTimeout(function () { return _this.setState({ "inTransition": false }); }, 1 + 500);
	                }
	                else {
	                    content.style.height = !_this.state.expanded ? "0" : _this.state.height + "px";
	                }
	            };
	            setTimeout(setSize, 1);
	        }}, (function () {
	            if (_this.state.expanded || _this.state.inTransition) {
	                return React.createElement("div", {className: "content", ref: function (element) { if (element)
	                    _this.state.height = element.clientHeight; }}, _this.props.children);
	            }
	        })());
	    };
	    return AccordianContent;
	}(React.Component));
	exports.AccordianContent = AccordianContent;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Accordian = (function (_super) {
	    __extends(Accordian, _super);
	    function Accordian(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    Accordian.prototype.render = function () {
	        return React.createElement("div", {className: "accordian"}, this.props.children);
	    };
	    return Accordian;
	}(React.Component));
	exports.Accordian = Accordian;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map