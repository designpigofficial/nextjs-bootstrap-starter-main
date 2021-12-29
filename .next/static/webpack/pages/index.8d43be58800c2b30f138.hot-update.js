"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./dev/cube/src/App.jsx":
/*!******************************!*\
  !*** ./dev/cube/src/App.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/react/swiper-react.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\desig\\Desktop\\nextjs-bootstrap-starter-main\\nextjs-bootstrap-starter-main\\dev\\cube\\src\\App.jsx";
 // Import Swiper React components

 // import Swiper core and required modules

 // install Swiper modules



swiper__WEBPACK_IMPORTED_MODULE_2__.default.use([swiper__WEBPACK_IMPORTED_MODULE_2__.EffectCube, swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination]);
function App() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        "shadow": true,
        "slideShadows": true,
        "shadowOffset": 20,
        "shadowScale": 0.94
      },
      pagination: true,
      className: "mySwiper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
          src: "/1.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 16
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 3
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
          src: "2.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 63
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 50
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
          src: "https://swiperjs.com/demos/images/nature-3.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 109
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 96
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
          src: "https://swiperjs.com/demos/images/nature-4.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 196
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 183
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }, this)
  }, void 0, false);
}
_c = App;

var _c;

$RefreshReg$(_c, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGQ0M2JlNTg4MDBjMmIzMGYxMzguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7Q0FLQTs7Q0FLQTs7OztBQUNBSywrQ0FBQSxDQUFlLENBQUNDLDhDQUFELEVBQVlDLDhDQUFaLENBQWY7QUFHZSxTQUFTRSxHQUFULEdBQWU7QUFJNUIsc0JBQ0U7QUFBQSwyQkFDQSw4REFBQyxnREFBRDtBQUFRLFlBQU0sRUFBRSxNQUFoQjtBQUF3QixnQkFBVSxFQUFFLElBQXBDO0FBQTBDLGdCQUFVLEVBQUU7QUFDeEQsa0JBQVUsSUFEOEM7QUFFeEQsd0JBQWdCLElBRndDO0FBR3hELHdCQUFnQixFQUh3QztBQUl4RCx1QkFBZTtBQUp5QyxPQUF0RDtBQUtELGdCQUFVLEVBQUUsSUFMWDtBQUtpQixlQUFTLEVBQUMsVUFMM0I7QUFBQSw4QkFNRiw4REFBQyxxREFBRDtBQUFBLCtCQUFhO0FBQUssYUFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORSxlQU02Qyw4REFBQyxxREFBRDtBQUFBLCtCQUFhO0FBQUssYUFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FON0MsZUFNMkYsOERBQUMscURBQUQ7QUFBQSwrQkFBYTtBQUFLLGFBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTjNGLGVBTWtMLDhEQUFDLHFEQUFEO0FBQUEsK0JBQWE7QUFBSyxhQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5sTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFERjtBQVlEO0tBaEJ1QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGV2L2N1YmUvc3JjL0FwcC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gSW1wb3J0IFN3aXBlciBSZWFjdCBjb21wb25lbnRzXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xuXG5cblxuLy8gaW1wb3J0IFN3aXBlciBjb3JlIGFuZCByZXF1aXJlZCBtb2R1bGVzXG5pbXBvcnQgU3dpcGVyQ29yZSwge1xuICBFZmZlY3RDdWJlLFBhZ2luYXRpb25cbn0gZnJvbSAnc3dpcGVyJztcblxuLy8gaW5zdGFsbCBTd2lwZXIgbW9kdWxlc1xuU3dpcGVyQ29yZS51c2UoW0VmZmVjdEN1YmUsUGFnaW5hdGlvbl0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgXG4gIFxuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxTd2lwZXIgZWZmZWN0PXsnY3ViZSd9IGdyYWJDdXJzb3I9e3RydWV9IGN1YmVFZmZlY3Q9e3tcbiAgXCJzaGFkb3dcIjogdHJ1ZSxcbiAgXCJzbGlkZVNoYWRvd3NcIjogdHJ1ZSxcbiAgXCJzaGFkb3dPZmZzZXRcIjogMjAsXG4gIFwic2hhZG93U2NhbGVcIjogMC45NFxufX0gcGFnaW5hdGlvbj17dHJ1ZX0gY2xhc3NOYW1lPVwibXlTd2lwZXJcIj5cbiAgPFN3aXBlclNsaWRlPjxpbWcgc3JjPVwiLzEuanBnXCIgLz48L1N3aXBlclNsaWRlPjxTd2lwZXJTbGlkZT48aW1nIHNyYz1cIjIuanBnXCIgLz48L1N3aXBlclNsaWRlPjxTd2lwZXJTbGlkZT48aW1nIHNyYz1cImh0dHBzOi8vc3dpcGVyanMuY29tL2RlbW9zL2ltYWdlcy9uYXR1cmUtMy5qcGdcIiAvPjwvU3dpcGVyU2xpZGU+PFN3aXBlclNsaWRlPjxpbWcgc3JjPVwiaHR0cHM6Ly9zd2lwZXJqcy5jb20vZGVtb3MvaW1hZ2VzL25hdHVyZS00LmpwZ1wiIC8+PC9Td2lwZXJTbGlkZT5cbiAgPC9Td2lwZXI+XG4gICAgPC8+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiU3dpcGVyQ29yZSIsIkVmZmVjdEN1YmUiLCJQYWdpbmF0aW9uIiwidXNlIiwiQXBwIl0sInNvdXJjZVJvb3QiOiIifQ==