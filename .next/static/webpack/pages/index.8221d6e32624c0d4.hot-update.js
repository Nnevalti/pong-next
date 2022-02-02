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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useGameLogic\": function() { return /* binding */ useGameLogic; }\n/* harmony export */ });\n/* harmony import */ var _components_Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Draw */ \"./components/Draw.tsx\");\n/* harmony import */ var _components_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Player */ \"./components/Player.tsx\");\n/* harmony import */ var _components_Ball__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Ball */ \"./components/Ball.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction useGameLogic(canvasRef, width, height) {\n    var draw = new _components_Draw__WEBPACK_IMPORTED_MODULE_0__.Draw(canvasRef, 1000, 600);\n    var player1 = new _components_Player__WEBPACK_IMPORTED_MODULE_1__.Player(10, height / 2, 4, 20, 120, draw);\n    var player2 = new _components_Player__WEBPACK_IMPORTED_MODULE_1__.Player(width - 30, height / 2, 4, 20, 120, draw);\n    var ball = new _components_Ball__WEBPACK_IMPORTED_MODULE_2__.Ball(width / 2, height / 2, 15, 4, 0.5, player1, player2, draw);\n    /* let initialGameState = {\n\t}; */ /*const [gameState, setGameState] = useState(initialGameState);*/ player1.draw();\n    player2.draw();\n    ball.draw();\n    return {\n        player1: player1,\n        player2: player2,\n        ball: ball\n    };\n}\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VHYW1lTG9naWMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSXlDO0FBQ0k7QUFDSjtBQUVsQyxTQUFTRyxZQUFZLENBQUNDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsQ0FBQztJQUN2RCxHQUFLLENBQUNDLElBQUksR0FBRyxHQUFHLENBQUNQLGtEQUFJLENBQUNJLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRztJQUMxQyxHQUFLLENBQUNJLE9BQU8sR0FBRyxHQUFHLENBQUNQLHNEQUFNLENBQUMsRUFBRSxFQUFFSyxNQUFNLEdBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFQyxJQUFJO0lBQzFELEdBQUssQ0FBQ0UsT0FBTyxHQUFHLEdBQUcsQ0FBQ1Isc0RBQU0sQ0FBQ0ksS0FBSyxHQUFHLEVBQUUsRUFBRUMsTUFBTSxHQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRUMsSUFBSTtJQUNsRSxHQUFLLENBQUNHLElBQUksR0FBRyxHQUFHLENBQUNSLGtEQUFJLENBQUNHLEtBQUssR0FBRSxDQUFDLEVBQUVDLE1BQU0sR0FBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUVFLE9BQU8sRUFBRUMsT0FBTyxFQUFFRixJQUFJO0lBRTdFLEVBQ0s7SUFBQSxHQUNMLEVBQWlFLGdFQUNqRUMsT0FBTyxDQUFDRCxJQUFJO0lBQ1pFLE9BQU8sQ0FBQ0YsSUFBSTtJQUNaRyxJQUFJLENBQUNILElBQUk7SUFDVCxNQUFNLENBQUMsQ0FBQ0M7UUFBQUEsT0FBTyxFQUFQQSxPQUFPO1FBQUVDLE9BQU8sRUFBUEEsT0FBTztRQUFFQyxJQUFJLEVBQUpBLElBQUk7SUFBQSxDQUFDO0FBQ2hDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlR2FtZUxvZ2ljLnRzeD9kNWEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmltcG9ydCB7IHVzZVdpbmRvd0RpbWVuc2lvbnMgfSBmcm9tIFwiLi4vaG9va3MvdXNlV2luZG93RGltZW5zaW9uc1wiO1xuaW1wb3J0IHsgRHJhdyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0RyYXdcIlxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGxheWVyXCJcbmltcG9ydCB7IEJhbGwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CYWxsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdhbWVMb2dpYyhjYW52YXNSZWYsIHdpZHRoLCBoZWlnaHQpIHtcblx0Y29uc3QgZHJhdyA9IG5ldyBEcmF3KGNhbnZhc1JlZiwgMTAwMCwgNjAwKVxuXHRjb25zdCBwbGF5ZXIxID0gbmV3IFBsYXllcigxMCwgaGVpZ2h0IC8yLCA0LCAyMCwgMTIwLCBkcmF3KTtcblx0Y29uc3QgcGxheWVyMiA9IG5ldyBQbGF5ZXIod2lkdGggLSAzMCwgaGVpZ2h0IC8yLCA0LCAyMCwgMTIwLCBkcmF3KTtcblx0Y29uc3QgYmFsbCA9IG5ldyBCYWxsKHdpZHRoIC8yLCBoZWlnaHQgLzIsIDE1LCA0LCAwLjUsIHBsYXllcjEsIHBsYXllcjIsIGRyYXcpO1xuXG5cdC8qIGxldCBpbml0aWFsR2FtZVN0YXRlID0ge1xuXHR9OyAqL1xuXHQvKmNvbnN0IFtnYW1lU3RhdGUsIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsR2FtZVN0YXRlKTsqL1xuXHRwbGF5ZXIxLmRyYXcoKTtcblx0cGxheWVyMi5kcmF3KCk7XG5cdGJhbGwuZHJhdygpO1xuXHRyZXR1cm4ge3BsYXllcjEsIHBsYXllcjIsIGJhbGx9XG59XG4iXSwibmFtZXMiOlsiRHJhdyIsIlBsYXllciIsIkJhbGwiLCJ1c2VHYW1lTG9naWMiLCJjYW52YXNSZWYiLCJ3aWR0aCIsImhlaWdodCIsImRyYXciLCJwbGF5ZXIxIiwicGxheWVyMiIsImJhbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useGameLogic.tsx\n");

/***/ })

});