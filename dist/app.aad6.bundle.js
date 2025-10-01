/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunknono_webpack"] = self["webpackChunknono_webpack"] || []).push([["app"],{

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ \"./a.js\");\n/* harmony import */ var _css_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @css/test */ \"./css/test.css\");\n/* harmony import */ var _css_lesstest_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @css/lesstest.less */ \"./css/lesstest.less\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _img_xiaohuoma_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/xiaohuoma.png */ \"./img/xiaohuoma.png\");\n\n\n\n\n\n\n// import num1 from \"./mode/num1\";\n// import num2 from \"./mode/num2\";\n// import num3 from \"./mode/num3\";\n// 批量引入, true (引入子文件夹), false (只有一级目录, 忽略子文件夹), 再加个规则, 满足规则才引入\nvar r = __webpack_require__(\"./mode sync .js\"); // 返回一个方法\n// r.keys();  // 引入的所有的数组 [./num1.js, ./num2.js]\nvar all;\nr.keys().forEach(function (item) {\n  // item 是 key, 所以要去 r(item) 拿 value\n  console.log(r(item));\n  all += r(item);\n});\nconsole.log(\"累加: \", all);\n\n// setTimeout(() => {\n//   // import(), require.ensure\n//   // import(/*webpackChunkName: \"a\"*/ \"./a.js\").then((res) => {\n//   //   // 相当于 之前的 console.log(b)\n//   //   console.log(res);\n//   //   console.log(res.default);\n//   // });\n\n//   // ([依赖], 函数, 命名)\n//   require.ensure(\n//     [],\n//     () => {\n//       let b = require(\"./a.js\");\n//       console.log(b.default);\n//     },\n//     \"a\",\n//   );\n// }, 3000);\n\n\n(function () {\n  var a = 23;\n  console.log(_a__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  console.log(a);\n  console.log(3);\n  console.log(new Image().src = _img_xiaohuoma_png__WEBPACK_IMPORTED_MODULE_4__);\n})();\n\n//# sourceURL=webpack://nono-webpack/./app.js?\n}");

/***/ }),

/***/ "./css/lesstest.less":
/*!***************************!*\
  !*** ./css/lesstest.less ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://nono-webpack/./css/lesstest.less?\n}");

/***/ }),

/***/ "./css/test.css":
/*!**********************!*\
  !*** ./css/test.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://nono-webpack/./css/test.css?\n}");

/***/ }),

/***/ "./img/xiaohuoma.png":
/*!***************************!*\
  !*** ./img/xiaohuoma.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"xiaohuoma.[chunkhash]..png\";\n\n//# sourceURL=webpack://nono-webpack/./img/xiaohuoma.png?\n}");

/***/ }),

/***/ "./mode sync .js":
/*!*************************************!*\
  !*** ./mode/ sync nonrecursive .js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var map = {\n\t\"./num1.js\": \"./mode/num1.js\",\n\t\"./num2.js\": \"./mode/num2.js\",\n\t\"./num3.js\": \"./mode/num3.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./mode sync .js\";\n\n//# sourceURL=webpack://nono-webpack/./mode/_sync_nonrecursive_.js?\n}");

/***/ }),

/***/ "./mode/num1.js":
/*!**********************!*\
  !*** ./mode/num1.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconsole.log(\"num1\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (1);\n\n//# sourceURL=webpack://nono-webpack/./mode/num1.js?\n}");

/***/ }),

/***/ "./mode/num2.js":
/*!**********************!*\
  !*** ./mode/num2.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconsole.log(\"num2\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (2);\n\n//# sourceURL=webpack://nono-webpack/./mode/num2.js?\n}");

/***/ }),

/***/ "./mode/num3.js":
/*!**********************!*\
  !*** ./mode/num3.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconsole.log(\"num3\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (3);\n\n//# sourceURL=webpack://nono-webpack/./mode/num3.js?\n}");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["common-a_js","vendor-node_modules_lodash_lodash_js"], () => (__webpack_exec__("./app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);