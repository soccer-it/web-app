webpackHotUpdate("static/development/pages/choose-your-team.js",{

/***/ "./components/ChooseYourTeam/SingleTeam/index.js":
/*!*******************************************************!*\
  !*** ./components/ChooseYourTeam/SingleTeam/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingleTeam; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleTeam_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleTeam.scss */ "./components/ChooseYourTeam/SingleTeam/SingleTeam.scss");
/* harmony import */ var _SingleTeam_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SingleTeam_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mjunior/Desktop/Projects/Personal/soccer-it_webapp/components/ChooseYourTeam/SingleTeam/index.js";



var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

function SingleTeam(_ref) {
  var name = _ref.name,
      banner = _ref.banner,
      theme = _ref.theme;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: _SingleTeam_scss__WEBPACK_IMPORTED_MODULE_1___default.a.singleTeam,
    "data-theme": theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    className: _SingleTeam_scss__WEBPACK_IMPORTED_MODULE_1___default.a.banner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images".concat(banner),
    alt: "\xCDcone representando a camisa do Corinthians",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: _SingleTeam_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: _SingleTeam_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link,
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "selecionar")));
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

})
//# sourceMappingURL=choose-your-team.js.b6c6f1fe8c71eac83105.hot-update.js.map