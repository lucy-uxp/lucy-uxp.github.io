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
exports.push([module.i, ".list-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  box-shadow: 0 0 16px 4px rgba(0, 0, 0, 0.12);\n  border-radius: 10px;\n  overflow: hidden;\n  padding-top: 60px; }\n  .list-container .header {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 60px;\n    padding: 8px 15px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: 1px solid #ccc; }\n    .list-container .header .title {\n      width: auto;\n      height: auto;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n      .list-container .header .title .icon {\n        width: 30px;\n        height: 30px;\n        background-color: transparent;\n        background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNS41NzciIGhlaWdodD0iMTUuNTc3IiB2aWV3Qm94PSIwIDAgMTUuNTc3IDE1LjU3NyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzcwNzA3MDt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNy4wMTksM0g0LjU1OGExLjU1NiwxLjU1NiwwLDAsMC0xLjU1LDEuNTU4TDMsMTguNTc3bDMuMTE1LTMuMTE1aDEwLjlBMS41NjIsMS41NjIsMCwwLDAsMTguNTc3LDEzLjlWNC41NThBMS41NjIsMS41NjIsMCwwLDAsMTcuMDE5LDNabS01LjQ1Miw5LjM0NkgxMC4wMDlWMTAuNzg4aDEuNTU4Wm0wLTMuMTE1SDEwLjAwOVY2LjExNWgxLjU1OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zIC0zKSIvPjwvc3ZnPg==\");\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: 60%;\n        margin-right: 10px; }\n      .list-container .header .title .text {\n        text-transform: uppercase; }\n        .list-container .header .title .text span {\n          width: auto;\n          height: auto;\n          padding: 6px 15px;\n          border-radius: 50px;\n          margin-left: 15px; }\n          .list-container .header .title .text span.high {\n            background-color: #ec4b7b;\n            color: white; }\n          .list-container .header .title .text span.low {\n            background-color: #707070;\n            color: white; }\n  .list-container .body {\n    width: 100%;\n    height: auto;\n    max-height: 100%;\n    padding: 8px 15px;\n    overflow: auto; }\n    .list-container .body .list-thumbnail {\n      position: relative;\n      width: 100%;\n      height: auto;\n      display: flex;\n      align-items: stretch;\n      background-color: white;\n      padding: 10px;\n      border-bottom: 1px solid #ccc; }\n      .list-container .body .list-thumbnail:last-child {\n        border-bottom: none; }\n      .list-container .body .list-thumbnail .icon-placeholder {\n        width: 35px;\n        height: 35px;\n        position: relative;\n        background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgaGVpZ2h0PSIzNSIgdmlld0JveD0iMCAwIDM1IDM1Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojNzA3MDcwO29wYWNpdHk6MC4xNDt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xMzQpIj48Y2lyY2xlIGNsYXNzPSJhIiBjeD0iMTcuNSIgY3k9IjE3LjUiIHI9IjE3LjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjEzNCkiLz48L2c+PC9zdmc+\");\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: contain;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: 10px; }\n        .list-container .body .list-thumbnail .icon-placeholder img {\n          width: 100%;\n          height: auto;\n          object-fit: scale-down;\n          object-position: center; }\n      .list-container .body .list-thumbnail .request-details {\n        width: auto;\n        max-width: 70%;\n        margin: 0 10px; }\n        .list-container .body .list-thumbnail .request-details .request {\n          font-weight: 900;\n          padding: 3px; }\n        .list-container .body .list-thumbnail .request-details .description {\n          display: inline-block;\n          padding: 3px; }\n        .list-container .body .list-thumbnail .request-details .sections {\n          display: inline-block;\n          padding: 3px; }\n          .list-container .body .list-thumbnail .request-details .sections .section {\n            display: inline-block;\n            width: auto;\n            height: auto;\n            padding: 4px 8px;\n            background-color: #ecebeb;\n            border-radius: 50px;\n            margin: 1px; }\n      .list-container .body .list-thumbnail .status {\n        width: auto;\n        margin: auto;\n        margin-right: 10px; }\n        .list-container .body .list-thumbnail .status .label {\n          width: auto;\n          height: auto;\n          padding: 4px 6px;\n          background-color: gray;\n          border-radius: 20px;\n          font-size: 10px;\n          color: white;\n          text-align: center;\n          margin-bottom: 4px;\n          text-transform: capitalize; }\n        .list-container .body .list-thumbnail .status .date {\n          color: #424242; }\n      .list-container .body .list-thumbnail.pending .status-indicator::before {\n        background-color: #ffa133; }\n      .list-container .body .list-thumbnail.pending .request-details .request {\n        color: #ffa133; }\n      .list-container .body .list-thumbnail.pending .status .label {\n        background-color: #ffa133; }\n      .list-container .body .list-thumbnail.overdue .status-indicator::before {\n        background-color: #ec4b7b; }\n      .list-container .body .list-thumbnail.overdue .status .label {\n        background-color: #ec4b7b; }\n      .list-container .body .list-thumbnail.approved .status-indicator::before {\n        background-color: #2cc8b3; }\n      .list-container .body .list-thumbnail.approved .status .label {\n        background-color: #2cc8b3; }\n  .list-container .footer {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: auto;\n    padding: 0;\n    background-color: white; }\n    .list-container .footer .scroll-btn {\n      position: relative;\n      width: 100%;\n      height: auto;\n      min-height: 25px;\n      background-color: #ecebeb;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n      .list-container .footer .scroll-btn .icon-container {\n        width: 30px;\n        height: 30px; }\n        .list-container .footer .scroll-btn .icon-container .icon {\n          width: 100%;\n          height: 100%;\n          background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNi4xNCIgaGVpZ2h0PSIxMC40MjMiIHZpZXdCb3g9IjAgMCAxNi4xNCAxMC40MjMiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiM0MjQyNDI7b3BhY2l0eTowLjcwMjt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik03LjIxNCwyMC44MDguMzUyLDEzLjk0NmExLjIwNiwxLjIwNiwwLDAsMSwwLTEuNzFsMS4xNC0xLjE0YTEuMjA2LDEuMjA2LDAsMCwxLDEuNzEsMGw0Ljg2NCw0Ljg2NEwxMi45MywxMS4xYTEuMjA2LDEuMjA2LDAsMCwxLDEuNzEsMGwxLjE0LDEuMTRhMS4yMDYsMS4yMDYsMCwwLDEsMCwxLjcxTDguOTE5LDIwLjgwOEExLjIsMS4yLDAsMCwxLDcuMjE0LDIwLjgwOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDA0IC0xMC43NCkiLz48L3N2Zz4=\");\n          background-position: center;\n          background-repeat: no-repeat;\n          background-size: 45%; }\n      .list-container .footer .scroll-btn:hover {\n        background-color: #dedede; }\n      .list-container .footer .scroll-btn.scroll-up {\n        margin-bottom: 2px;\n        border-radius: 6px 6px 0 0; }\n        .list-container .footer .scroll-btn.scroll-up .icon-container .icon {\n          transform: rotate(180deg); }\n  .list-container.has-footer.full {\n    padding-bottom: 60px; }\n  .list-container.has-footer.half {\n    padding-bottom: 30px; }\n    .list-container.has-footer.half .footer .scroll-btn.scroll-up {\n      margin-bottom: 0px;\n      border-radius: 0; }\n\n.modal-container .modal-panel.sr-modal .srm-header {\n  width: 100%;\n  height: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .modal-container .modal-panel.sr-modal .srm-header .title {\n    display: flex;\n    align-items: center; }\n    .modal-container .modal-panel.sr-modal .srm-header .title .icon {\n      width: 30px;\n      height: 30px;\n      background-color: transparent;\n      background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNS41NzciIGhlaWdodD0iMTUuNTc3IiB2aWV3Qm94PSIwIDAgMTUuNTc3IDE1LjU3NyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzcwNzA3MDt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNy4wMTksM0g0LjU1OGExLjU1NiwxLjU1NiwwLDAsMC0xLjU1LDEuNTU4TDMsMTguNTc3bDMuMTE1LTMuMTE1aDEwLjlBMS41NjIsMS41NjIsMCwwLDAsMTguNTc3LDEzLjlWNC41NThBMS41NjIsMS41NjIsMCwwLDAsMTcuMDE5LDNabS01LjQ1Miw5LjM0NkgxMC4wMDlWMTAuNzg4aDEuNTU4Wm0wLTMuMTE1SDEwLjAwOVY2LjExNWgxLjU1OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zIC0zKSIvPjwvc3ZnPg==\");\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: 60%;\n      margin-right: 10px; }\n    .modal-container .modal-panel.sr-modal .srm-header .title .text {\n      text-transform: capitalize; }\n  .modal-container .modal-panel.sr-modal .srm-header .filters {\n    width: auto;\n    height: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .modal-container .modal-panel.sr-modal .srm-header .filters .filter {\n      width: auto;\n      padding: 5px 10px;\n      background-color: white;\n      margin: 0 4px;\n      text-transform: capitalize;\n      border-radius: 50px;\n      cursor: pointer; }\n      .modal-container .modal-panel.sr-modal .srm-header .filters .filter:hover {\n        color: white; }\n        .modal-container .modal-panel.sr-modal .srm-header .filters .filter:hover.pending {\n          background-color: #ffa133; }\n        .modal-container .modal-panel.sr-modal .srm-header .filters .filter:hover.approved {\n          background-color: #2cc8b3; }\n        .modal-container .modal-panel.sr-modal .srm-header .filters .filter:hover.assigned {\n          background-color: #72a5f3; }\n        .modal-container .modal-panel.sr-modal .srm-header .filters .filter:hover.overdue {\n          background-color: #ec4b7b; }\n      .modal-container .modal-panel.sr-modal .srm-header .filters .filter.active {\n        color: white; }\n        .modal-container .modal-panel.sr-modal .srm-header .filters .filter.active.pending {\n          background-color: #ffa133; }\n        .modal-container .modal-panel.sr-modal .srm-header .filters .filter.active.approved {\n          background-color: #2cc8b3; }\n        .modal-container .modal-panel.sr-modal .srm-header .filters .filter.active.assigned {\n          background-color: #72a5f3; }\n        .modal-container .modal-panel.sr-modal .srm-header .filters .filter.active.overdue {\n          background-color: #ec4b7b; }\n\n.modal-container .modal-panel.sr-modal .modal-body .data-list {\n  width: 100%;\n  height: 100%; }\n  .modal-container .modal-panel.sr-modal .modal-body .data-list .data-item {\n    width: 100%;\n    height: auto;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    padding: 10px 0; }\n    .modal-container .modal-panel.sr-modal .modal-body .data-list .data-item .indicator {\n      all: unset;\n      width: 30px;\n      height: 30px;\n      position: relative;\n      background-color: transparent;\n      display: flex;\n      align-items: center;\n      justify-self: center; }\n      .modal-container .modal-panel.sr-modal .modal-body .data-list .data-item .indicator div {\n        width: 5px;\n        height: 5px;\n        border-radius: 50%;\n        background-color: gray; }\n    .modal-container .modal-panel.sr-modal .modal-body .data-list .data-item .request {\n      padding: 0 20px; }\n    .modal-container .modal-panel.sr-modal .modal-body .data-list .data-item .description {\n      margin: auto;\n      padding: 0 20px; }\n      .modal-container .modal-panel.sr-modal .modal-body .data-list .data-item .description .section {\n        width: auto;\n        display: inline-block;\n        height: auto;\n        background-color: #ecebeb;\n        border-radius: 50px;\n        padding: 4px 15px;\n        margin: 2px; }\n    .modal-container .modal-panel.sr-modal .modal-body .data-list .data-item .date {\n      margin: auto;\n      padding: 0 15px;\n      color: #ec4b7b; }\n    .modal-container .modal-panel.sr-modal .modal-body .data-list .data-item .action {\n      margin: auto;\n      margin-right: 10px;\n      width: auto; }\n      .modal-container .modal-panel.sr-modal .modal-body .data-list .data-item .action .approve {\n        width: 30px;\n        height: 30px;\n        border-radius: 50%;\n        background-color: #ecebeb;\n        cursor: pointer; }\n        .modal-container .modal-panel.sr-modal .modal-body .data-list .data-item .action .approve .icon-container {\n          width: 100%;\n          height: 100%;\n          background-color: transparent; }\n          .modal-container .modal-panel.sr-modal .modal-body .data-list .data-item .action .approve .icon-container .icon {\n            width: 100%;\n            height: 100%;\n            background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS4wNTciIGhlaWdodD0iNy45MDUiIHZpZXdCb3g9IjAgMCAxMS4wNTcgNy45MDUiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOm5vbmU7c3Ryb2tlOiM0MjQyNDI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoycHg7b3BhY2l0eTowLjU0O308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iYSIgZD0iTTcwMS4yNTksMzc1Ljg3MmwyLjcyMiwyLjc3MSw1LjUwNy01LjQ5MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY5OS44NDUgLTM3MS43MzcpIi8+PC9zdmc+\");\n            background-position: center;\n            background-repeat: no-repeat;\n            background-size: 50%; }\n        .modal-container .modal-panel.sr-modal .modal-body .data-list .data-item .action .approve:hover {\n          background-color: #2cc8b3; }\n          .modal-container .modal-panel.sr-modal .modal-body .data-list .data-item .action .approve:hover .icon-container {\n            background-color: transparent; }\n            .modal-container .modal-panel.sr-modal .modal-body .data-list .data-item .action .approve:hover .icon-container .icon {\n              filter: saturate(100%) brightness(0) invert(1); }\n      .modal-container .modal-panel.sr-modal .modal-body .data-list .data-item .action .assign select {\n        width: 100%;\n        padding: 8px;\n        border-radius: 8px;\n        border: none;\n        outline: none; }\n    .modal-container .modal-panel.sr-modal .modal-body .data-list .data-item.pending .indicator div {\n      background-color: #ffa133; }\n    .modal-container .modal-panel.sr-modal .modal-body .data-list .data-item.approved .indicator div {\n      background-color: #2cc8b3; }\n    .modal-container .modal-panel.sr-modal .modal-body .data-list .data-item.assigned .indicator div {\n      background-color: #72a5f3; }\n    .modal-container .modal-panel.sr-modal .modal-body .data-list .data-item.overdue .indicator div {\n      background-color: #ec4b7b; }\n\n.filter-item {\n  width: 100%;\n  height: auto;\n  padding: 0 10px;\n  margin-bottom: 10px; }\n  .filter-item label {\n    margin: 0; }\n  .filter-item select {\n    width: 100%;\n    padding: 8px;\n    border-radius: 8px;\n    border: none;\n    outline: none; }\n", ""]);
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

