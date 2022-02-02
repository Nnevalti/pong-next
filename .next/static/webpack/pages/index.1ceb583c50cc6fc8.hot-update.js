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

/***/ "./components/Ball.tsx":
/*!*****************************!*\
  !*** ./components/Ball.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ball\": function() { return /* binding */ Ball; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nvar Ball = /*#__PURE__*/ function() {\n    \"use strict\";\n    function Ball(x, y, r, speed, acceleration, p1, p2, draw) {\n        _classCallCheck(this, Ball);\n        this.x = x;\n        this.y = y;\n        this.r = r;\n        this.speed = speed;\n        this.defaultSpeed = speed;\n        this.acceleration = acceleration;\n        this.velocity = {\n            dx: speed,\n            dy: speed\n        };\n        this.drawClass = draw;\n    }\n    _createClass(Ball, [\n        {\n            key: \"draw\",\n            value: function draw() {\n                this.drawClass.drawCircle(this.x, this.y, this.r, 'white');\n            }\n        },\n        {\n            // Collision between ball and Paddle\n            key: \"collision\",\n            value: function collision() {\n                if (this.x < canvas.width / 2) {\n                    return this.y > P1.y && this.y < P1.y + P1.height && this.x - this.r < P1.x + P1.width;\n                } else {\n                    return this.y > P2.y && this.y < P2.y + P2.height && this.x + this.r > P2.x;\n                }\n            }\n        },\n        {\n            key: \"reset\",\n            value: function reset() {\n                // Get old direction before replacing the ball\n                var dir = this.x < canvas.width / 2 ? 1 : -1;\n                // Caculating angle in degrees cos(angleRad) and sin(angleRad)\n                var angle1 = this.velocity.dx / this.speed;\n                var angle2 = this.velocity.dy / this.speed;\n                // Replacing the ball in the center of the canvas\n                this.x = canvas.width / 2;\n                this.y = canvas.height / 2;\n                // resetting speed to default value\n                this.speed = this.defaultSpeed;\n                this.velocity.dx = dir * (ball.speed * angle1);\n                this.velocity.dy = ball.speed * angle2;\n            }\n        },\n        {\n            key: \"update\",\n            value: function update() {\n                this.x += this.velocity.dx;\n                this.y += this.velocity.dy;\n                // Collision on axis Y border  of the board game\n                if (this.y - this.r <= 0 || this.y + this.r >= canvas.height) {\n                    this.velocity.dy = -this.velocity.dy;\n                }\n                //Collision with Players\n                if (this.collision()) {\n                    // Here we try to change the ball angle when hitting one side of the Paddle\n                    // To do this we determine where the ball collide with the paddle (in px)\n                    // then we normalize this number to get a number between -1 and 1.\n                    // With this value we can caculate the angle in radian\n                    // And thanks to some trigo things we get the new x and y direction for our ball\n                    // This conserve the speed and only change the angle but to make the game a little\n                    // bit harder i increment the speed value every time the ball hit a paddle\n                    // Where did the ball hit the Paddle\n                    var p = this.x < canvas.width / 2 ? P1 : P2;\n                    var collidePoint = this.y - (p.y + p.height / 2);\n                    console.log(collidePoint);\n                    // Normalization (min = -1 and max = 1)\n                    collidePoint = collidePoint / (p.height / 2);\n                    console.log(collidePoint);\n                    // Caculate angle in Radian\n                    var angleRad = collidePoint * Math.PI / 4;\n                    var dir = this.x < canvas.width / 2 ? 1 : -1;\n                    this.velocity.dx = dir * (ball.speed * Math.cos(angleRad));\n                    this.velocity.dy = ball.speed * Math.sin(angleRad);\n                    this.speed += this.acceleration;\n                }\n                // Goal Player two\n                if (this.x - this.r <= 0) {\n                    P2_Score++;\n                    this.reset();\n                }\n                //Goal player one\n                if (this.x + this.r >= canvas.width) {\n                    P1_Score++;\n                    this.reset();\n                }\n            }\n        }\n    ]);\n    return Ball;\n}();\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYWxsLnRzeD8zZTk1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCYWxsIHtcblx0eDogbnVtYmVyO1xuXHR5OiBudW1iZXI7XG5cdHI6IG51bWJlcjtcblx0c3BlZWQ6IG51bWJlcjtcblx0ZGVmYXVsdFNwZWVkOiBudW1iZXI7XG5cdGFjY2VsZXJhdGlvbjogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHgsIHksIHIsIHNwZWVkLCBhY2NlbGVyYXRpb24sIHAxLCBwMiwgZHJhdykge1xuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblx0XHR0aGlzLnIgPSByO1xuXHRcdHRoaXMuc3BlZWQgPSBzcGVlZDtcblx0XHR0aGlzLmRlZmF1bHRTcGVlZCA9IHNwZWVkO1xuXHRcdHRoaXMuYWNjZWxlcmF0aW9uID0gYWNjZWxlcmF0aW9uO1xuXHRcdHRoaXMudmVsb2NpdHkgPSB7ZHg6IHNwZWVkLCBkeTogc3BlZWR9O1xuXHRcdHRoaXMuZHJhd0NsYXNzID0gZHJhdztcblxuXHR9XG5cblx0ZHJhdygpIHtcblx0XHR0aGlzLmRyYXdDbGFzcy5kcmF3Q2lyY2xlKHRoaXMueCwgdGhpcy55LCB0aGlzLnIsICd3aGl0ZScpO1xuXHR9XG5cbiAgICAvLyBDb2xsaXNpb24gYmV0d2VlbiBiYWxsIGFuZCBQYWRkbGVcbiAgICBjb2xsaXNpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnggPCBjYW52YXMud2lkdGgvMilcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnkgPiBQMS55ICYmIHRoaXMueSA8IFAxLnkgKyBQMS5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy54IC0gdGhpcy5yIDwgUDEueCArIFAxLndpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy55ID4gUDIueSAmJiB0aGlzLnkgPCBQMi55ICsgUDIuaGVpZ2h0XG4gICAgICAgICAgICAgICAgJiYgdGhpcy54ICsgdGhpcy5yID4gUDIueCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgLy8gR2V0IG9sZCBkaXJlY3Rpb24gYmVmb3JlIHJlcGxhY2luZyB0aGUgYmFsbFxuICAgICAgICBsZXQgZGlyID0gKHRoaXMueCA8IGNhbnZhcy53aWR0aC8yKSA/IDEgOiAtMTtcbiAgICAgICAgLy8gQ2FjdWxhdGluZyBhbmdsZSBpbiBkZWdyZWVzIGNvcyhhbmdsZVJhZCkgYW5kIHNpbihhbmdsZVJhZClcbiAgICAgICAgbGV0IGFuZ2xlMSA9IHRoaXMudmVsb2NpdHkuZHggLyB0aGlzLnNwZWVkO1xuICAgICAgICBsZXQgYW5nbGUyID0gdGhpcy52ZWxvY2l0eS5keSAvIHRoaXMuc3BlZWQ7XG4gICAgICAgIC8vIFJlcGxhY2luZyB0aGUgYmFsbCBpbiB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcbiAgICAgICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8yO1xuICAgICAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgLy8gcmVzZXR0aW5nIHNwZWVkIHRvIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuZGVmYXVsdFNwZWVkO1xuICAgICAgICB0aGlzLnZlbG9jaXR5LmR4ID0gZGlyICogKGJhbGwuc3BlZWQgKiBhbmdsZTEpO1xuICAgICAgICB0aGlzLnZlbG9jaXR5LmR5ID0gYmFsbC5zcGVlZCAqIGFuZ2xlMjtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLnZlbG9jaXR5LmR4O1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy52ZWxvY2l0eS5keTtcblxuICAgICAgICAvLyBDb2xsaXNpb24gb24gYXhpcyBZIGJvcmRlciAgb2YgdGhlIGJvYXJkIGdhbWVcbiAgICAgICAgaWYodGhpcy55IC0gdGhpcy5yIDw9IDBcbiAgICAgICAgICAgIHx8IHRoaXMueSArIHRoaXMuciA+PSBjYW52YXMuaGVpZ2h0KVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LmR5ID0gLXRoaXMudmVsb2NpdHkuZHk7XG4gICAgICAgIH1cbiAgICAgICAgLy9Db2xsaXNpb24gd2l0aCBQbGF5ZXJzXG4gICAgICAgIGlmKHRoaXMuY29sbGlzaW9uKCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIEhlcmUgd2UgdHJ5IHRvIGNoYW5nZSB0aGUgYmFsbCBhbmdsZSB3aGVuIGhpdHRpbmcgb25lIHNpZGUgb2YgdGhlIFBhZGRsZVxuICAgICAgICAgICAgLy8gVG8gZG8gdGhpcyB3ZSBkZXRlcm1pbmUgd2hlcmUgdGhlIGJhbGwgY29sbGlkZSB3aXRoIHRoZSBwYWRkbGUgKGluIHB4KVxuICAgICAgICAgICAgLy8gdGhlbiB3ZSBub3JtYWxpemUgdGhpcyBudW1iZXIgdG8gZ2V0IGEgbnVtYmVyIGJldHdlZW4gLTEgYW5kIDEuXG4gICAgICAgICAgICAvLyBXaXRoIHRoaXMgdmFsdWUgd2UgY2FuIGNhY3VsYXRlIHRoZSBhbmdsZSBpbiByYWRpYW5cbiAgICAgICAgICAgIC8vIEFuZCB0aGFua3MgdG8gc29tZSB0cmlnbyB0aGluZ3Mgd2UgZ2V0IHRoZSBuZXcgeCBhbmQgeSBkaXJlY3Rpb24gZm9yIG91ciBiYWxsXG4gICAgICAgICAgICAvLyBUaGlzIGNvbnNlcnZlIHRoZSBzcGVlZCBhbmQgb25seSBjaGFuZ2UgdGhlIGFuZ2xlIGJ1dCB0byBtYWtlIHRoZSBnYW1lIGEgbGl0dGxlXG4gICAgICAgICAgICAvLyBiaXQgaGFyZGVyIGkgaW5jcmVtZW50IHRoZSBzcGVlZCB2YWx1ZSBldmVyeSB0aW1lIHRoZSBiYWxsIGhpdCBhIHBhZGRsZVxuICAgICAgICAgICAgLy8gV2hlcmUgZGlkIHRoZSBiYWxsIGhpdCB0aGUgUGFkZGxlXG4gICAgICAgICAgICB2YXIgcCA9ICh0aGlzLnggPCBjYW52YXMud2lkdGgvMikgPyBQMSA6IFAyO1xuICAgICAgICAgICAgbGV0IGNvbGxpZGVQb2ludCA9IHRoaXMueSAtIChwLnkgKyBwLmhlaWdodC8yKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbGxpZGVQb2ludCk7XG4gICAgICAgICAgICAvLyBOb3JtYWxpemF0aW9uIChtaW4gPSAtMSBhbmQgbWF4ID0gMSlcbiAgICAgICAgICAgIGNvbGxpZGVQb2ludCA9IGNvbGxpZGVQb2ludC8ocC5oZWlnaHQvMik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb2xsaWRlUG9pbnQpO1xuICAgICAgICAgICAgLy8gQ2FjdWxhdGUgYW5nbGUgaW4gUmFkaWFuXG4gICAgICAgICAgICBsZXQgYW5nbGVSYWQgPSBjb2xsaWRlUG9pbnQgKiBNYXRoLlBJLzRcbiAgICAgICAgICAgIGxldCBkaXIgPSAodGhpcy54IDwgY2FudmFzLndpZHRoLzIpID8gMSA6IC0xO1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS5keCA9IGRpciAqKCBiYWxsLnNwZWVkICogTWF0aC5jb3MoYW5nbGVSYWQpKTtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkuZHkgPSBiYWxsLnNwZWVkICogTWF0aC5zaW4oYW5nbGVSYWQpO1xuICAgICAgICAgICAgdGhpcy5zcGVlZCArPSB0aGlzLmFjY2VsZXJhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdvYWwgUGxheWVyIHR3b1xuICAgICAgICBpZih0aGlzLnggLSB0aGlzLnIgPD0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgUDJfU2NvcmUrKztcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvL0dvYWwgcGxheWVyIG9uZVxuICAgICAgICBpZih0aGlzLnggKyB0aGlzLnIgPj0gY2FudmFzLndpZHRoKVxuICAgICAgICB7XG4gICAgICAgICAgICBQMV9TY29yZSsrO1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkJhbGwiLCJ4IiwieSIsInIiLCJzcGVlZCIsImFjY2VsZXJhdGlvbiIsInAxIiwicDIiLCJkcmF3IiwiZGVmYXVsdFNwZWVkIiwidmVsb2NpdHkiLCJkeCIsImR5IiwiZHJhd0NsYXNzIiwiZHJhd0NpcmNsZSIsImNvbGxpc2lvbiIsImNhbnZhcyIsIndpZHRoIiwiUDEiLCJoZWlnaHQiLCJQMiIsInJlc2V0IiwiZGlyIiwiYW5nbGUxIiwiYW5nbGUyIiwiYmFsbCIsInVwZGF0ZSIsInAiLCJjb2xsaWRlUG9pbnQiLCJjb25zb2xlIiwibG9nIiwiYW5nbGVSYWQiLCJNYXRoIiwiUEkiLCJjb3MiLCJzaW4iLCJQMl9TY29yZSIsIlAxX1Njb3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Ball.tsx\n");

/***/ })

});