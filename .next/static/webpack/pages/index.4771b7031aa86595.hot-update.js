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

/***/ "./components/Canvas.tsx":
/*!*******************************!*\
  !*** ./components/Canvas.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Canvas_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Canvas.module.css */ \"./styles/Canvas.module.css\");\n/* harmony import */ var _styles_Canvas_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Canvas_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Canvas = function(props) {\n    _s();\n    var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var draw = props.draw, rest = _objectWithoutProperties(props, [\n        \"draw\"\n    ]);\n    /* Neon effect */ var neonEffect = 0.01;\n    var firstNeon = 10;\n    var secondNeon = 20;\n    var neonColor = 0;\n    var colorChange = 1;\n    var animateNeon = function(canvas) {\n        canvas.style.boxShadow = \"inset 0 0 5px #fff,\\t\\t\\tinset 0 0 \" + firstNeon + \"px rgb(127, 0, \" + neonColor + \"),\\t\\t\\tinset 0 0 \" + secondNeon + \"px rgb(127, 0, \" + neonColor + \"),\\t\\t\\t0 0 5px #fff,\\t\\t\\t0 0 \" + firstNeon + \"px rgb(127, 0, \" + neonColor + \")\";\n        firstNeon += neonEffect;\n        secondNeon += neonEffect;\n        neonColor += colorChange;\n        if (firstNeon <= 10 || firstNeon >= 30) neonEffect *= -1;\n        if (neonColor < 1 || neonColor > 254) colorChange *= -1;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var canvas = canvasRef.current;\n        var context = canvas.getContext('2d');\n        var animationFrameId;\n        var render = function() {\n            animateNeon(canvas);\n            animationFrameId = window.requestAnimationFrame(render);\n        };\n        render();\n        return function() {\n            window.cancelAnimationFrame(animationFrameId);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", _objectSpread({\n            className: (_styles_Canvas_module_css__WEBPACK_IMPORTED_MODULE_2___default().canvas),\n            ref: canvasRef\n        }, rest), void 0, false, {\n            fileName: \"/home/user42/Documents/nextjs_first_app/pong-next/components/Canvas.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false));\n};\n_s(Canvas, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n_c = Canvas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canvas); /*\nexport class Canvas {\n\tcanvasEl: HTMLCanvasElement;\n\tcontext: CanvasRenderingContext2D;\n\n\tmap: number;\n\tmode: number;\n\tposition: number;\n\tconstructor(gameRef, {width = 1024, height = 768, zIndex = 0}) {\n\t\tthis.canvasEl = document.createElement(\"canvas\");\n\t\tthis.context = this.canvasEl.getContext(\"2d\");\n\t\tthis.canvasEl.width = width;\n\t\tthis.canvasEl.height = height;\n\n\t\tthis.canvasEl.style.zIndex = zIndex.toString();\n\t\tthis.canvasEl.style.position = 'absolute';\n\t\tthis.map = 0;\n\t\tthis.mode = 0;\n\t\tthis.position = -1;\n\t\tgameRef.append(this.canvasEl);\n\t}\n\n\tclear() {\n\t\tthis.context.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);\n\t}\n\n\tdrawRectangle(x: number, y: number, width: number, height: number, color: string) {\n\t\tthis.contect.save()\n\t\tthis.context.fillStyle = color;\n\t\tthis.context.fillRect(x, y, width, height);\n\t\tthis.contect.restore()\n\t}\n\n\tdrawCircle(x: number, y: number, radius: number, color: string) {\n\t\tthis.contect.save()\n\t\tthis.context.beginPath();\n\t\tthis.context.arc(x, y, radius, 0, 2 * Math.PI, true);\n\t\tthis.context.fillStyle = color;\n\t\tthis.context.fill();\n\t\tthis.context.stroke();\n\t\tthis.contect.restore()\n\t}\n}\n*/ \nvar _c;\n$RefreshReg$(_c, \"Canvas\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbnZhcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBQ3VCO0FBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkQsR0FBSyxDQUFDSSxNQUFNLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs7SUFFMUIsR0FBSyxDQUFDQyxTQUFTLEdBQUdKLDZDQUFNLENBQUMsSUFBSTtJQUM3QixHQUFLLENBQUdLLElBQUksR0FBY0YsS0FBSyxDQUF2QkUsSUFBSSxFQUFLQyxJQUFJLDRCQUFLSCxLQUFLO1FBQXZCRSxDQUFJOztJQUVaLEVBQWlCLGdCQUNqQixHQUFHLENBQUNFLFVBQVUsR0FBRyxJQUFJO0lBQ3JCLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLEVBQUU7SUFDbEIsR0FBRyxDQUFDQyxVQUFVLEdBQUcsRUFBRTtJQUNuQixHQUFHLENBQUNDLFNBQVMsR0FBRyxDQUFDO0lBQ2pCLEdBQUcsQ0FBQ0MsV0FBVyxHQUFHLENBQUM7SUFFbkIsR0FBSyxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBUkEsTUFBTSxFQUFJLENBQUM7UUFDOUJBLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxTQUFTLEdBQUcsQ0FDYix1Q0FBRVAsU0FBUyxHQUFFLENBQWlCLG1CQUFFRSxTQUFTLEdBQUUsQ0FDM0Msc0JBQUVELFVBQVUsR0FBRSxDQUFpQixtQkFBRUMsU0FBUyxHQUFFLENBRWxELG1DQUFFRixTQUFTLEdBQUUsQ0FBaUIsbUJBQUVFLFNBQVMsR0FBRSxDQUFHO1FBQ3BERixTQUFTLElBQUlELFVBQVU7UUFDdkJFLFVBQVUsSUFBSUYsVUFBVTtRQUN4QkcsU0FBUyxJQUFJQyxXQUFXO1FBQ3hCLEVBQUUsRUFBRUgsU0FBUyxJQUFJLEVBQUUsSUFBSUEsU0FBUyxJQUFJLEVBQUUsRUFDckNELFVBQVUsS0FBSyxDQUFDO1FBQ2pCLEVBQUUsRUFBRUcsU0FBUyxHQUFHLENBQUMsSUFBSUEsU0FBUyxHQUFHLEdBQUcsRUFDbkNDLFdBQVcsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFQVYsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDaEIsR0FBSyxDQUFDWSxNQUFNLEdBQUdULFNBQVMsQ0FBQ1ksT0FBTztRQUNoQyxHQUFLLENBQUNDLE9BQU8sR0FBR0osTUFBTSxDQUFDSyxVQUFVLENBQUMsQ0FBSTtRQUN0QyxHQUFHLENBQUNDLGdCQUFnQjtRQUVwQixHQUFLLENBQUNDLE1BQU0sR0FBRyxRQUNsQixHQUR3QixDQUFDO1lBQ3JCUixXQUFXLENBQUNDLE1BQU07WUFDbEJNLGdCQUFnQixHQUFHRSxNQUFNLENBQUNDLHFCQUFxQixDQUFDRixNQUFNO1FBQ3ZELENBQUM7UUFFREEsTUFBTTtRQUVOLE1BQU0sQ0FBQyxRQUNWLEdBRGdCLENBQUM7WUFDZkMsTUFBTSxDQUFDRSxvQkFBb0IsQ0FBQ0osZ0JBQWdCO1FBQzNDLENBQUM7SUFDRixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTTs4RkFFRE4sQ0FBTTtZQUFDVyxTQUFTLEVBQUV6Qix5RUFBYTtZQUFFMEIsR0FBRyxFQUFFckIsU0FBUztXQUFNRSxJQUFJOzs7Ozs7QUFHaEUsQ0FBQztHQWpES0osTUFBTTtLQUFOQSxNQUFNO0FBb0RaLCtEQUFlQSxNQUFNLEVBRXJCLENBMkNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYW52YXMudHN4PzI2MmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ2FudmFzLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgQ2FudmFzID0gKHByb3BzKSA9PiB7XG5cblx0Y29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpO1xuXHRjb25zdCB7IGRyYXcsIC4uLnJlc3QgfSA9IHByb3BzXG5cblx0LyogTmVvbiBlZmZlY3QgKi9cblx0bGV0IG5lb25FZmZlY3QgPSAwLjAxO1xuXHRsZXQgZmlyc3ROZW9uID0gMTA7XG5cdGxldCBzZWNvbmROZW9uID0gMjA7XG5cdGxldCBuZW9uQ29sb3IgPSAwO1xuXHRsZXQgY29sb3JDaGFuZ2UgPSAxO1xuXG5cdGNvbnN0IGFuaW1hdGVOZW9uID0gY2FudmFzID0+IHtcblx0XHRjYW52YXMuc3R5bGUuYm94U2hhZG93ID0gXCJpbnNldCAwIDAgNXB4ICNmZmYsXFxcblx0XHRcdGluc2V0IDAgMCBcIisgZmlyc3ROZW9uICtcInB4IHJnYigxMjcsIDAsIFwiKyBuZW9uQ29sb3IgK1wiKSxcXFxuXHRcdFx0aW5zZXQgMCAwIFwiKyBzZWNvbmROZW9uICtcInB4IHJnYigxMjcsIDAsIFwiKyBuZW9uQ29sb3IgK1wiKSxcXFxuXHRcdFx0MCAwIDVweCAjZmZmLFxcXG5cdFx0XHQwIDAgXCIrIGZpcnN0TmVvbiArXCJweCByZ2IoMTI3LCAwLCBcIisgbmVvbkNvbG9yICtcIilcIjtcblx0XHRmaXJzdE5lb24gKz0gbmVvbkVmZmVjdDtcblx0XHRzZWNvbmROZW9uICs9IG5lb25FZmZlY3Q7XG5cdFx0bmVvbkNvbG9yICs9IGNvbG9yQ2hhbmdlO1xuXHRcdGlmIChmaXJzdE5lb24gPD0gMTAgfHwgZmlyc3ROZW9uID49IDMwKVxuXHRcdFx0bmVvbkVmZmVjdCAqPSAtMTtcblx0XHRpZiAobmVvbkNvbG9yIDwgMSB8fCBuZW9uQ29sb3IgPiAyNTQpXG5cdFx0XHRjb2xvckNoYW5nZSAqPSAtMTtcblx0fVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cdCAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnRcblx0ICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcblx0ICBsZXQgYW5pbWF0aW9uRnJhbWVJZFxuXG5cdCAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuXHRcdCAgYW5pbWF0ZU5lb24oY2FudmFzKVxuXHRcdCAgYW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKVxuXHQgIH1cblxuXHQgIHJlbmRlcigpXG5cblx0ICByZXR1cm4gKCkgPT4ge1xuXHQgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSWQpXG4gICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Y2FudmFzIGNsYXNzTmFtZT17c3R5bGVzLmNhbnZhc30gcmVmPXtjYW52YXNSZWZ9IHsuLi5yZXN0fSAgPjwvY2FudmFzPlxuICAgIDwvPlxuICApO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBDYW52YXM7XG5cbi8qXG5leHBvcnQgY2xhc3MgQ2FudmFzIHtcblx0Y2FudmFzRWw6IEhUTUxDYW52YXNFbGVtZW50O1xuXHRjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cblx0bWFwOiBudW1iZXI7XG5cdG1vZGU6IG51bWJlcjtcblx0cG9zaXRpb246IG51bWJlcjtcblx0Y29uc3RydWN0b3IoZ2FtZVJlZiwge3dpZHRoID0gMTAyNCwgaGVpZ2h0ID0gNzY4LCB6SW5kZXggPSAwfSkge1xuXHRcdHRoaXMuY2FudmFzRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXHRcdHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRcdHRoaXMuY2FudmFzRWwud2lkdGggPSB3aWR0aDtcblx0XHR0aGlzLmNhbnZhc0VsLmhlaWdodCA9IGhlaWdodDtcblxuXHRcdHRoaXMuY2FudmFzRWwuc3R5bGUuekluZGV4ID0gekluZGV4LnRvU3RyaW5nKCk7XG5cdFx0dGhpcy5jYW52YXNFbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cdFx0dGhpcy5tYXAgPSAwO1xuXHRcdHRoaXMubW9kZSA9IDA7XG5cdFx0dGhpcy5wb3NpdGlvbiA9IC0xO1xuXHRcdGdhbWVSZWYuYXBwZW5kKHRoaXMuY2FudmFzRWwpO1xuXHR9XG5cblx0Y2xlYXIoKSB7XG5cdFx0dGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc0VsLndpZHRoLCB0aGlzLmNhbnZhc0VsLmhlaWdodCk7XG5cdH1cblxuXHRkcmF3UmVjdGFuZ2xlKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY29sb3I6IHN0cmluZykge1xuXHRcdHRoaXMuY29udGVjdC5zYXZlKClcblx0XHR0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG5cdFx0dGhpcy5jb250ZXh0LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuXHRcdHRoaXMuY29udGVjdC5yZXN0b3JlKClcblx0fVxuXG5cdGRyYXdDaXJjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjb2xvcjogc3RyaW5nKSB7XG5cdFx0dGhpcy5jb250ZWN0LnNhdmUoKVxuXHRcdHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcblx0XHR0aGlzLmNvbnRleHQuYXJjKHgsIHksIHJhZGl1cywgMCwgMiAqIE1hdGguUEksIHRydWUpO1xuXHRcdHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcblx0XHR0aGlzLmNvbnRleHQuZmlsbCgpO1xuXHRcdHRoaXMuY29udGV4dC5zdHJva2UoKTtcblx0XHR0aGlzLmNvbnRlY3QucmVzdG9yZSgpXG5cdH1cbn1cbiovXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJDYW52YXMiLCJwcm9wcyIsImNhbnZhc1JlZiIsImRyYXciLCJyZXN0IiwibmVvbkVmZmVjdCIsImZpcnN0TmVvbiIsInNlY29uZE5lb24iLCJuZW9uQ29sb3IiLCJjb2xvckNoYW5nZSIsImFuaW1hdGVOZW9uIiwiY2FudmFzIiwic3R5bGUiLCJib3hTaGFkb3ciLCJjdXJyZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJhbmltYXRpb25GcmFtZUlkIiwicmVuZGVyIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjbGFzc05hbWUiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Canvas.tsx\n");

/***/ })

});