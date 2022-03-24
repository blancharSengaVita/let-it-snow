/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Main.ts":
/*!************************!*\
  !*** ./src/js/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar canvas_1 = __webpack_require__(/*! ./canvas */ \"./src/js/canvas.ts\");\n\nvar app = {\n  init: function init() {\n    this.canvas = canvas_1.canvas.init();\n    this.ctx = this.canvasElement.getContext('2d');\n    this.canvas = canvas_1.canvas.init();\n  }\n};\napp.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUEsSUFBTUEsR0FBRyxHQUFHO0FBQ1JDLE1BQUk7QUFDQSxTQUFLQyxNQUFMLEdBQWNDLGdCQUFPRixJQUFQLEVBQWQ7QUFDQSxTQUFLRyxHQUFMLEdBQVcsS0FBS0MsYUFBTCxDQUFtQkMsVUFBbkIsQ0FBOEIsSUFBOUIsQ0FBWDtBQUNBLFNBQUtKLE1BQUwsR0FBY0MsZ0JBQU9GLElBQVAsRUFBZDtBQUNIO0FBTE8sQ0FBWjtBQVFBRCxHQUFHLENBQUNDLElBQUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXQtaXQtc25vdy8uL3NyYy9qcy9NYWluLnRzPzAxMjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjYW52YXN9IGZyb20gXCIuL2NhbnZhc1wiO1xyXG5cclxuY29uc3QgYXBwID0ge1xyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzLmluaXQoKTtcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzLmluaXQoKTtcclxuICAgIH1cclxufVxyXG5cclxuYXBwLmluaXQoKTsiXSwibmFtZXMiOlsiYXBwIiwiaW5pdCIsImNhbnZhcyIsImNhbnZhc18xIiwiY3R4IiwiY2FudmFzRWxlbWVudCIsImdldENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/Main.ts\n");

/***/ }),

/***/ "./src/js/canvas.ts":
/*!**************************!*\
  !*** ./src/js/canvas.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.canvas = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nexports.canvas = {\n  init: function init() {\n    this.canvas = document.getElementById('my-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.resizeCanvas();\n    this.draw();\n    this.generateGradient();\n    this.addEventListener();\n  },\n  generateGradient: function generateGradient() {\n    this.gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);\n    this.gradient.addColorStop(0, settings_1.settings.sky.gradient[0]);\n    this.gradient.addColorStop(1, settings_1.settings.sky.gradient[1]);\n  },\n  resizeCanvas: function resizeCanvas() {\n    this.canvas.width = window.innerWidth;\n    this.canvas.height = window.innerHeight;\n  },\n  draw: function draw() {\n    this.ctx.fillStyle = this.gradient;\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    return this;\n  },\n  addEventListener: function addEventListener() {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.resizeCanvas();\n\n      _this.draw();\n    });\n  }\n};\nexports.canvas.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY2FudmFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRWFBLGNBQUFBLEdBQVM7QUFDbEJDLE1BQUksRUFBSjtBQUNJLFNBQUtDLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVcsS0FBS0gsTUFBTCxDQUFZSSxVQUFaLENBQXVCLElBQXZCLENBQVg7QUFDQSxTQUFLQyxZQUFMO0FBQ0EsU0FBS0MsSUFBTDtBQUNBLFNBQUtDLGdCQUFMO0FBQ0EsU0FBS0MsZ0JBQUw7QUFDSCxHQVJpQjtBQVNsQkQsa0JBQWdCO0FBQ1osU0FBS0UsUUFBTCxHQUFnQixLQUFLTixHQUFMLENBQVNPLG9CQUFULENBQThCLENBQTlCLEVBQWdDLENBQWhDLEVBQWtDLEtBQUtWLE1BQUwsQ0FBWVcsS0FBOUMsRUFBcUQsS0FBS1gsTUFBTCxDQUFZWSxNQUFqRSxDQUFoQjtBQUNBLFNBQUtILFFBQUwsQ0FBY0ksWUFBZCxDQUEyQixDQUEzQixFQUE4QkMsb0JBQVNDLEdBQVQsQ0FBYU4sUUFBYixDQUFzQixDQUF0QixDQUE5QjtBQUNBLFNBQUtBLFFBQUwsQ0FBY0ksWUFBZCxDQUEyQixDQUEzQixFQUE4QkMsb0JBQVNDLEdBQVQsQ0FBYU4sUUFBYixDQUFzQixDQUF0QixDQUE5QjtBQUNILEdBYmlCO0FBY2xCSixjQUFZO0FBQ1IsU0FBS0wsTUFBTCxDQUFZVyxLQUFaLEdBQW9CSyxNQUFNLENBQUNDLFVBQTNCO0FBQ0EsU0FBS2pCLE1BQUwsQ0FBWVksTUFBWixHQUFxQkksTUFBTSxDQUFDRSxXQUE1QjtBQUNILEdBakJpQjtBQWtCbEJaLE1BQUk7QUFDQSxTQUFLSCxHQUFMLENBQVNnQixTQUFULEdBQXFCLEtBQUtWLFFBQTFCO0FBQ0EsU0FBS04sR0FBTCxDQUFTaUIsUUFBVCxDQUFrQixDQUFsQixFQUFvQixDQUFwQixFQUFzQixLQUFLcEIsTUFBTCxDQUFZVyxLQUFsQyxFQUF5QyxLQUFLWCxNQUFMLENBQVlZLE1BQXJEO0FBQ0EsV0FBTyxJQUFQO0FBQ0gsR0F0QmlCO0FBdUJsQkosa0JBQWdCO0FBQWhCOztBQUNJUSxVQUFNLENBQUNSLGdCQUFQLENBQXdCLFFBQXhCLEVBQWlDO0FBQzdCYSxXQUFJLENBQUNoQixZQUFMOztBQUNBZ0IsV0FBSSxDQUFDZixJQUFMO0FBQ0gsS0FIRDtBQUlIO0FBNUJpQixDQUFUO0FBK0JiUixlQUFPQyxJQUFQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0LWl0LXNub3cvLi9zcmMvanMvY2FudmFzLnRzPzZiZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vc2V0dGluZ3NcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGNhbnZhcyA9IHtcclxuICAgIGluaXQoKXtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5yZXNpemVDYW52YXMoKTsgLy9kb25uZXIgdW5lIHRhaWxsZSBhdSBjYW52YXNcclxuICAgICAgICB0aGlzLmRyYXcoKSAvLyBkZXNzc2luZXIgbGUgY2FudmFzXHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUdyYWRpZW50KCk7IC8vIEZhaXJlIGxlIGTDqWdyYWRlclxyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigpOyAvLyB2YSBwZXJtZXR0cmUgZGUgcmVzaXplIGF1IG1vbWVudCBvdSBvbiBhanVzdGVcclxuICAgIH0sXHJcbiAgICBnZW5lcmF0ZUdyYWRpZW50KCl7XHJcbiAgICAgICAgdGhpcy5ncmFkaWVudCA9IHRoaXMuY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsMCx0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBzZXR0aW5ncy5za3kuZ3JhZGllbnRbMF0pO1xyXG4gICAgICAgIHRoaXMuZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIHNldHRpbmdzLnNreS5ncmFkaWVudFsxXSk7XHJcbiAgICB9LFxyXG4gICAgcmVzaXplQ2FudmFzKCl7XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9LFxyXG4gICAgZHJhdygpe1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZ3JhZGllbnQ7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwwLHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIGFkZEV2ZW50TGlzdGVuZXIoKXtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUNhbnZhcygpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn1cclxuXHJcbmNhbnZhcy5pbml0KCk7Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJpbml0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJyZXNpemVDYW52YXMiLCJkcmF3IiwiZ2VuZXJhdGVHcmFkaWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJhZGRDb2xvclN0b3AiLCJzZXR0aW5nc18xIiwic2t5Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJfdGhpcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/canvas.ts\n");

/***/ }),

