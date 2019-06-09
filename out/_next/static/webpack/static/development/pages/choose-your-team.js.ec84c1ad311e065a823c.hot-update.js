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
/* harmony import */ var _components_Swipeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Swipeable */ "./components/Swipeable/index.js");
/* harmony import */ var _SingleTeam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SingleTeam */ "./components/ChooseYourTeam/SingleTeam/index.js");
/* harmony import */ var _TeamsList_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TeamsList.scss */ "./components/ChooseYourTeam/TeamsList/TeamsList.scss");
/* harmony import */ var _TeamsList_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TeamsList_scss__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/mjunior/Desktop/Projects/Personal/soccer-it_webapp/components/ChooseYourTeam/TeamsList/index.js";




function TeamsList(_ref) {
  var teams = _ref.teams;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "teams-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Swipeable__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: _TeamsList_scss__WEBPACK_IMPORTED_MODULE_5___default.a.swipeableWrapper,
    slideStyle: slideStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
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
        lineNumber: 10
      },
      __self: this
    }));
  })));
}

/***/ })

})
//# sourceMappingURL=choose-your-team.js.ec84c1ad311e065a823c.hot-update.js.map