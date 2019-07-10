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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/packages/post-edit/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/packages/helpers/src/index.js":
/*!*******************************************!*\
  !*** ./src/packages/helpers/src/index.js ***!
  \*******************************************/
/*! exports provided: shortcode, getEditorType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shortcode\", function() { return shortcode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEditorType\", function() { return getEditorType; });\n/* harmony import */ var _my_gallery_post_edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @my-gallery/post-edit */ \"./src/packages/post-edit/src/index.js\");\n\n\nfunction shortcodeGutenberg(text) {\n  var editorWindow = document.querySelector('.block-library-rich-text__tinymce'),\n      clientsId = editorWindow.id.replace('editor-', ''),\n      _window$wp$data = window.wp.data,\n      dispatch = _window$wp$data.dispatch,\n      select = _window$wp$data.select,\n      post = select('core/editor').getCurrentPost();\n  dispatch('core/editor').updateBlockAttributes(clientsId, {\n    content: post.content + '<br> ' + text\n  });\n  return editorWindow;\n}\n\nfunction shortcodeClassic(text) {\n  return document.querySelector('#content_ifr').contentDocument.querySelector('#tinymce');\n}\n\nfunction shortcode(ids) {\n  var editorWindow = _my_gallery_post_edit__WEBPACK_IMPORTED_MODULE_0__[\"config\"].editor == 'gutenberg' ? shortcodeGutenberg(text) : _my_gallery_post_edit__WEBPACK_IMPORTED_MODULE_0__[\"config\"].editor == 'classic' && shortcodeClassic(text),\n      text = '[my-gallery ids=' + ids + ']';\n  editorWindow.innerHTML += '<br> ' + text;\n}\n/**\n *  Identifies type of using WP editor.\n *\n * @return string\n */\n\nfunction getEditorType() {\n  var toolsContainerClassic = document.querySelector('#wp-content-editor-tools'),\n      toolsContainerGutenberg = document.querySelector('.editor-inserter');\n\n  if (toolsContainerClassic) {\n    return 'classic';\n  } else if (toolsContainerGutenberg) {\n    return 'gutenberg';\n  }\n}\n\n//# sourceURL=webpack:///./src/packages/helpers/src/index.js?");

/***/ }),

/***/ "./src/packages/media-frame/src/components/MediaFrame.js":
/*!***************************************************************!*\
  !*** ./src/packages/media-frame/src/components/MediaFrame.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _my_gallery_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @my-gallery/helpers */ \"./src/packages/helpers/src/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! globals */ \"globals\");\n/* harmony import */ var globals__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(globals__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\n\nvar getGalleryDetailsMediaFrame = function getGalleryDetailsMediaFrame() {\n  /**\n   * Custom gallery details frame.\n   *\n   * @link https://github.com/xwp/wp-core-media-widgets/blob/905edbccfc2a623b73a93dac803c5335519d7837/wp-admin/js/widgets/media-gallery-widget.js\n   * @class GalleryDetailsMediaFrame\n   * @constructor\n   */\n  return globals__WEBPACK_IMPORTED_MODULE_3__[\"wp\"].media.view.MediaFrame.Post.extend({\n    /**\n     * Create the default states.\n     *\n     * @return {void}\n     */\n    createStates: function createStates() {\n      this.states.add([new globals__WEBPACK_IMPORTED_MODULE_3__[\"wp\"].media.controller.Library({\n        id: 'gallery',\n        title: globals__WEBPACK_IMPORTED_MODULE_3__[\"wp\"].media.view.l10n.createGalleryTitle,\n        priority: 40,\n        toolbar: 'main-gallery',\n        filterable: 'uploaded',\n        multiple: 'add',\n        editable: false,\n        library: globals__WEBPACK_IMPORTED_MODULE_3__[\"wp\"].media.query(Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"defaults\"])({\n          type: 'image'\n        }, this.options.library))\n      }), new globals__WEBPACK_IMPORTED_MODULE_3__[\"wp\"].media.controller.GalleryEdit({\n        library: this.options.selection,\n        editing: this.options.editing,\n        menu: 'gallery',\n        displaySettings: false,\n        multiple: true\n      }), new globals__WEBPACK_IMPORTED_MODULE_3__[\"wp\"].media.controller.GalleryAdd()]);\n    }\n  });\n};\n\nvar MediaFrame =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(MediaFrame, _React$Component);\n\n  function MediaFrame(props) {\n    var _this;\n\n    _classCallCheck(this, MediaFrame);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MediaFrame).call(this, props));\n    _this.frame = new (getGalleryDetailsMediaFrame())({\n      editing: false,\n      mimeType: [\"image\"],\n      multiple: true,\n      selection: {},\n      state: \"gallery\"\n    });\n    _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.onUpdate = _this.onUpdate.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.markSelected = _this.markSelected.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n\n    _this.frame.on(\"update\", _this.onUpdate);\n\n    _this.frame.on(\"open\", _this.markSelected);\n\n    return _this;\n  }\n\n  _createClass(MediaFrame, [{\n    key: \"onUpdate\",\n    value: function onUpdate(selection) {\n      var attachment = this.getIds(selection.models);\n      this.addShortcode(attachment);\n    }\n  }, {\n    key: \"addShortcode\",\n    value: function addShortcode(inputValue) {\n      Object(_my_gallery_helpers__WEBPACK_IMPORTED_MODULE_1__[\"shortcode\"])(inputValue);\n    }\n  }, {\n    key: \"getIds\",\n    value: function getIds(models) {\n      return models.map(function (model) {\n        return model.id;\n      }).join(',');\n    }\n  }, {\n    key: \"markSelected\",\n    value: function markSelected() {\n      var selection = this.frame.state().get('selection');\n      var attachment = [];\n      attachment.push(globals__WEBPACK_IMPORTED_MODULE_3__[\"wp\"].media.attachment(2038));\n      attachment.push(globals__WEBPACK_IMPORTED_MODULE_3__[\"wp\"].media.attachment(1975)); // attachment should be an array if you want select single image use [attachment]\n\n      selection.add(attachment);\n    }\n  }, {\n    key: \"onClick\",\n    value: function onClick() {\n      this.frame.open();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var Button = this.props.button;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {\n        onClick: this.onClick\n      });\n    }\n  }]);\n\n  return MediaFrame;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MediaFrame);\n\n//# sourceURL=webpack:///./src/packages/media-frame/src/components/MediaFrame.js?");

