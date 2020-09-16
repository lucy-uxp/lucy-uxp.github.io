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
/*! exports provided: id, author, widgets, sidebarLinks, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":\"cf99db8b-d88b-4e67-a770-a7844a3c9e76\",\"author\":\"\",\"widgets\":[{\"id\":\"CreteRequest\",\"title\":\"CreteRequest\",\"description\":\"A sample widget\"}],\"sidebarLinks\":[{\"id\":\"CreteRequestLink\"}]}");

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
exports.push([module.i, ".modal-container.create-request-modal {\n  justify-content: flex-start; }\n  .modal-container.create-request-modal .modal-container-top-bar {\n    width: 100%;\n    height: auto;\n    padding: 20px;\n    display: flex;\n    justify-content: space-between; }\n  .modal-container.create-request-modal .modal-panel {\n    width: auto;\n    min-width: 40%;\n    min-height: 80%;\n    max-height: 85%; }\n    .modal-container.create-request-modal .modal-panel .modal-header {\n      display: none; }\n    .modal-container.create-request-modal .modal-panel .modal-body {\n      height: 100%; }\n      .modal-container.create-request-modal .modal-panel .modal-body .uxp-wizard-container {\n        width: 100%;\n        height: 100%; }\n        .modal-container.create-request-modal .modal-panel .modal-body .uxp-wizard-container .uxp-wizard-step {\n          width: 100%;\n          height: 100%;\n          display: flex;\n          flex-direction: column;\n          justify-content: space-between;\n          padding: 0 50px; }\n          .modal-container.create-request-modal .modal-panel .modal-body .uxp-wizard-container .uxp-wizard-step .uxp-form-group {\n            padding: 5px 0; }\n          .modal-container.create-request-modal .modal-panel .modal-body .uxp-wizard-container .uxp-wizard-step .uxp-wizard-step-header,\n          .modal-container.create-request-modal .modal-panel .modal-body .uxp-wizard-container .uxp-wizard-step .uxp-wizard-step-content,\n          .modal-container.create-request-modal .modal-panel .modal-body .uxp-wizard-container .uxp-wizard-step .uxp-wizard-step-footer {\n            width: 100%;\n            height: auto;\n            padding: 20px; }\n          .modal-container.create-request-modal .modal-panel .modal-body .uxp-wizard-container .uxp-wizard-step .uxp-wizard-step-footer .uxp-wizard-step-next {\n            margin: 0; }\n          .modal-container.create-request-modal .modal-panel .modal-body .uxp-wizard-container .uxp-wizard-step .uxp-wizard-step-header .uxp-wizard-step-prev,\n          .modal-container.create-request-modal .modal-panel .modal-body .uxp-wizard-container .uxp-wizard-step .uxp-wizard-step-header .uxp-wizard-step-ph {\n            flex-basis: 30px;\n            flex-grow: 0;\n            flex-shrink: 0; }\n          .modal-container.create-request-modal .modal-panel .modal-body .uxp-wizard-container .uxp-wizard-step .uxp-wizard-step-header .uxp-wizard-step-prev {\n            width: 30px;\n            height: 30px;\n            overflow: hidden; }\n            .modal-container.create-request-modal .modal-panel .modal-body .uxp-wizard-container .uxp-wizard-step .uxp-wizard-step-header .uxp-wizard-step-prev::before {\n              height: 30px;\n              background-size: 50%;\n              border-radius: 50%; }\n          .modal-container.create-request-modal .modal-panel .modal-body .uxp-wizard-container .uxp-wizard-step .form-row {\n            display: flex;\n            flex-wrap: nowrap;\n            width: auto;\n            height: auto;\n            justify-content: start;\n            align-items: center; }\n\n.upload-button {\n  width: auto;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  border-radius: 10px;\n  background-color: #f8f8f8;\n  cursor: pointer; }\n  .upload-button .icon {\n    width: 30px;\n    height: 30px;\n    background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItdXBsb2FkIj48cGF0aCBkPSJNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNCI+PC9wYXRoPjxwb2x5bGluZSBwb2ludHM9IjE3IDggMTIgMyA3IDgiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjEyIiB5MT0iMyIgeDI9IjEyIiB5Mj0iMTUiPjwvbGluZT48L3N2Zz4=\");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 80%;\n    margin-bottom: 10px; }\n  .upload-button .label {\n    font-size: 10px; }\n", ""]);
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
const CreteRequestWidget = (props) => {
    // props
    let { onClose, uxpContext } = props;
    // get root element
    let docRoot = document.getElementById("root");
    // states
    let [show, setShow] = React.useState(true);
    let [searchText, setSearchText] = React.useState("");
    let [title, setTitle] = React.useState("");
    let [requestType, setRequestType] = React.useState("");
    let [requestLabel, setRequestLabel] = React.useState("");
    let [location, setLocation] = React.useState("");
    let [level, setLevel] = React.useState("");
    let [priority, setPriority] = React.useState("");
    let [resolveBy, setResolveBy] = React.useState("");
    let [businessUnit, setBusinessUnit] = React.useState("");
    let [property, setProperty] = React.useState("");
    const onOpenModal = () => {
        docRoot.classList.add("blurred");
    };
    const onCloseModal = () => {
        docRoot.classList.remove("blurred");
        setShow(false);
        onClose();
    };
    // render additional content
    let additionalContent = React.createElement("div", { className: "modal-container-top-bar" },
        React.createElement(components_1.IconButton, { type: "arrow-left", onClick: onCloseModal }),
        React.createElement(components_1.SearchBox, { value: searchText, onChange: val => setSearchText(val) }));
    // wizard 
    let steps = [
        {
            onNext: () => requestType,
            id: "select-service",
            title: "Create a Request",
            render: (props) => React.createElement(components_1.FormField, null,
                React.createElement(components_1.Label, null, "Select a Service"),
                React.createElement(components_1.Select, { selected: requestType, options: [
                        { label: "Maintenance Request", value: "maintenance request" },
                        { label: "Handyman Service", value: "handyman service" },
                        { label: "In-building Filming", value: "in-build filming" }
                    ], onChange: val => setRequestType(val), placeholder: "-- Select Request Type --" }))
        },
        {
            id: "maintenance request",
            title: "Maintenance Request",
            render: (props) => React.createElement(React.Fragment, null,
                React.createElement(components_1.FormField, null,
                    React.createElement(components_1.Input, { value: requestLabel, onChange: val => setRequestLabel(val), placeholder: "Label your work request" })),
                React.createElement("div", { className: "form-row" },
                    React.createElement(components_1.FormField, null,
                        React.createElement(components_1.Select, { selected: location, options: [
                                { label: "East Wing", value: "East Wing" },
                                { label: "West Wing", value: "West Wing" },
                                { label: "Lobby", value: "Lobby" }
                            ], onChange: val => setLocation(val), placeholder: "Location" })),
                    React.createElement(components_1.FormField, null,
                        React.createElement(components_1.Select, { selected: level, options: [
                                { label: "Level 01", value: "Level 01" },
                                { label: "Level 02", value: "Level 02" },
                                { label: "Level 03", value: "Level 03" },
                                { label: "Level 04", value: "Level 04" }
                            ], onChange: val => setLevel(val), placeholder: "Level" }))),
                React.createElement("div", { className: "form-row" },
                    React.createElement(components_1.FormField, null,
                        React.createElement(components_1.Select, { selected: priority, options: [
                                { label: "Low", value: "Low" },
                                { label: "Medium", value: "Medium" },
                                { label: "Critical", value: "Critical" }
                            ], onChange: val => setPriority(val), placeholder: "Priority" })),
                    React.createElement(components_1.FormField, null,
                        React.createElement(components_1.Select, { selected: resolveBy, options: [
                                { label: "in 30 minutes", value: "in 30 minutes" },
                                { label: "in 1 hour", value: "in 1 hour" }
                            ], onChange: val => setResolveBy(val), placeholder: "Resolution By" }))),
                React.createElement("div", { className: "form-row" },
                    React.createElement(components_1.FormField, null,
                        React.createElement(components_1.Select, { selected: businessUnit, options: [
                                { label: "Marketing", value: "Marketing" },
                                { label: "Production", value: "Production" }
                            ], onChange: val => setBusinessUnit(val), placeholder: "Business Unit" })),
                    React.createElement(components_1.FormField, null,
                        React.createElement(components_1.Select, { selected: property, options: [
                                { label: "Business Park 01", value: "Business Park 01" },
                                { label: "Business Park 02", value: "Business Park 02" },
                                { label: "Business Park 03", value: "Business Park 03" },
                                { label: "Business Park 04", value: "Business Park 04" }
                            ], onChange: val => setProperty(val), placeholder: "Property" }))),
                React.createElement("div", { className: "form-row" },
                    React.createElement(components_1.FormField, { inline: true },
                        React.createElement("div", { className: "upload-button" },
                            React.createElement("div", { className: "icon" }),
                            React.createElement("div", { className: "label" }, "Upload Image"))),
                    React.createElement(components_1.FormField, { inline: true },
                        React.createElement("div", { className: "upload-button" },
                            React.createElement("div", { className: "icon" }),
                            React.createElement("div", { className: "label" }, "Upload Image")))))
        },
        {
            id: "in-build filming",
            title: "In-building Filming",
            render: (props) => React.createElement(React.Fragment, null,
                React.createElement(components_1.FormField, null,
                    React.createElement(components_1.Input, { value: requestLabel, onChange: val => setRequestLabel(val), placeholder: "Label your work request" })),
                React.createElement("div", { className: "form-row" },
                    React.createElement(components_1.FormField, null,
                        React.createElement(components_1.Select, { selected: location, options: [
                                { label: "East Wing", value: "East Wing" },
                                { label: "West Wing", value: "West Wing" },
                                { label: "Lobby", value: "Lobby" }
                            ], onChange: val => setLocation(val), placeholder: "Location" })),
                    React.createElement(components_1.FormField, null,
                        React.createElement(components_1.Select, { selected: level, options: [
                                { label: "Level 01", value: "Level 01" },
                                { label: "Level 02", value: "Level 02" },
                                { label: "Level 03", value: "Level 03" },
                                { label: "Level 04", value: "Level 04" }
                            ], onChange: val => setLevel(val), placeholder: "Level" }))),
                React.createElement("div", { className: "form-row" },
                    React.createElement(components_1.FormField, null,
                        React.createElement(components_1.Select, { selected: priority, options: [
                                { label: "Low", value: "Low" },
                                { label: "Medium", value: "Medium" },
                                { label: "Critical", value: "Critical" }
                            ], onChange: val => setPriority(val), placeholder: "Priority" })),
                    React.createElement(components_1.FormField, null,
                        React.createElement(components_1.Select, { selected: resolveBy, options: [
                                { label: "in 30 minutes", value: "in 30 minutes" },
                                { label: "in 1 hour", value: "in 1 hour" }
                            ], onChange: val => setResolveBy(val), placeholder: "Resolution By" }))),
                React.createElement("div", { className: "form-row" },
                    React.createElement(components_1.FormField, null,
                        React.createElement(components_1.Select, { selected: businessUnit, options: [
                                { label: "Marketing", value: "Marketing" },
                                { label: "Production", value: "Production" }
                            ], onChange: val => setBusinessUnit(val), placeholder: "Business Unit" })),
                    React.createElement(components_1.FormField, null,
                        React.createElement(components_1.Select, { selected: property, options: [
                                { label: "Business Park 01", value: "Business Park 01" },
                                { label: "Business Park 02", value: "Business Park 02" },
                                { label: "Business Park 03", value: "Business Park 03" },
                                { label: "Business Park 04", value: "Business Park 04" }
                            ], onChange: val => setProperty(val), placeholder: "Property" }))))
        },
        {
            id: "handyman service",
            title: "Handyman Service",
            render: (props) => React.createElement(React.Fragment, null,
                React.createElement(components_1.FormField, null,
                    React.createElement(components_1.Input, { value: requestLabel, onChange: val => setRequestLabel(val), placeholder: "Label your work request" })),
                React.createElement("div", { className: "form-row" },
                    React.createElement(components_1.FormField, null,
                        React.createElement(components_1.Select, { selected: location, options: [
                                { label: "East Wing", value: "East Wing" },
                                { label: "West Wing", value: "West Wing" },
                                { label: "Lobby", value: "Lobby" }
                            ], onChange: val => setLocation(val), placeholder: "Location" })),
                    React.createElement(components_1.FormField, null,
                        React.createElement(components_1.Select, { selected: level, options: [
                                { label: "Level 01", value: "Level 01" },
                                { label: "Level 02", value: "Level 02" },
                                { label: "Level 03", value: "Level 03" },
                                { label: "Level 04", value: "Level 04" }
                            ], onChange: val => setLevel(val), placeholder: "Level" }))),
                React.createElement("div", { className: "form-row" },
                    React.createElement(components_1.FormField, null,
                        React.createElement(components_1.Select, { selected: priority, options: [
                                { label: "Low", value: "Low" },
                                { label: "Medium", value: "Medium" },
                                { label: "Critical", value: "Critical" }
                            ], onChange: val => setPriority(val), placeholder: "Priority" })),
                    React.createElement(components_1.FormField, null,
                        React.createElement(components_1.Select, { selected: resolveBy, options: [
                                { label: "in 30 minutes", value: "in 30 minutes" },
                                { label: "in 1 hour", value: "in 1 hour" }
                            ], onChange: val => setResolveBy(val), placeholder: "Resolution By" }))),
                React.createElement("div", { className: "form-row" },
                    React.createElement(components_1.FormField, null,
                        React.createElement(components_1.Select, { selected: businessUnit, options: [
                                { label: "Marketing", value: "Marketing" },
                                { label: "Production", value: "Production" }
                            ], onChange: val => setBusinessUnit(val), placeholder: "Business Unit" })),
                    React.createElement(components_1.FormField, null,
                        React.createElement(components_1.Select, { selected: property, options: [
                                { label: "Business Park 01", value: "Business Park 01" },
                                { label: "Business Park 02", value: "Business Park 02" },
                                { label: "Business Park 03", value: "Business Park 03" },
                                { label: "Business Park 04", value: "Business Park 04" }
                            ], onChange: val => setProperty(val), placeholder: "Property" }))),
                React.createElement("div", { className: "form-row" },
                    React.createElement(components_1.FormField, { inline: true },
                        React.createElement("div", { className: "upload-button" },
                            React.createElement("div", { className: "icon" }),
                            React.createElement("div", { className: "label" }, "Upload Image"))),
                    React.createElement(components_1.FormField, { inline: true },
                        React.createElement("div", { className: "upload-button" },
                            React.createElement("div", { className: "icon" }),
                            React.createElement("div", { className: "label" }, "Upload Image")))))
        }
    ];
    return (React.createElement(components_1.Modal, { show: show, onOpen: onOpenModal, onClose: onCloseModal, backgroundDismiss: false, className: "create-request-modal", renderAdditionalContent: () => additionalContent, showCloseButton: false },
        React.createElement(components_1.Wizard, { steps: steps, onComplete: () => { } })));
};
uxp_1.registerLink({
    id: "CreteRequest",
    label: "Create Request",
    component: CreteRequestWidget
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
    let widget = Object.assign({}, _widget, { id: (bundle_json_1.default.id + '/widget/' + _widget.id).toLowerCase() });
    if (!window.registerWidget) {
        console.error('This code is not being run within the context of UXP');
        return;
    }
    window.registerWidget(widget);
}
exports.registerWidget = registerWidget;
function registerLink(_link) {
    let link = Object.assign({}, _link, { id: (bundle_json_1.default.id + '/sidebarlink/' + _link.id).toLowerCase() });
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