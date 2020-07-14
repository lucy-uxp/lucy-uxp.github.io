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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/filter-panel/filter_panel.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/filter-panel/filter_panel.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".filter-panel-btn {\n  position: relative; }\n  .filter-panel-btn.fpb-burger-menu {\n    width: 30px;\n    height: 30px;\n    border-radius: 6px;\n    background-color: #ecebeb;\n    cursor: pointer;\n    overflow: hidden; }\n    .filter-panel-btn.fpb-burger-menu .icon {\n      width: 100%;\n      height: 100%;\n      background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHRpdGxlPmlvbmljb25zLXY1LW48L3RpdGxlPjxwYXRoIGQ9Ik0yOTYsNDY0YTIzLjg4LDIzLjg4LDAsMCwxLTcuNTUtMS4yM2wtODAuMTUtMjYuNjdBMjMuOTIsMjMuOTIsMCwwLDEsMTkyLDQxMy4zMlYyOTQuMTFhLjQ0LjQ0LDAsMCwwLS4wOS0uMTNMMjMuMjYsOTcuNTRBMzAsMzAsMCwwLDEsNDYuMDUsNDhINDY2YTMwLDMwLDAsMCwxLDIyLjc5LDQ5LjU0TDMyMC4wOSwyOTRhLjc3Ljc3LDAsMCwwLS4wOS4xM1Y0NDBhMjMuOTMsMjMuOTMsMCwwLDEtMjQsMjRaIi8+PC9zdmc+\");\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: 50%; }\n\n.filter-panel {\n  position: absolute;\n  background-color: white;\n  box-sizing: border-box;\n  width: auto;\n  min-width: 200px;\n  height: auto;\n  border-radius: 15px;\n  overflow: hidden;\n  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.12); }\n  .filter-panel * {\n    box-sizing: border-box; }\n  .filter-panel .filter-header {\n    padding: 15px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: 1px solid lightgray; }\n    .filter-panel .filter-header .burger-menu-btn {\n      width: 30px;\n      height: 30px;\n      border-radius: 6px;\n      background-color: purple;\n      cursor: pointer;\n      animation: animate 0.2s linear;\n      animation-fill-mode: forwards; }\n      .filter-panel .filter-header .burger-menu-btn .icon {\n        width: 100%;\n        height: 100%;\n        background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHRpdGxlPmlvbmljb25zLXY1LW48L3RpdGxlPjxwYXRoIGQ9Ik0yOTYsNDY0YTIzLjg4LDIzLjg4LDAsMCwxLTcuNTUtMS4yM2wtODAuMTUtMjYuNjdBMjMuOTIsMjMuOTIsMCwwLDEsMTkyLDQxMy4zMlYyOTQuMTFhLjQ0LjQ0LDAsMCwwLS4wOS0uMTNMMjMuMjYsOTcuNTRBMzAsMzAsMCwwLDEsNDYuMDUsNDhINDY2YTMwLDMwLDAsMCwxLDIyLjc5LDQ5LjU0TDMyMC4wOSwyOTRhLjc3Ljc3LDAsMCwwLS4wOS4xM1Y0NDBhMjMuOTMsMjMuOTMsMCwwLDEtMjQsMjRaIi8+PC9zdmc+\");\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: 50%;\n        filter: saturate(100%) brightness(0%) invert(100%);\n        transform: rotate(45deg);\n        background-color: transparent; }\n\n@keyframes animate {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(-45deg); } }\n  .filter-panel .filter-body {\n    width: 100%;\n    padding: 15px 10px; }\n", ""]);
// Exports
module.exports = exports;


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
exports.push([module.i, ".ac-request-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  border-radius: 10px;\n  padding: 10px;\n  box-shadow: 0 0 16px 4px rgba(0, 0, 0, 0.12); }\n  .ac-request-container .header {\n    position: relative;\n    width: 100%;\n    height: auto;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 5px;\n    border-bottom: 1px solid #ccc; }\n    .ac-request-container .header .title {\n      width: auto;\n      height: auto;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n      .ac-request-container .header .title .icon {\n        width: 30px;\n        height: 30px;\n        background-color: transparent;\n        background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAlqADAAQAAAABAAAAlgAAAAA0g2oaAAAJkklEQVR4Ae2d269dQxzHj1urdasqWtdqU0E0LRKREA+uKRp9EREhEhHe/AlePHj2hkdNxIuGiBBU9KXErUV6obRVNEov7qpu3885e5I5o5y91t5rd2bO95d8z5pZe8/sWZ/57bmutc/YmM0ETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETKA5gaOaJxkoxRlKvVCaJx0n2boncEgf8a20o3fUoXsblWMdrUu5XboquaRRfX7ysdMm+ndypesUf0lKzydvGzx6zOBZTJkDLdMD0qUSjhRLUVuHBFLW5+mzFkkbpb86/NyxUTjW9bqAK6RwkZ1/W7oEVnDe8MfmSgelnUS6smO7yriX70wdr+2FuTCc6g9pr/S7ZOuewAx9BGNaGpFQB3zZ10ud1UHXjrVEhefCwrdFwbHV0lap06aYD7KNE2B8e4l0T48HdcEXni5xS+/c0A98aJd2WpI5s5PNkp0qAdNhFNYfS/uiz6DnODWKDz3YtWOlY7jOmt6hk6kvQ5YdYkvrJn5t4HDXjjVwAZ1BmQTsWGXWW/al7nrw3i+AE/TGyyXWvN6TvpdsBRPIxbHuFsPFPY5X6/iYlI4Jei/7UAKBXLrCMyNYJyq8IIo7WCCBHByLdRXKwTGsd3U6Yymwnoorcg5dIWsqQQEgcVvBBHJoscD3c8LwQBJ3tDACObRYIHtOukli++c1yY4lCCVbLo61XRCfKBmkyz6ZQC5d4eRSOVY8ATtW8VWY5wXYsfKsl+JLZccqvgrzvAA7Vp71Unyp7FjFV2GeF5DLckNbOmcrIXdFcHdETcaC8bvS7lIvqnTHul/gcaqwx1hqPcTlDttZy3Ty0fiFksIld4XcEVGbU+E7YTP+JIV5uqZIK7nF+lbE2fqZUyT5qQvNI3LxAxBTp8joHSU7Fk+fPCmxxzg7I6bDKApjrJelYp9mKtmxqEC+1c8QsOVFoOQxVl4kXZpJBOxYk3A4MiwCdqxhkXQ+kwiUNsaa7vfC/zmp9jKOlOJYy8VwpVTb7K+pa/yiBGskfoshayvBsSjjHRLHmlbY2zgGj8bdJT0i8XNQ2VoJYyyejp7uXWDsQLDIvkEowbF+Fch1PbLso01ngWGt9BuBnC17z+/B4wdZ35JOlqZrd8gXit+02C9lb6U4FiDZNyt27yx7TxhyAbvuCvmWxTZdW5uYwZEKp+zTuhlqubp2LKbHsfHzhNwOYhstAYYQKBhOltZNeG0ox667wu1JKWcp/rC0WipirJCUv8QovwN7r3R8UvhdSXyo0bR5HGrmvczu0/HiLjJ2nq0JsMD6dOvUfSTsusWiCK9IiyR+AhobhTNPfJL/xgTCmOqgTnKvV6c2ioXHn3QFfEP4lyfBuTq9KGf+nwS44/ZxqfPZ9ShbD/r4y6TrpHggqaitQwK0VKx/8Ss+H0q0WJ3bKB0rXAyfySB+FK1l+MzpfGRPkd0LmwmYgAmYgAmYgAmYgAmYgAmYgAmMiECNU36uibWyFdK50jap7RPF5HWjdIt0lrRTGuSWYJ7avlniV3LYRy3m4QiVtZHV6Fjni8CdEr/pcI7EfeKbpTZ2pRLdKrGgS14s8rb9r6RLlXaVRLlweO4C3SFVaV3fNnMkoOFYLMKGxd+LBijEmb20Ib/0P8Y2yZotLSyU68KJaJ1/a3Qsti9i4/4vVvrbWPwfM3CIuW0y6aXZk6Sla+VBkSqtRsfapZpi7MIeGYZDLB8PNf/zdZJknuLXJOf6jX6kN1KmUC6cna62SqvRsWixwk2EodthbEML0dS2KgF3ZwRnID0D+TZdIi3Wd2QgC+Uiryo35GscvDMDPCCFVipUIt3YB1ITw6H2SsuiRHwZz5Dej871GyQ/xnyUCZHXfGmDVJXV2GJRQZskbhHBQmtzgcJtxlrMAj8nI1lw0iUK4xBNbb0SpF0iM8QZTTPK/f21OhbcX5TCOhEOwUA5zMwU7NvI4ykp3HpCXjjr+VIb447a4OzkhbOzrlWV1exYjLV2J7XFWlQbo3sN4yPS4xBtnzbit1NZw4qNrrUqq9mxDldRoaU43GujPIdjVm01O9Yc1dyCpPa+SuL9RmfqjWEmGJzzh34TJ+87XXFW8GP7Jo7UEK7ZsVaoguJZL91ZGNA3rbsHlWB2kujLJN5v9IbeG8NYjW4xXS/rN69s31erY10i4uzNYaECtyvc5kGCi5UuHVxv07l0/KZTUxoLovHSBQlw0N8J1GQ1OhbPSrLwSGsVnOoPhV+Vmhp5rewlCnkxS3xeCl1i7+W+Dqzak0/Ii9bqBalNXkqWr9XoWMzW5vaQhwp7SXFarKa2WAkYW+EIGPmtlfYQaWjkw6Z2cCqSvy5VN77iwmp0rPN0XaG14hqxpivuE6n+3QXu1Qs4QxtLu0Baq/VtMiohTY2OdUoCnr2+X5Jz/Ub5J1CxsVUUWsH4fD9hZoOxMUY7FJ+oKVyjYzGeio3tkrbXyXgqtkFuc0kH6LPijGsLtwWeM4d06o5jzW9Z4H1KF7dQzA7TZYd+s2YmGRvjrTZ3XMR5ZBuu0bEYWNP14RBh0L1KYWZ4Te3TJAF5PCS1abk2Kx3jquColO02qUqLFxBruUDGLbQEtFJUHmLcxfEzqYmx8cws85woEeMuVt2/jM71E2SBlhYvzAxJw+yVrnuHVJXV2GJRQc9KVD6tQ2ghLle4jbG8gFNgwVFZ25o5fqbZnzV6e2i1yAtj0bS6L3h1FzReVRPOxGww3CZDJeIIn0jpPfE69b/Gaj2t03IpOANfyF0Sdyo0MVpTZpZLo0TsG74j4XDVWK0tFhW0QYqdCKdge6aNbVUinCget81rk5HSbJLCbJMyUQcLpaqsZsfCCeJ7qKi4Qab44Ymd0LW2GcBTBpYdfiQQ2SDlirLJJ1izY0F5o4QjIMZJb0ttja4vGPl9ESItjnR9GPkweGfGWJXVOsYKlfSNArQO+6U3pc+ltkZa8qJ7ZVtni9TWdiohLSDrZG9ITWeYSmIzARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwAROoj8A/j29pFdMLuA8AAAAASUVORK5CYII=\");\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: 90%;\n        margin-right: 10px; }\n      .ac-request-container .header .title .text {\n        text-transform: uppercase; }\n  .ac-request-container .body {\n    position: relative;\n    width: 100%;\n    height: auto;\n    max-height: 90%;\n    overflow-y: auto;\n    overflow-x: hidden; }\n    .ac-request-container .body .ac-request-thumbnail {\n      position: relative;\n      width: 100%;\n      height: auto;\n      display: flex;\n      align-items: stretch;\n      background-color: white;\n      padding: 10px;\n      border-bottom: 1px solid #ccc; }\n      .ac-request-container .body .ac-request-thumbnail:last-child {\n        border-bottom: none; }\n      .ac-request-container .body .ac-request-thumbnail .status-indicator {\n        width: 30px;\n        height: auto;\n        position: relative; }\n        .ac-request-container .body .ac-request-thumbnail .status-indicator::before {\n          content: \"\";\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          width: 7px;\n          height: 7px;\n          border-radius: 50%;\n          background-color: gray; }\n      .ac-request-container .body .ac-request-thumbnail .request-details {\n        width: auto;\n        max-width: 70%;\n        margin: 0 10px; }\n        .ac-request-container .body .ac-request-thumbnail .request-details .request {\n          font-weight: 900;\n          padding: 3px; }\n        .ac-request-container .body .ac-request-thumbnail .request-details .user {\n          padding: 3px; }\n        .ac-request-container .body .ac-request-thumbnail .request-details .section {\n          padding: 3px; }\n      .ac-request-container .body .ac-request-thumbnail .status {\n        width: auto;\n        margin: auto;\n        margin-right: 10px; }\n        .ac-request-container .body .ac-request-thumbnail .status .label {\n          width: auto;\n          height: auto;\n          padding: 8px 2px;\n          background-color: gray;\n          border-radius: 20px;\n          font-size: 10px;\n          color: white;\n          text-align: center;\n          margin-bottom: 4px;\n          text-transform: capitalize; }\n        .ac-request-container .body .ac-request-thumbnail .status .date {\n          color: #FA5B5BC4; }\n      .ac-request-container .body .ac-request-thumbnail.pending .status-indicator::before {\n        background-color: #FFA133; }\n      .ac-request-container .body .ac-request-thumbnail.pending .request-details .request {\n        color: #FFA133; }\n      .ac-request-container .body .ac-request-thumbnail.pending .status .label {\n        background-color: #FFA133; }\n      .ac-request-container .body .ac-request-thumbnail.rejected .status-indicator::before {\n        background-color: #FA5B5BC4; }\n      .ac-request-container .body .ac-request-thumbnail.rejected .status .label {\n        background-color: #FA5B5BC4; }\n      .ac-request-container .body .ac-request-thumbnail.approved .status-indicator::before {\n        background-color: #52c4c9; }\n      .ac-request-container .body .ac-request-thumbnail.approved .status .label {\n        background-color: #52c4c9; }\n\n.filter-item {\n  width: 100%;\n  height: auto;\n  padding: 0 10px;\n  margin-bottom: 10px; }\n  .filter-item label {\n    margin: 0; }\n  .filter-item select {\n    width: 100%;\n    padding: 8px;\n    border-radius: 8px;\n    border: none;\n    outline: none; }\n", ""]);
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