/***/ }),

/***/ "./src/packages/media-frame/src/index.js":
/*!***********************************************!*\
  !*** ./src/packages/media-frame/src/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_MediaFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MediaFrame */ \"./src/packages/media-frame/src/components/MediaFrame.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_components_MediaFrame__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/packages/media-frame/src/index.js?");

/***/ }),

/***/ "./src/packages/post-edit/src/App.js":
/*!*******************************************!*\
  !*** ./src/packages/post-edit/src/App.js ***!
  \*******************************************/
/*! exports provided: myGalleryGutenberg, myGalleryClassic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myGalleryGutenberg\", function() { return myGalleryGutenberg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myGalleryClassic\", function() { return myGalleryClassic; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _my_gallery_media_frame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @my-gallery/media-frame */ \"./src/packages/media-frame/src/index.js\");\n/* harmony import */ var _components_ButtonGutenberg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ButtonGutenberg */ \"./src/packages/post-edit/src/components/ButtonGutenberg.js\");\n/* harmony import */ var _components_ButtonClassic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ButtonClassic */ \"./src/packages/post-edit/src/components/ButtonClassic.js\");\n\n\n\n\n\n/**\n * Renders and insert React component in gutenberg editor tools container,\n * insert in menu list after menu will be rendered.\n *\n */\n\nfunction myGalleryGutenberg() {\n  var liElement = document.createElement(\"li\");\n  liElement.className = \"editor-block-types-list__list-item block-editor-block-types-list__list-item\";\n  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_my_gallery_media_frame__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    button: _components_ButtonGutenberg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), liElement);\n  var menuButton = document.querySelector(\".editor-inserter\");\n  menuButton.addEventListener(\"click\", function () {\n    window.setTimeout(function () {\n      var el = document.querySelector(\".editor-block-types-list\");\n      el && el.prepend(liElement);\n    }, 10);\n  });\n}\n/**\n * Renders and insert React component in classic editor tools container.\n *\n */\n\nfunction myGalleryClassic() {\n  var divElement = document.createElement(\"div\"),\n      toolsContainer = document.querySelector(\".wp-editor-tools\");\n  divElement.className = \"editor-button-container\";\n  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_my_gallery_media_frame__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    button: _components_ButtonClassic__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }), divElement);\n  toolsContainer.append(divElement);\n}\n\n//# sourceURL=webpack:///./src/packages/post-edit/src/App.js?");

/***/ }),

/***/ "./src/packages/post-edit/src/components/ButtonClassic.js":
/*!****************************************************************!*\
  !*** ./src/packages/post-edit/src/components/ButtonClassic.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction ButtonClassic(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    onClick: props.onClick,\n    className: \"button\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    clasName: \"wp-media-buttons-icon\"\n  }), \"Add MyGallery\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ButtonClassic);\n\n//# sourceURL=webpack:///./src/packages/post-edit/src/components/ButtonClassic.js?");

/***/ }),

