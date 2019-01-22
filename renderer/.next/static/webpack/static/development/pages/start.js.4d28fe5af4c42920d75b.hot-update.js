webpackHotUpdate("static/development/pages/start.js",{

/***/ "./pages/start.js":
/*!************************!*\
  !*** ./pages/start.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_filterSingleGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/filterSingleGame */ "./utils/filterSingleGame.js");


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
    var staticDate = new Date();
    staticDate = staticDate.toLocaleDateString();
    var header = new Date();
    header.setDate(header.getDate() - 1);
    _this.state = {
      dayOffSet: -1,
      staticDate: staticDate,
      dateHeader: header.toLocaleDateString(),
      preferences: {
        GAME_DATE_EST: false,
        GAME_SEQUENCE: false,
        GAME_ID: false,
        TEAM_ID: false,
        TEAM_ABBREVIATION: true,
        TEAM_CITY_NAME: false,
        TEAM_WINS_LOSSES: false,
        PTS_QTR1: true,
        PTS_QTR2: true,
        PTS_QTR3: true,
        PTS_QTR4: true,
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
        FG_PCT: true,
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
                    GameDate: this.state.staticDate,
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
        var change, _ref2, data, day;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                change = parseInt(e.target.value, 10);
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:8001/scoreboard', {
                  params: {
                    GameDate: this.state.staticDate,
                    LeagueID: '00',
                    DayOffset: this.state.dayOffSet + change
                  }
                });

              case 3:
                _ref2 = _context2.sent;
                data = _ref2.data;
                day = new Date();
                day.setDate(day.getDate() + this.state.dayOffSet + change);
                this.setState({
                  data: data,
                  dayOffSet: this.state.dayOffSet + change,
                  dateHeader: day.toLocaleDateString()
                });

              case 8:
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

      var games = [];

      if (this.state.data) {
        var data = this.state.data;
        var preferences = this.state.preferences;
        games = Object(_utils_filterSingleGame__WEBPACK_IMPORTED_MODULE_3__["default"])(data, preferences);
        console.log(games);
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, " ", this.state.dateHeader, " "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        type: "button",
        value: "-1",
        onClick: function onClick() {
          return _this2.handleDayChange(event);
        }
      }, "prev"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        type: "button",
        value: "1",
        onClick: function onClick() {
          return _this2.handleDayChange(event);
        }
      }, "next"), this.state.show ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "radio"
      }), "hi", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "radio"
      }), "hi", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "radio"
      }), "hi", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "radio"
      }), "hi", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "radio"
      }), "hi") : null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), games.map(function (game) {
        return Object.keys(game.team1).map(function (header) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, header, ": ", game.team1[header], " ", game.team2[header]));
        });
        /* //   <Fragment>
        //    <div>
        //     {game.team1.TEAM_ABBREVIATION}: {game.team1.PTS}
        //    </div>
        //    <div>
        //     {game.team2.TEAM_ABBREVIATION}:{game.team2.PTS}
        //    </div>
        //    <br />
        //   </Fragment> */
      }));
    }
  }]);

  return root;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (root);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/start")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=start.js.4d28fe5af4c42920d75b.hot-update.js.map