/***/ "./src/ServiceModal.tsx":
/*!******************************!*\
  !*** ./src/ServiceModal.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const ServiceModal = (props) => {
    let [show, setShow] = React.useState(props.show);
    let [dataSet, setDataSet] = React.useState([]);
    let [filter, setFilter] = React.useState("pending");
    React.useEffect(() => {
        setShow(props.show);
    }, [props.show]);
    React.useEffect(() => {
        if (!show)
            props.onClose();
    }, [show]);
    React.useEffect(() => {
        let d = props.data.filter((item) => {
            return (item.status.toLowerCase() == filter.toLowerCase());
        });
        setDataSet(d);
    }, [filter]);
    const headerContent = React.createElement("div", { className: "srm-header" },
        React.createElement("div", { className: "title" },
            React.createElement("div", { className: "icon" }),
            React.createElement("div", { className: "text" }, "Service Requests")),
        React.createElement("div", { className: "filters" },
            React.createElement("div", { className: `filter ${filter == "pending" && " active "} pending`, onClick: () => setFilter("pending") }, "pending"),
            React.createElement("div", { className: `filter ${filter == "approved" && " active "}  approved`, onClick: () => setFilter("approved") }, "Approved"),
            React.createElement("div", { className: `filter ${filter == "assigned" && " active "}  assigned`, onClick: () => setFilter("assigned") }, "assigned"),
            React.createElement("div", { className: `filter ${filter == "overdue" && " active "}  overdue`, onClick: () => setFilter("overdue") }, "Overdue")),
        React.createElement("div", null));
    return (React.createElement(components_1.Modal, { show: show, onOpen: () => { }, onClose: () => setShow(false), headerContent: headerContent, class: "sr-modal" },
        React.createElement("div", { className: "data-list" }, dataSet.map((item, key) => {
            var _a;
            return (React.createElement("div", { className: `data-item ${filter.toLowerCase()} ` },
                React.createElement("div", { className: "indicator" },
                    React.createElement("div", null)),
                React.createElement("div", { className: "request" }, item.request),
                React.createElement("div", { className: "description" },
                    " ",
                    item.description, (_a = item.sections) === null || _a === void 0 ? void 0 :
                    _a.map((section) => {
                        return React.createElement("div", { className: "section" }, section);
                    })),
                React.createElement("div", { className: "date" },
                    " ",
                    item.date,
                    " "),
                React.createElement("div", { className: "action" },
                    item.status.toLowerCase() == "pending" &&
                        React.createElement("div", { className: "approve" },
                            React.createElement("div", { className: "icon-container" },
                                React.createElement("div", { className: "icon" }))),
                    item.status.toLowerCase() == "approved" &&
                        React.createElement("div", { className: "assign" },
                            React.createElement("select", { name: "", id: "" },
                                React.createElement("option", { value: "" }, "Select User"))),
                    item.status.toLowerCase() == "assigned" &&
                        React.createElement("div", { className: "approve" },
                            React.createElement("div", { className: "icon-container" },
                                React.createElement("div", { className: "icon" }))))));
        }))));
};
exports.default = ServiceModal;


/***/ }),

