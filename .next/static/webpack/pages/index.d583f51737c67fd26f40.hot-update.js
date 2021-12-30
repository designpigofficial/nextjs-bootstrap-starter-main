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
                color: '#022022'
              },
              children: ["Custom", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
                style: {
                  color: 'yellow'
                },
                children: "Timber"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 53
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
              className: router.pathname == "#Projects" ? "nav-link active" : "nav-link",
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


/***/ }),

/***/ "./components/home/Projects.js":
/*!*************************************!*\
  !*** ./components/home/Projects.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\desig\\Desktop\\nextjs-bootstrap-starter-main\\nextjs-bootstrap-starter-main\\components\\home\\Projects.js",
    _this = undefined;






var Projects = function Projects() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
    className: "projects space-2 bg-secondary",
    id: "projects",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
        xs: 1,
        md: 2,
        className: "g-4",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
            md: 4,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
              className: "shadow-sm",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "card-img-top",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                  src: "/5.jpg",
                  alt: "Image Description",
                  layout: "responsive",
                  objectFit: "cover",
                  width: 160,
                  height: 100,
                  blurDataURL: "/img-placeholder.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {
                  children: "Card title"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Text, {
                  children: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
            md: 4,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
              className: "shadow-sm",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "card-img-top",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                  src: "/6.jpg",
                  alt: "Image Description",
                  layout: "responsive",
                  objectFit: "cover",
                  width: 160,
                  height: 100,
                  blurDataURL: "/img-placeholder.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {
                  children: "Card title"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Text, {
                  children: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
            md: 4,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
              className: "shadow-sm",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "card-img-top",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                  src: "/7.jpg",
                  alt: "Image Description",
                  layout: "responsive",
                  objectFit: "cover",
                  width: 160,
                  height: 100,
                  blurDataURL: "/img-placeholder.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {
                  children: "Card title"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Text, {
                  children: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
            md: 4,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
              className: "shadow-sm",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "card-img-top",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                  src: "/8.jpg",
                  alt: "Image Description",
                  layout: "responsive",
                  objectFit: "cover",
                  width: 160,
                  height: 100,
                  blurDataURL: "/img-placeholder.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {
                  children: "Card title"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Text, {
                  children: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
            md: 4,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
              className: "shadow-sm",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "card-img-top",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                  src: "/9.jpg",
                  alt: "Image Description",
                  layout: "responsive",
                  objectFit: "cover",
                  width: 160,
                  height: 100,
                  blurDataURL: "/img-placeholder.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {
                  children: "Card title"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Text, {
                  children: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
            md: 4,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card, {
              className: "shadow-sm",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "card-img-top",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                  src: "/10.jpg",
                  alt: "Image Description",
                  layout: "responsive",
                  objectFit: "cover",
                  width: 160,
                  height: 100,
                  blurDataURL: "/img-placeholder.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Body, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Title, {
                  children: "Card title"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Card.Text, {
                  children: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, _this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = Projects;
/* harmony default export */ __webpack_exports__["default"] = (Projects);

var _c;

$RefreshReg$(_c, "Projects");

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_home_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/home/Hero */ "./components/home/Hero.js");
/* harmony import */ var _components_home_Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home/Projects */ "./components/home/Projects.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\desig\\Desktop\\nextjs-bootstrap-starter-main\\nextjs-bootstrap-starter-main\\pages\\index.js";