/***/ "./src/filter-panel/FilterPanel.tsx":
/*!******************************************!*\
  !*** ./src/filter-panel/FilterPanel.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Portal_1 = __webpack_require__(/*! ./Portal */ "./src/filter-panel/Portal.tsx");
__webpack_require__(/*! ./filter_panel.scss */ "./src/filter-panel/filter_panel.scss");
function FilterPanel(props) {
    // states
    let [shopPanel, setShopPanel] = React.useState(false);
    let [coords, setCoords] = React.useState({});
    let filterPanel = React.useRef(null);
    // update coordinates of filter panel
    const updateTooltipCoords = (button) => {
        const buttonDetails = button.getBoundingClientRect();
        console.log(buttonDetails);
        console.log(filterPanel.current);
        let _coords = {
            top: buttonDetails.y + window.scrollY - 15,
            right: window.innerWidth - buttonDetails.right - 15,
        };
        setCoords(_coords);
    };
    // callbacks
    const onOpenPanel = () => {
        setShopPanel(true);
        if (typeof props.onOpen == "function") {
            props.onOpen();
        }
    };
    const onClosePanel = () => {
        setShopPanel(false);
        if (typeof props.onClose == "function") {
            props.onClose();
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "filter-panel-btn fpb-burger-menu", onClick: (e) => {
                updateTooltipCoords(e.target);
                onOpenPanel();
            } },
            React.createElement("div", { className: "icon" })),
        shopPanel &&
            React.createElement(Portal_1.default, null,
                React.createElement("div", { className: "filter-panel", style: coords, ref: filterPanel },
                    React.createElement("div", { className: "filter-header" },
                        React.createElement("div", { className: "fh-title" },
                            React.createElement("div", { className: "fht-icon" }),
                            React.createElement("div", { className: "fht-text" }, "Filters")),
                        React.createElement("div", { className: "burger-menu-btn", onClick: onClosePanel },
                            React.createElement("div", { className: "icon" }))),
                    React.createElement("div", { className: "filter-body" }, props.children)))));
}
exports.default = FilterPanel;