/***/ "./src/js/settings.ts":
/*!****************************!*\
  !*** ./src/js/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  sky: {\n    gradient: [\"hsl(219,93%,11%)\", \"hsl(219,100%,19%)\"]\n  },\n  snowflake: {\n    radius: {\n      min: 2,\n      max: 12\n    },\n    opacity: {\n      min: 0.5,\n      max: 0.9\n    },\n    speedX: {\n      min: 1,\n      max: 4\n    },\n    speedY: {\n      min: 1,\n      max: 6\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsS0FBRyxFQUFFO0FBQ0RDLFlBQVEsRUFBRSxDQUFDLGtCQUFELEVBQXFCLG1CQUFyQjtBQURULEdBRGU7QUFJcEJDLFdBQVMsRUFBRTtBQUNQQyxVQUFNLEVBQUU7QUFBQ0MsU0FBRyxFQUFFLENBQU47QUFBU0MsU0FBRyxFQUFFO0FBQWQsS0FERDtBQUVQQyxXQUFPLEVBQUU7QUFBQ0YsU0FBRyxFQUFFLEdBQU47QUFBV0MsU0FBRyxFQUFFO0FBQWhCLEtBRkY7QUFHUEUsVUFBTSxFQUFFO0FBQUNILFNBQUcsRUFBRSxDQUFOO0FBQVNDLFNBQUcsRUFBRTtBQUFkLEtBSEQ7QUFJUEcsVUFBTSxFQUFFO0FBQUNKLFNBQUcsRUFBRSxDQUFOO0FBQVNDLFNBQUcsRUFBRTtBQUFkO0FBSkQ7QUFKUyxDQUFYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0LWl0LXNub3cvLi9zcmMvanMvc2V0dGluZ3MudHM/YzQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBza3k6IHtcclxuICAgICAgICBncmFkaWVudDogW1wiaHNsKDIxOSw5MyUsMTElKVwiLCBcImhzbCgyMTksMTAwJSwxOSUpXCJdXHJcbiAgICB9LFxyXG4gICAgc25vd2ZsYWtlOiB7XHJcbiAgICAgICAgcmFkaXVzOiB7bWluOiAyLCBtYXg6IDEyfSxcclxuICAgICAgICBvcGFjaXR5OiB7bWluOiAwLjUsIG1heDogMC45fSxcclxuICAgICAgICBzcGVlZFg6IHttaW46IDEsIG1heDogNH0sXHJcbiAgICAgICAgc3BlZWRZOiB7bWluOiAxLCBtYXg6IDZ9LFxyXG4gICAgfVxyXG5cclxufSJdLCJuYW1lcyI6WyJleHBvcnRzIiwic2t5IiwiZ3JhZGllbnQiLCJzbm93Zmxha2UiLCJyYWRpdXMiLCJtaW4iLCJtYXgiLCJvcGFjaXR5Iiwic3BlZWRYIiwic3BlZWRZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0LWl0LXNub3cvLi9zcmMvc2Nzcy9tYWluLnNjc3M/ZjdlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/Main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklet_it_snow"] = self["webpackChunklet_it_snow"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/Main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;