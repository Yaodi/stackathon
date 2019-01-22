webpackHotUpdate("static/development/pages/start.js",{

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
      if (preferences[header]) _game[header] = field || 'tbd';
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

/***/ })

})
//# sourceMappingURL=start.js.ee8998118ac7283db2d2.hot-update.js.map