/***/ }),

/***/ "./src/filter-panel/Portal.tsx":
/*!*************************************!*\
  !*** ./src/filter-panel/Portal.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDom = __webpack_require__(/*! react-dom */ "react-dom");
const PortalContainer = (props) => {
    // root
    let rootElement = document.getElementById('portal-root');
    if (rootElement === null) {
        rootElement = document.createElement('div');
        rootElement.setAttribute("id", 'portal-root');
        document.body.appendChild(rootElement);
    }
    // wrapper
    let wrapper = document.createElement("div");
    // bind, unbind
    React.useEffect(() => {
        rootElement.appendChild(wrapper);
        return () => rootElement.removeChild(wrapper);
    }, [rootElement, wrapper]);
    // render content
    const renderPortal = () => {
        return (React.createElement(React.Fragment, null, props.children));
    };
    // return
    return ReactDom.createPortal(renderPortal(), rootElement);
};
exports.default = PortalContainer;


/***/ }),

/***/ "./src/filter-panel/filter_panel.scss":
/*!********************************************!*\
  !*** ./src/filter-panel/filter_panel.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./filter_panel.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/filter-panel/filter_panel.scss");

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

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const uxp_1 = __webpack_require__(/*! ./uxp */ "./src/uxp.ts");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
const FilterPanel_1 = __webpack_require__(/*! ./filter-panel/FilterPanel */ "./src/filter-panel/FilterPanel.tsx");
class AfterHoursACRequestWidget extends React.Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "ac-request-container" },
                React.createElement("div", { className: "header" },
                    React.createElement("div", { className: "title" },
                        React.createElement("div", { className: "icon" }),
                        React.createElement("div", { className: "text" }, "After Hours A/C Requests")),
                    React.createElement("div", { className: "filter-container" },
                        React.createElement(FilterPanel_1.default, { onOpen: () => { }, onClose: () => { } },
                            React.createElement("div", { className: "filter-item" },
                                React.createElement("label", { htmlFor: "" }, "Filter By"),
                                React.createElement("select", { name: "", id: "" },
                                    React.createElement("option", { value: "" }, " Select a Filter"))),
                            React.createElement("div", { className: "filter-item" },
                                React.createElement("label", { htmlFor: "" }, "Sort By"),
                                React.createElement("select", { name: "", id: "" },
                                    React.createElement("option", { value: "" }, " Select a Option")))))),
                React.createElement("div", { className: "body" },
                    React.createElement("div", { className: "ac-request-thumbnail pending" },
                        React.createElement("div", { className: "status-indicator" }),
                        React.createElement("div", { className: "request-details" },
                            React.createElement("div", { className: "request" }, "A/C Extension Request #81"),
                            React.createElement("div", { className: "user" }, "Carrie Mathew"),
                            React.createElement("div", { className: "section" }, "Design Team")),
                        React.createElement("div", { className: "status" },
                            React.createElement("div", { className: "label" }, "Pending"),
                            React.createElement("div", { className: "date" }, "23/07/2020"))),
                    React.createElement("div", { className: "ac-request-thumbnail approved" },
                        React.createElement("div", { className: "status-indicator" }),
                        React.createElement("div", { className: "request-details" },
                            React.createElement("div", { className: "request" }, "A/C Extension Request #81"),
                            React.createElement("div", { className: "user" }, "Carrie Mathew"),
                            React.createElement("div", { className: "section" }, "Design Team")),
                        React.createElement("div", { className: "status" },
                            React.createElement("div", { className: "label" }, "approved"),
                            React.createElement("div", { className: "date" }, "23/07/2020"))),
                    React.createElement("div", { className: "ac-request-thumbnail rejected" },
                        React.createElement("div", { className: "status-indicator" }),
                        React.createElement("div", { className: "request-details" },
                            React.createElement("div", { className: "request" }, "A/C Extension Request #81"),
                            React.createElement("div", { className: "user" }, "Carrie Mathew"),
                            React.createElement("div", { className: "section" }, "Design Team")),
                        React.createElement("div", { className: "status" },
                            React.createElement("div", { className: "label" }, "rejected"),
                            React.createElement("div", { className: "date" }, "23/07/2020"))),
                    React.createElement("div", { className: "ac-request-thumbnail rejected" },
                        React.createElement("div", { className: "status-indicator" }),
                        React.createElement("div", { className: "request-details" },
                            React.createElement("div", { className: "request" }, "A/C Extension Request #81"),
                            React.createElement("div", { className: "user" }, "Carrie Mathew"),
                            React.createElement("div", { className: "section" }, "Design Team")),
                        React.createElement("div", { className: "status" },
                            React.createElement("div", { className: "label" }, "rejected"),
                            React.createElement("div", { className: "date" }, "23/07/2020"))),
                    React.createElement("div", { className: "ac-request-thumbnail pending" },
                        React.createElement("div", { className: "status-indicator" }),
                        React.createElement("div", { className: "request-details" },
                            React.createElement("div", { className: "request" }, "A/C Extension Request #81"),
                            React.createElement("div", { className: "user" }, "Carrie Mathew"),
                            React.createElement("div", { className: "section" }, "Design Team")),
                        React.createElement("div", { className: "status" },
                            React.createElement("div", { className: "label" }, "Pending"),
                            React.createElement("div", { className: "date" }, "23/07/2020"))),
                    React.createElement("div", { className: "ac-request-thumbnail approved" },
                        React.createElement("div", { className: "status-indicator" }),
                        React.createElement("div", { className: "request-details" },
                            React.createElement("div", { className: "request" }, "A/C Extension Request #81"),
                            React.createElement("div", { className: "user" }, "Carrie Mathew"),
                            React.createElement("div", { className: "section" }, "Design Team")),
                        React.createElement("div", { className: "status" },
                            React.createElement("div", { className: "label" }, "approved"),
                            React.createElement("div", { className: "date" }, "23/07/2020")))))));
    }
}
uxp_1.registerWidget({
    "guid": "df558fd3-3963-4f5a-cf06-4defe2e3e7f9",
    "name": "After Hours AC Request",
    "widget": AfterHoursACRequestWidget,
    "configs": {
        "container": {
            "background": "transparent"
        },
        "layout": { w: 5, h: 12, minW: 5, minH: 12 }
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

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map