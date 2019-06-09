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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Swipeable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Swipeable */ "./components/Swipeable/index.js");
/* harmony import */ var _SingleTeam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SingleTeam */ "./components/ChooseYourTeam/SingleTeam/index.js");
/* harmony import */ var _TeamsList_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TeamsList.scss */ "./components/ChooseYourTeam/TeamsList/TeamsList.scss");
/* harmony import */ var _TeamsList_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TeamsList_scss__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "/Users/mjunior/Desktop/Projects/Personal/soccer-it_webapp/components/ChooseYourTeam/TeamsList/index.js";




function TeamsList(_ref) {
  var teams = _ref.teams;

  var itemClass = Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _TeamsList_scss__WEBPACK_IMPORTED_MODULE_6___default.a.teamWrapper, true);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _TeamsList_scss__WEBPACK_IMPORTED_MODULE_6___default.a.teamList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Swipeable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: _TeamsList_scss__WEBPACK_IMPORTED_MODULE_6___default.a.swipeableWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, teams.map(function (_ref2) {
    var slug = _ref2.slug,
        team = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["slug"]);

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SingleTeam__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      customClasses: itemClass,
      key: slug
    }, team, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }));
  })));
}

/***/ })

})
//# sourceMappingURL=choose-your-team.js.1b0d7e55dbada7620ad5.hot-update.js.map