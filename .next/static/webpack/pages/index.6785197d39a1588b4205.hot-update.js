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
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var _Cform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cform */ "./components/Cform.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/logo.svg */ "./public/logo.svg");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__.default, {
    expand: "lg",
    variant: "light",
    className: navBackground ? "sticky-nav" : "bg-white",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__.default.Brand, {
            style: {
              color: "rgba(0,17,15,1)"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
              src: _public_logo_svg__WEBPACK_IMPORTED_MODULE_5__.default,
              alt: 'Custom Timber Works Logo',
              width: 50,
              height: 40
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
              style: {
                color: color
              },
              children: ["Custom", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
                style: {
                  color: 'yellow'
                },
                children: "Timber"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 43
              }, _this), "Works"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__.default.Toggle, {
        "aria-controls": "navbar-nav"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__.default.Collapse, {
        id: "navbar-nav",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_9__.default, {
          className: "ms-auto",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
              className: router.pathname == "/about" ? "nav-link active" : "nav-link",
              children: "About"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#!",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
              className: router.pathname == "/services" ? "nav-link active" : "nav-link",
              children: "Services"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#!",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
              className: router.pathname == "/projects" ? "nav-link active" : "nav-link",
              children: "Projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#!",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
              className: router.pathname == "/testemonials" ? "nav-link active" : "nav-link",
              children: "Testemonials"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Cform__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjc4NTE5N2QzOWExNTg4YjQyMDUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNVyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLGtCQUEwQ1gsK0NBQVEsQ0FBQyxLQUFELENBQWxEO0FBQUEsTUFBT1ksYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHWiw2Q0FBTSxFQUFyQjtBQUNBWSxFQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUJILGFBQWpCO0FBQ0FYLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1lLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsVUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsQ0FBOUI7O0FBQ0EsVUFBSUwsTUFBTSxDQUFDQyxPQUFQLEtBQW1CRSxJQUF2QixFQUE2QjtBQUMzQkosUUFBQUEsZ0JBQWdCLENBQUNJLElBQUQsQ0FBaEI7QUFDRDtBQUNGLEtBTEQ7O0FBTUFHLElBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0NMLFlBQXBDO0FBQ0EsV0FBTyxZQUFNO0FBQ1hJLE1BQUFBLFFBQVEsQ0FBQ0UsbUJBQVQsQ0FBNkIsUUFBN0IsRUFBdUNOLFlBQXZDO0FBQ0QsS0FGRDtBQUdELEdBWFEsRUFXTixFQVhNLENBQVQsQ0FKbUIsQ0FnQm5COztBQUNBLE1BQU1PLE1BQU0sR0FBR25CLHNEQUFTLEVBQXhCO0FBQ0Esc0JBQ0UsOERBQUMsMkRBQUQ7QUFDRSxVQUFNLEVBQUMsSUFEVDtBQUVFLFdBQU8sRUFBQyxPQUZWO0FBR0UsYUFBUyxFQUFFUSxhQUFhLEdBQUcsWUFBSCxHQUFrQixVQUg1QztBQUFBLDJCQUtFLDhEQUFDLDhEQUFEO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNFO0FBQUEsaUNBQ0UsOERBQUMsaUVBQUQ7QUFBYyxpQkFBSyxFQUFFO0FBQUNZLGNBQUFBLEtBQUssRUFBQztBQUFQLGFBQXJCO0FBQUEsb0NBQ0UsOERBQUMsbURBQUQ7QUFBTyxpQkFBRyxFQUFFZCxxREFBWjtBQUFrQixpQkFBRyxFQUFFLDBCQUF2QjtBQUFtRCxtQkFBSyxFQUFFLEVBQTFEO0FBQThELG9CQUFNLEVBQUU7QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQU0sbUJBQUssRUFBRTtBQUFDYyxnQkFBQUEsS0FBSyxFQUFMQTtBQUFELGVBQWI7QUFBQSxnREFBNEI7QUFBTSxxQkFBSyxFQUFFO0FBQUNBLGtCQUFBQSxLQUFLLEVBQUM7QUFBUCxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFTRSw4REFBQyxrRUFBRDtBQUFlLHlCQUFjO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURixlQVVFLDhEQUFDLG9FQUFEO0FBQWlCLFVBQUUsRUFBQyxZQUFwQjtBQUFBLGdDQUNFLDhEQUFDLHdEQUFEO0FBQUssbUJBQVMsRUFBQyxTQUFmO0FBQUEsa0NBQ0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLEdBQVg7QUFBQSxtQ0FDRTtBQUNFLHVCQUFTLEVBQ1BELE1BQU0sQ0FBQ0UsUUFBUCxJQUFtQixRQUFuQixHQUE4QixpQkFBOUIsR0FBa0QsVUFGdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBVUUsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLElBQVg7QUFBQSxtQ0FDRTtBQUNFLHVCQUFTLEVBQ1BGLE1BQU0sQ0FBQ0UsUUFBUCxJQUFtQixXQUFuQixHQUFpQyxpQkFBakMsR0FBcUQsVUFGekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGLGVBbUJFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxJQUFYO0FBQUEsbUNBQ0U7QUFDRSx1QkFBUyxFQUNQRixNQUFNLENBQUNFLFFBQVAsSUFBbUIsV0FBbkIsR0FBaUMsaUJBQWpDLEdBQXFELFVBRnpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQkYsZUE0QkUsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLElBQVg7QUFBQSxtQ0FDRTtBQUNFLHVCQUFTLEVBQ1BGLE1BQU0sQ0FBQ0UsUUFBUCxJQUFtQixlQUFuQixHQUFxQyxpQkFBckMsR0FBeUQsVUFGN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTVCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUF1Q0UsOERBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNERELENBOUVEOztHQUFNZDtVQWlCV1A7OztLQWpCWE87QUFnRk4sK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuLy8gQm9vdHN0cmFwXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI7XG5pbXBvcnQgTmF2IGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSBcIi4vQ2Zvcm1cIjtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9wdWJsaWMvbG9nby5zdmdcIjtcblxuY29uc3QgTmF2QmFyID0gKCkgPT4ge1xuICBjb25zdCBbbmF2QmFja2dyb3VuZCwgc2V0TmF2QmFja2dyb3VuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG5hdlJlZiA9IHVzZVJlZigpO1xuICBuYXZSZWYuY3VycmVudCA9IG5hdkJhY2tncm91bmQ7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2hvdyA9IHdpbmRvdy5zY3JvbGxZID4gMDtcbiAgICAgIGlmIChuYXZSZWYuY3VycmVudCAhPT0gc2hvdykge1xuICAgICAgICBzZXROYXZCYWNrZ3JvdW5kKHNob3cpO1xuICAgICAgfVxuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuICAvLyBBY3RpdmUgY2xhc3NcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPE5hdmJhclxuICAgICAgZXhwYW5kPVwibGdcIlxuICAgICAgdmFyaWFudD1cImxpZ2h0XCJcbiAgICAgIGNsYXNzTmFtZT17bmF2QmFja2dyb3VuZCA/IFwic3RpY2t5LW5hdlwiIDogXCJiZy13aGl0ZVwifVxuICAgID5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8TmF2YmFyLkJyYW5kIHN0eWxlPXt7Y29sb3I6XCJyZ2JhKDAsMTcsMTUsMSlcIn19PlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtMb2dvfSBhbHQ9eydDdXN0b20gVGltYmVyIFdvcmtzIExvZ28nfSB3aWR0aD17NTB9IGhlaWdodD17NDB9IC8+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3J9fT5DdXN0b208c3BhbiBzdHlsZT17e2NvbG9yOid5ZWxsb3cnfX0+VGltYmVyPC9zcGFuPldvcmtzPC9zcGFuPlxuICAgICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJuYXZiYXItbmF2XCIgLz5cbiAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cIm5hdmJhci1uYXZcIj5cbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1zLWF1dG9cIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9hYm91dFwiID8gXCJuYXYtbGluayBhY3RpdmVcIiA6IFwibmF2LWxpbmtcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjIVwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvc2VydmljZXNcIiA/IFwibmF2LWxpbmsgYWN0aXZlXCIgOiBcIm5hdi1saW5rXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTZXJ2aWNlc1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiIyFcIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL3Byb2plY3RzXCIgPyBcIm5hdi1saW5rIGFjdGl2ZVwiIDogXCJuYXYtbGlua1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiMhXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi90ZXN0ZW1vbmlhbHNcIiA/IFwibmF2LWxpbmsgYWN0aXZlXCIgOiBcIm5hdi1saW5rXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBUZXN0ZW1vbmlhbHNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgIDxDb250YWN0Rm9ybSAvPlxuICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTmF2YmFyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiTGluayIsInVzZVJvdXRlciIsIk5hdmJhciIsIk5hdiIsIkNvbnRhaW5lciIsIkNvbnRhY3RGb3JtIiwiSW1hZ2UiLCJMb2dvIiwiTmF2QmFyIiwibmF2QmFja2dyb3VuZCIsInNldE5hdkJhY2tncm91bmQiLCJuYXZSZWYiLCJjdXJyZW50IiwiaGFuZGxlU2Nyb2xsIiwic2hvdyIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicm91dGVyIiwiY29sb3IiLCJwYXRobmFtZSJdLCJzb3VyY2VSb290IjoiIn0=