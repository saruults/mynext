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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_dark_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-dark-mode */ "use-dark-mode");
/* harmony import */ var use_dark_mode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_dark_mode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./theme.js");
var _jsxFileName = "C:\\Users\\Saruul\\Desktop\\mynext\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const MyApp = ({
  Component,
  pageProps
}) => {
  const {
    0: isMounted,
    1: setIsMounted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const darkMode = use_dark_mode__WEBPACK_IMPORTED_MODULE_2___default()(true);
  const theme = darkMode.value ? _theme__WEBPACK_IMPORTED_MODULE_4__["darkTheme"] : _theme__WEBPACK_IMPORTED_MODULE_4__["lightTheme"];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setIsMounted(true);
  }, []);
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, isMounted && __jsx(Component, _extends({}, pageProps, {
    className: "jsx-3794740904" + " " + (pageProps && pageProps.className != null && pageProps.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3794740904",
    __self: undefined
  }, ":root{font-size:16px;font-family:'Open Sans';--transition-speed:200ms;--mypink:#6649b8;--darkishL:#242526;--whiteish:#F0F2F5;}body.dark-mode{color:white;background-color:#12181B;margin:0;padding:0;}body.light-mode{color:black;background-color:#FFFFFF;margin:0;padding:0;}body::-webkit-scrollbar{width:0.4rem;}body::-webkit-scrollbar-track.dark-mode{background:black;}body::-webkit-scrollbar-track.light-mode{background:white;}body::-webkit-scrollbar-thumb{background:var(--mypink);}::selection{background:var(--mypink);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2FydXVsXFxEZXNrdG9wXFxteW5leHRcXHBhZ2VzXFxfYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCTyxBQUd3QixBQVFILEFBTUEsQUFNQyxBQUdJLEFBR0EsQUFHUSxBQUdBLFlBdkJBLEFBTUEsQ0FNM0IsRUFwQjBCLEVBdUIxQixBQUdBLFFBR0EsQUFHQSxZQXZCVyxBQU1BLEVBZGdCLE9BU2YsQUFNQSxVQUxWLEFBTUEsUUFma0IsaUJBQ0MsbUJBQ0EsbUJBQ3JCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcU2FydXVsXFxEZXNrdG9wXFxteW5leHRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHVzZURhcmtNb2RlIGZyb20gJ3VzZS1kYXJrLW1vZGUnXHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgbGlnaHRUaGVtZSwgZGFya1RoZW1lIH0gZnJvbSAnLi4vdGhlbWUnXHJcblxyXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICBjb25zdCBbaXNNb3VudGVkLCBzZXRJc01vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgZGFya01vZGUgPSB1c2VEYXJrTW9kZSh0cnVlKVxyXG4gIGNvbnN0IHRoZW1lID0gZGFya01vZGUudmFsdWUgPyBkYXJrVGhlbWUgOiBsaWdodFRoZW1lXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldElzTW91bnRlZCh0cnVlKVxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICB7aXNNb3VudGVkICYmIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz59XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICB7YFxyXG4gICAgICA6cm9vdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAtLXRyYW5zaXRpb24tc3BlZWQ6IDIwMG1zO1xyXG4gICAgICAgIC0tbXlwaW5rOiAgIzY2NDliODtcclxuICAgICAgICAtLWRhcmtpc2hMOiAjMjQyNTI2O1xyXG4gICAgICAgIC0td2hpdGVpc2g6ICNGMEYyRjU7XHJcbiAgICAgIH1cclxuICAgICAgYm9keS5kYXJrLW1vZGUge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxODFCO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgYm9keS5saWdodC1tb2RlIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgIGJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG4gICAgICAgIHdpZHRoOiAwLjRyZW07XHJcbiAgICAgIH0gXHJcbiAgICAgIGJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLmRhcmstbW9kZXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgfVxyXG4gICAgICBib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjay5saWdodC1tb2Rle1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIGJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW15cGluayk7XHJcbiAgICAgIH1cclxuICAgICAgOjpzZWxlY3Rpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW15cGluayk7XHJcbiAgICAgIH1cclxuICAgICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Saruul\\\\Desktop\\\\mynext\\\\pages\\\\_app.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./theme.js":
/*!******************!*\
  !*** ./theme.js ***!
  \******************/
/*! exports provided: darkTheme, lightTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return darkTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightTheme", function() { return lightTheme; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const light = {
  /*Side nav bar*/
  snavbg: '#F8F8F8',
  navlinkhoverbg: 'white',
  navlinkhoverclr: 'black',
  navlinkclr: '#31373d',

  /* Theme floating button */
  floatingbg: '#F8F8F8',
  sunicon: 'show',
  moonicon: 'none'
};
const dark = {
  /*Side nav bar*/
  snavbg: '#242526',
  navlinkhoverbg: 'black',
  navlinkhoverclr: 'white',
  navlinkclr: '#b6b6b6',

  /* Theme floating button */
  floatingbg: '#242526',
  sunicon: 'none',
  moonicon: 'show'
};
const darkTheme = _objectSpread({}, dark);
const lightTheme = _objectSpread({}, light);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "use-dark-mode":
/*!********************************!*\
  !*** external "use-dark-mode" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("use-dark-mode");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map