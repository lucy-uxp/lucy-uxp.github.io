/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/*! exports provided: id, author, widgets, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":\"582af18d-6702-486b-8a86-329f7b318cd0\",\"author\":\"\",\"widgets\":[]}");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tenant-header {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .tenant-header .icon {\n    width: 30px;\n    height: 30px;\n    background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNy42MjYiIGhlaWdodD0iMjcuMTU3IiB2aWV3Qm94PSIwIDAgMjcuNjI2IDI3LjE1NyI+CiAgPGcgaWQ9Ikdyb3VwXzIyNzAiIGRhdGEtbmFtZT0iR3JvdXAgMjI3MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYzNi45MSAtMzgpIj4KICAgIDxnIGlkPSJJY29uX2lvbmljLW1kLW1lZ2FwaG9uZSIgZGF0YS1uYW1lPSJJY29uIGlvbmljLW1kLW1lZ2FwaG9uZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjM2LjkxIDM4KSIgb3BhY2l0eT0iMC41MzgiPgogICAgICA8cGF0aCBpZD0iUGF0aF80NTAiIGRhdGEtbmFtZT0iUGF0aCA0NTAiIGQ9Ik0xLjM0MSwwLDAsMS4zMzVBNC43Myw0LjczLDAsMCwxLDEuMzg3LDQuNjc3LDQuNzMsNC43MywwLDAsMSwwLDguMDJMMS4zNCw5LjM2QTYuNjA2LDYuNjA2LDAsMCwwLDMuMjc5LDQuNjgzLDYuNjIsNi42MiwwLDAsMCwxLjM0MSwwWiIgdHJhbnNmb3JtPSJtYXRyaXgoMC42OTUsIC0wLjcxOSwgMC43MTksIDAuNjk1LCAxNC4xNjYsIDYuODQxKSIgZmlsbD0iIzQyNDI0MiIvPgogICAgICA8cGF0aCBpZD0iUGF0aF80NTEiIGRhdGEtbmFtZT0iUGF0aCA0NTEiIGQ9Ik0xLjMxNywwLC41OTIuNzI2LDAsMS4zMTdBOC4zODIsOC4zODIsMCwwLDEsMi40NTUsNy4yNTQsOC4zNzgsOC4zNzgsMCwwLDEsMCwxMy4xOWwxLjMxNywxLjMxN0ExMC4yNzIsMTAuMjcyLDAsMCwwLDQuMzIzLDcuMjU0LDEwLjI0OCwxMC4yNDgsMCwwLDAsMS4zMTcsMFoiIHRyYW5zZm9ybT0ibWF0cml4KDAuNjk1LCAtMC43MTksIDAuNzE5LCAwLjY5NSwgMTQuMTg3LCAzLjExKSIgZmlsbD0iIzQyNDI0MiIvPgogICAgICA8cGF0aCBpZD0iSWNvbl9mZWF0aGVyLW1lc3NhZ2Utc3F1YXJlIiBkYXRhLW5hbWU9Ikljb24gZmVhdGhlci1tZXNzYWdlLXNxdWFyZSIgZD0iTTIxLjI1NSwxNS42N2ExLjg2MiwxLjg2MiwwLDAsMS0xLjg2MiwxLjg2Mkg4LjIyM0w0LjUsMjEuMjU1VjYuMzYyQTEuODYyLDEuODYyLDAsMCwxLDYuMzYyLDQuNUgxOS4zOTRhMS44NjIsMS44NjIsMCwwLDEsMS44NjIsMS44NjJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNC41IDUuOTAyKSIgZmlsbD0iIzQyNDI0MiIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==\");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 60%; }\n\n.tenant-toolbar {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .tenant-toolbar .action-buttons {\n    width: auto;\n    height: auto;\n    display: flex;\n    align-items: center; }\n    .tenant-toolbar .action-buttons .action-button {\n      width: auto;\n      height: auto;\n      padding: 10px;\n      margin: auto 10px; }\n      .tenant-toolbar .action-buttons .action-button .icon {\n        width: 50px;\n        height: 30px;\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: contain;\n        display: block;\n        margin: auto;\n        margin-bottom: 10px; }\n      .tenant-toolbar .action-buttons .action-button .text {\n        font-size: 10px; }\n      .tenant-toolbar .action-buttons .action-button.create-notification .icon {\n        background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NC4yMjYiIGhlaWdodD0iNDAuMjUiIHZpZXdCb3g9IjAgMCA2NC4yMjYgNDAuMjUiPgogIDxnIGlkPSJHcm91cF8yMjcxIiBkYXRhLW5hbWU9Ikdyb3VwIDIyNzEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04OSAtMzYyKSI+CiAgICA8ZyBpZD0iUmVjdGFuZ2xlXzczNSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNzM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4OSAzNjIpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMSI+CiAgICAgIDxyZWN0IHdpZHRoPSI1NCIgaGVpZ2h0PSIzNiIgcng9IjMiIHN0cm9rZT0ibm9uZSIvPgogICAgICA8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjUzIiBoZWlnaHQ9IjM1IiByeD0iMi41IiBmaWxsPSJub25lIi8+CiAgICA8L2c+CiAgICA8ZyBpZD0iRWxsaXBzZV8xNDMiIGRhdGEtbmFtZT0iRWxsaXBzZSAxNDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkyIDM2NSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIwLjUiPgogICAgICA8Y2lyY2xlIGN4PSIxLjUiIGN5PSIxLjUiIHI9IjEuNSIgc3Ryb2tlPSJub25lIi8+CiAgICAgIDxjaXJjbGUgY3g9IjEuNSIgY3k9IjEuNSIgcj0iMS4yNSIgZmlsbD0ibm9uZSIvPgogICAgPC9nPgogICAgPGcgaWQ9IkVsbGlwc2VfMTQ0IiBkYXRhLW5hbWU9IkVsbGlwc2UgMTQ0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5NyAzNjUpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMC41Ij4KICAgICAgPGNpcmNsZSBjeD0iMS41IiBjeT0iMS41IiByPSIxLjUiIHN0cm9rZT0ibm9uZSIvPgogICAgICA8Y2lyY2xlIGN4PSIxLjUiIGN5PSIxLjUiIHI9IjEuMjUiIGZpbGw9Im5vbmUiLz4KICAgIDwvZz4KICAgIDxnIGlkPSJFbGxpcHNlXzE0NSIgZGF0YS1uYW1lPSJFbGxpcHNlIDE0NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAyIDM2NSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIwLjUiPgogICAgICA8Y2lyY2xlIGN4PSIxLjUiIGN5PSIxLjUiIHI9IjEuNSIgc3Ryb2tlPSJub25lIi8+CiAgICAgIDxjaXJjbGUgY3g9IjEuNSIgY3k9IjEuNSIgcj0iMS4yNSIgZmlsbD0ibm9uZSIvPgogICAgPC9nPgogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV83MzYiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDczNiIgd2lkdGg9IjQ3IiBoZWlnaHQ9IjEwIiByeD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTIgMzcxKSIgZmlsbD0iI2QwZDBkMCIgb3BhY2l0eT0iMC4yOTkiLz4KICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNzM3IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA3MzciIHdpZHRoPSIyMiIgaGVpZ2h0PSIxMCIgcng9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkyIDM4NCkiIGZpbGw9IiNkMGQwZDAiIG9wYWNpdHk9IjAuMjk5Ii8+CiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzczOCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNzM4IiB3aWR0aD0iMjIiIGhlaWdodD0iMTAiIHJ4PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTcgMzg0KSIgZmlsbD0iI2QwZDBkMCIgb3BhY2l0eT0iMC4yOTkiLz4KICAgIDxwYXRoIGlkPSJJY29uX21hdGVyaWFsLW5vdGlmaWNhdGlvbnMtbm9uZSIgZGF0YS1uYW1lPSJJY29uIG1hdGVyaWFsLW5vdGlmaWNhdGlvbnMtbm9uZSIgZD0iTTE2LjkzNywzMC40MDlhMi43NDIsMi43NDIsMCwwLDAsMi43MzQtMi43MzRIMTQuMkEyLjc0MiwyLjc0MiwwLDAsMCwxNi45MzcsMzAuNDA5Wm04LjItOC4yVjE1LjM3YzAtNC4yLTIuMjI4LTcuNzExLTYuMTUyLTguNjRWNS44YTIuMDUxLDIuMDUxLDAsMSwwLTQuMSwwdi45M2MtMy45MS45My02LjE1Miw0LjQyOS02LjE1Miw4LjY0djYuODM2TDYsMjQuOTR2MS4zNjdIMjcuODc0VjI0Ljk0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI0Ljg1MyAzNzEuMzQxKSIgZmlsbD0iI2ZhZmFmYSIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICA8L2c+Cjwvc3ZnPgo=\"); }\n      .tenant-toolbar .action-buttons .action-button.create-circular .icon {\n        background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MyIgaGVpZ2h0PSIzNCIgdmlld0JveD0iMCAwIDUzIDM0Ij4KICA8ZyBpZD0iR3JvdXBfMjI3MiIgZGF0YS1uYW1lPSJHcm91cCAyMjcyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjY5IC0zNjgpIj4KICAgIDxnIGlkPSJSZWN0YW5nbGVfNzM1IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA3MzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2OSAzNjgpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMSI+CiAgICAgIDxyZWN0IHdpZHRoPSI1MyIgaGVpZ2h0PSIzNCIgcng9IjMiIHN0cm9rZT0ibm9uZSIvPgogICAgICA8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjUyIiBoZWlnaHQ9IjMzIiByeD0iMi41IiBmaWxsPSJub25lIi8+CiAgICA8L2c+CiAgICA8ZyBpZD0iR3JvdXBfMTcwOSIgZGF0YS1uYW1lPSJHcm91cCAxNzA5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNzYuNjQ0IDM3Ni4yOTMpIj4KICAgICAgPGNpcmNsZSBpZD0iRWxsaXBzZV8xNDYiIGRhdGEtbmFtZT0iRWxsaXBzZSAxNDYiIGN4PSIxLjM4NyIgY3k9IjEuMzg3IiByPSIxLjM4NyIgZmlsbD0iI2QwZDBkMCIvPgogICAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzE0NyIgZGF0YS1uYW1lPSJFbGxpcHNlIDE0NyIgY3g9IjEuMzg3IiBjeT0iMS4zODciIHI9IjEuMzg3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDcuNzY5KSIgZmlsbD0iI2QwZDBkMCIvPgogICAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzE0OCIgZGF0YS1uYW1lPSJFbGxpcHNlIDE0OCIgY3g9IjEuMzg3IiBjeT0iMS4zODciIHI9IjEuMzg3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE1LjUzOCkiIGZpbGw9IiNkMGQwZDAiLz4KICAgICAgPGcgaWQ9IlJlY3RhbmdsZV83MzYiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDczNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS41NDkgMC40NDQpIiBmaWxsPSIjNzA3MDcwIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4yOTkiPgogICAgICAgIDxyZWN0IHdpZHRoPSIzMS4yMTYiIGhlaWdodD0iMi4yMiIgcng9IjEiIHN0cm9rZT0ibm9uZSIvPgogICAgICAgIDxyZWN0IHg9IjAuNSIgeT0iMC41IiB3aWR0aD0iMzAuMjE2IiBoZWlnaHQ9IjEuMjIiIHJ4PSIwLjUiIGZpbGw9Im5vbmUiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iUmVjdGFuZ2xlXzczOSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNzM5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjU0OSA4LjIxMykiIGZpbGw9IiM3MDcwNzAiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjI5OSI+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjMxLjIxNiIgaGVpZ2h0PSIyLjIyIiByeD0iMSIgc3Ryb2tlPSJub25lIi8+CiAgICAgICAgPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIzMC4yMTYiIGhlaWdodD0iMS4yMiIgcng9IjAuNSIgZmlsbD0ibm9uZSIvPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJSZWN0YW5nbGVfNzQwIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA3NDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuNTQ5IDE1Ljk4MikiIGZpbGw9IiM3MDcwNzAiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjI5OSI+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjMxLjIxNiIgaGVpZ2h0PSIyLjIyIiByeD0iMSIgc3Ryb2tlPSJub25lIi8+CiAgICAgICAgPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIzMC4yMTYiIGhlaWdodD0iMS4yMiIgcng9IjAuNSIgZmlsbD0ibm9uZSIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K\"); }\n  .tenant-toolbar .filters {\n    width: auto;\n    height: auto;\n    display: flex;\n    align-items: center; }\n    .tenant-toolbar .filters .filter {\n      margin: auto 10px; }\n      .tenant-toolbar .filters .filter.showing {\n        display: flex;\n        align-items: center;\n        text-transform: capitalize; }\n        .tenant-toolbar .filters .filter.showing .toggle {\n          width: auto;\n          height: auto;\n          padding: 6px 10px;\n          background-color: #f4f4f4;\n          border-radius: 50px;\n          margin: auto 10px;\n          display: flex;\n          align-items: center; }\n          .tenant-toolbar .filters .filter.showing .toggle .icon {\n            width: 20px;\n            height: 20px;\n            background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMC4zMjUiIGhlaWdodD0iMTAuMDYzIiB2aWV3Qm94PSIwIDAgMTAuMzI1IDEwLjA2MyI+PGRlZnM+PHN0eWxlPi5he29wYWNpdHk6MC4yNDt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik01LjkzMSwxMi4wMzZsLS41MTIuNTEyYS41NTEuNTUxLDAsMCwxLS43ODEsMEwuMTU5LDguMDcxYS41NTEuNTUxLDAsMCwxLDAtLjc4MWw0LjQ4LTQuNDhhLjU1MS41NTEsMCwwLDEsLjc4MSwwbC41MTIuNTEyYS41NTQuNTU0LDAsMCwxLS4wMDkuNzlMMy4xNDUsNi43NTdIOS43NjhhLjU1Mi41NTIsMCwwLDEsLjU1My41NTN2LjczN2EuNTUyLjU1MiwwLDAsMS0uNTUzLjU1M0gzLjE0NWwyLjc3NywyLjY0NUEuNTUuNTUsMCwwLDEsNS45MzEsMTIuMDM2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDQgLTIuNjQ3KSIvPjwvc3ZnPg==\");\n            background-position: center;\n            background-repeat: no-repeat;\n            background-size: scale-down;\n            display: inline-block;\n            margin-right: 5px;\n            transform: rotate(-90deg); }\n      .tenant-toolbar .filters .filter.search {\n        position: relative; }\n        .tenant-toolbar .filters .filter.search .search-icon {\n          width: 30px;\n          height: 30px;\n          background-color: transparent;\n          background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS4yMTgiIGhlaWdodD0iMTEuNzA3IiB2aWV3Qm94PSIwIDAgMTEuMjE4IDExLjcwNyI+PGRlZnM+PHN0eWxlPi5hLC5iLC5ke2ZpbGw6bm9uZTt9LmEsLmJ7c3Ryb2tlOiM3MDcwNzA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7b3BhY2l0eTowLjU0O30uYXtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5je3N0cm9rZTpub25lO308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40ODkpIj48ZyBjbGFzcz0iYSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC40ODkpIj48Y2lyY2xlIGNsYXNzPSJjIiBjeD0iNC41IiBjeT0iNC41IiByPSI0LjUiLz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iNC41IiBjeT0iNC41IiByPSI0Ii8+PC9nPjxsaW5lIGNsYXNzPSJiIiB4Mj0iMi4wNzciIHkyPSIyLjA3NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC45MjMgOC45MjMpIi8+PC9nPjwvc3ZnPg==\");\n          background-position: center;\n          background-repeat: no-repeat;\n          background-size: 50%;\n          position: absolute;\n          top: 50%;\n          right: 0;\n          transform: translate(-20%, -50%);\n          cursor: pointer; }\n        .tenant-toolbar .filters .filter.search input {\n          min-width: 150px;\n          max-width: 250px;\n          border-radius: 19px;\n          padding: 10px 55px 10px 20px;\n          outline: none;\n          border: none;\n          background: #f8f8f8;\n          font-size: 10px;\n          position: relative; }\n          .tenant-toolbar .filters .filter.search input:active, .tenant-toolbar .filters .filter.search input:focus {\n            background-color: white;\n            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.29); }\n        .tenant-toolbar .filters .filter.search.active input {\n          background-color: white;\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.29); }\n        .tenant-toolbar .filters .filter.search.active .search-icon {\n          background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNS42NyAxNS42NyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiNjY2M7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozcHg7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMTQuMTciIHkxPSIxLjUiIHgyPSIxLjUiIHkyPSIxNC4xNyIvPjxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjE0LjE3IiB5MT0iMTQuMTciIHgyPSIxLjUiIHkyPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==\");\n          background-size: 24%; }\n\n.notification-item {\n  width: 100%;\n  height: auto;\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  padding: 15px 20px; }\n  .notification-item:nth-child(odd) {\n    background-color: #F1FBFC; }\n  .notification-item .icon-container {\n    width: 30px;\n    height: 30px;\n    background-color: transparent; }\n    .notification-item .icon-container .container-bg {\n      width: 100%;\n      height: 100%;\n      background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgaGVpZ2h0PSIzNSIgdmlld0JveD0iMCAwIDM1IDM1Ij4KICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzE2NSIgZGF0YS1uYW1lPSJFbGxpcHNlIDE2NSIgY3g9IjE3LjUiIGN5PSIxNy41IiByPSIxNy41IiBmaWxsPSIjNzA3MDcwIiBvcGFjaXR5PSIwLjE0Ii8+Cjwvc3ZnPgo=\");\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: contain; }\n      .notification-item .icon-container .container-bg .icon-bg {\n        width: 100%;\n        height: 100%;\n        background-color: transparent; }\n        .notification-item .icon-container .container-bg .icon-bg .icon {\n          width: 100%;\n          height: 100%;\n          background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNC4xNzciIGhlaWdodD0iMTEuMzQxIiB2aWV3Qm94PSIwIDAgMTQuMTc3IDExLjM0MSI+CiAgPHBhdGggaWQ9Ikljb25fbWF0ZXJpYWwtd2ViIiBkYXRhLW5hbWU9Ikljb24gbWF0ZXJpYWwtd2ViIiBkPSJNMTUuNzU5LDZINC40MThBMS40MTYsMS40MTYsMCwwLDAsMy4wMDcsNy40MThMMywxNS45MjRhMS40MjIsMS40MjIsMCwwLDAsMS40MTgsMS40MThIMTUuNzU5YTEuNDIyLDEuNDIyLDAsMCwwLDEuNDE4LTEuNDE4VjcuNDE4QTEuNDIyLDEuNDIyLDAsMCwwLDE1Ljc1OSw2Wm0tMy41NDQsOS45MjRoLTcuOFYxMy4wODhoNy44Wm0wLTMuNTQ0aC03LjhWOS41NDRoNy44Wm0zLjU0NCwzLjU0NEgxMi45MjRWOS41NDRoMi44MzVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMyAtNikiIG9wYWNpdHk9IjAuNTQiLz4KPC9zdmc+Cg==\");\n          background-position: center;\n          background-repeat: no-repeat;\n          background-size: 40%; }\n  .notification-item .notification-container {\n    width: 30%;\n    margin: auto 20px; }\n    .notification-item .notification-container .notification {\n      width: auto;\n      display: inline-block;\n      padding: 6px 10px;\n      background-color: #e6e6e6;\n      border-radius: 5px; }\n  .notification-item .tenant {\n    width: 8%;\n    margin: auto 10px; }\n    .notification-item .tenant .name {\n      color: #424242;\n      font-size: 10px; }\n    .notification-item .tenant .section {\n      color: #424242;\n      font-size: 12px;\n      font-weight: 900; }\n  .notification-item .location,\n  .notification-item .sd,\n  .notification-item .ed {\n    width: 8%;\n    margin: auto 10px; }\n    .notification-item .location .label,\n    .notification-item .sd .label,\n    .notification-item .ed .label {\n      color: #424242;\n      font-size: 10px; }\n    .notification-item .location .value,\n    .notification-item .sd .value,\n    .notification-item .ed .value {\n      color: #424242;\n      font-size: 12px;\n      font-weight: 900; }\n  .notification-item .status-container {\n    width: 8%;\n    margin: auto 10px; }\n    .notification-item .status-container .status {\n      display: inline-block;\n      width: auto;\n      height: auto;\n      border-radius: 6px;\n      background-color: #dedede;\n      padding: 6px 10px;\n      text-transform: capitalize; }\n    .notification-item .status-container.in-progress .status {\n      background-color: #fff3b7; }\n    .notification-item .status-container.completed .status {\n      background-color: #1ec7ba; }\n    .notification-item .status-container.pending .status {\n      background-color: #ec4b7b; }\n  .notification-item .type-container {\n    width: 8%;\n    margin: auto 10px; }\n    .notification-item .type-container .type {\n      position: relative;\n      width: auto;\n      height: auto;\n      border-radius: 6px;\n      background-color: #dedede;\n      padding: 6px 10px 6px 20px;\n      text-transform: capitalize;\n      display: inline-block; }\n      .notification-item .type-container .type:before {\n        content: \"\";\n        position: absolute;\n        top: 50%;\n        left: 0;\n        transform: translateY(-50%);\n        margin-right: 10px;\n        width: 20px;\n        height: 20px;\n        background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNC4xNzciIGhlaWdodD0iMTEuMzQxIiB2aWV3Qm94PSIwIDAgMTQuMTc3IDExLjM0MSI+CiAgPHBhdGggaWQ9Ikljb25fbWF0ZXJpYWwtd2ViIiBkYXRhLW5hbWU9Ikljb24gbWF0ZXJpYWwtd2ViIiBkPSJNMTUuNzU5LDZINC40MThBMS40MTYsMS40MTYsMCwwLDAsMy4wMDcsNy40MThMMywxNS45MjRhMS40MjIsMS40MjIsMCwwLDAsMS40MTgsMS40MThIMTUuNzU5YTEuNDIyLDEuNDIyLDAsMCwwLDEuNDE4LTEuNDE4VjcuNDE4QTEuNDIyLDEuNDIyLDAsMCwwLDE1Ljc1OSw2Wm0tMy41NDQsOS45MjRoLTcuOFYxMy4wODhoNy44Wm0wLTMuNTQ0aC03LjhWOS41NDRoNy44Wm0zLjU0NCwzLjU0NEgxMi45MjRWOS41NDRoMi44MzVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMyAtNikiIG9wYWNpdHk9IjAuNTQiLz4KPC9zdmc+Cg==\");\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: 50%; }\n  .notification-item .toggle-container {\n    margin: auto 10px; }\n    .notification-item .toggle-container .toggle {\n      width: 40px;\n      height: 30px;\n      background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOSIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI5IDEyIj4KICA8ZyBpZD0iR3JvdXBfMjI3MyIgZGF0YS1uYW1lPSJHcm91cCAyMjczIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQ0NyAtMjI5KSI+CiAgICA8bGluZSBpZD0iTGluZV8zMyIgZGF0YS1uYW1lPSJMaW5lIDMzIiB4MT0iMjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0NDggMjM1LjUpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjMzOSIvPgogICAgPGNpcmNsZSBpZD0iRWxsaXBzZV8xNDkiIGRhdGEtbmFtZT0iRWxsaXBzZSAxNDkiIGN4PSI2IiBjeT0iNiIgcj0iNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ1OS41IDIyOSkiIGZpbGw9IiNlYzRiN2IiLz4KICA8L2c+Cjwvc3ZnPgo=\");\n      transform: rotate(180deg);\n      filter: grayscale(1);\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: 80%; }\n    .notification-item .toggle-container.published .toggle {\n      background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOSIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI5IDEyIj4KICA8ZyBpZD0iR3JvdXBfMjI3MyIgZGF0YS1uYW1lPSJHcm91cCAyMjczIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQ0NyAtMjI5KSI+CiAgICA8bGluZSBpZD0iTGluZV8zMyIgZGF0YS1uYW1lPSJMaW5lIDMzIiB4MT0iMjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0NDggMjM1LjUpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjMzOSIvPgogICAgPGNpcmNsZSBpZD0iRWxsaXBzZV8xNDkiIGRhdGEtbmFtZT0iRWxsaXBzZSAxNDkiIGN4PSI2IiBjeT0iNiIgcj0iNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ1OS41IDIyOSkiIGZpbGw9IiNlYzRiN2IiLz4KICA8L2c+Cjwvc3ZnPgo=\");\n      transform: rotate(-180deg);\n      filter: unset; }\n  .notification-item .notification-status {\n    text-transform: capitalize; }\n  .notification-item.popup .icon-container {\n    background-color: transparent; }\n    .notification-item.popup .icon-container .container-bg {\n      background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgaGVpZ2h0PSIzNSIgdmlld0JveD0iMCAwIDM1IDM1Ij4KICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzE2NSIgZGF0YS1uYW1lPSJFbGxpcHNlIDE2NSIgY3g9IjE3LjUiIGN5PSIxNy41IiByPSIxNy41IiBmaWxsPSIjNzA3MDcwIiBvcGFjaXR5PSIwLjE0Ii8+Cjwvc3ZnPgo=\");\n      filter: saturate(100%) brightness(0) invert(55%) sepia(74%) saturate(4542%) hue-rotate(314deg) brightness(95%) contrast(95%); }\n    .notification-item.popup .icon-container .icon-bg {\n      background-color: transparent; }\n      .notification-item.popup .icon-container .icon-bg .icon {\n        background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICA8ZyBpZD0iR3JvdXBfMjI2OSIgZGF0YS1uYW1lPSJHcm91cCAyMjY5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTMzOSAtMjI3KSI+CiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzgzOCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgODM4IiB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMzkgMjI5KSIgZmlsbD0iIzQyNDI0MiIgb3BhY2l0eT0iMC41NCIvPgogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV84MzkiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDgzOSIgd2lkdGg9IjExIiBoZWlnaHQ9IjExIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzQ0IDIyNykiIGZpbGw9IiM0MjQyNDIiLz4KICA8L2c+Cjwvc3ZnPgo=\");\n        filter: saturate(100%) brightness(0) invert(1); }\n  .notification-item.popup .notification {\n    background-color: #fff2f6; }\n  .notification-item.popup .type-container .type::before {\n    background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICA8ZyBpZD0iR3JvdXBfMjI2OSIgZGF0YS1uYW1lPSJHcm91cCAyMjY5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTMzOSAtMjI3KSI+CiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzgzOCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgODM4IiB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMzkgMjI5KSIgZmlsbD0iIzQyNDI0MiIgb3BhY2l0eT0iMC41NCIvPgogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV84MzkiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDgzOSIgd2lkdGg9IjExIiBoZWlnaHQ9IjExIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzQ0IDIyNykiIGZpbGw9IiM0MjQyNDIiLz4KICA8L2c+Cjwvc3ZnPgo=\"); }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
const uxp_1 = __webpack_require__(/*! ./uxp */ "./src/uxp.ts");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/**
 * render modal on click
 */
