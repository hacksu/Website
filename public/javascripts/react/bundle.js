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
	var layout_1 = __webpack_require__(7);
	ReactDOM.render(React.createElement(layout_1.Layout, null, React.createElement(home_1.Home, null)), document.getElementById("react"));


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
	var what_we_teach_1 = __webpack_require__(10);
	var Home = (function (_super) {
	    __extends(Home, _super);
	    function Home() {
	        _super.apply(this, arguments);
	    }
	    Home.prototype.render = function () {
	        console.log("made it");
	        return React.createElement("div", {id: "wrap"}, React.createElement(jumbotron_1.Jumbotron, null, React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-4"}, React.createElement("h1", {className: "title"}, " Learn "), React.createElement("h1", {className: "title"}, " Grow "), React.createElement("h1", {className: "title"}, " Create ")))), React.createElement(zebra_1.Zebra, null, React.createElement(pic_info_1.PicInfo, {id: "about-info", img: "/images/2.jpg"}, React.createElement("h2", null, " Who are we? "), React.createElement("p", {className: "lead"}, "Hacksu is a student organization at Kent" + ' ' + "State University focused on learning and" + ' ' + "utilizing contemporary web and mobile" + ' ' + "technologies. We are a very diverse" + ' ' + "community, spanning multiple majors from" + ' ' + "Fashion Design to Zoology and are open to" + ' ' + "students of any skill level. Everyone is" + ' ' + "welcome.")), React.createElement(what_we_teach_1.WhatWeTeach, {img: "/images/1.jpg"}), React.createElement(pic_info_1.PicInfo, {img: "/images/3.jpg"}, React.createElement("h2", null, " How do I get involved? "), React.createElement("p", {className: "lead"}, "We recommend coming to our weekly meetings," + ' ' + "held during the semester, on Tuesdays at" + ' ' + "the Honors College in Room 060 at 7:00pm." + ' ' + "You can also join our", React.createElement("a", {href: "http://www.facebook.com/groups/hacksu"}, "Facebook page"), "and follow us on", React.createElement("a", {href: "http://www.twitter.com/_hacksu"}, "Twitter"), "to see what we are up to!"), React.createElement("p", {className: "lead"}, "Sign up to our mailing list so we can keep" + ' ' + "you updated on our weekly meetings and other" + ' ' + "goings ons."), React.createElement("form", {className: "newsletter", action: "/api/mailinglist", method: "post"}, React.createElement("label", null, "Email: "), React.createElement("input", {type: "email", name: "email", id: "email", required: true}), React.createElement("input", {type: "submit", value: "Register"})))));
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
	var footer_1 = __webpack_require__(8);
	var navbar_1 = __webpack_require__(9);
	var Layout = (function (_super) {
	    __extends(Layout, _super);
	    function Layout() {
	        _super.apply(this, arguments);
	    }
	    Layout.prototype.render = function () {
	        return React.createElement("div", null, React.createElement(navbar_1.Navbar, null, React.createElement("div", {id: "nextup"}), React.createElement("a", {href: "https://khe.io"}, " Kent Hack Enough "), React.createElement("a", {href: "/contact"}, " Contact "), React.createElement("a", {className: "social-item", href: "https://www.facebook.com/groups/hacksu/"}, React.createElement("img", {src: "/images/facebook.png"})), React.createElement("a", {className: "social-item", href: "https://twitter.com/_hacksu"}, React.createElement("img", {src: "/images/twitter.png"})), React.createElement("a", {className: "social-item", href: "https://github.com/hacKSU"}, React.createElement("img", {src: "/images/github.png"}))), this.props.children, React.createElement(footer_1.Footer, null, React.createElement("a", {href: "/#about-info", onclick: "showAbout();return false;"}, "About"), React.createElement("a", {href: "https://khe.io"}, "Kent Hack Enough"), React.createElement("a", {href: "/contact"}, "Contact")));
	    };
	    return Layout;
	}(React.Component));
	exports.Layout = Layout;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Footer = (function (_super) {
	    __extends(Footer, _super);
	    function Footer() {
	        _super.apply(this, arguments);
	    }
	    Footer.prototype.render = function () {
	        var footer_items = React.Children.map(this.props.children, function (item) { return React.createElement("li", null, item); });
	        return React.createElement("div", {id: "footer"}, React.createElement("div", {className: "container"}, React.createElement("ul", {className: "list-inline sub-nav"}, footer_items), React.createElement("p", {className: "text-muted credit"}, "© 2016 HacKSU")));
	    };
	    return Footer;
	}(React.Component));
	exports.Footer = Footer;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Navbar = (function (_super) {
	    __extends(Navbar, _super);
	    function Navbar() {
	        _super.apply(this, arguments);
	    }
	    Navbar.prototype.render = function () {
	        var nav_items = React.Children.map(this.props.children, function (item) { return React.createElement("li", null, item); });
	        return React.createElement("div", {className: "navbar navbar-default"}, React.createElement("div", {className: "navbar-header"}, React.createElement("button", {className: "navbar-toggle", type: "button", "data-toggle": "collapse", "data-target": ".navbar-collapse"}, React.createElement("span", {className: "icon-bar"}), React.createElement("span", {className: "icon-bar"}), React.createElement("span", {className: "icon-bar"})), React.createElement("a", {className: "navbar-brand", href: "/"}, React.createElement("img", {src: "/images/hacksu.png"}))), React.createElement("div", {className: "collapse navbar-collapse"}, React.createElement("ul", {className: "nav navbar-nav"}, nav_items)));
	    };
	    return Navbar;
	}(React.Component));
	exports.Navbar = Navbar;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var EventList_1 = __webpack_require__(11);
	var WhatWeTeach = (function (_super) {
	    __extends(WhatWeTeach, _super);
	    function WhatWeTeach() {
	        _super.apply(this, arguments);
	    }
	    WhatWeTeach.prototype.render = function () {
	        var content = React.createElement("div", null, React.createElement("h2", null, " What do we teach? "), React.createElement("p", {className: "lead"}, "We teach a wide variety of technologies, both" + ' ' + "front end and back end. These include things" + ' ' + "like jQuery Mobile, Python, Django, Node.js," + ' ' + "Android, iOS, Heroku, and much more. All of this" + ' ' + "is in hopes that you fall in love with one or" + ' ' + "many of these technologies and construct" + ' ' + "something cool."));
	        if (this.props.left) {
	            return React.createElement("div", {className: "row", id: this.props.id}, React.createElement("div", {className: "col-md-4"}, React.createElement("img", {className: "img-circle img-responsive img-info", src: this.props.img, alt: "Kent State"})), React.createElement("div", {className: "col-md-7 col-md-offset-1"}, content), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-7 col-md-offset-5"}, React.createElement(EventList_1.EventList, {src: "/api/events"}))));
	        }
	        else {
	            return React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-7"}, content), React.createElement("div", {className: "col-md-4 col-md-offset-1"}, React.createElement("img", {className: "img-circle img-responsive img-info", src: this.props.img, alt: "Kent State"})), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-7"}, React.createElement(EventList_1.EventList, {src: "/api/events"}))));
	        }
	    };
	    return WhatWeTeach;
	}(React.Component));
	exports.WhatWeTeach = WhatWeTeach;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Event_1 = __webpack_require__(12);
	var Accordian_1 = __webpack_require__(15);
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
	            .slice(0, 4)
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var AccordianItem_1 = __webpack_require__(13);
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var AccordianContent_1 = __webpack_require__(14);
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
/* 14 */
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
/* 15 */
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