/***/ "./src/ServiceRequestWidget.tsx":
/*!**************************************!*\
  !*** ./src/ServiceRequestWidget.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
const ServiceModal_1 = __webpack_require__(/*! ./ServiceModal */ "./src/ServiceModal.tsx");
const ServiceRequestWidget = (props) => {
    // data set
    let icon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNS41NzciIGhlaWdodD0iMTUuNTc3IiB2aWV3Qm94PSIwIDAgMTUuNTc3IDE1LjU3NyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzcwNzA3MDt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNy4wMTksM0g0LjU1OGExLjU1NiwxLjU1NiwwLDAsMC0xLjU1LDEuNTU4TDMsMTguNTc3bDMuMTE1LTMuMTE1aDEwLjlBMS41NjIsMS41NjIsMCwwLDAsMTguNTc3LDEzLjlWNC41NThBMS41NjIsMS41NjIsMCwwLDAsMTcuMDE5LDNabS01LjQ1Miw5LjM0NkgxMC4wMDlWMTAuNzg4aDEuNTU4Wm0wLTMuMTE1SDEwLjAwOVY2LjExNWgxLjU1OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zIC0zKSIvPjwvc3ZnPg==";
    const data = [
        {
            icon: icon,
            request: "Johnson & Johnson request #81",
            description: "water Leak in ",
            sections: ["Zone 3"],
            status: "pending",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #80",
            description: "Parkin damage ",
            sections: ["Parking 1", "A1"],
            status: "approved",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #80",
            description: "Parkin damage ",
            sections: ["Parking 1", "A1"],
            status: "approved",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #79",
            description: "Lights not working at ",
            sections: ["Facility one"],
            status: "overdue",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #81",
            description: "AC not working at ",
            sections: ["Zone 3"],
            status: "Approved",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #81",
            description: "Smoke in AC Vent ",
            sections: ["Facility 12"],
            status: "assigned",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #81",
            description: "water Leak in ",
            sections: ["Zone 3"],
            status: "pending",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #80",
            description: "Parkin damage ",
            sections: ["Parking 1", "A1"],
            status: "approved",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #79",
            description: "Lights not working at ",
            sections: ["Facility one"],
            status: "overdue",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #81",
            description: "AC not working at ",
            sections: ["Zone 3"],
            status: "Approved",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #81",
            description: "Smoke in AC Vent ",
            sections: ["Facility 12"],
            status: "assigned",
            date: "23/0702020"
        },
    ];
    // refs
    const listContainerRef = React.useRef(null);
    const listRef = React.useRef(null);
    const listItemsRef = React.useRef([]);
    // state
    const [currentKey, setCurrentKey] = React.useState(0);
    const [showFooter, setShowFooter] = React.useState(false);
    const [showScrollUp, setShowScrollUp] = React.useState(false);
    const [showScrollDown, setShowScrollDown] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    // toggle scroll buttons
    React.useEffect(() => {
        toggleFooter();
    }, [currentKey]);
    React.useEffect(() => {
        console.log("show modal");
        console.log(showModal);
    }, [showModal]);
    // get invisible list item count & is last item is visible
    const checkVisibility = () => {
        let listDetails = listRef.current.getBoundingClientRect();
        let items = document.querySelectorAll(".list-thumbnail");
        let itemsArr = [].slice.call(items);
        let count = 0;
        let lastVisible = false;
        itemsArr.map((item, key) => {
            let iDet = item.getBoundingClientRect();
            if ((iDet.top >= listDetails.top + listDetails.height) || (iDet.top < listDetails.top)) {
                count++;
            }
            else {
                if (key == (itemsArr.length - 1)) {
                    lastVisible = true;
                }
            }
        });
        return [count, lastVisible];
    };
    // toggle scroll buttons
    const toggleFooter = () => {
        // 
        let showFooter = false;
        let showUp = false;
        let showDown = false;
        let total = data.length;
        let [invisible, isLastVisible] = checkVisibility();
        if (invisible > 0) {
            showFooter = true;
            showDown = true;
        }
        if (isLastVisible)
            showDown = false;
        if (currentKey > 0) {
            showUp = true;
        }
        setShowFooter(showFooter);
        setShowScrollUp(showUp);
        setShowScrollDown(showDown);
    };
    // scroll to list item
    const scrollItemToView = (key) => {
        let itemRef = listItemsRef.current[key];
        itemRef.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };
    // handle click on scroll button
    const onClickScrollHandler = (direction) => {
        // get key
        let curKey = currentKey;
        if (direction == "up") {
            curKey = curKey - props.scrollStep;
            if (curKey < 0)
                curKey = 0;
        }
        else {
            curKey = curKey + props.scrollStep;
            if (curKey > data.length)
                curKey = (data.length - 1);
        }
        setCurrentKey(curKey);
        scrollItemToView(curKey);
    };
    // on scroll list container
    const onScrollList = (e) => {
        let listContainerDetails = listContainerRef.current.getBoundingClientRect();
        data.map((item, key) => {
            let element = listItemsRef.current[key];
            let boundDetails = element.getBoundingClientRect();
            if (boundDetails.top >= listContainerDetails.top + 60 && boundDetails.top <= listContainerDetails.top + 120) {
                setCurrentKey(key);
            }
        });
    };
    let filterPanelProps = {
        onOpen: () => { },
        onClose: () => { }
    };
    if (props.expandedFilterPanel) {
        filterPanelProps.fillContainer = listContainerRef;
    }
    // render
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: `list-container ${showFooter && " has-footer"} ${(showScrollDown && showScrollUp) ? " full" : " half"}`, ref: listContainerRef, onScroll: onScrollList },
            React.createElement("div", { className: "header" },
                React.createElement("div", { className: "title" },
                    React.createElement("div", { className: "icon" }),
                    React.createElement("div", { className: "text" },
                        "Service Requests ",
                        React.createElement("span", { className: props.priority },
                            " ",
                            props.priority,
                            " priority"))),
                React.createElement("div", { className: "filter-container" },
                    React.createElement(components_1.FilterPanel, Object.assign({}, filterPanelProps),
                        React.createElement("div", { className: "filter-item" },
                            React.createElement("label", { htmlFor: "" }, "Filter By"),
                            React.createElement("select", { name: "", id: "" },
                                React.createElement("option", { value: "" }, " Select a Filter"))),
                        React.createElement("div", { className: "filter-item" },
                            React.createElement("label", { htmlFor: "" }, "Sort By"),
                            React.createElement("select", { name: "", id: "" },
                                React.createElement("option", { value: "" }, " Select a Option")))))),
            React.createElement("div", { className: "body", ref: listRef }, data.map((item, key) => {
                var _a;
                return (React.createElement("div", { className: `list-thumbnail ${item.status.toLowerCase()}`, ref: (el) => (listItemsRef.current[key] = el), onClick: () => setShowModal(true) },
                    React.createElement("div", { className: "icon-placeholder" },
                        React.createElement("img", { src: item.icon, alt: "" })),
                    React.createElement("div", { className: "request-details" },
                        React.createElement("div", { className: "request" },
                            " ",
                            item.request,
                            " "),
                        React.createElement("div", { className: "description" },
                            " ",
                            item.description,
                            " "),
                        React.createElement("div", { className: "sections" }, (_a = item.sections) === null || _a === void 0 ? void 0 : _a.map((section) => {
                            return (React.createElement("div", { className: "section" }, section));
                        }))),
                    React.createElement("div", { className: "status" },
                        React.createElement("div", { className: "label" }, item.status),
                        React.createElement("div", { className: "date" }, item.date))));
            })),
            showFooter &&
                React.createElement("div", { className: "footer" },
                    showScrollUp &&
                        React.createElement("div", { className: "scroll-btn scroll-up", onClick: () => onClickScrollHandler("up") },
                            React.createElement("div", { className: "icon-container" },
                                React.createElement("div", { className: "icon" }))),
                    showScrollDown &&
                        React.createElement("div", { className: "scroll-btn scroll-down", onClick: () => onClickScrollHandler("down") },
                            React.createElement("div", { className: "icon-container" },
                                React.createElement("div", { className: "icon" }))))),
        React.createElement(ServiceModal_1.default, { show: showModal, onClose: () => setShowModal(false), data: data })));
};
// default props
ServiceRequestWidget.defaultProps = {
    scrollStep: 5,
    expandedFilterPanel: false
};
exports.default = ServiceRequestWidget;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ServiceRequestWidget_1 = __webpack_require__(/*! ./ServiceRequestWidget */ "./src/ServiceRequestWidget.tsx");
const uxp_1 = __webpack_require__(/*! ./uxp */ "./src/uxp.ts");
const ServiceRequestHighPriorityWidget = (props) => {
    return React.createElement(ServiceRequestWidget_1.default, { priority: "high", expandedFilterPanel: true });
};
const ServiceRequestLowPriorityWidget = (props) => {
    return React.createElement(ServiceRequestWidget_1.default, { priority: "low" });
};
// register widget
uxp_1.registerWidget({
    "guid": "64ee6224-07c3-40c3-9377-1194be887a7a",
    "name": "Service Request High Priority",
    "widget": ServiceRequestHighPriorityWidget,
    "configs": {
        "container": {
            "background": "transparent"
        },
        "layout": { w: 11, h: 12, minW: 11, minH: 9 }
    }
});
uxp_1.registerWidget({
    "guid": "fb1071ac-eb41-4181-ede6-c3d705e5ac04",
    "name": "Service Request Low Priority",
    "widget": ServiceRequestLowPriorityWidget,
    "configs": {
        "container": {
            "background": "transparent"
        },
        "layout": { w: 11, h: 12, minW: 11, minH: 9 }
    }
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

Object.defineProperty(exports, "__esModule", { value: true });
exports.registerWidget = void 0;
function registerWidget(widget) {
    if (!window.registerWidget) {
        console.error('This code is not being run within the context of UXP');
    }
    window.registerWidget(widget);
}
exports.registerWidget = registerWidget;


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