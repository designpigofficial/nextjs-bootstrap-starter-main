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
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo */ "./components/logo.js");
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
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
              src: _logo__WEBPACK_IMPORTED_MODULE_5__.default,
              alt: 'Custom Timber Works Logo'
            }, void 0, false, {
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__.default.Toggle, {
        "aria-controls": "navbar-nav"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
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
              lineNumber: 49,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#!",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
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
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#!",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
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
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "#!",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Cform__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTU1ZGE3OTRlOGZkY2JiNjEwNTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNVyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLGtCQUEwQ1gsK0NBQVEsQ0FBQyxLQUFELENBQWxEO0FBQUEsTUFBT1ksYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHWiw2Q0FBTSxFQUFyQjtBQUNBWSxFQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUJILGFBQWpCO0FBQ0FYLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1lLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsVUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsQ0FBOUI7O0FBQ0EsVUFBSUwsTUFBTSxDQUFDQyxPQUFQLEtBQW1CRSxJQUF2QixFQUE2QjtBQUMzQkosUUFBQUEsZ0JBQWdCLENBQUNJLElBQUQsQ0FBaEI7QUFDRDtBQUNGLEtBTEQ7O0FBTUFHLElBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0NMLFlBQXBDO0FBQ0EsV0FBTyxZQUFNO0FBQ1hJLE1BQUFBLFFBQVEsQ0FBQ0UsbUJBQVQsQ0FBNkIsUUFBN0IsRUFBdUNOLFlBQXZDO0FBQ0QsS0FGRDtBQUdELEdBWFEsRUFXTixFQVhNLENBQVQsQ0FKbUIsQ0FnQm5COztBQUNBLE1BQU1PLE1BQU0sR0FBR25CLHNEQUFTLEVBQXhCO0FBQ0Esc0JBQ0UsOERBQUMsMkRBQUQ7QUFDRSxVQUFNLEVBQUMsSUFEVDtBQUVFLFdBQU8sRUFBQyxPQUZWO0FBR0UsYUFBUyxFQUFFUSxhQUFhLEdBQUcsWUFBSCxHQUFrQixVQUg1QztBQUFBLDJCQUtFLDhEQUFDLDhEQUFEO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNFO0FBQUEsaUNBQ0UsOERBQUMsaUVBQUQ7QUFBYyxpQkFBSyxFQUFFO0FBQUNZLGNBQUFBLEtBQUssRUFBQztBQUFQLGFBQXJCO0FBQUEsbUNBQ0UsOERBQUMsbURBQUQ7QUFBTyxpQkFBRyxFQUFFZCwwQ0FBWjtBQUFrQixpQkFBRyxFQUFFO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVFFLDhEQUFDLGtFQUFEO0FBQWUseUJBQWM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGLGVBU0UsOERBQUMsb0VBQUQ7QUFBaUIsVUFBRSxFQUFDLFlBQXBCO0FBQUEsZ0NBQ0UsOERBQUMsd0RBQUQ7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxrQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBLG1DQUNFO0FBQ0UsdUJBQVMsRUFDUGEsTUFBTSxDQUFDRSxRQUFQLElBQW1CLFFBQW5CLEdBQThCLGlCQUE5QixHQUFrRCxVQUZ0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFVRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsSUFBWDtBQUFBLG1DQUNFO0FBQ0UsdUJBQVMsRUFDUEYsTUFBTSxDQUFDRSxRQUFQLElBQW1CLFdBQW5CLEdBQWlDLGlCQUFqQyxHQUFxRCxVQUZ6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkYsZUFtQkUsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLElBQVg7QUFBQSxtQ0FDRTtBQUNFLHVCQUFTLEVBQ1BGLE1BQU0sQ0FBQ0UsUUFBUCxJQUFtQixXQUFuQixHQUFpQyxpQkFBakMsR0FBcUQsVUFGekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5CRixlQTRCRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsSUFBWDtBQUFBLG1DQUNFO0FBQ0UsdUJBQVMsRUFDUEYsTUFBTSxDQUFDRSxRQUFQLElBQW1CLGVBQW5CLEdBQXFDLGlCQUFyQyxHQUF5RCxVQUY3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQXVDRSw4REFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyREQsQ0E3RUQ7O0dBQU1kO1VBaUJXUDs7O0tBakJYTztBQStFTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdkJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG4vLyBCb290c3RyYXBcbmltcG9ydCBOYXZiYXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIjtcbmltcG9ydCBOYXYgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwiLi9DZm9ybVwiO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4vbG9nb1wiO1xuXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYXZCYWNrZ3JvdW5kLCBzZXROYXZCYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgbmF2UmVmID0gdXNlUmVmKCk7XG4gIG5hdlJlZi5jdXJyZW50ID0gbmF2QmFja2dyb3VuZDtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzaG93ID0gd2luZG93LnNjcm9sbFkgPiAwO1xuICAgICAgaWYgKG5hdlJlZi5jdXJyZW50ICE9PSBzaG93KSB7XG4gICAgICAgIHNldE5hdkJhY2tncm91bmQoc2hvdyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIC8vIEFjdGl2ZSBjbGFzc1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8TmF2YmFyXG4gICAgICBleHBhbmQ9XCJsZ1wiXG4gICAgICB2YXJpYW50PVwibGlnaHRcIlxuICAgICAgY2xhc3NOYW1lPXtuYXZCYWNrZ3JvdW5kID8gXCJzdGlja3ktbmF2XCIgOiBcImJnLXdoaXRlXCJ9XG4gICAgPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgc3R5bGU9e3tjb2xvcjpcInJnYmEoMCwxNywxNSwxKVwifX0+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0xvZ299IGFsdD17J0N1c3RvbSBUaW1iZXIgV29ya3MgTG9nbyd9IC8+XG4gICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cIm5hdmJhci1uYXZcIiAvPlxuICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwibmF2YmFyLW5hdlwiPlxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXMtYXV0b1wiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL2Fib3V0XCIgPyBcIm5hdi1saW5rIGFjdGl2ZVwiIDogXCJuYXYtbGlua1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiMhXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9zZXJ2aWNlc1wiID8gXCJuYXYtbGluayBhY3RpdmVcIiA6IFwibmF2LWxpbmtcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNlcnZpY2VzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjIVwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvcHJvamVjdHNcIiA/IFwibmF2LWxpbmsgYWN0aXZlXCIgOiBcIm5hdi1saW5rXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQcm9qZWN0c1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiIyFcIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL3Rlc3RlbW9uaWFsc1wiID8gXCJuYXYtbGluayBhY3RpdmVcIiA6IFwibmF2LWxpbmtcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFRlc3RlbW9uaWFsc1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgPENvbnRhY3RGb3JtIC8+XG4gICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9OYXZiYXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJMaW5rIiwidXNlUm91dGVyIiwiTmF2YmFyIiwiTmF2IiwiQ29udGFpbmVyIiwiQ29udGFjdEZvcm0iLCJJbWFnZSIsIkxvZ28iLCJOYXZCYXIiLCJuYXZCYWNrZ3JvdW5kIiwic2V0TmF2QmFja2dyb3VuZCIsIm5hdlJlZiIsImN1cnJlbnQiLCJoYW5kbGVTY3JvbGwiLCJzaG93Iiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyb3V0ZXIiLCJjb2xvciIsInBhdGhuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==