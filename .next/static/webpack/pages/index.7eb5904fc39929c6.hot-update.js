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

/***/ "./components/Draw.tsx":
/*!*****************************!*\
  !*** ./components/Draw.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Draw\": function() { return /* binding */ Draw; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nvar Draw = /*#__PURE__*/ function() {\n    \"use strict\";\n    function Draw(canvasRef /*, width, height*/ ) {\n        _classCallCheck(this, Draw);\n        this.canvas = canvasRef;\n        this.context = this.canvas.getContext(\"2d\");\n    }\n    _createClass(Draw, [\n        {\n            key: \"clear\",\n            value: function clear() {\n                this.context.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);\n            }\n        },\n        {\n            key: \"drawRectangle\",\n            value: function drawRectangle(x, y, width, height, color) {\n                this.context.save();\n                this.context.fillStyle = color;\n                this.context.fillRect(x, y, width, height);\n                this.contect.restore();\n            }\n        },\n        {\n            key: \"drawCircle\",\n            value: function drawCircle(x, y, radius, color) {\n                this.context.save();\n                this.context.beginPath();\n                this.context.arc(x, y, radius, 0, 2 * Math.PI, true);\n                this.context.fillStyle = color;\n                this.context.fill();\n                this.context.stroke();\n                this.contect.restore();\n            }\n        }\n    ]);\n    return Draw;\n}();\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RyYXcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLElBQUksaUJBQVYsUUFBUTs7YUFBRkEsSUFBSSxDQUlKQyxTQUFTLENBQW1COztRQUN2QyxJQUFJLENBQUNDLE1BQU0sR0FBR0QsU0FBUztRQUN2QixJQUFJLENBQUNFLE9BQU8sR0FBRyxJQUFJLENBQUNELE1BQU0sQ0FBQ0UsVUFBVSxDQUFDLENBQUk7Ozs7WUFLM0NDLEdBQUssRUFBTEEsQ0FBSzttQkFBTEEsUUFBUSxDQUFSQSxLQUFLLEdBQUcsQ0FBQztnQkFDUixJQUFJLENBQUNGLE9BQU8sQ0FBQ0csU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDQyxRQUFRLENBQUNDLEtBQUssRUFBRSxJQUFJLENBQUNELFFBQVEsQ0FBQ0UsTUFBTTtZQUN2RSxDQUFDOzs7WUFFREMsR0FBYSxFQUFiQSxDQUFhO21CQUFiQSxRQUFRLENBQVJBLGFBQWEsQ0FBQ0MsQ0FBUyxFQUFFQyxDQUFTLEVBQUVKLEtBQWEsRUFBRUMsTUFBYyxFQUFFSSxLQUFhLEVBQUUsQ0FBQztnQkFDbEYsSUFBSSxDQUFDVixPQUFPLENBQUNXLElBQUk7Z0JBQ2pCLElBQUksQ0FBQ1gsT0FBTyxDQUFDWSxTQUFTLEdBQUdGLEtBQUs7Z0JBQzlCLElBQUksQ0FBQ1YsT0FBTyxDQUFDYSxRQUFRLENBQUNMLENBQUMsRUFBRUMsQ0FBQyxFQUFFSixLQUFLLEVBQUVDLE1BQU07Z0JBQ3pDLElBQUksQ0FBQ1EsT0FBTyxDQUFDQyxPQUFPO1lBQ3JCLENBQUM7OztZQUVEQyxHQUFVLEVBQVZBLENBQVU7bUJBQVZBLFFBQVEsQ0FBUkEsVUFBVSxDQUFDUixDQUFTLEVBQUVDLENBQVMsRUFBRVEsTUFBYyxFQUFFUCxLQUFhLEVBQUUsQ0FBQztnQkFDaEUsSUFBSSxDQUFDVixPQUFPLENBQUNXLElBQUk7Z0JBQ2pCLElBQUksQ0FBQ1gsT0FBTyxDQUFDa0IsU0FBUztnQkFDdEIsSUFBSSxDQUFDbEIsT0FBTyxDQUFDbUIsR0FBRyxDQUFDWCxDQUFDLEVBQUVDLENBQUMsRUFBRVEsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUdHLElBQUksQ0FBQ0MsRUFBRSxFQUFFLElBQUk7Z0JBQ25ELElBQUksQ0FBQ3JCLE9BQU8sQ0FBQ1ksU0FBUyxHQUFHRixLQUFLO2dCQUM5QixJQUFJLENBQUNWLE9BQU8sQ0FBQ3NCLElBQUk7Z0JBQ2pCLElBQUksQ0FBQ3RCLE9BQU8sQ0FBQ3VCLE1BQU07Z0JBQ25CLElBQUksQ0FBQ1QsT0FBTyxDQUFDQyxPQUFPO1lBQ3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3LnRzeD80MmJiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBEcmF3IHtcblx0Y2FudmFzRWw6IEhUTUxDYW52YXNFbGVtZW50O1xuXHRjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cblx0Y29uc3RydWN0b3IoY2FudmFzUmVmLyosIHdpZHRoLCBoZWlnaHQqLykge1xuXHRcdHRoaXMuY2FudmFzID0gY2FudmFzUmVmO1xuXHRcdHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbi8qXHRcdHRoaXMuY2FudmFzRWwud2lkdGggPSB3aWR0aDtcblx0XHR0aGlzLmNhbnZhc0VsLmhlaWdodCA9IGhlaWdodDsgKi9cblx0fVxuXG5cdGNsZWFyKCkge1xuXHRcdHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNFbC53aWR0aCwgdGhpcy5jYW52YXNFbC5oZWlnaHQpO1xuXHR9XG5cblx0ZHJhd1JlY3RhbmdsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcpIHtcblx0XHR0aGlzLmNvbnRleHQuc2F2ZSgpXG5cdFx0dGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xuXHRcdHRoaXMuY29udGV4dC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcblx0XHR0aGlzLmNvbnRlY3QucmVzdG9yZSgpXG5cdH1cblxuXHRkcmF3Q2lyY2xlKHg6IG51bWJlciwgeTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgY29sb3I6IHN0cmluZykge1xuXHRcdHRoaXMuY29udGV4dC5zYXZlKClcblx0XHR0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG5cdFx0dGhpcy5jb250ZXh0LmFyYyh4LCB5LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcblx0XHR0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG5cdFx0dGhpcy5jb250ZXh0LmZpbGwoKTtcblx0XHR0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XG5cdFx0dGhpcy5jb250ZWN0LnJlc3RvcmUoKVxuXHR9XG59XG4iXSwibmFtZXMiOlsiRHJhdyIsImNhbnZhc1JlZiIsImNhbnZhcyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiY2xlYXIiLCJjbGVhclJlY3QiLCJjYW52YXNFbCIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd1JlY3RhbmdsZSIsIngiLCJ5IiwiY29sb3IiLCJzYXZlIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjb250ZWN0IiwicmVzdG9yZSIsImRyYXdDaXJjbGUiLCJyYWRpdXMiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIiwic3Ryb2tlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Draw.tsx\n");

/***/ })

});