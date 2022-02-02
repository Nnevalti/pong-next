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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Canvas_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Canvas.module.css */ \"./styles/Canvas.module.css\");\n/* harmony import */ var _styles_Canvas_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Canvas_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useGameLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useGameLogic */ \"./hooks/useGameLogic.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Canvas = function(props) {\n    _s();\n    var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var width = props.width, height = props.height, rest = _objectWithoutProperties(props, [\n        \"width\",\n        \"height\"\n    ]);\n    /* Neon effect */ var neonEffect = 0.01;\n    var firstNeon = 10;\n    var secondNeon = 20;\n    var neonColor = 0;\n    var colorChange = 1;\n    var animateNeon = function(canvas) {\n        canvas.style.boxShadow = \"inset 0 0 5px #fff,\\t\\t\\tinset 0 0 \" + firstNeon + \"px rgb(127, 0, \" + neonColor + \"),\\t\\t\\tinset 0 0 \" + secondNeon + \"px rgb(127, 0, \" + neonColor + \"),\\t\\t\\t0 0 5px #fff,\\t\\t\\t0 0 \" + firstNeon + \"px rgb(127, 0, \" + neonColor + \")\";\n        firstNeon += neonEffect;\n        secondNeon += neonEffect;\n        neonColor += colorChange;\n        if (firstNeon <= 10 || firstNeon >= 30) neonEffect *= -1;\n        if (neonColor < 1 || neonColor > 254) colorChange *= -1;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var canvas = canvasRef.current;\n        var context = canvas.getContext('2d');\n        var animationFrameId;\n        var render = function() {\n            animateNeon(canvas);\n            (0,_hooks_useGameLogic__WEBPACK_IMPORTED_MODULE_2__.useGameLogic)(canvas, width, height);\n            animationFrameId = window.requestAnimationFrame(render);\n        };\n        render();\n        return function() {\n            window.cancelAnimationFrame(animationFrameId);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", _objectSpread({\n            className: (_styles_Canvas_module_css__WEBPACK_IMPORTED_MODULE_3___default().canvas),\n            ref: canvasRef\n        }, rest), void 0, false, {\n            fileName: \"/home/user42/Documents/nextjs_first_app/pong-next/components/Canvas.tsx\",\n            lineNumber: 56,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false));\n};\n_s(Canvas, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n_c = Canvas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canvas); /*\nexport class Canvas {\n\tcanvasEl: HTMLCanvasElement;\n\tcontext: CanvasRenderingContext2D;\n\n\tmap: number;\n\tmode: number;\n\tposition: number;\n\tconstructor(gameRef, {width = 1024, height = 768, zIndex = 0}) {\n\t\tthis.canvasEl = document.createElement(\"canvas\");\n\t\tthis.context = this.canvasEl.getContext(\"2d\");\n\t\tthis.canvasEl.width = width;\n\t\tthis.canvasEl.height = height;\n\n\t\tthis.canvasEl.style.zIndex = zIndex.toString();\n\t\tthis.canvasEl.style.position = 'absolute';\n\t\tthis.map = 0;\n\t\tthis.mode = 0;\n\t\tthis.position = -1;\n\t\tgameRef.append(this.canvasEl);\n\t}\n\n\tclear() {\n\t\tthis.context.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);\n\t}\n\n\tdrawRectangle(x: number, y: number, width: number, height: number, color: string) {\n\t\tthis.contect.save()\n\t\tthis.context.fillStyle = color;\n\t\tthis.context.fillRect(x, y, width, height);\n\t\tthis.contect.restore()\n\t}\n\n\tdrawCircle(x: number, y: number, radius: number, color: string) {\n\t\tthis.contect.save()\n\t\tthis.context.beginPath();\n\t\tthis.context.arc(x, y, radius, 0, 2 * Math.PI, true);\n\t\tthis.context.fillStyle = color;\n\t\tthis.context.fill();\n\t\tthis.context.stroke();\n\t\tthis.contect.restore()\n\t}\n}\n*/ \nvar _c;\n$RefreshReg$(_c, \"Canvas\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbnZhcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtBQUN1QjtBQUNHO0FBR0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsR0FBSyxDQUFDSyxNQUFNLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs7SUFFMUIsR0FBSyxDQUFDQyxTQUFTLEdBQUdMLDZDQUFNLENBQUMsSUFBSTtJQUM3QixHQUFLLENBQUdNLEtBQUssR0FBc0JGLEtBQUssQ0FBaENFLEtBQUssRUFBRUMsTUFBTSxHQUFjSCxLQUFLLENBQXpCRyxNQUFNLEVBQUtDLElBQUksNEJBQUtKLEtBQUs7UUFBaENFLENBQUs7UUFBRUMsQ0FBTTs7SUFFckIsRUFBaUIsZ0JBQ2pCLEdBQUcsQ0FBQ0UsVUFBVSxHQUFHLElBQUk7SUFDckIsR0FBRyxDQUFDQyxTQUFTLEdBQUcsRUFBRTtJQUNsQixHQUFHLENBQUNDLFVBQVUsR0FBRyxFQUFFO0lBQ25CLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLENBQUM7SUFDakIsR0FBRyxDQUFDQyxXQUFXLEdBQUcsQ0FBQztJQUVuQixHQUFLLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFSQSxNQUFNLEVBQUksQ0FBQztRQUM5QkEsTUFBTSxDQUFDQyxLQUFLLENBQUNDLFNBQVMsR0FBRyxDQUNiLHVDQUFFUCxTQUFTLEdBQUUsQ0FBaUIsbUJBQUVFLFNBQVMsR0FBRSxDQUMzQyxzQkFBRUQsVUFBVSxHQUFFLENBQWlCLG1CQUFFQyxTQUFTLEdBQUUsQ0FFbEQsbUNBQUVGLFNBQVMsR0FBRSxDQUFpQixtQkFBRUUsU0FBUyxHQUFFLENBQUc7UUFDcERGLFNBQVMsSUFBSUQsVUFBVTtRQUN2QkUsVUFBVSxJQUFJRixVQUFVO1FBQ3hCRyxTQUFTLElBQUlDLFdBQVc7UUFDeEIsRUFBRSxFQUFFSCxTQUFTLElBQUksRUFBRSxJQUFJQSxTQUFTLElBQUksRUFBRSxFQUNyQ0QsVUFBVSxLQUFLLENBQUM7UUFDakIsRUFBRSxFQUFFRyxTQUFTLEdBQUcsQ0FBQyxJQUFJQSxTQUFTLEdBQUcsR0FBRyxFQUNuQ0MsV0FBVyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUVEWixnREFBUyxDQUFDLFFBQ1gsR0FEaUIsQ0FBQztRQUNoQixHQUFLLENBQUNjLE1BQU0sR0FBR1YsU0FBUyxDQUFDYSxPQUFPO1FBQ2hDLEdBQUssQ0FBQ0MsT0FBTyxHQUFHSixNQUFNLENBQUNLLFVBQVUsQ0FBQyxDQUFJO1FBRXRDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1FBRXBCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHLFFBQ2pCLEdBRHVCLENBQUM7WUFDckJSLFdBQVcsQ0FBQ0MsTUFBTTtZQUNsQmIsaUVBQVksQ0FBQ2EsTUFBTSxFQUFFVCxLQUFLLEVBQUVDLE1BQU07WUFDbENjLGdCQUFnQixHQUFHRSxNQUFNLENBQUNDLHFCQUFxQixDQUFDRixNQUFNO1FBQ3ZELENBQUM7UUFFREEsTUFBTTtRQUVOLE1BQU0sQ0FBQyxRQUNULEdBRGUsQ0FBQztZQUNiQyxNQUFNLENBQUNFLG9CQUFvQixDQUFDSixnQkFBZ0I7UUFDN0MsQ0FBQztJQUNGLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNOzhGQUVITixDQUFNO1lBQUNXLFNBQVMsRUFBRTNCLHlFQUFhO1lBQUU0QixHQUFHLEVBQUV0QixTQUFTO1dBQU1HLElBQUk7Ozs7OztBQUc3RCxDQUFDO0dBbkRLTCxNQUFNO0tBQU5BLE1BQU07QUFzRFosK0RBQWVBLE1BQU0sRUFFckIsQ0EyQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhbnZhcy50c3g/MjYyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9DYW52YXMubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VXaW5kb3dEaW1lbnNpb25zIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcbmltcG9ydCB7IHVzZUdhbWVMb2dpYyB9IGZyb20gXCIuLi9ob29rcy91c2VHYW1lTG9naWNcIlxuXG5jb25zdCBDYW52YXMgPSAocHJvcHMpID0+IHtcblxuXHRjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XG5cdGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgLi4ucmVzdCB9ID0gcHJvcHNcblxuXHQvKiBOZW9uIGVmZmVjdCAqL1xuXHRsZXQgbmVvbkVmZmVjdCA9IDAuMDE7XG5cdGxldCBmaXJzdE5lb24gPSAxMDtcblx0bGV0IHNlY29uZE5lb24gPSAyMDtcblx0bGV0IG5lb25Db2xvciA9IDA7XG5cdGxldCBjb2xvckNoYW5nZSA9IDE7XG5cblx0Y29uc3QgYW5pbWF0ZU5lb24gPSBjYW52YXMgPT4ge1xuXHRcdGNhbnZhcy5zdHlsZS5ib3hTaGFkb3cgPSBcImluc2V0IDAgMCA1cHggI2ZmZixcXFxuXHRcdFx0aW5zZXQgMCAwIFwiKyBmaXJzdE5lb24gK1wicHggcmdiKDEyNywgMCwgXCIrIG5lb25Db2xvciArXCIpLFxcXG5cdFx0XHRpbnNldCAwIDAgXCIrIHNlY29uZE5lb24gK1wicHggcmdiKDEyNywgMCwgXCIrIG5lb25Db2xvciArXCIpLFxcXG5cdFx0XHQwIDAgNXB4ICNmZmYsXFxcblx0XHRcdDAgMCBcIisgZmlyc3ROZW9uICtcInB4IHJnYigxMjcsIDAsIFwiKyBuZW9uQ29sb3IgK1wiKVwiO1xuXHRcdGZpcnN0TmVvbiArPSBuZW9uRWZmZWN0O1xuXHRcdHNlY29uZE5lb24gKz0gbmVvbkVmZmVjdDtcblx0XHRuZW9uQ29sb3IgKz0gY29sb3JDaGFuZ2U7XG5cdFx0aWYgKGZpcnN0TmVvbiA8PSAxMCB8fCBmaXJzdE5lb24gPj0gMzApXG5cdFx0XHRuZW9uRWZmZWN0ICo9IC0xO1xuXHRcdGlmIChuZW9uQ29sb3IgPCAxIHx8IG5lb25Db2xvciA+IDI1NClcblx0XHRcdGNvbG9yQ2hhbmdlICo9IC0xO1xuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcblx0XHRjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cblx0XHRsZXQgYW5pbWF0aW9uRnJhbWVJZDtcblxuXHRcdGNvbnN0IHJlbmRlciA9ICgpID0+IHtcblx0XHRcdGFuaW1hdGVOZW9uKGNhbnZhcylcblx0XHRcdHVzZUdhbWVMb2dpYyhjYW52YXMsIHdpZHRoLCBoZWlnaHQpO1xuXHRcdFx0YW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKVxuXHRcdH1cblxuXHRcdHJlbmRlcigpXG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSWQpXG5cdFx0fVxuXHR9LCBbXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGNhbnZhcyBjbGFzc05hbWU9e3N0eWxlcy5jYW52YXN9IHJlZj17Y2FudmFzUmVmfSB7Li4ucmVzdH0gID48L2NhbnZhcz5cblx0XHQ8Lz5cblx0KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzO1xuXG4vKlxuZXhwb3J0IGNsYXNzIENhbnZhcyB7XG5cdGNhbnZhc0VsOiBIVE1MQ2FudmFzRWxlbWVudDtcblx0Y29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG5cdG1hcDogbnVtYmVyO1xuXHRtb2RlOiBudW1iZXI7XG5cdHBvc2l0aW9uOiBudW1iZXI7XG5cdGNvbnN0cnVjdG9yKGdhbWVSZWYsIHt3aWR0aCA9IDEwMjQsIGhlaWdodCA9IDc2OCwgekluZGV4ID0gMH0pIHtcblx0XHR0aGlzLmNhbnZhc0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblx0XHR0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcblx0XHR0aGlzLmNhbnZhc0VsLndpZHRoID0gd2lkdGg7XG5cdFx0dGhpcy5jYW52YXNFbC5oZWlnaHQgPSBoZWlnaHQ7XG5cblx0XHR0aGlzLmNhbnZhc0VsLnN0eWxlLnpJbmRleCA9IHpJbmRleC50b1N0cmluZygpO1xuXHRcdHRoaXMuY2FudmFzRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdHRoaXMubWFwID0gMDtcblx0XHR0aGlzLm1vZGUgPSAwO1xuXHRcdHRoaXMucG9zaXRpb24gPSAtMTtcblx0XHRnYW1lUmVmLmFwcGVuZCh0aGlzLmNhbnZhc0VsKTtcblx0fVxuXG5cdGNsZWFyKCkge1xuXHRcdHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNFbC53aWR0aCwgdGhpcy5jYW52YXNFbC5oZWlnaHQpO1xuXHR9XG5cblx0ZHJhd1JlY3RhbmdsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcpIHtcblx0XHR0aGlzLmNvbnRlY3Quc2F2ZSgpXG5cdFx0dGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xuXHRcdHRoaXMuY29udGV4dC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcblx0XHR0aGlzLmNvbnRlY3QucmVzdG9yZSgpXG5cdH1cblxuXHRkcmF3Q2lyY2xlKHg6IG51bWJlciwgeTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgY29sb3I6IHN0cmluZykge1xuXHRcdHRoaXMuY29udGVjdC5zYXZlKClcblx0XHR0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG5cdFx0dGhpcy5jb250ZXh0LmFyYyh4LCB5LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcblx0XHR0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG5cdFx0dGhpcy5jb250ZXh0LmZpbGwoKTtcblx0XHR0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XG5cdFx0dGhpcy5jb250ZWN0LnJlc3RvcmUoKVxuXHR9XG59XG4qL1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlR2FtZUxvZ2ljIiwiQ2FudmFzIiwicHJvcHMiLCJjYW52YXNSZWYiLCJ3aWR0aCIsImhlaWdodCIsInJlc3QiLCJuZW9uRWZmZWN0IiwiZmlyc3ROZW9uIiwic2Vjb25kTmVvbiIsIm5lb25Db2xvciIsImNvbG9yQ2hhbmdlIiwiYW5pbWF0ZU5lb24iLCJjYW52YXMiLCJzdHlsZSIsImJveFNoYWRvdyIsImN1cnJlbnQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImFuaW1hdGlvbkZyYW1lSWQiLCJyZW5kZXIiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNsYXNzTmFtZSIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Canvas.tsx\n");

/***/ })

});