const TenantCommunication = (props) => {
    // state
    let [show, setShow] = React.useState(props.show);
    let [searchText, setSearchText] = React.useState("");
    let Items = [
        {
            notification: "Notification # 21 Ceiling work conducted until 10.00 AM access ill be limited",
            tenant: "Johnson & Johnson",
            section: "Zone 03",
            location: "Facility 01",
            startDate: '22/07/2020',
            endDate: "23/07/2020",
            status: "in-progress",
            type: 'popup',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 19 COVID-19 precautions training at lobby, east wing ",
            tenant: "All Tenants",
            section: "All Zones",
            location: "Lobby Area",
            startDate: '22/07/2020',
            endDate: "",
            status: "completed",
            type: 'banner',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 20 Rent due by 03/08/2020 ",
            tenant: "Johnson & Johnson",
            section: "Zone 03",
            location: "Facility 01",
            startDate: '22/07/2020',
            endDate: "23/07/2020",
            status: "in-progress",
            type: 'banner',
            notificationStatus: "un-published"
        },
        {
            notification: "Notification # 18 Free coffee samples",
            tenant: "All Tenants",
            section: "All Zones",
            location: "Lobby Area",
            startDate: '22/07/2020',
            endDate: "",
            status: "completed",
            type: 'banner',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 21 Ceiling work conducted until 10.00 AM access ill be limited",
            tenant: "Johnson & Johnson",
            section: "Zone 03",
            location: "Facility 01",
            startDate: '22/07/2020',
            endDate: "23/07/2020",
            status: "in-progress",
            type: 'popup',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 19 COVID-19 precautions training at lobby, east wing ",
            tenant: "All Tenants",
            section: "All Zones",
            location: "Lobby Area",
            startDate: '22/07/2020',
            endDate: "",
            status: "completed",
            type: 'banner',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 20 Rent due by 03/08/2020 ",
            tenant: "Johnson & Johnson",
            section: "Zone 03",
            location: "Facility 01",
            startDate: '22/07/2020',
            endDate: "23/07/2020",
            status: "in-progress",
            type: 'banner',
            notificationStatus: "un-published"
        },
        {
            notification: "Notification # 18 Free coffee samples",
            tenant: "All Tenants",
            section: "All Zones",
            location: "Lobby Area",
            startDate: '22/07/2020',
            endDate: "",
            status: "completed",
            type: 'banner',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 21 Ceiling work conducted until 10.00 AM access ill be limited",
            tenant: "Johnson & Johnson",
            section: "Zone 03",
            location: "Facility 01",
            startDate: '22/07/2020',
            endDate: "23/07/2020",
            status: "in-progress",
            type: 'popup',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 19 COVID-19 precautions training at lobby, east wing ",
            tenant: "All Tenants",
            section: "All Zones",
            location: "Lobby Area",
            startDate: '22/07/2020',
            endDate: "",
            status: "completed",
            type: 'banner',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 20 Rent due by 03/08/2020 ",
            tenant: "Johnson & Johnson",
            section: "Zone 03",
            location: "Facility 01",
            startDate: '22/07/2020',
            endDate: "23/07/2020",
            status: "in-progress",
            type: 'banner',
            notificationStatus: "un-published"
        },
        {
            notification: "Notification # 18 Free coffee samples",
            tenant: "All Tenants",
            section: "All Zones",
            location: "Lobby Area",
            startDate: '22/07/2020',
            endDate: "",
            status: "completed",
            type: 'banner',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 21 Ceiling work conducted until 10.00 AM access ill be limited",
            tenant: "Johnson & Johnson",
            section: "Zone 03",
            location: "Facility 01",
            startDate: '22/07/2020',
            endDate: "23/07/2020",
            status: "in-progress",
            type: 'popup',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 19 COVID-19 precautions training at lobby, east wing ",
            tenant: "All Tenants",
            section: "All Zones",
            location: "Lobby Area",
            startDate: '22/07/2020',
            endDate: "",
            status: "completed",
            type: 'banner',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 20 Rent due by 03/08/2020 ",
            tenant: "Johnson & Johnson",
            section: "Zone 03",
            location: "Facility 01",
            startDate: '22/07/2020',
            endDate: "23/07/2020",
            status: "in-progress",
            type: 'banner',
            notificationStatus: "un-published"
        },
        {
            notification: "Notification # 18 Free coffee samples",
            tenant: "All Tenants",
            section: "All Zones",
            location: "Lobby Area",
            startDate: '22/07/2020',
            endDate: "",
            status: "completed",
            type: 'banner',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 21 Ceiling work conducted until 10.00 AM access ill be limited",
            tenant: "Johnson & Johnson",
            section: "Zone 03",
            location: "Facility 01",
            startDate: '22/07/2020',
            endDate: "23/07/2020",
            status: "in-progress",
            type: 'popup',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 19 COVID-19 precautions training at lobby, east wing ",
            tenant: "All Tenants",
            section: "All Zones",
            location: "Lobby Area",
            startDate: '22/07/2020',
            endDate: "",
            status: "completed",
            type: 'banner',
            notificationStatus: "published"
        },
        {
            notification: "Notification # 20 Rent due by 03/08/2020 ",
            tenant: "Johnson & Johnson",
            section: "Zone 03",
            location: "Facility 01",
            startDate: '22/07/2020',
            endDate: "23/07/2020",
            status: "in-progress",
            type: 'banner',
            notificationStatus: "un-published"
        },
        {
            notification: "Notification # 18 Free coffee samples",
            tenant: "All Tenants",
            section: "All Zones",
            location: "Lobby Area",
            startDate: '22/07/2020',
            endDate: "",
            status: "completed",
            type: 'banner',
            notificationStatus: "published"
        },
    ];
    // update state
    React.useEffect(() => {
        setShow(props.show);
    }, [props]);
    // on open callback
    const onOpen = () => { };
    // on close callback
    const onClose = () => {
        setShow(false);
        if (typeof props.onClose == "function") {
            props.onClose();
        }
    };
    const handleSearchInputChange = (e) => {
        setSearchText(e.target.value);
    };
    // title
    let title = React.createElement("div", { className: "tenant-header" },
        React.createElement("div", { className: "icon" }),
        React.createElement("div", { className: "text" }, "Tenant Communication"));
    // toolbar content
    let toolbarContent = React.createElement("div", { className: "tenant-toolbar" },
        React.createElement("div", { className: "action-buttons" },
            React.createElement("div", { className: "action-button create-notification" },
                React.createElement("div", { className: "icon" }),
                React.createElement("div", { className: "text" }, "Create Notification")),
            React.createElement("div", { className: "action-button create-circular" },
                React.createElement("div", { className: "icon" }),
                React.createElement("div", { className: "text" }, "Create Circular")),
            React.createElement("div", { className: "action-button your-mix" },
                React.createElement("div", { className: "icon" })),
            React.createElement("div", { className: "action-button your-capital-letter" },
                React.createElement("div", { className: "icon" }))),
        React.createElement("div", { className: "filters" },
            React.createElement("div", { className: "filter showing" },
                "showing",
                React.createElement("div", { className: "toggle" },
                    React.createElement("div", { className: "icon" }),
                    " Latest")),
            React.createElement("div", { className: `filter search ${searchText.length > 0 ? "active" : ""}` },
                React.createElement("input", { type: "text", placeholder: "SEARCH", className: "", value: searchText, onChange: (e) => handleSearchInputChange(e) }),
                React.createElement("div", { className: "search-icon", onClick: () => setSearchText("") })),
            React.createElement(components_1.FilterPanel, null)));
    const renderItem = (item, key) => {
        return React.createElement("div", { className: `notification-item ${item.type}` },
            React.createElement("div", { className: `icon-container` },
                React.createElement("div", { className: "container-bg" },
                    React.createElement("div", { className: "icon-bg" },
                        React.createElement("div", { className: "icon" })))),
            React.createElement("div", { className: "notification-container" },
                React.createElement("div", { className: "notification" }, item.notification),
                " "),
            React.createElement("div", { className: "tenant" },
                React.createElement("div", { className: "name" }, item.tenant),
                React.createElement("div", { className: "section" }, item.section)),
            React.createElement("div", { className: "location" },
                React.createElement("div", { className: "label" }, "Location"),
                React.createElement("div", { className: "value" }, item.location)),
            React.createElement("div", { className: "sd" },
                React.createElement("div", { className: "label" },
                    " ",
                    typeof item.endDate != "undefined" && item.endDate.trim().length > 0 && "Start ",
                    "  Date"),
                React.createElement("div", { className: "value" }, item.startDate)),
            React.createElement("div", { className: "ed" }, typeof item.endDate != "undefined" && item.endDate.trim().length > 0 &&
                React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "label" }, " End  Date"),
                    React.createElement("div", { className: "value" }, item.endDate))),
            React.createElement("div", { className: `status-container ${item.status.toLowerCase()}` },
                React.createElement("div", { className: "status" }, item.status)),
            React.createElement("div", { className: "type-container" },
                React.createElement("div", { className: "type" }, item.type)),
            React.createElement("div", { className: `toggle-container ${item.notificationStatus.toLowerCase()}` },
                React.createElement("div", { className: "toggle" })),
            React.createElement("div", { className: "notification-status" }, item.notificationStatus));
    };
    // render
    return (React.createElement(components_1.LinkWidgetContainer, { show: show, onOpen: onOpen, onClose: onClose, toolbarContent: toolbarContent, title: title }, Items.map((item, key) => renderItem(item, key))));
};
TenantCommunication.defaultProps = {
    show: true
};
/**
 * add sidebar links as well
 */