/***/ "./src/packages/post-edit/src/components/ButtonGutenberg.js":
/*!******************************************************************!*\
  !*** ./src/packages/post-edit/src/components/ButtonGutenberg.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction ButtonGutenberg(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"editor-block-types-list__item block-editor-block-types-list__item editor-block-list-item-gallery\",\n    \"aria-label\": \"Gallery\",\n    onClick: props.onClick\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"editor-block-types-list__item-icon block-editor-block-types-list__item-icon\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"editor-block-icon block-editor-block-icon has-colors\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    height: \"24\",\n    viewBox: \"0 0 64 64\",\n    width: \"24\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"m62 29v32l-18-18-6 6-6-6-18 18v-32zm-20 8a4 4 0 1 0 -4 4 4 4 0 0 0 4-4z\",\n    fill: \"#57a4ff\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"m62 61h-12l-12-12 6-6z\",\n    fill: \"#b2fa09\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"m53 15v14h-39v16h-1a4 4 0 0 1 -4-4v-24a4 4 0 0 1 4-4h38a2.006 2.006 0 0 1 2 2z\",\n    fill: \"#ffc477\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"m51 9v4h-38a4 4 0 0 0 -4 4v24a4 4 0 0 0 4 4h-8a2.006 2.006 0 0 1 -2-2v-38a2.006 2.006 0 0 1 2-2h12a2.006 2.006 0 0 1 2 2 2.015 2.015 0 0 0 2 2h28a2.006 2.006 0 0 1 2 2z\",\n    fill: \"#ff7956\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"m50 61h-36l18-18 6 6z\",\n    fill: \"#9cdd05\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"circle\", {\n    cx: \"38\",\n    cy: \"37\",\n    fill: \"#ff5023\",\n    r: \"4\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"m14 18h3v-2h-4a1 1 0 0 0 -1 1v4h2z\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"m12 23h2v2h-2z\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"m62 28h-8v-13a3 3 0 0 0 -2-2.816v-3.184a3 3 0 0 0 -3-3h-28a1 1 0 0 1 -1-1 3 3 0 0 0 -3-3h-12a3 3 0 0 0 -3 3v38a3 3 0 0 0 3 3h8v15a1 1 0 0 0 1 1h48a1 1 0 0 0 1-1v-32a1 1 0 0 0 -1-1zm-1 30.586-16.293-16.293a1 1 0 0 0 -1.414 0l-5.293 5.293-5.293-5.293a1 1 0 0 0 -1.414 0l-16.293 16.293v-28.586h46zm-13.414 1.414h-31.172l15.586-15.586zm-8.172-11 4.586-4.586 15.586 15.586h-9.172zm-35.414-6v-38a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1 3 3 0 0 0 3 3h28a1 1 0 0 1 1 1v3h-37a5.006 5.006 0 0 0 -5 5v24a4.948 4.948 0 0 0 1.026 3h-4.026a1 1 0 0 1 -1-1zm6-2v-24a3 3 0 0 1 3-3h38a1 1 0 0 1 1 1v13h-38a1 1 0 0 0 -1 1v15a3 3 0 0 1 -3-3z\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"m38 42a5 5 0 1 0 -5-5 5.006 5.006 0 0 0 5 5zm0-8a3 3 0 1 1 -3 3 3 3 0 0 1 3-3z\"\n  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"editor-block-types-list__item-title\"\n  }, \"MyGallery\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ButtonGutenberg);\n\n//# sourceURL=webpack:///./src/packages/post-edit/src/components/ButtonGutenberg.js?");

/***/ }),

/***/ "./src/packages/post-edit/src/index.js":
/*!*********************************************!*\
  !*** ./src/packages/post-edit/src/index.js ***!
  \*********************************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/packages/post-edit/src/App.js\");\n/* harmony import */ var _my_gallery_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @my-gallery/helpers */ \"./src/packages/helpers/src/index.js\");\n\n\n\nvar config = {};\nwindow.addEventListener('load', function () {\n  config.editor = Object(_my_gallery_helpers__WEBPACK_IMPORTED_MODULE_1__[\"getEditorType\"])();\n\n  switch (config.editor) {\n    case 'gutenberg':\n      Object(_App__WEBPACK_IMPORTED_MODULE_0__[\"myGalleryGutenberg\"])();\n      break;\n\n    case 'classic':\n      Object(_App__WEBPACK_IMPORTED_MODULE_0__[\"myGalleryClassic\"])();\n      break;\n  }\n});\n\n//# sourceURL=webpack:///./src/packages/post-edit/src/index.js?");

/***/ }),

/***/ "globals":
/*!*************************!*\
  !*** external "window" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = window;\n\n//# sourceURL=webpack:///external_%22window%22?");

/***/ }),

/***/ "lodash":
/*!********************************!*\
  !*** external "window.lodash" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = window.lodash;\n\n//# sourceURL=webpack:///external_%22window.lodash%22?");

/***/ }),

/***/ "react":
/*!*******************************!*\
  !*** external "window.React" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = window.React;\n\n//# sourceURL=webpack:///external_%22window.React%22?");

/***/ }),

/***/ "react-dom":
/*!**********************************!*\
  !*** external "window.ReactDOM" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = window.ReactDOM;\n\n//# sourceURL=webpack:///external_%22window.ReactDOM%22?");

/***/ })

/******/ });