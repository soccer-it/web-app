webpackHotUpdate("static/development/pages/choose-your-team.js",{

/***/ "./components/ChooseYourTeam/TeamsList/index.js":
/*!******************************************************!*\
  !*** ./components/ChooseYourTeam/TeamsList/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamsList; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-swipeable-views */ "./node_modules/react-swipeable-views/lib/index.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SingleTeam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SingleTeam */ "./components/ChooseYourTeam/SingleTeam/index.js");


var _jsxFileName = "/Users/mjunior/Desktop/Projects/Personal/soccer-it_webapp/components/ChooseYourTeam/TeamsList/index.js";



function TeamsList(_ref) {
  var teams = _ref.teams;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "teams-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_swipeable_views__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, teams.map(function (_ref2) {
    var slug = _ref2.slug,
        team = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["slug"]);

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SingleTeam__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: slug
    }, team, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }));
  })));
}

/***/ })

})
//# sourceMappingURL=choose-your-team.js.a97007b67dfb02c8bbc3.hot-update.js.map