uxp_1.registerLink({
    "id": "TenantCommunications",
    "label": "Communication",
    "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNy42MjYiIGhlaWdodD0iMjcuMTU3IiB2aWV3Qm94PSIwIDAgMjcuNjI2IDI3LjE1NyI+CiAgPGcgaWQ9Ikdyb3VwXzIyNzAiIGRhdGEtbmFtZT0iR3JvdXAgMjI3MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYzNi45MSAtMzgpIj4KICAgIDxnIGlkPSJJY29uX2lvbmljLW1kLW1lZ2FwaG9uZSIgZGF0YS1uYW1lPSJJY29uIGlvbmljLW1kLW1lZ2FwaG9uZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjM2LjkxIDM4KSIgb3BhY2l0eT0iMC41MzgiPgogICAgICA8cGF0aCBpZD0iUGF0aF80NTAiIGRhdGEtbmFtZT0iUGF0aCA0NTAiIGQ9Ik0xLjM0MSwwLDAsMS4zMzVBNC43Myw0LjczLDAsMCwxLDEuMzg3LDQuNjc3LDQuNzMsNC43MywwLDAsMSwwLDguMDJMMS4zNCw5LjM2QTYuNjA2LDYuNjA2LDAsMCwwLDMuMjc5LDQuNjgzLDYuNjIsNi42MiwwLDAsMCwxLjM0MSwwWiIgdHJhbnNmb3JtPSJtYXRyaXgoMC42OTUsIC0wLjcxOSwgMC43MTksIDAuNjk1LCAxNC4xNjYsIDYuODQxKSIgZmlsbD0iIzQyNDI0MiIvPgogICAgICA8cGF0aCBpZD0iUGF0aF80NTEiIGRhdGEtbmFtZT0iUGF0aCA0NTEiIGQ9Ik0xLjMxNywwLC41OTIuNzI2LDAsMS4zMTdBOC4zODIsOC4zODIsMCwwLDEsMi40NTUsNy4yNTQsOC4zNzgsOC4zNzgsMCwwLDEsMCwxMy4xOWwxLjMxNywxLjMxN0ExMC4yNzIsMTAuMjcyLDAsMCwwLDQuMzIzLDcuMjU0LDEwLjI0OCwxMC4yNDgsMCwwLDAsMS4zMTcsMFoiIHRyYW5zZm9ybT0ibWF0cml4KDAuNjk1LCAtMC43MTksIDAuNzE5LCAwLjY5NSwgMTQuMTg3LCAzLjExKSIgZmlsbD0iIzQyNDI0MiIvPgogICAgICA8cGF0aCBpZD0iSWNvbl9mZWF0aGVyLW1lc3NhZ2Utc3F1YXJlIiBkYXRhLW5hbWU9Ikljb24gZmVhdGhlci1tZXNzYWdlLXNxdWFyZSIgZD0iTTIxLjI1NSwxNS42N2ExLjg2MiwxLjg2MiwwLDAsMS0xLjg2MiwxLjg2Mkg4LjIyM0w0LjUsMjEuMjU1VjYuMzYyQTEuODYyLDEuODYyLDAsMCwxLDYuMzYyLDQuNUgxOS4zOTRhMS44NjIsMS44NjIsMCwwLDEsMS44NjIsMS44NjJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNC41IDUuOTAyKSIgZmlsbD0iIzQyNDI0MiIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==",
    "component": TenantCommunication
});


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/uxp.ts":
/*!********************!*\
  !*** ./src/uxp.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerLink = exports.registerWidget = void 0;
const bundle_json_1 = __importDefault(__webpack_require__(/*! ../bundle.json */ "./bundle.json"));
function registerWidget(_widget) {
    let widget = Object.assign({}, _widget, { id: bundle_json_1.default.id + '/widget/' + _widget.name });
    if (!window.registerWidget) {
        console.error('This code is not being run within the context of UXP');
        return;
    }
    window.registerWidget(widget);
}
exports.registerWidget = registerWidget;
function registerLink(_link) {
    let link = Object.assign({}, _link, { id: bundle_json_1.default.id + '/link/' + _link.id });
    if (!window.registerLink) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', link.id);
    window.registerLink(link);
}
exports.registerLink = registerLink;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "uxp/components":
/*!********************************!*\
  !*** external "UXPComponents" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = UXPComponents;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map