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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useGameLogic\": function() { return /* binding */ useGameLogic; }\n/* harmony export */ });\n/* harmony import */ var _components_Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Draw */ \"./components/Draw.tsx\");\n/* harmony import */ var _components_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Player */ \"./components/Player.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction useGameLogic(canvasRef, width, height) {\n    var draw = new _components_Draw__WEBPACK_IMPORTED_MODULE_0__.Draw(canvasRef, 1000, 600);\n    var Player1 = new _components_Player__WEBPACK_IMPORTED_MODULE_1__.Player(10, height / 2, 4, 20, 120, draw);\n    var Player2 = new _components_Player__WEBPACK_IMPORTED_MODULE_1__.Player(width - 30, height / 2, 4, 20, 120, draw);\n    /*\tconst { windowWidth, windowHeight } = useWindowDimensions(); */ var initialGameState = {};\n    /*const [gameState, setGameState] = useState(initialGameState);*/ Player1.draw();\n    Player2.draw();\n    return;\n}\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VHYW1lTG9naWMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJeUM7QUFDSTtBQUV0QyxTQUFTRSxZQUFZLENBQUNDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsQ0FBQztJQUN2RCxHQUFLLENBQUNDLElBQUksR0FBRyxHQUFHLENBQUNOLGtEQUFJLENBQUNHLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRztJQUMxQyxHQUFLLENBQUNJLE9BQU8sR0FBRyxHQUFHLENBQUNOLHNEQUFNLENBQUMsRUFBRSxFQUFFSSxNQUFNLEdBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFQyxJQUFJO0lBQzFELEdBQUssQ0FBQ0UsT0FBTyxHQUFHLEdBQUcsQ0FBQ1Asc0RBQU0sQ0FBQ0csS0FBSyxHQUFHLEVBQUUsRUFBRUMsTUFBTSxHQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRUMsSUFBSTtJQUNuRSxFQUFrRSxpRUFFakUsR0FBRyxDQUFDRyxnQkFBZ0IsR0FBRyxDQUFDLENBQ3ZCO0lBQ0QsRUFBaUUsZ0VBQ2pFRixPQUFPLENBQUNELElBQUk7SUFDWkUsT0FBTyxDQUFDRixJQUFJO0lBQ1osTUFBTTtBQUNQLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlR2FtZUxvZ2ljLnRzeD9kNWEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmltcG9ydCB7IHVzZVdpbmRvd0RpbWVuc2lvbnMgfSBmcm9tIFwiLi4vaG9va3MvdXNlV2luZG93RGltZW5zaW9uc1wiO1xuaW1wb3J0IHsgRHJhdyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0RyYXdcIlxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGxheWVyXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdhbWVMb2dpYyhjYW52YXNSZWYsIHdpZHRoLCBoZWlnaHQpIHtcblx0Y29uc3QgZHJhdyA9IG5ldyBEcmF3KGNhbnZhc1JlZiwgMTAwMCwgNjAwKVxuXHRjb25zdCBQbGF5ZXIxID0gbmV3IFBsYXllcigxMCwgaGVpZ2h0IC8yLCA0LCAyMCwgMTIwLCBkcmF3KTtcblx0Y29uc3QgUGxheWVyMiA9IG5ldyBQbGF5ZXIod2lkdGggLSAzMCwgaGVpZ2h0IC8yLCA0LCAyMCwgMTIwLCBkcmF3KTtcbi8qXHRjb25zdCB7IHdpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHQgfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTsgKi9cblxuXHRsZXQgaW5pdGlhbEdhbWVTdGF0ZSA9IHtcblx0fTtcblx0Lypjb25zdCBbZ2FtZVN0YXRlLCBzZXRHYW1lU3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbEdhbWVTdGF0ZSk7Ki9cblx0UGxheWVyMS5kcmF3KCk7XG5cdFBsYXllcjIuZHJhdygpO1xuXHRyZXR1cm4gO1xufVxuIl0sIm5hbWVzIjpbIkRyYXciLCJQbGF5ZXIiLCJ1c2VHYW1lTG9naWMiLCJjYW52YXNSZWYiLCJ3aWR0aCIsImhlaWdodCIsImRyYXciLCJQbGF5ZXIxIiwiUGxheWVyMiIsImluaXRpYWxHYW1lU3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useGameLogic.tsx\n");

/***/ })

});