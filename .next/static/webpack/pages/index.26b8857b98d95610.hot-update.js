"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hooks/useGameLogic.tsx":
/*!********************************!*\
  !*** ./hooks/useGameLogic.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useGameLogic\": function() { return /* binding */ useGameLogic; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Draw */ \"./components/Draw.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nfunction useGameLogic(canvasRef) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), context = ref[0], setContext = ref[1];\n    var draw = new _components_Draw__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvasRef);\n    /*\tconst { windowWidth, windowHeight } = useWindowDimensions(); */ //   Set initial car value\n    var initialGameState = {};\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialGameState), gameState = ref1[0], setGameState = ref1[1];\n    return {\n        gameState: gameState\n    };\n}\n_s(useGameLogic, \"qoIBbGnuJTnEutKv+3Z+FamHSWQ=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VHYW1lTG9naWMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1EO0FBSWQ7O0FBRTlCLFNBQVNFLFlBQVksQ0FBQ0MsU0FBUyxFQUFFLENBQUM7O0lBQ3hDLEdBQUssQ0FBeUJILEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXBDSSxPQUFPLEdBQWdCSixHQUFjLEtBQTVCSyxVQUFVLEdBQUlMLEdBQWM7SUFDNUMsR0FBSyxDQUFDTSxJQUFJLEdBQUcsR0FBRyxDQUFDTCx3REFBSSxDQUFDRSxTQUFTO0lBQ2hDLEVBQWtFLGlFQUVsRSxFQUEwQjtJQUN6QixHQUFHLENBQUNJLGdCQUFnQixHQUFHLENBQUMsQ0FDdkI7SUFDRCxHQUFLLENBQTZCUCxJQUEwQixHQUExQkEsK0NBQVEsQ0FBQ08sZ0JBQWdCLEdBQXBEQyxTQUFTLEdBQWtCUixJQUEwQixLQUExQ1MsWUFBWSxHQUFJVCxJQUEwQjtJQUU1RCxNQUFNLENBQUMsQ0FBQ1E7UUFBQUEsU0FBUyxFQUFUQSxTQUFTO0lBQUEsQ0FBQztBQUNuQixDQUFDO0dBWGVOLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlR2FtZUxvZ2ljLnRzeD9kNWEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmltcG9ydCB7IHVzZVdpbmRvd0RpbWVuc2lvbnMgfSBmcm9tIFwiLi4vaG9va3MvdXNlV2luZG93RGltZW5zaW9uc1wiO1xuaW1wb3J0IERyYXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvRHJhd1wiXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VHYW1lTG9naWMoY2FudmFzUmVmKSB7XG5cdGNvbnN0IFtjb250ZXh0LCBzZXRDb250ZXh0XSA9IHVzZVN0YXRlKG51bGwpO1xuXHRjb25zdCBkcmF3ID0gbmV3IERyYXcoY2FudmFzUmVmKVxuLypcdGNvbnN0IHsgd2luZG93V2lkdGgsIHdpbmRvd0hlaWdodCB9ID0gdXNlV2luZG93RGltZW5zaW9ucygpOyAqL1xuXG4vLyAgIFNldCBpbml0aWFsIGNhciB2YWx1ZVxuXHRsZXQgaW5pdGlhbEdhbWVTdGF0ZSA9IHtcblx0fTtcblx0Y29uc3QgW2dhbWVTdGF0ZSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxHYW1lU3RhdGUpO1xuXG5cdHJldHVybiB7Z2FtZVN0YXRlfVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRHJhdyIsInVzZUdhbWVMb2dpYyIsImNhbnZhc1JlZiIsImNvbnRleHQiLCJzZXRDb250ZXh0IiwiZHJhdyIsImluaXRpYWxHYW1lU3RhdGUiLCJnYW1lU3RhdGUiLCJzZXRHYW1lU3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useGameLogic.tsx\n");

/***/ })

});