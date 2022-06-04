/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Singleton.ts":
/*!**************************!*\
  !*** ./src/Singleton.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// https://refactoring.guru/uk/design-patterns/singleton\r\n// Singleton (Одинак) - це породжувальний патерн проектування, який гарантує,\r\n// що клас має лише один екземпляр, та надає глобальну точку доступу до нього.\r\nvar Singleton = /** @class */ (function () {\r\n    /**\r\n     * Конструктор класу повинен завжди бути приватним, щоб уникнути можливості викликати його через оператор 'new'.\r\n     */\r\n    function Singleton() {\r\n        this.count = 0;\r\n        console.log('--- S I N G L E T O N ---');\r\n    }\r\n    /**\r\n     * Головний статичний метод одинака служить альтирнативою коструктору і є точкою доступу до екземпляра цього класу.\r\n     */\r\n    Singleton.getInstance = function () {\r\n        if (!Singleton.instance) {\r\n            Singleton.instance = new Singleton();\r\n            console.log('Singleton was created!');\r\n        }\r\n        console.log('This is still the same instance of Singleton!');\r\n        return Singleton.instance;\r\n    };\r\n    /**\r\n     * Пишемо якусь бізнес логіку, яку користувач очікує від нашого класу.\r\n     */\r\n    Singleton.prototype.increaseCount = function () {\r\n        return this.count++;\r\n    };\r\n    Singleton.instance = null;\r\n    return Singleton;\r\n}());\r\nSingleton.getInstance(); // 0\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Singleton);\r\n\n\n//# sourceURL=webpack://patterns/./src/Singleton.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Singleton */ \"./src/Singleton.ts\");\n\r\n_Singleton__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getInstance();\r\n\n\n//# sourceURL=webpack://patterns/./src/index.ts?");

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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;