function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("title", {
        children: "Custom Timber Works"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        name: "description",
        content: "Building Custom Homes In Colorado For Over 30 Years"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("main", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_home_Hero__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_home_Projects__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDU4M2Y1MTczN2M2N2ZkMjZmNDAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNVyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLGtCQUEwQ1gsK0NBQVEsQ0FBQyxLQUFELENBQWxEO0FBQUEsTUFBT1ksYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHWiw2Q0FBTSxFQUFyQjtBQUNBWSxFQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUJILGFBQWpCO0FBQ0FYLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1lLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsVUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsQ0FBOUI7O0FBQ0EsVUFBSUwsTUFBTSxDQUFDQyxPQUFQLEtBQW1CRSxJQUF2QixFQUE2QjtBQUMzQkosUUFBQUEsZ0JBQWdCLENBQUNJLElBQUQsQ0FBaEI7QUFDRDtBQUNGLEtBTEQ7O0FBTUFHLElBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0NMLFlBQXBDO0FBQ0EsV0FBTyxZQUFNO0FBQ1hJLE1BQUFBLFFBQVEsQ0FBQ0UsbUJBQVQsQ0FBNkIsUUFBN0IsRUFBdUNOLFlBQXZDO0FBQ0QsS0FGRDtBQUdELEdBWFEsRUFXTixFQVhNLENBQVQsQ0FKbUIsQ0FnQm5COztBQUNBLE1BQU1PLE1BQU0sR0FBR25CLHNEQUFTLEVBQXhCO0FBQ0Esc0JBQ0UsOERBQUMsMkRBQUQ7QUFDRSxVQUFNLEVBQUMsSUFEVDtBQUVFLFdBQU8sRUFBQyxPQUZWO0FBR0UsYUFBUyxFQUFFUSxhQUFhLEdBQUcsWUFBSCxHQUFrQixVQUg1QztBQUFBLDJC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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVKQTtBQUVBO0FBQ0E7QUFFQTs7QUFFZSxTQUFTSSxJQUFULEdBQWdCO0FBQzdCLHNCQUNFLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBQSw4QkFDRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDtLQWR1QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZS9Qcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuLy8gQm9vdHN0cmFwXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI7XG5pbXBvcnQgTmF2IGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSBcIi4vQ2Zvcm1cIjtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9wdWJsaWMvbG9nby5zdmdcIjtcblxuY29uc3QgTmF2QmFyID0gKCkgPT4ge1xuICBjb25zdCBbbmF2QmFja2dyb3VuZCwgc2V0TmF2QmFja2dyb3VuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG5hdlJlZiA9IHVzZVJlZigpO1xuICBuYXZSZWYuY3VycmVudCA9IG5hdkJhY2tncm91bmQ7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2hvdyA9IHdpbmRvdy5zY3JvbGxZID4gMDtcbiAgICAgIGlmIChuYXZSZWYuY3VycmVudCAhPT0gc2hvdykge1xuICAgICAgICBzZXROYXZCYWNrZ3JvdW5kKHNob3cpO1xuICAgICAgfVxuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuICAvLyBBY3RpdmUgY2xhc3NcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPE5hdmJhclxuICAgICAgZXhwYW5kPVwibGdcIlxuICAgICAgdmFyaWFudD1cImxpZ2h0XCJcbiAgICAgIGNsYXNzTmFtZT17bmF2QmFja2dyb3VuZCA/IFwic3RpY2t5LW5hdlwiIDogXCJiZy13aGl0ZVwifVxuICAgID5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8TmF2YmFyLkJyYW5kIHN0eWxlPXt7Y29sb3I6XCJyZ2JhKDAsMTcsMTUsMSlcIn19PlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtMb2dvfSBhbHQ9eydDdXN0b20gVGltYmVyIFdvcmtzIExvZ28nfSB3aWR0aD17NTB9IGhlaWdodD17NDB9IC8+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6JyMwMjIwMjInfX0+Q3VzdG9tPHNwYW4gc3R5bGU9e3tjb2xvcjoneWVsbG93J319PlRpbWJlcjwvc3Bhbj5Xb3Jrczwvc3Bhbj5cbiAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwibmF2YmFyLW5hdlwiIC8+XG4gICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJuYXZiYXItbmF2XCI+XG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtcy1hdXRvXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvYWJvdXRcIiA/IFwibmF2LWxpbmsgYWN0aXZlXCIgOiBcIm5hdi1saW5rXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiIyFcIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL3NlcnZpY2VzXCIgPyBcIm5hdi1saW5rIGFjdGl2ZVwiIDogXCJuYXYtbGlua1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2VydmljZXNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiMhXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIiNQcm9qZWN0c1wiID8gXCJuYXYtbGluayBhY3RpdmVcIiA6IFwibmF2LWxpbmtcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFByb2plY3RzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjIVwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvdGVzdGVtb25pYWxzXCIgPyBcIm5hdi1saW5rIGFjdGl2ZVwiIDogXCJuYXYtbGlua1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVGVzdGVtb25pYWxzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L05hdj5cbiAgICAgICAgICA8Q29udGFjdEZvcm0gLz5cbiAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L05hdmJhcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiIsImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgQ29sLCBDb250YWluZXIsIFJvdywgQ2FyZCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvamVjdHMgc3BhY2UtMiBiZy1zZWNvbmRhcnlcIiBpZD1cInByb2plY3RzXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Um93IHhzPXsxfSBtZD17Mn0gY2xhc3NOYW1lPVwiZy00XCI+XG5cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxDb2wgbWQ9ezR9PlxuICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiPlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi81LmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkltYWdlIERlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE2MH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICAgICAgICAgIGJsdXJEYXRhVVJMPVwiL2ltZy1wbGFjZWhvbGRlci5zdmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5DYXJkIHRpdGxlPC9DYXJkLlRpdGxlPlxuICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBhIGxvbmdlciBjYXJkIHdpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGFcbiAgICAgICAgICAgICAgICAgICAgbmF0dXJhbCBsZWFkLWluIHRvIGFkZGl0aW9uYWwgY29udGVudC4gVGhpcyBjb250ZW50IGlzIGFcbiAgICAgICAgICAgICAgICAgICAgbGl0dGxlIGJpdCBsb25nZXIuXG4gICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxDb2wgbWQ9ezR9PlxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLzYuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJbWFnZSBEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNjB9XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgYmx1ckRhdGFVUkw9XCIvaW1nLXBsYWNlaG9sZGVyLnN2Z1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPkNhcmQgdGl0bGU8L0NhcmQuVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBhIGxvbmdlciBjYXJkIHdpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGFcbiAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsIGxlYWQtaW4gdG8gYWRkaXRpb25hbCBjb250ZW50LiBUaGlzIGNvbnRlbnQgaXMgYVxuICAgICAgICAgICAgICAgICAgICAgIGxpdHRsZSBiaXQgbG9uZ2VyLlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICAgIDxDb2wgbWQ9ezR9PlxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLzcuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJbWFnZSBEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNjB9XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgYmx1ckRhdGFVUkw9XCIvaW1nLXBsYWNlaG9sZGVyLnN2Z1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPkNhcmQgdGl0bGU8L0NhcmQuVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBhIGxvbmdlciBjYXJkIHdpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGFcbiAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsIGxlYWQtaW4gdG8gYWRkaXRpb25hbCBjb250ZW50LiBUaGlzIGNvbnRlbnQgaXMgYVxuICAgICAgICAgICAgICAgICAgICAgIGxpdHRsZSBiaXQgbG9uZ2VyLlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICAgIDxDb2wgbWQ9ezR9PlxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLzguanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJbWFnZSBEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNjB9XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgYmx1ckRhdGFVUkw9XCIvaW1nLXBsYWNlaG9sZGVyLnN2Z1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPkNhcmQgdGl0bGU8L0NhcmQuVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBhIGxvbmdlciBjYXJkIHdpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGFcbiAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsIGxlYWQtaW4gdG8gYWRkaXRpb25hbCBjb250ZW50LiBUaGlzIGNvbnRlbnQgaXMgYVxuICAgICAgICAgICAgICAgICAgICAgIGxpdHRsZSBiaXQgbG9uZ2VyLlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICAgIDxDb2wgbWQ9ezR9PlxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLzkuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJbWFnZSBEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNjB9XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgYmx1ckRhdGFVUkw9XCIvaW1nLXBsYWNlaG9sZGVyLnN2Z1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPkNhcmQgdGl0bGU8L0NhcmQuVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBhIGxvbmdlciBjYXJkIHdpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGFcbiAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsIGxlYWQtaW4gdG8gYWRkaXRpb25hbCBjb250ZW50LiBUaGlzIGNvbnRlbnQgaXMgYVxuICAgICAgICAgICAgICAgICAgICAgIGxpdHRsZSBiaXQgbG9uZ2VyLlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICAgIDxDb2wgbWQ9ezR9PlxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLzEwLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiSW1hZ2UgRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTYwfVxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgICAgICAgICAgIGJsdXJEYXRhVVJMPVwiL2ltZy1wbGFjZWhvbGRlci5zdmdcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5DYXJkIHRpdGxlPC9DYXJkLlRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgYSBsb25nZXIgY2FyZCB3aXRoIHN1cHBvcnRpbmcgdGV4dCBiZWxvdyBhcyBhXG4gICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbCBsZWFkLWluIHRvIGFkZGl0aW9uYWwgY29udGVudC4gVGhpcyBjb250ZW50IGlzIGFcbiAgICAgICAgICAgICAgICAgICAgICBsaXR0bGUgYml0IGxvbmdlci5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XG4gICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCBIZXJvIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvSGVyb1wiO1xuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvUHJvamVjdHNcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DdXN0b20gVGltYmVyIFdvcmtzPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkJ1aWxkaW5nIEN1c3RvbSBIb21lcyBJbiBDb2xvcmFkbyBGb3IgT3ZlciAzMCBZZWFyc1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8SGVybyAvPlxuICAgICAgICA8UHJvamVjdHMgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJOYXZiYXIiLCJOYXYiLCJDb250YWluZXIiLCJDb250YWN0Rm9ybSIsIkltYWdlIiwiTG9nbyIsIk5hdkJhciIsIm5hdkJhY2tncm91bmQiLCJzZXROYXZCYWNrZ3JvdW5kIiwibmF2UmVmIiwiY3VycmVudCIsImhhbmRsZVNjcm9sbCIsInNob3ciLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJvdXRlciIsImNvbG9yIiwicGF0aG5hbWUiLCJDb2wiLCJSb3ciLCJDYXJkIiwiUHJvamVjdHMiLCJIZWFkIiwiSGVybyIsIkxheW91dCIsIkhvbWUiXSwic291cmNlUm9vdCI6IiJ9