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
	var layout_1 = __webpack_require__(14);
	ReactDOM.render(React.createElement(layout_1.Layout, null, 
	    React.createElement(home_1.Home, null)
	), document.getElementById("react"));


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
	var event_management_1 = __webpack_require__(4);
	var Home = (function (_super) {
	    __extends(Home, _super);
	    function Home() {
	        _super.apply(this, arguments);
	    }
	    Home.prototype.render = function () {
	        console.log("made it");
	        return React.createElement(event_management_1.EventManagement, {api: "adsfads"});
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
	var event_list_1 = __webpack_require__(5);
	var events_editor_1 = __webpack_require__(10);
	var EventManagement = (function (_super) {
	    __extends(EventManagement, _super);
	    function EventManagement(props) {
	        _super.call(this, props);
	        this.addEvent;
	        this.removeEvent;
	        this.editEvent;
	        this.state = { events: [{ title: "test", date: new Date(), content: "<p>test</p>", id: 1 },
	                { title: "test", date: new Date(), content: "<p>test</p>", id: 2 }] };
	    }
	    EventManagement.prototype.addEvent = function (event) {
	        this.setState({ events: this.state.events.concat(event) });
	    };
	    EventManagement.prototype.removeEvent = function (event) {
	        this.setState({ events: this.state.events.filter(function (e) { return e.id != event.id; }) });
	    };
	    EventManagement.prototype.editEvent = function (event) {
	        this.setState({ events: this.state.events.map(function (e) { return (e.id == event.id) ? event : e; }) });
	    };
	    EventManagement.prototype.render = function () {
	        var _this = this;
	        return React.createElement("div", {id: "wrap"}, 
	            React.createElement(events_editor_1.EventsEditor, {events: this.state.events, onChange: function (event) { return _this.editEvent(event); }, onRemove: function (event) { return _this.removeEvent(event); }, onAdd: function (event) { return _this.addEvent(event); }}), 
	            React.createElement(event_list_1.EventList, {events: this.state.events}));
	    };
	    return EventManagement;
	}(React.Component));
	exports.EventManagement = EventManagement;


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
	var event_view_1 = __webpack_require__(6);
	var accordian_1 = __webpack_require__(9);
	var EventList = (function (_super) {
	    __extends(EventList, _super);
	    function EventList(props) {
	        _super.call(this, props);
	        this.state = { expanded: undefined };
	    }
	    EventList.prototype.render = function () {
	        var _this = this;
	        var content = this.props.events
	            .filter(function (event) { return (event.date > new Date); })
	            .slice(0, 4)
	            .map(function (event, i) { return React.createElement(event_view_1.EventView, {key: event.id, id: event.id, title: event.title, content: event.content, date: event.date, expanded: _this.state.expanded == i, onToggled: function (e) {
	            if (_this.state.expanded === i) {
	                _this.setState({ expanded: undefined });
	            }
	            else {
	                _this.setState({ expanded: i });
	            }
	        }}); });
	        return React.createElement(accordian_1.Accordian, null, content);
	    };
	    return EventList;
	}(React.Component));
	exports.EventList = EventList;


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
	var accordian_item_1 = __webpack_require__(7);
	var EventView = (function (_super) {
	    __extends(EventView, _super);
	    function EventView(props) {
	        _super.call(this, props);
	        this.state = { expanded: false };
	    }
	    Object.defineProperty(EventView.prototype, "messageHtml", {
	        get: function () {
	            return { __html: this.props.content };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EventView.prototype, "formatedDate", {
	        get: function () {
	            var months = ["January", "February ", "March", "April", "May", "June",
	                "July", "August", "September", "October", "November", "December"];
	            return months[this.props.date.getMonth()] + " " + this.props.date.getDate();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    EventView.prototype.render = function () {
	        var title = React.createElement("div", null, 
	            React.createElement("span", null, 
	                this.props.title, 
	                " "), 
	            React.createElement("i", {className: "material-icons", style: { color: "rgba(0, 0, 0, 0.7)",
	                fontSize: "20px",
	                float: "right",
	                marginLeft: "1rem" }}, "date_range"), 
	            React.createElement("span", {style: { float: "right" }}, this.formatedDate));
	        return React.createElement(accordian_item_1.AccordianItem, {title: title, expanded: this.props.expanded, onToggled: this.props.onToggled}, 
	            React.createElement("span", {dangerouslySetInnerHTML: this.messageHtml})
	        );
	    };
	    return EventView;
	}(React.Component));
	exports.EventView = EventView;


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
	var accordian_content_1 = __webpack_require__(8);
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
/* 9 */
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
	var event_editor_1 = __webpack_require__(11);
	var add_1 = __webpack_require__(12);
	var remove_1 = __webpack_require__(13);
	var EventsEditor = (function (_super) {
	    __extends(EventsEditor, _super);
	    function EventsEditor(props) {
	        _super.call(this, props);
	        this.state = { editing: undefined, new: false };
	    }
	    EventsEditor.prototype.render = function () {
	        var _this = this;
	        var events = this.props.events.map(function (event, i) {
	            if (i == _this.state.editing) {
	                return React.createElement("div", {className: "container", key: event.id}, 
	                    React.createElement(event_editor_1.EventEditor, {event: event, onChange: function (event) {
	                        _this.setState({ editing: undefined });
	                        _this.props.onChange(event);
	                    }})
	                );
	            }
	            else {
	                return React.createElement("div", {className: "container", key: event.id}, 
	                    React.createElement("div", {className: "row"}, 
	                        React.createElement("h2", {onClick: function () { return _this.setState({ editing: i }); }}, event.title), 
	                        React.createElement("h3", null, event.date.toString()), 
	                        React.createElement("div", null, 
	                            React.createElement("span", {dangerouslySetInnerHTML: { __html: event.content }})
	                        )), 
	                    React.createElement("div", {className: "row"}, 
	                        React.createElement(add_1.Add, {onClick: function () { return _this.setState({ new: true }); }}), 
	                        React.createElement(remove_1.Remove, {onClick: function () { return _this.props.onRemove(event); }})));
	            }
	        });
	        if (this.state.new) {
	            events.unshift(React.createElement("div", {className: "container", key: -1}, 
	                React.createElement(event_editor_1.EventEditor, {event: { title: "", content: "", date: new Date(), id: -1 }, onChange: function (event) {
	                    _this.setState({ new: false });
	                    _this.props.onAdd(event);
	                }})
	            ));
	        }
	        return React.createElement("div", null, events);
	    };
	    return EventsEditor;
	}(React.Component));
	exports.EventsEditor = EventsEditor;


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
	var EventEditor = (function (_super) {
	    __extends(EventEditor, _super);
	    function EventEditor(props) {
	        _super.call(this, props);
	        var event = this.props.event;
	        event.date = event.date.toISOString();
	        this.state = event;
	    }
	    EventEditor.prototype.render = function () {
	        var _this = this;
	        return React.createElement("form", {onSubmit: function (e) {
	            var event = _this.state;
	            event.date = new Date(_this.state.date);
	            _this.props.onChange(event);
	            e.preventDefault();
	        }}, 
	            React.createElement("div", {className: "row"}, 
	                React.createElement("input", {type: "text", value: this.state.title, onChange: function (e) { return _this.setState({ title: e.target.value }); }})
	            ), 
	            React.createElement("div", {className: "row"}, 
	                React.createElement("input", {type: "datetime", value: this.state.date, onChange: function (e) { return _this.setState({ date: e.target.value }); }})
	            ), 
	            React.createElement("div", {className: "row"}, 
	                React.createElement("textarea", {style: { width: "100%" }, value: this.state.content, onChange: function (e) { return _this.setState({ content: e.target.value }); }})
	            ), 
	            React.createElement("div", {className: "row"}, 
	                React.createElement("input", {type: "submit"})
	            ));
	    };
	    return EventEditor;
	}(React.Component));
	exports.EventEditor = EventEditor;


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	function Add(props) {
	    return React.createElement("div", {onClick: props.onClick}, 
	        React.createElement("img", {src: "/images/ic_add_black_24px.svg", alt: "add"})
	    );
	}
	exports.Add = Add;


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	function Remove(props) {
	    return React.createElement("div", {onClick: props.onClick}, 
	        React.createElement("img", {src: "images/ic_remove_black_24px.svg", alt: "add"})
	    );
	}
	exports.Remove = Remove;


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
	var footer_1 = __webpack_require__(15);
	var navbar_1 = __webpack_require__(16);
	var Layout = (function (_super) {
	    __extends(Layout, _super);
	    function Layout() {
	        _super.apply(this, arguments);
	    }
	    Layout.prototype.render = function () {
	        return React.createElement("div", null, 
	            React.createElement(navbar_1.Navbar, null, 
	                React.createElement("div", {id: "nextup"}), 
	                React.createElement("a", {href: "https://khe.io"}, " Kent Hack Enough "), 
	                React.createElement("a", {href: "/contact"}, " Contact "), 
	                React.createElement("a", {className: "social-item", href: "https://www.facebook.com/groups/hacksu/"}, 
	                    React.createElement("img", {src: "/images/facebook.png"})
	                ), 
	                React.createElement("a", {className: "social-item", href: "https://twitter.com/_hacksu"}, 
	                    React.createElement("img", {src: "/images/twitter.png"})
	                ), 
	                React.createElement("a", {className: "social-item", href: "https://github.com/hacKSU"}, 
	                    React.createElement("img", {src: "/images/github.png"})
	                )), 
	            this.props.children, 
	            React.createElement(footer_1.Footer, null, 
	                React.createElement("a", {href: "/#about-info"}, "About"), 
	                React.createElement("a", {href: "https://khe.io"}, "Kent Hack Enough"), 
	                React.createElement("a", {href: "/contact"}, "Contact")));
	    };
	    return Layout;
	}(React.Component));
	exports.Layout = Layout;


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
	var Footer = (function (_super) {
	    __extends(Footer, _super);
	    function Footer() {
	        _super.apply(this, arguments);
	    }
	    Footer.prototype.render = function () {
	        var footer_items = React.Children.map(this.props.children, function (item) { return React.createElement("li", null, item); });
	        return React.createElement("div", {id: "footer"}, 
	            React.createElement("div", {className: "container"}, 
	                React.createElement("ul", {className: "list-inline sub-nav"}, footer_items), 
	                React.createElement("p", {className: "text-muted credit"}, "© 2016 HacKSU"))
	        );
	    };
	    return Footer;
	}(React.Component));
	exports.Footer = Footer;


/***/ },
/* 16 */
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
	        return React.createElement("div", {className: "navbar navbar-default"}, 
	            React.createElement("div", {className: "navbar-header"}, 
	                React.createElement("button", {className: "navbar-toggle", type: "button", "data-toggle": "collapse", "data-target": ".navbar-collapse"}, 
	                    React.createElement("span", {className: "icon-bar"}), 
	                    React.createElement("span", {className: "icon-bar"}), 
	                    React.createElement("span", {className: "icon-bar"})), 
	                React.createElement("a", {className: "navbar-brand", href: "/"}, 
	                    React.createElement("img", {src: "/images/hacksu.png"})
	                )), 
	            React.createElement("div", {className: "collapse navbar-collapse"}, 
	                React.createElement("ul", {className: "nav navbar-nav"}, nav_items)
	            ));
	    };
	    return Navbar;
	}(React.Component));
	exports.Navbar = Navbar;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map