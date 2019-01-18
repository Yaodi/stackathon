module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/SingleGameBoxScore.js":
/*!*************************************!*\
  !*** ./pages/SingleGameBoxScore.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var SingleGameBoxScore = function SingleGameBoxScore() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "an h1");
};

/***/ }),

/***/ "./pages/start.js":
/*!************************!*\
  !*** ./pages/start.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SingleGameBoxScore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SingleGameBoxScore */ "./pages/SingleGameBoxScore.js");
/* harmony import */ var _utils_filterAllGames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/filterAllGames */ "./utils/filterAllGames.js");
/* harmony import */ var _utils_filterSingleGame__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/filterSingleGame */ "./utils/filterSingleGame.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint-disable react/jsx-key */







var root =
/*#__PURE__*/
function (_Component) {
  _inherits(root, _Component);

  function root() {
    var _this;

    _classCallCheck(this, root);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(root).call(this));
    _this.state = {
      dayOffSet: -1,
      date: new Date().toLocaleDateString(),
      preferences: {
        GAME_DATE_EST: false,
        GAME_SEQUENCE: false,
        GAME_ID: false,
        TEAM_ID: false,
        TEAM_ABBREVIATION: true,
        TEAM_CITY_NAME: false,
        TEAM_WINS_LOSSES: false,
        PTS_QTR1: false,
        PTS_QTR2: false,
        PTS_QTR3: false,
        PTS_QTR4: false,
        PTS_OT1: false,
        PTS_OT2: false,
        PTS_OT3: false,
        PTS_OT4: false,
        PTS_OT5: false,
        PTS_OT6: false,
        PTS_OT7: false,
        PTS_OT8: false,
        PTS_OT9: false,
        PTS_OT10: false,
        PTS: true,
        FG_PCT: false,
        FT_PCT: false,
        FG3_PCT: false,
        AST: false,
        REB: false,
        TOV: false
      }
    };
    return _this;
  }

  _createClass(root, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:8001/scoreboard', {
                  params: {
                    GameDate: this.state.date,
                    LeagueID: '00',
                    DayOffset: this.state.dayOffSet
                  }
                });

              case 2:
                _ref = _context.sent;
                data = _ref.data;
                this.setState({
                  data: data
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "handleDayChange",
    value: function () {
      var _handleDayChange = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
        var change, _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                change = parseInt(e.target.value, 10);
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:8001/scoreboard', {
                  params: {
                    GameDate: this.state.date,
                    LeagueID: '00',
                    DayOffset: this.state.dayOffSet + change
                  }
                });

              case 3:
                _ref2 = _context2.sent;
                data = _ref2.data;
                this.setState({
                  data: data,
                  dayOffSet: this.state.dayOffSet + change
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleDayChange(_x) {
        return _handleDayChange.apply(this, arguments);
      }

      return handleDayChange;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      //   console.log('day offset', this.state.dayOffSet);
      var games = [];

      if (this.state.data) {
        var data = this.state.data;
        var preferences = this.state.preferences;
        games = Object(_utils_filterSingleGame__WEBPACK_IMPORTED_MODULE_6__["default"])(data, preferences);
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, " scores "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        type: "button",
        value: "-1",
        onClick: function onClick() {
          return _this2.handleDayChange(event);
        }
      }, "yesterday"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        type: "button",
        value: "1",
        onClick: function onClick() {
          return _this2.handleDayChange(event);
        }
      }, "tomorrow")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), games.map(function (game) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, game.team1.TEAM_ABBREVIATION, ": ", game.team1.PTS || 'tbd'), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, game.team2.TEAM_ABBREVIATION, ":", game.team2.PTS || 'tbd'), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null));
      }));
    }
  }]);

  return root;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (root);

/***/ }),

/***/ "./utils/filterAllGames.js":
/*!*********************************!*\
  !*** ./utils/filterAllGames.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//this utility function takes in scores data, returning an array of games w/ team abbreviation and final score for the all games page
/* harmony default export */ __webpack_exports__["default"] = (function (data) {
  var _data$resultSets$filt = data.resultSets.filter(function (el) {
    return el.name === 'LineScore';
  }),
      _data$resultSets$filt2 = _slicedToArray(_data$resultSets$filt, 1),
      lineScore = _data$resultSets$filt2[0];

  var list = [];

  for (var i = 0; i < lineScore.rowSet.length; i++) {
    var _game = {};

    for (var j = 0; j < lineScore.headers.length; j++) {
      var header = lineScore.headers[j];
      var field = lineScore.rowSet[i][j];
      if (header === 'TEAM_ABBREVIATION' || header === 'PTS') _game[header] = field;
    }

    list.push(_game);
  }

  var games = [];
  var game = {};

  for (var _i2 = 0; _i2 < list.length; _i2++) {
    if (_i2 % 2) {
      game.team2 = list[_i2];
      games.push(game);
      game = {};
    } else {
      game.team1 = list[_i2];
    }
  }

  return games;
});

/***/ }),

/***/ "./utils/filterSingleGame.js":
/*!***********************************!*\
  !*** ./utils/filterSingleGame.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//this utility function takes in scores data and user preferences, returning an array of games w/ each team and the respective categories for single game page
/* harmony default export */ __webpack_exports__["default"] = (function (data, preferences) {
  var _data$resultSets$filt = data.resultSets.filter(function (el) {
    return el.name === 'LineScore';
  }),
      _data$resultSets$filt2 = _slicedToArray(_data$resultSets$filt, 1),
      lineScore = _data$resultSets$filt2[0];

  var list = [];

  for (var i = 0; i < lineScore.rowSet.length; i++) {
    var _game = {};

    for (var j = 0; j < lineScore.headers.length; j++) {
      var header = lineScore.headers[j];
      var field = lineScore.rowSet[i][j];
      if (preferences[header]) _game[header] = field;
    }

    list.push(_game);
  }

  var games = [];
  var game = {};

  for (var _i2 = 0; _i2 < list.length; _i2++) {
    if (_i2 % 2) {
      game.team2 = list[_i2];
      games.push(game);
      game = {};
    } else {
      game.team1 = list[_i2];
    }
  }

  return games;
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/start.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/start.js */"./pages/start.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ })

/******/ });
//# sourceMappingURL=start.js.map