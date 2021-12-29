"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var _Cform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cform */ "./components/Cform.js");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo */ "./components/logo.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\desig\\Desktop\\nextjs-bootstrap-starter-main\\nextjs-bootstrap-starter-main\\components\\NavBar.js",
    _this = undefined,
    _s = $RefreshSig$();



 // Bootstrap








var NavBar = function NavBar() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      navBackground = _useState[0],
      setNavBackground = _useState[1];

  var navRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  navRef.current = navBackground;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleScroll = function handleScroll() {
      var show = window.scrollY > 0;

      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return function () {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []); // Active class

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__.default, {
    expand: "lg",
    variant: "light",
    className: navBackground ? "sticky-nav" : "bg-white",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__.default.Brand, {
            style: {
              color: "rgba(0,17,15,1)"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              children: ["C", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                style: {
                  color: 'orange'
                },
                children: "T"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 22
              }, _this), "W"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__.default.Toggle, {
        "aria-controls": "navbar-nav"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__.default.Collapse, {
        id: "navbar-nav",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__.default, {
          className: "ms-auto",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
              className: router.pathname == "/about" ? "nav-link active" : "nav-link",
              children: "About"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#!",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
              className: router.pathname == "/services" ? "nav-link active" : "nav-link",
              children: "Services"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#!",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
              className: router.pathname == "/projects" ? "nav-link active" : "nav-link",
              children: "Projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#!",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
              className: router.pathname == "/testemonials" ? "nav-link active" : "nav-link",
              children: "Testemonials"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Cform__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
};

_s(NavBar, "90Fo6rjXwDzAyO4QjjUZTzKHwu4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c;

$RefreshReg$(_c, "NavBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/logo.js":
/*!****************************!*\
  !*** ./components/logo.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\desig\\Desktop\\nextjs-bootstrap-starter-main\\nextjs-bootstrap-starter-main\\components\\logo.js";



function Logo() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "470",
    height: "94",
    fill: "none",
    viewBox: "0 0 470 94",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      fill: "#000",
      d: "M16.795 54.422h21.258v12.565H.567V.164h16.228v54.258zM69.898 67.748c-5.188 0-9.87-1.11-14.045-3.332-4.113-2.22-7.37-5.394-9.775-9.518-2.34-4.125-3.511-8.948-3.511-14.47 0-5.457 1.202-10.248 3.606-14.373 2.404-4.188 5.694-7.393 9.87-9.614 4.175-2.221 8.857-3.332 14.045-3.332 5.188 0 9.87 1.11 14.045 3.332 4.176 2.221 7.466 5.426 9.87 9.614 2.404 4.125 3.606 8.916 3.606 14.374 0 5.457-1.234 10.28-3.701 14.468-2.404 4.125-5.726 7.298-9.965 9.52-4.175 2.22-8.857 3.331-14.045 3.331zm0-14.088c3.1 0 5.726-1.142 7.877-3.427 2.214-2.284 3.321-5.552 3.321-9.804 0-4.252-1.075-7.52-3.226-9.805-2.088-2.284-4.682-3.427-7.782-3.427-3.163 0-5.789 1.143-7.877 3.427-2.088 2.221-3.131 5.49-3.131 9.805 0 4.252 1.012 7.52 3.036 9.804 2.088 2.285 4.682 3.427 7.782 3.427zM126.337 13.11c3.733 0 6.991.76 9.775 2.284 2.847 1.523 5.03 3.522 6.548 5.997v-7.52h16.228v53.02c0 4.887-.98 9.297-2.942 13.232-1.898 3.998-4.84 7.17-8.825 9.519-3.923 2.348-8.826 3.522-14.71 3.522-7.845 0-14.204-1.873-19.075-5.617-4.872-3.68-7.655-8.694-8.351-15.04h16.038c.506 2.031 1.708 3.618 3.606 4.76 1.898 1.206 4.239 1.809 7.023 1.809 3.353 0 6.01-.984 7.971-2.951 2.025-1.904 3.037-4.982 3.037-9.234v-7.52c-1.581 2.475-3.764 4.506-6.548 6.092-2.784 1.524-6.042 2.285-9.775 2.285-4.365 0-8.319-1.11-11.862-3.332-3.543-2.284-6.359-5.489-8.446-9.614-2.025-4.188-3.037-9.011-3.037-14.468 0-5.458 1.012-10.25 3.037-14.374 2.087-4.125 4.903-7.298 8.446-9.519s7.497-3.332 11.862-3.332zm16.323 27.319c0-4.062-1.139-7.267-3.416-9.615-2.215-2.348-4.935-3.521-8.162-3.521-3.226 0-5.978 1.174-8.256 3.521-2.214 2.285-3.322 5.458-3.322 9.52 0 4.06 1.108 7.297 3.322 9.709 2.278 2.348 5.03 3.522 8.256 3.522 3.227 0 5.947-1.174 8.162-3.522 2.277-2.348 3.416-5.553 3.416-9.614zM194.733 67.748c-5.188 0-9.87-1.11-14.045-3.332-4.112-2.22-7.371-5.394-9.775-9.518-2.341-4.125-3.511-8.948-3.511-14.47 0-5.457 1.202-10.248 3.606-14.373 2.404-4.188 5.694-7.393 9.87-9.614 4.175-2.221 8.857-3.332 14.045-3.332 5.188 0 9.87 1.11 14.045 3.332 4.176 2.221 7.466 5.426 9.87 9.614 2.404 4.125 3.606 8.916 3.606 14.374 0 5.457-1.234 10.28-3.701 14.468-2.404 4.125-5.726 7.298-9.965 9.52-4.175 2.22-8.857 3.331-14.045 3.331zm0-14.088c3.1 0 5.726-1.142 7.877-3.427 2.214-2.284 3.321-5.552 3.321-9.804 0-4.252-1.075-7.52-3.226-9.805-2.088-2.284-4.682-3.427-7.782-3.427-3.163 0-5.789 1.143-7.877 3.427-2.088 2.221-3.131 5.49-3.131 9.805 0 4.252 1.012 7.52 3.036 9.804 2.088 2.285 4.682 3.427 7.782 3.427zM308.864.164v66.823h-16.228v-27.51h-25.244v27.51h-16.228V.164h16.228V26.34h25.244V.164h16.228zM370.496 39.572c0 1.523-.095 3.11-.284 4.76h-36.727c.253 3.3 1.297 5.838 3.132 7.615 1.898 1.713 4.207 2.57 6.928 2.57 4.049 0 6.864-1.714 8.446-5.14h17.272c-.886 3.49-2.499 6.631-4.84 9.423-2.278 2.792-5.156 4.982-8.636 6.568-3.48 1.587-7.371 2.38-11.673 2.38-5.188 0-9.806-1.11-13.855-3.332-4.05-2.22-7.213-5.394-9.49-9.518-2.278-4.125-3.417-8.948-3.417-14.47 0-5.52 1.107-10.343 3.322-14.468 2.277-4.125 5.441-7.298 9.49-9.519s8.699-3.332 13.95-3.332c5.125 0 9.68 1.08 13.666 3.237 3.986 2.157 7.086 5.235 9.3 9.233 2.278 3.998 3.416 8.662 3.416 13.993zm-16.607-4.284c0-2.792-.949-5.013-2.847-6.663-1.898-1.65-4.271-2.475-7.118-2.475-2.72 0-5.029.794-6.928 2.38-1.834 1.586-2.973 3.84-3.416 6.758h20.309zM395.285 22.723c1.898-2.919 4.271-5.203 7.118-6.853 2.847-1.714 6.01-2.57 9.49-2.57v17.229h-4.46c-4.049 0-7.086.888-9.111 2.665-2.024 1.714-3.037 4.76-3.037 9.139v24.654h-16.228V13.87h16.228v8.852zM469.567 39.572c0 1.523-.095 3.11-.284 4.76h-36.727c.253 3.3 1.297 5.838 3.132 7.615 1.898 1.713 4.207 2.57 6.928 2.57 4.049 0 6.864-1.714 8.446-5.14h17.272c-.886 3.49-2.499 6.631-4.84 9.423-2.278 2.792-5.157 4.982-8.636 6.568-3.48 1.587-7.371 2.38-11.673 2.38-5.188 0-9.806-1.11-13.855-3.332-4.05-2.22-7.213-5.394-9.49-9.518-2.278-4.125-3.417-8.948-3.417-14.47 0-5.52 1.107-10.343 3.322-14.468 2.277-4.125 5.441-7.298 9.49-9.519s8.699-3.332 13.95-3.332c5.125 0 9.68 1.08 13.666 3.237 3.986 2.157 7.086 5.235 9.3 9.233 2.278 3.998 3.416 8.662 3.416 13.993zm-16.607-4.284c0-2.792-.949-5.013-2.847-6.663-1.898-1.65-4.271-2.475-7.118-2.475-2.72 0-5.03.794-6.928 2.38-1.834 1.586-2.973 3.84-3.416 6.758h20.309z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = Logo;
/* harmony default export */ __webpack_exports__["default"] = (Logo);

var _c;

$RefreshReg$(_c, "Logo");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmQ5MzRiNzgzNmQyZmM0Mzg5NGYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBLElBQU1VLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDbkIsa0JBQTBDViwrQ0FBUSxDQUFDLEtBQUQsQ0FBbEQ7QUFBQSxNQUFPVyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdYLDZDQUFNLEVBQXJCO0FBQ0FXLEVBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkgsYUFBakI7QUFDQVYsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTWMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixVQUFNQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixDQUE5Qjs7QUFDQSxVQUFJTCxNQUFNLENBQUNDLE9BQVAsS0FBbUJFLElBQXZCLEVBQTZCO0FBQzNCSixRQUFBQSxnQkFBZ0IsQ0FBQ0ksSUFBRCxDQUFoQjtBQUNEO0FBQ0YsS0FMRDs7QUFNQUcsSUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQ0wsWUFBcEM7QUFDQSxXQUFPLFlBQU07QUFDWEksTUFBQUEsUUFBUSxDQUFDRSxtQkFBVCxDQUE2QixRQUE3QixFQUF1Q04sWUFBdkM7QUFDRCxLQUZEO0FBR0QsR0FYUSxFQVdOLEVBWE0sQ0FBVCxDQUptQixDQWdCbkI7O0FBQ0EsTUFBTU8sTUFBTSxHQUFHbEIsc0RBQVMsRUFBeEI7QUFDQSxzQkFDRSw4REFBQywyREFBRDtBQUNFLFVBQU0sRUFBQyxJQURUO0FBRUUsV0FBTyxFQUFDLE9BRlY7QUFHRSxhQUFTLEVBQUVPLGFBQWEsR0FBRyxZQUFILEdBQWtCLFVBSDVDO0FBQUEsMkJBS0UsOERB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YWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2QmFyLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xvZ28uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuLy8gQm9vdHN0cmFwXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI7XG5pbXBvcnQgTmF2IGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSBcIi4vQ2Zvcm1cIjtcblxuaW1wb3J0IExvZ28gZnJvbSBcIi4vbG9nb1wiO1xuXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYXZCYWNrZ3JvdW5kLCBzZXROYXZCYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgbmF2UmVmID0gdXNlUmVmKCk7XG4gIG5hdlJlZi5jdXJyZW50ID0gbmF2QmFja2dyb3VuZDtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzaG93ID0gd2luZG93LnNjcm9sbFkgPiAwO1xuICAgICAgaWYgKG5hdlJlZi5jdXJyZW50ICE9PSBzaG93KSB7XG4gICAgICAgIHNldE5hdkJhY2tncm91bmQoc2hvdyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIC8vIEFjdGl2ZSBjbGFzc1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8TmF2YmFyXG4gICAgICBleHBhbmQ9XCJsZ1wiXG4gICAgICB2YXJpYW50PVwibGlnaHRcIlxuICAgICAgY2xhc3NOYW1lPXtuYXZCYWNrZ3JvdW5kID8gXCJzdGlja3ktbmF2XCIgOiBcImJnLXdoaXRlXCJ9XG4gICAgPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgc3R5bGU9e3tjb2xvcjpcInJnYmEoMCwxNywxNSwxKVwifX0+XG4gICAgICAgICAgICAgIDxzcGFuPkM8c3BhbiBzdHlsZT17e2NvbG9yOidvcmFuZ2UnfX0+VDwvc3Bhbj5XPC9zcGFuPlxuICAgICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJuYXZiYXItbmF2XCIgLz5cbiAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cIm5hdmJhci1uYXZcIj5cbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1zLWF1dG9cIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9hYm91dFwiID8gXCJuYXYtbGluayBhY3RpdmVcIiA6IFwibmF2LWxpbmtcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjIVwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvc2VydmljZXNcIiA/IFwibmF2LWxpbmsgYWN0aXZlXCIgOiBcIm5hdi1saW5rXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTZXJ2aWNlc1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiIyFcIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL3Byb2plY3RzXCIgPyBcIm5hdi1saW5rIGFjdGl2ZVwiIDogXCJuYXYtbGlua1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiMhXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi90ZXN0ZW1vbmlhbHNcIiA/IFwibmF2LWxpbmsgYWN0aXZlXCIgOiBcIm5hdi1saW5rXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBUZXN0ZW1vbmlhbHNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgIDxDb250YWN0Rm9ybSAvPlxuICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTmF2YmFyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBMb2dvKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCI0NzBcIlxuICAgICAgaGVpZ2h0PVwiOTRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgdmlld0JveD1cIjAgMCA0NzAgOTRcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9XCIjMDAwXCJcbiAgICAgICAgZD1cIk0xNi43OTUgNTQuNDIyaDIxLjI1OHYxMi41NjVILjU2N1YuMTY0aDE2LjIyOHY1NC4yNTh6TTY5Ljg5OCA2Ny43NDhjLTUuMTg4IDAtOS44Ny0xLjExLTE0LjA0NS0zLjMzMi00LjExMy0yLjIyLTcuMzctNS4zOTQtOS43NzUtOS41MTgtMi4zNC00LjEyNS0zLjUxMS04Ljk0OC0zLjUxMS0xNC40NyAwLTUuNDU3IDEuMjAyLTEwLjI0OCAzLjYwNi0xNC4zNzMgMi40MDQtNC4xODggNS42OTQtNy4zOTMgOS44Ny05LjYxNCA0LjE3NS0yLjIyMSA4Ljg1Ny0zLjMzMiAxNC4wNDUtMy4zMzIgNS4xODggMCA5Ljg3IDEuMTEgMTQuMDQ1IDMuMzMyIDQuMTc2IDIuMjIxIDcuNDY2IDUuNDI2IDkuODcgOS42MTQgMi40MDQgNC4xMjUgMy42MDYgOC45MTYgMy42MDYgMTQuMzc0IDAgNS40NTctMS4yMzQgMTAuMjgtMy43MDEgMTQuNDY4LTIuNDA0IDQuMTI1LTUuNzI2IDcuMjk4LTkuOTY1IDkuNTItNC4xNzUgMi4yMi04Ljg1NyAzLjMzMS0xNC4wNDUgMy4zMzF6bTAtMTQuMDg4YzMuMSAwIDUuNzI2LTEuMTQyIDcuODc3LTMuNDI3IDIuMjE0LTIuMjg0IDMuMzIxLTUuNTUyIDMuMzIxLTkuODA0IDAtNC4yNTItMS4wNzUtNy41Mi0zLjIyNi05LjgwNS0yLjA4OC0yLjI4NC00LjY4Mi0zLjQyNy03Ljc4Mi0zLjQyNy0zLjE2MyAwLTUuNzg5IDEuMTQzLTcuODc3IDMuNDI3LTIuMDg4IDIuMjIxLTMuMTMxIDUuNDktMy4xMzEgOS44MDUgMCA0LjI1MiAxLjAxMiA3LjUyIDMuMDM2IDkuODA0IDIuMDg4IDIuMjg1IDQuNjgyIDMuNDI3IDcuNzgyIDMuNDI3ek0xMjYuMzM3IDEzLjExYzMuNzMzIDAgNi45OTEuNzYgOS43NzUgMi4yODQgMi44NDcgMS41MjMgNS4wMyAzLjUyMiA2LjU0OCA1Ljk5N3YtNy41MmgxNi4yMjh2NTMuMDJjMCA0Ljg4Ny0uOTggOS4yOTctMi45NDIgMTMuMjMyLTEuODk4IDMuOTk4LTQuODQgNy4xNy04LjgyNSA5LjUxOS0zLjkyMyAyLjM0OC04LjgyNiAzLjUyMi0xNC43MSAzLjUyMi03Ljg0NSAwLTE0LjIwNC0xLjg3My0xOS4wNzUtNS42MTctNC44NzItMy42OC03LjY1NS04LjY5NC04LjM1MS0xNS4wNGgxNi4wMzhjLjUwNiAyLjAzMSAxLjcwOCAzLjYxOCAzLjYwNiA0Ljc2IDEuODk4IDEuMjA2IDQuMjM5IDEuODA5IDcuMDIzIDEuODA5IDMuMzUzIDAgNi4wMS0uOTg0IDcuOTcxLTIuOTUxIDIuMDI1LTEuOTA0IDMuMDM3LTQuOTgyIDMuMDM3LTkuMjM0di03LjUyYy0xLjU4MSAyLjQ3NS0zLjc2NCA0LjUwNi02LjU0OCA2LjA5Mi0yLjc4NCAxLjUyNC02LjA0MiAyLjI4NS05Ljc3NSAyLjI4NS00LjM2NSAwLTguMzE5LTEuMTEtMTEuODYyLTMuMzMyLTMuNTQzLTIuMjg0LTYuMzU5LTUuNDg5LTguNDQ2LTkuNjE0LTIuMDI1LTQuMTg4LTMuMDM3LTkuMDExLTMuMDM3LTE0LjQ2OCAwLTUuNDU4IDEuMDEyLTEwLjI1IDMuMDM3LTE0LjM3NCAyLjA4Ny00LjEyNSA0LjkwMy03LjI5OCA4LjQ0Ni05LjUxOXM3LjQ5Ny0zLjMzMiAxMS44NjItMy4zMzJ6bTE2LjMyMyAyNy4zMTljMC00LjA2Mi0xLjEzOS03LjI2Ny0zLjQxNi05LjYxNS0yLjIxNS0yLjM0OC00LjkzNS0zLjUyMS04LjE2Mi0zLjUyMS0zLjIyNiAwLTUuOTc4IDEuMTc0LTguMjU2IDMuNTIxLTIuMjE0IDIuMjg1LTMuMzIyIDUuNDU4LTMuMzIyIDkuNTIgMCA0LjA2IDEuMTA4IDcuMjk3IDMuMzIyIDkuNzA5IDIuMjc4IDIuMzQ4IDUuMDMgMy41MjIgOC4yNTYgMy41MjIgMy4yMjcgMCA1Ljk0Ny0xLjE3NCA4LjE2Mi0zLjUyMiAyLjI3Ny0yLjM0OCAzLjQxNi01LjU1MyAzLjQxNi05LjYxNHpNMTk0LjczMyA2Ny43NDhjLTUuMTg4IDAtOS44Ny0xLjExLTE0LjA0NS0zLjMzMi00LjExMi0yLjIyLTcuMzcxLTUuMzk0LTkuNzc1LTkuNTE4LTIuMzQxLTQuMTI1LTMuNTExLTguOTQ4LTMuNTExLTE0LjQ3IDAtNS40NTcgMS4yMDItMTAuMjQ4IDMuNjA2LTE0LjM3MyAyLjQwNC00LjE4OCA1LjY5NC03LjM5MyA5Ljg3LTkuNjE0IDQuMTc1LTIuMjIxIDguODU3LTMuMzMyIDE0LjA0NS0zLjMzMiA1LjE4OCAwIDkuODcgMS4xMSAxNC4wNDUgMy4zMzIgNC4xNzYgMi4yMjEgNy40NjYgNS40MjYgOS44NyA5LjYxNCAyLjQwNCA0LjEyNSAzLjYwNiA4LjkxNiAzLjYwNiAxNC4zNzQgMCA1LjQ1Ny0xLjIzNCAxMC4yOC0zLjcwMSAxNC40NjgtMi40MDQgNC4xMjUtNS43MjYgNy4yOTgtOS45NjUgOS41Mi00LjE3NSAyLjIyLTguODU3IDMuMzMxLTE0LjA0NSAzLjMzMXptMC0xNC4wODhjMy4xIDAgNS43MjYtMS4xNDIgNy44NzctMy40MjcgMi4yMTQtMi4yODQgMy4zMjEtNS41NTIgMy4zMjEtOS44MDQgMC00LjI1Mi0xLjA3NS03LjUyLTMuMjI2LTkuODA1LTIuMDg4LTIuMjg0LTQuNjgyLTMuNDI3LTcuNzgyLTMuNDI3LTMuMTYzIDAtNS43ODkgMS4xNDMtNy44NzcgMy40MjctMi4wODggMi4yMjEtMy4xMzEgNS40OS0zLjEzMSA5LjgwNSAwIDQuMjUyIDEuMDEyIDcuNTIgMy4wMzYgOS44MDQgMi4wODggMi4yODUgNC42ODIgMy40MjcgNy43ODIgMy40Mjd6TTMwOC44NjQuMTY0djY2LjgyM2gtMTYuMjI4di0yNy41MWgtMjUuMjQ0djI3LjUxaC0xNi4yMjhWLjE2NGgxNi4yMjhWMjYuMzRoMjUuMjQ0Vi4xNjRoMTYuMjI4ek0zNzAuNDk2IDM5LjU3MmMwIDEuNTIzLS4wOTUgMy4xMS0uMjg0IDQuNzZoLTM2LjcyN2MuMjUzIDMuMyAxLjI5NyA1LjgzOCAzLjEzMiA3LjYxNSAxLjg5OCAxLjcxMyA0LjIwNyAyLjU3IDYuOTI4IDIuNTcgNC4wNDkgMCA2Ljg2NC0xLjcxNCA4LjQ0Ni01LjE0aDE3LjI3MmMtLjg4NiAzLjQ5LTIuNDk5IDYuNjMxLTQuODQgOS40MjMtMi4yNzggMi43OTItNS4xNTYgNC45ODItOC42MzYgNi41NjgtMy40OCAxLjU4Ny03LjM3MSAyLjM4LTExLjY3MyAyLjM4LTUuMTg4IDAtOS44MDYtMS4xMS0xMy44NTUtMy4zMzItNC4wNS0yLjIyLTcuMjEzLTUuMzk0LTkuNDktOS41MTgtMi4yNzgtNC4xMjUtMy40MTctOC45NDgtMy40MTctMTQuNDcgMC01LjUyIDEuMTA3LTEwLjM0MyAzLjMyMi0xNC40NjggMi4yNzctNC4xMjUgNS40NDEtNy4yOTggOS40OS05LjUxOXM4LjY5OS0zLjMzMiAxMy45NS0zLjMzMmM1LjEyNSAwIDkuNjggMS4wOCAxMy42NjYgMy4yMzcgMy45ODYgMi4xNTcgNy4wODYgNS4yMzUgOS4zIDkuMjMzIDIuMjc4IDMuOTk4IDMuNDE2IDguNjYyIDMuNDE2IDEzLjk5M3ptLTE2LjYwNy00LjI4NGMwLTIuNzkyLS45NDktNS4wMTMtMi44NDctNi42NjMtMS44OTgtMS42NS00LjI3MS0yLjQ3NS03LjExOC0yLjQ3NS0yLjcyIDAtNS4wMjkuNzk0LTYuOTI4IDIuMzgtMS44MzQgMS41ODYtMi45NzMgMy44NC0zLjQxNiA2Ljc1OGgyMC4zMDl6TTM5NS4yODUgMjIuNzIzYzEuODk4LTIuOTE5IDQuMjcxLTUuMjAzIDcuMTE4LTYuODUzIDIuODQ3LTEuNzE0IDYuMDEtMi41NyA5LjQ5LTIuNTd2MTcuMjI5aC00LjQ2Yy00LjA0OSAwLTcuMDg2Ljg4OC05LjExMSAyLjY2NS0yLjAyNCAxLjcxNC0zLjAzNyA0Ljc2LTMuMDM3IDkuMTM5djI0LjY1NGgtMTYuMjI4VjEzLjg3aDE2LjIyOHY4Ljg1MnpNNDY5LjU2NyAzOS41NzJjMCAxLjUyMy0uMDk1IDMuMTEtLjI4NCA0Ljc2aC0zNi43MjdjLjI1MyAzLjMgMS4yOTcgNS44MzggMy4xMzIgNy42MTUgMS44OTggMS43MTMgNC4yMDcgMi41NyA2LjkyOCAyLjU3IDQuMDQ5IDAgNi44NjQtMS43MTQgOC40NDYtNS4xNGgxNy4yNzJjLS44ODYgMy40OS0yLjQ5OSA2LjYzMS00Ljg0IDkuNDIzLTIuMjc4IDIuNzkyLTUuMTU3IDQuOTgyLTguNjM2IDYuNTY4LTMuNDggMS41ODctNy4zNzEgMi4zOC0xMS42NzMgMi4zOC01LjE4OCAwLTkuODA2LTEuMTEtMTMuODU1LTMuMzMyLTQuMDUtMi4yMi03LjIxMy01LjM5NC05LjQ5LTkuNTE4LTIuMjc4LTQuMTI1LTMuNDE3LTguOTQ4LTMuNDE3LTE0LjQ3IDAtNS41MiAxLjEwNy0xMC4zNDMgMy4zMjItMTQuNDY4IDIuMjc3LTQuMTI1IDUuNDQxLTcuMjk4IDkuNDktOS41MTlzOC42OTktMy4zMzIgMTMuOTUtMy4zMzJjNS4xMjUgMCA5LjY4IDEuMDggMTMuNjY2IDMuMjM3IDMuOTg2IDIuMTU3IDcuMDg2IDUuMjM1IDkuMyA5LjIzMyAyLjI3OCAzLjk5OCAzLjQxNiA4LjY2MiAzLjQxNiAxMy45OTN6bS0xNi42MDctNC4yODRjMC0yLjc5Mi0uOTQ5LTUuMDEzLTIuODQ3LTYuNjYzLTEuODk4LTEuNjUtNC4yNzEtMi40NzUtNy4xMTgtMi40NzUtMi43MiAwLTUuMDMuNzk0LTYuOTI4IDIuMzgtMS44MzQgMS41ODYtMi45NzMgMy44NC0zLjQxNiA2Ljc1OGgyMC4zMDl6XCJcbiAgICAgID48L3BhdGg+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ287XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJMaW5rIiwidXNlUm91dGVyIiwiTmF2YmFyIiwiTmF2IiwiQ29udGFpbmVyIiwiQ29udGFjdEZvcm0iLCJMb2dvIiwiTmF2QmFyIiwibmF2QmFja2dyb3VuZCIsInNldE5hdkJhY2tncm91bmQiLCJuYXZSZWYiLCJjdXJyZW50IiwiaGFuZGxlU2Nyb2xsIiwic2hvdyIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicm91dGVyIiwiY29sb3IiLCJwYXRobmFtZSIsIlJlYWN0Il0sInNvdXJjZVJvb3QiOiIifQ==