/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/HIROMISAKE.woff */ "./src/assets/fonts/HIROMISAKE.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Satoshi-Regular.woff */ "./src/assets/fonts/Satoshi-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* CSS RESET */\n\n\n\n/* IMPORT FONTS FROM /assets */\n@font-face {\n    font-family: 'HIROMISAKE';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff');\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'SATOSHI';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n    font-style: normal;\n}\n\nbody{\n    background-color: #F3EDE1;\n}\n\n/* HEADER STYLING */\n.header{\n    padding-top: 40px;\n    padding-bottom: 40px;\n    padding-left: 0px;\n    padding-right: 80px;\n    border-bottom: solid;\n    border-width: 1px;\n    border-color: #E9DAC6;\n    \n    display: flex;\n    justify-content: space-evenly;\n    color: #333F72;\n    font-family: 'SATOSHI';\n    font-weight: 500;   \n}\n\n.header .logo{\n    font-family: 'HIROMISAKE';\n    font-size: 25px;\n}\n\n.header .links{\n    text-decoration: none;\n    width: 382px;\n    height: 40px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.header .links a{\n    font-size: 20px;\n    text-decoration: none;\n    color: inherit;\n}\n\n.header .links a:hover{\n    color: #E56E0C;\n    cursor: pointer;\n}\n\n.header .icons{\n    width: 72px;\n    height: auto;\n    display: flex;\n    justify-content: space-between;\n}\n\n.header .icons a img{\n    width: 24px;\n    height: 24px;\n}\n\n/* HOME MAIN STYLING */\n.main{\n    padding-top: 60px;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    gap: 24px;\n}\n\n.main .title{\n    font-family: 'HIROMISAKE';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 80px;\n    line-height: 120%;\n    color: #333F72;\n    text-align: center;\n}\n\n.main .description{\n    font-family: 'Satoshi';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 140%;\n    color: #333F72;\n    width:620px;\n    height:auto;\n    text-align: center;\n}\n\n.main .orderBtn{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 16px;\n    gap: 10px;\n    width: 200px;\n    height: 60px;\n    background: #E56E0C;\n    border-radius: 24px 0px;\n    border-style: inherit;\n    font-family: 'HIROMISAKE';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 140%;\n    color: #FFFFFF\n}\n\n.main .orderBtn:hover{\n    background-color: #333F72;\n    cursor: pointer;\n}\n\n.main-top{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap:24px;\n}\n\n.main-bottom{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap:60px;\n}\n\n.backgroundImg1{\n    position: absolute;\n    left: 0px;\n}\n\n.backgroundImg2{\n    position: absolute;\n    right: 0px;\n}\n\n/* MENU STYLING */\n.menu{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-top: 60px;\n    gap:60px;\n}\n\n.menu .title{\n    font-family: 'HIROMISAKE';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 48px;\n    line-height: 120%;\n    color: #333F72;\n    align-self: center;\n}\n\n.menuItemCards{\n    display: flex;\n    justify-content:space-evenly;\n    align-items: center;\n}\n\n.menuItemCard{\n    width: 400px;\n    height: 500px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    gap:20px;\n    border: solid;\n    border-radius: 40px 0px;\n    border-width: 1px;\n    /* border-style: inherit; */\n}\n\n.menuItemCard .cardOrderBtn{\n    width: 242px;\n    height: 60px;\n    border: 1px solid #E56E0C;\n    border-radius: 24px 0px;\n    color: #E56E0C;\n    font-family: 'HIROMISAKE';\n    font-size: 20px;\n    background-color: inherit;\n}\n\n.menuItemCard .cardOrderBtn:hover{\n    background-color:#333F72;\n    cursor: pointer;\n}\n\n.menuItemCard .menuItemName{\n    font-family: 'HIROMISAKE';\n    font-style: normal;\n    font-size: 32px;\n    color: #333F72;\n}\n\n.menuItemCard .description{\n    text-align: center;\n    font-family: \"SATOSHI\";\n    width: 80%;\n}\n\n/* ABOUT STYLING */\n.about{\n    display: flex;\n    flex-direction: column;\n    padding-top: 60px;\n    gap: 30px;\n}\n\n.about .description{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap:30px;\n}\n\n.about .description .aboutTitle{\n    font-family: 'HIROMISAKE';\n    font-size: 48px;\n    line-height: 120%;\n    color: #333F72;\n}\n\n.about .description .descriptionText{\n    width: 900px;\n    text-align: center;\n    font-family: 'Satoshi';\n    font-style: normal;\n    font-size: 20px;\n    line-height: 140%;\n    color: #333F72;\n}\n\n.testimonials{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n}\n\n.testimonials .testimonialsTitle{\n    font-family: 'HIROMISAKE';\n    font-size: 48px;\n    line-height: 120%;\n    color: #333F72;\n}\n.testCards{\n    display: flex;\n}\n\n.dialog{\n    position: relative;\n    bottom: 330px;\n    left: 80px\n}\n\n.dialog .dialogText{\n    width:300px;\n    position: relative;\n    bottom: 120px;\n    left: 50px;\n    font-family: 'Satoshi';\n    font-size: 15px;\n    line-height: 140%;\n    color: #333F72;\n}\n\n#one{\n    position: relative;\n    top:100px;\n    right: 100px;\n}\n\n#two{\n    position: relative;\n    top:200px;\n    right: 30px;\n    \n}\n\n#three{\n    position: relative;\n    left:400px;\n    top: 100px;\n    \n}\n\n#three .dialog{\n    position:relative;\n    left:-340px;\n}\n\n/* CONTACT STYLING */\n\n.contacts{\n    padding-top: 140px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 40px;\n    font-family: 'Satoshi';\n    color: #333F72;\n    gap:30px;\n}\n\n.reservations{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.socialMedia{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.here{\n    text-decoration: none;\n    color:#E56E0C;\n}\n\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* CSS RESET */\n\n\n\n/* IMPORT FONTS FROM /assets */\n@font-face {\n    font-family: 'HIROMISAKE';\n    src: url('./assets/fonts/HIROMISAKE.woff') format('woff');\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'SATOSHI';\n    src: url('./assets/fonts/Satoshi-Regular.woff') format('woff');\n    font-style: normal;\n}\n\nbody{\n    background-color: #F3EDE1;\n}\n\n/* HEADER STYLING */\n.header{\n    padding-top: 40px;\n    padding-bottom: 40px;\n    padding-left: 0px;\n    padding-right: 80px;\n    border-bottom: solid;\n    border-width: 1px;\n    border-color: #E9DAC6;\n    \n    display: flex;\n    justify-content: space-evenly;\n    color: #333F72;\n    font-family: 'SATOSHI';\n    font-weight: 500;   \n}\n\n.header .logo{\n    font-family: 'HIROMISAKE';\n    font-size: 25px;\n}\n\n.header .links{\n    text-decoration: none;\n    width: 382px;\n    height: 40px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.header .links a{\n    font-size: 20px;\n    text-decoration: none;\n    color: inherit;\n}\n\n.header .links a:hover{\n    color: #E56E0C;\n    cursor: pointer;\n}\n\n.header .icons{\n    width: 72px;\n    height: auto;\n    display: flex;\n    justify-content: space-between;\n}\n\n.header .icons a img{\n    width: 24px;\n    height: 24px;\n}\n\n/* HOME MAIN STYLING */\n.main{\n    padding-top: 60px;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    gap: 24px;\n}\n\n.main .title{\n    font-family: 'HIROMISAKE';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 80px;\n    line-height: 120%;\n    color: #333F72;\n    text-align: center;\n}\n\n.main .description{\n    font-family: 'Satoshi';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 140%;\n    color: #333F72;\n    width:620px;\n    height:auto;\n    text-align: center;\n}\n\n.main .orderBtn{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 16px;\n    gap: 10px;\n    width: 200px;\n    height: 60px;\n    background: #E56E0C;\n    border-radius: 24px 0px;\n    border-style: inherit;\n    font-family: 'HIROMISAKE';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 140%;\n    color: #FFFFFF\n}\n\n.main .orderBtn:hover{\n    background-color: #333F72;\n    cursor: pointer;\n}\n\n.main-top{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap:24px;\n}\n\n.main-bottom{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap:60px;\n}\n\n.backgroundImg1{\n    position: absolute;\n    left: 0px;\n}\n\n.backgroundImg2{\n    position: absolute;\n    right: 0px;\n}\n\n/* MENU STYLING */\n.menu{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-top: 60px;\n    gap:60px;\n}\n\n.menu .title{\n    font-family: 'HIROMISAKE';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 48px;\n    line-height: 120%;\n    color: #333F72;\n    align-self: center;\n}\n\n.menuItemCards{\n    display: flex;\n    justify-content:space-evenly;\n    align-items: center;\n}\n\n.menuItemCard{\n    width: 400px;\n    height: 500px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    gap:20px;\n    border: solid;\n    border-radius: 40px 0px;\n    border-width: 1px;\n    /* border-style: inherit; */\n}\n\n.menuItemCard .cardOrderBtn{\n    width: 242px;\n    height: 60px;\n    border: 1px solid #E56E0C;\n    border-radius: 24px 0px;\n    color: #E56E0C;\n    font-family: 'HIROMISAKE';\n    font-size: 20px;\n    background-color: inherit;\n}\n\n.menuItemCard .cardOrderBtn:hover{\n    background-color:#333F72;\n    cursor: pointer;\n}\n\n.menuItemCard .menuItemName{\n    font-family: 'HIROMISAKE';\n    font-style: normal;\n    font-size: 32px;\n    color: #333F72;\n}\n\n.menuItemCard .description{\n    text-align: center;\n    font-family: \"SATOSHI\";\n    width: 80%;\n}\n\n/* ABOUT STYLING */\n.about{\n    display: flex;\n    flex-direction: column;\n    padding-top: 60px;\n    gap: 30px;\n}\n\n.about .description{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap:30px;\n}\n\n.about .description .aboutTitle{\n    font-family: 'HIROMISAKE';\n    font-size: 48px;\n    line-height: 120%;\n    color: #333F72;\n}\n\n.about .description .descriptionText{\n    width: 900px;\n    text-align: center;\n    font-family: 'Satoshi';\n    font-style: normal;\n    font-size: 20px;\n    line-height: 140%;\n    color: #333F72;\n}\n\n.testimonials{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n}\n\n.testimonials .testimonialsTitle{\n    font-family: 'HIROMISAKE';\n    font-size: 48px;\n    line-height: 120%;\n    color: #333F72;\n}\n.testCards{\n    display: flex;\n}\n\n.dialog{\n    position: relative;\n    bottom: 330px;\n    left: 80px\n}\n\n.dialog .dialogText{\n    width:300px;\n    position: relative;\n    bottom: 120px;\n    left: 50px;\n    font-family: 'Satoshi';\n    font-size: 15px;\n    line-height: 140%;\n    color: #333F72;\n}\n\n#one{\n    position: relative;\n    top:100px;\n    right: 100px;\n}\n\n#two{\n    position: relative;\n    top:200px;\n    right: 30px;\n    \n}\n\n#three{\n    position: relative;\n    left:400px;\n    top: 100px;\n    \n}\n\n#three .dialog{\n    position:relative;\n    left:-340px;\n}\n\n/* CONTACT STYLING */\n\n.contacts{\n    padding-top: 140px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 40px;\n    font-family: 'Satoshi';\n    color: #333F72;\n    gap:30px;\n}\n\n.reservations{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.socialMedia{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.here{\n    text-decoration: none;\n    color:#E56E0C;\n}\n\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createAbout(){
    const about = document.createElement("div")
    about.classList.add("about")

    const description = document.createElement("div")
    description.classList.add("description")

    const aboutTitle = document.createElement("h")
    aboutTitle.classList.add("aboutTitle")
    aboutTitle.textContent = "ABOUT US"

    const descriptionText = document.createElement("p")
    descriptionText.classList.add("descriptionText")
    descriptionText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam aut fugiat! Nam reiciendis illum culpa esse iste eveniet delectus voluptatem error, explicabo magnam repellat fugiat totam suscipit possimus pariatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sint eligendi quibusdam laboriosam. Quia eligendi optio dolore doloremque nostrum! Quaerat eaque illo magni autem temporibus cum recusandae vero at facilis!"

    description.appendChild(aboutTitle)
    description.appendChild(descriptionText)

    const testimonials = document.createElement("div")
    testimonials.classList.add("testimonials")

    const testimonialsTitle = document.createElement("div")
    testimonialsTitle.classList.add("testimonialsTitle")
    testimonialsTitle.textContent = "TESTIMONIALS"

    const testCards = document.createElement("div")
    testCards.classList.add("testCards")

    testCards.appendChild(createTestCard("one", false, "/src/assets/icons/woman1.png", "The sushi at this fancy Japanese restaurant was some of the freshest and most delicious Ive ever had.", "- Charlie, Editor, NY Times"))
    testCards.appendChild(createTestCard("two", false, "/src/assets/icons/woman2.png", "I highly recommend the tempura at this restaurant, it was crispy and perfectly seasoned.", "-- Martha, Chef, Nobu"))
    testCards.appendChild(createTestCard("three", true, "/src/assets/icons/man.png", "I had a great experience dining at this fancy Japanese restaurant. The menu was diverse and had a good variety of seafood.", "- Zachery, Sous Chef, Stars"))

    testimonials.appendChild(testimonialsTitle)
    testimonials.appendChild(testCards)



    about.appendChild(description)
    about.appendChild(testimonials)

    return about
}

function createTestCard(id,isInverted, personImg, dialogContent, author){
    const testCard = document.createElement("div")
    testCard.classList.add("testCard")
    testCard.setAttribute('id',`${id}`);
    

    const testCardImg = document.createElement("img")
    testCardImg.src = personImg

    const dialog = document.createElement("div")
    dialog.classList.add("dialog")

    const bubbleImg = document.createElement("img")
    bubbleImg.classList.add("bubble")
    if(isInverted === false){
        bubbleImg.src = "/src/assets/icons/dialog.svg"
    }
    else{
        bubbleImg.src = "/src/assets/icons/dialog_reverse.svg"
    }

    const dialogText = document.createElement("div")
    dialogText.classList.add("dialogText")

    const dialogTextContent = document.createElement("p")
    dialogTextContent.textContent = dialogContent

    const dialogTextAuthor = document.createElement("p")
    dialogTextAuthor.textContent = author

    dialogText.appendChild(dialogTextContent)
    dialogText.appendChild(dialogTextAuthor)

    dialog.appendChild(bubbleImg)
    dialog.appendChild(dialogText)
    
    testCard.appendChild(testCardImg)
    testCard.appendChild(dialog)

    return testCard
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAbout);

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHeader(){
    const header = document.createElement("div")
    header.classList.add("header")

    const logo = document.createElement("div")
    logo.textContent = "MIYABI HOUSE"
    logo.classList.add("logo")

    const links = document.createElement("ul")
    links.classList.add("links")
    const linksNamesArr = ["Home","Menu","About","Contacts"]
    for(let i = 0; i < linksNamesArr.length; i++){
        const link = document.createElement("a")
        link.textContent = linksNamesArr[i]
        link.classList.add(linksNamesArr[i])
        links.appendChild(link)
    }

    const icons = document.createElement("div")

    icons.classList.add("icons")

    const iconImgArr = ["/src/assets/icons/bag-happy.svg", "/src/assets/icons/profile-circle.svg"]
    for(let i = 0; i < iconImgArr.length; i++){
        const iconLink = document.createElement("a")
        const iconLinkImg = document.createElement("img")
        iconLinkImg.src = iconImgArr[i]
        iconLink.appendChild(iconLinkImg)
        icons.appendChild(iconLink)
    }

    header.appendChild(logo)
    header.appendChild(links)
    header.appendChild(icons)

    return header
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHome(){

    const main = document.createElement("div")
    main.classList.add("main")

    // Top section of home
    const mainTop = document.createElement("div")
    mainTop.classList.add("main-top")
    
    const backgroundImg1 = document.createElement("img")
    backgroundImg1.classList.add("backgroundImg1")
    backgroundImg1.src = "/src/assets/images/background1.png"

    const backgroundImg2 = document.createElement("img")
    backgroundImg2.classList.add("backgroundImg2")
    backgroundImg2.src = "/src/assets/images/background2.png"

    const homeTitle = document.createElement("h")
    homeTitle.classList.add("title")
    homeTitle.innerHTML = "TASTE THE TRADITION<br>OF JAPAN"

    const description = document.createElement("description")
    description.classList.add("description")
    description.textContent ="Lorem ipsum dolor sit amet consectetur. Turpis diam id nulla libero at faucibus libero eget. Ornare tincidunt tempor sed egestas pulvinar facilisis."

    mainTop.appendChild(backgroundImg1)
    mainTop.appendChild(backgroundImg2)
    mainTop.appendChild(homeTitle)
    mainTop.appendChild(description)



    // Bottom section of home
    const mainBottom = document.createElement("div")
    mainBottom.classList.add("main-bottom")

    const orderBtn = document.createElement("button")
    orderBtn.textContent = "ORDER NOW"
    orderBtn.classList.add("orderBtn")

    const mainImg = document.createElement("img")
    mainImg.classList.add("mainImg")
    mainImg.src = "/src/assets/images/main_ramen.png"

    mainBottom.appendChild(orderBtn)
    mainBottom.appendChild(mainImg)

    // Adding both sections to main

    main.appendChild(mainTop)
    main.appendChild(mainBottom)

    return main
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu(){
    const menu = document.createElement("div")
    menu.classList.add("menu")

    const title = document.createElement("div")
    title.classList.add("title")
    title.textContent = "OUR SPECIALTIES"

    const menuItemCards = document.createElement("div")
    menuItemCards.classList.add("menuItemCards") 

    menuItemCards.appendChild(createMenuCard("SUSHI", "/src/assets/images/menu_sushi.png", "Sushi is a traditional Japanese dish consisting of small rolls or balls of vinegar-flavored cold cooked rice, usually served with raw fish or other seafood, vegetables, and often wrapped in seaweed."))
    menuItemCards.appendChild(createMenuCard("ONIGIRI", "/src/assets/images/menu_onigiri.png","Onigiri is a Japanese snack or light meal made of rice shaped into a triangle, ball or cylinder, and typically filled with savory ingredients such as pickled plum, grilled salmon, tuna, or seaweed."))
    menuItemCards.appendChild(createMenuCard("RAMEN", "/src/assets/images/menu_ramen.png", "Ramen is a Japanese noodle dish made with Chinese-style wheat noodles served in a meat or fish-based broth, flavored with soy sauce or miso, and topped with various ingredients such as sliced pork, seaweed, eggs, and green onions."))
    menuItemCards.appendChild(createMenuCard("MOCHI", "/src/assets/images/menu_sweet.png", "Mochi is a Japanese sticky rice cake made from glutinous rice that has been pounded into a paste and molded into various shapes. It can be sweet or savory and is often filled with sweet red bean paste or ice cream."))

    menu.appendChild(title)
    menu.appendChild(menuItemCards)

    return menu
}

function createMenuCard(itemName, itemImg, itemDescr){
    const menuItemCard = document.createElement("div")
    menuItemCard.classList.add("menuItemCard") 

    const menuItemCardImg = document.createElement("img")
    menuItemCardImg.classList.add("menuItemImg")
    menuItemCardImg.src = itemImg

    const menuItemCardName = document.createElement("h")
    menuItemCardName.classList.add("menuItemName")
    menuItemCardName.textContent = itemName

    const menuItemDescription = document.createElement("div")
    menuItemDescription.classList.add("description")
    menuItemDescription.textContent = itemDescr

    const menuItemBtn = document.createElement("button")
    menuItemBtn.classList.add("cardOrderBtn")
    menuItemBtn.textContent = "ORDER NOW"

    menuItemCard.appendChild(menuItemCardImg)
    menuItemCard.appendChild(menuItemCardName)
    menuItemCard.appendChild(menuItemDescription)
    menuItemCard.appendChild(menuItemBtn)

    return menuItemCard
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);

/***/ }),

/***/ "./src/assets/fonts/HIROMISAKE.woff":
/*!******************************************!*\
  !*** ./src/assets/fonts/HIROMISAKE.woff ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9b53297c973fd827065.woff";

/***/ }),

/***/ "./src/assets/fonts/Satoshi-Regular.woff":
/*!***********************************************!*\
  !*** ./src/assets/fonts/Satoshi-Regular.woff ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca3da5fd2b609836ef69.woff";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header.js */ "./src/modules/header.js");
/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home.js */ "./src/modules/home.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu.js */ "./src/modules/menu.js");
/* harmony import */ var _modules_about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/about.js */ "./src/modules/about.js");









const content = document.querySelector(".content")

// content.appendChild(createHeader())



// content.appendChild(createHome())



const homeTab = document.querySelector(".Home")
const menuTab = document.querySelector(".Menu")
const aboutTab = document.querySelector(".About")
// const contactsTab = document.querySelector("Contacts")



homeTab.addEventListener('click', function(){
    content.removeChild(content.children[1]);
    content.appendChild((0,_modules_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])())
})


menuTab.addEventListener('click', function(){
    content.removeChild(content.children[1]);
    content.appendChild((0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])())
})

aboutTab.addEventListener('click', function(){
    content.removeChild(content.children[1]);
    content.appendChild((0,_modules_about_js__WEBPACK_IMPORTED_MODULE_4__["default"])())
})




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9B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V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQW9COztBQUUwQjtBQUNKO0FBQ0E7QUFDRTs7OztBQUk1Qzs7QUFFQTs7OztBQUlBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0Esd0JBQXdCLDREQUFVO0FBQ2xDLENBQUM7OztBQUdEO0FBQ0E7QUFDQSx3QkFBd0IsNERBQVU7QUFDbEMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0Esd0JBQXdCLDZEQUFXO0FBQ25DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvSElST01JU0FLRS53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvU2F0b3NoaS1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBDU1MgUkVTRVQgKi9cXG5cXG5cXG5cXG4vKiBJTVBPUlQgRk9OVFMgRlJPTSAvYXNzZXRzICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSElST01JU0FLRSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTQVRPU0hJJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0VERTE7XFxufVxcblxcbi8qIEhFQURFUiBTVFlMSU5HICovXFxuLmhlYWRlcntcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcXG4gICAgcGFkZGluZy1yaWdodDogODBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItY29sb3I6ICNFOURBQzY7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgY29sb3I6ICMzMzNGNzI7XFxuICAgIGZvbnQtZmFtaWx5OiAnU0FUT1NISSc7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7ICAgXFxufVxcblxcbi5oZWFkZXIgLmxvZ297XFxuICAgIGZvbnQtZmFtaWx5OiAnSElST01JU0FLRSc7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLmhlYWRlciAubGlua3N7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgd2lkdGg6IDM4MnB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uaGVhZGVyIC5saW5rcyBhe1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5oZWFkZXIgLmxpbmtzIGE6aG92ZXJ7XFxuICAgIGNvbG9yOiAjRTU2RTBDO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXIgLmljb25ze1xcbiAgICB3aWR0aDogNzJweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5oZWFkZXIgLmljb25zIGEgaW1ne1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4vKiBIT01FIE1BSU4gU1RZTElORyAqL1xcbi5tYWlue1xcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4ubWFpbiAudGl0bGV7XFxuICAgIGZvbnQtZmFtaWx5OiAnSElST01JU0FLRSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcXG4gICAgY29sb3I6ICMzMzNGNzI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4gLmRlc2NyaXB0aW9ue1xcbiAgICBmb250LWZhbWlseTogJ1NhdG9zaGknO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE0MCU7XFxuICAgIGNvbG9yOiAjMzMzRjcyO1xcbiAgICB3aWR0aDo2MjBweDtcXG4gICAgaGVpZ2h0OmF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4gLm9yZGVyQnRue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZDogI0U1NkUwQztcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweCAwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6ICdISVJPTUlTQUtFJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNDAlO1xcbiAgICBjb2xvcjogI0ZGRkZGRlxcbn1cXG5cXG4ubWFpbiAub3JkZXJCdG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzNGNzI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW4tdG9we1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6MjRweDtcXG59XFxuXFxuLm1haW4tYm90dG9te1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6NjBweDtcXG59XFxuXFxuLmJhY2tncm91bmRJbWcxe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDBweDtcXG59XFxuXFxuLmJhY2tncm91bmRJbWcye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwcHg7XFxufVxcblxcbi8qIE1FTlUgU1RZTElORyAqL1xcbi5tZW51e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICAgIGdhcDo2MHB4O1xcbn1cXG5cXG4ubWVudSAudGl0bGV7XFxuICAgIGZvbnQtZmFtaWx5OiAnSElST01JU0FLRSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcXG4gICAgY29sb3I6ICMzMzNGNzI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVJdGVtQ2FyZHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51SXRlbUNhcmR7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGdhcDoyMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4IDBweDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIC8qIGJvcmRlci1zdHlsZTogaW5oZXJpdDsgKi9cXG59XFxuXFxuLm1lbnVJdGVtQ2FyZCAuY2FyZE9yZGVyQnRue1xcbiAgICB3aWR0aDogMjQycHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U1NkUwQztcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweCAwcHg7XFxuICAgIGNvbG9yOiAjRTU2RTBDO1xcbiAgICBmb250LWZhbWlseTogJ0hJUk9NSVNBS0UnO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5tZW51SXRlbUNhcmQgLmNhcmRPcmRlckJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzMzRjcyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51SXRlbUNhcmQgLm1lbnVJdGVtTmFtZXtcXG4gICAgZm9udC1mYW1pbHk6ICdISVJPTUlTQUtFJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGNvbG9yOiAjMzMzRjcyO1xcbn1cXG5cXG4ubWVudUl0ZW1DYXJkIC5kZXNjcmlwdGlvbntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogXFxcIlNBVE9TSElcXFwiO1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4vKiBBQk9VVCBTVFlMSU5HICovXFxuLmFib3V0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uYWJvdXQgLmRlc2NyaXB0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6MzBweDtcXG59XFxuXFxuLmFib3V0IC5kZXNjcmlwdGlvbiAuYWJvdXRUaXRsZXtcXG4gICAgZm9udC1mYW1pbHk6ICdISVJPTUlTQUtFJztcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcXG4gICAgY29sb3I6ICMzMzNGNzI7XFxufVxcblxcbi5hYm91dCAuZGVzY3JpcHRpb24gLmRlc2NyaXB0aW9uVGV4dHtcXG4gICAgd2lkdGg6IDkwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2F0b3NoaSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTQwJTtcXG4gICAgY29sb3I6ICMzMzNGNzI7XFxufVxcblxcbi50ZXN0aW1vbmlhbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRlc3RpbW9uaWFscyAudGVzdGltb25pYWxzVGl0bGV7XFxuICAgIGZvbnQtZmFtaWx5OiAnSElST01JU0FLRSc7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XFxuICAgIGNvbG9yOiAjMzMzRjcyO1xcbn1cXG4udGVzdENhcmRze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZGlhbG9ne1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMzMwcHg7XFxuICAgIGxlZnQ6IDgwcHhcXG59XFxuXFxuLmRpYWxvZyAuZGlhbG9nVGV4dHtcXG4gICAgd2lkdGg6MzAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAxMjBweDtcXG4gICAgbGVmdDogNTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdTYXRvc2hpJztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMTQwJTtcXG4gICAgY29sb3I6ICMzMzNGNzI7XFxufVxcblxcbiNvbmV7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOjEwMHB4O1xcbiAgICByaWdodDogMTAwcHg7XFxufVxcblxcbiN0d297XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOjIwMHB4O1xcbiAgICByaWdodDogMzBweDtcXG4gICAgXFxufVxcblxcbiN0aHJlZXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OjQwMHB4O1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICBcXG59XFxuXFxuI3RocmVlIC5kaWFsb2d7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICBsZWZ0Oi0zNDBweDtcXG59XFxuXFxuLyogQ09OVEFDVCBTVFlMSU5HICovXFxuXFxuLmNvbnRhY3Rze1xcbiAgICBwYWRkaW5nLXRvcDogMTQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdTYXRvc2hpJztcXG4gICAgY29sb3I6ICMzMzNGNzI7XFxuICAgIGdhcDozMHB4O1xcbn1cXG5cXG4ucmVzZXJ2YXRpb25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc29jaWFsTWVkaWF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZXJle1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiNFNTZFMEM7XFxufVxcblxcblxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQSxjQUFjOzs7O0FBSWQsOEJBQThCO0FBQzlCO0lBQ0kseUJBQXlCO0lBQ3pCLDJEQUF5RDtJQUN6RCxrQkFBa0I7QUFDdEI7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SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBDU1MgUkVTRVQgKi9cXG5cXG5cXG5cXG4vKiBJTVBPUlQgRk9OVFMgRlJPTSAvYXNzZXRzICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSElST01JU0FLRSc7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9ISVJPTUlTQUtFLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTQVRPU0hJJztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL1NhdG9zaGktUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YzRURFMTtcXG59XFxuXFxuLyogSEVBREVSIFNUWUxJTkcgKi9cXG4uaGVhZGVye1xcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1jb2xvcjogI0U5REFDNjtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBjb2xvcjogIzMzM0Y3MjtcXG4gICAgZm9udC1mYW1pbHk6ICdTQVRPU0hJJztcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgICBcXG59XFxuXFxuLmhlYWRlciAubG9nb3tcXG4gICAgZm9udC1mYW1pbHk6ICdISVJPTUlTQUtFJztcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4uaGVhZGVyIC5saW5rc3tcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB3aWR0aDogMzgycHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5oZWFkZXIgLmxpbmtzIGF7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmhlYWRlciAubGlua3MgYTpob3ZlcntcXG4gICAgY29sb3I6ICNFNTZFMEM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlciAuaWNvbnN7XFxuICAgIHdpZHRoOiA3MnB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhlYWRlciAuaWNvbnMgYSBpbWd7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxufVxcblxcbi8qIEhPTUUgTUFJTiBTVFlMSU5HICovXFxuLm1haW57XFxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDI0cHg7XFxufVxcblxcbi5tYWluIC50aXRsZXtcXG4gICAgZm9udC1mYW1pbHk6ICdISVJPTUlTQUtFJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDgwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xcbiAgICBjb2xvcjogIzMzM0Y3MjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiAuZGVzY3JpcHRpb257XFxuICAgIGZvbnQtZmFtaWx5OiAnU2F0b3NoaSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTQwJTtcXG4gICAgY29sb3I6ICMzMzNGNzI7XFxuICAgIHdpZHRoOjYyMHB4O1xcbiAgICBoZWlnaHQ6YXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiAub3JkZXJCdG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjRTU2RTBDO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4IDBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogJ0hJUk9NSVNBS0UnO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE0MCU7XFxuICAgIGNvbG9yOiAjRkZGRkZGXFxufVxcblxcbi5tYWluIC5vcmRlckJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzM0Y3MjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWFpbi10b3B7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDoyNHB4O1xcbn1cXG5cXG4ubWFpbi1ib3R0b217XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDo2MHB4O1xcbn1cXG5cXG4uYmFja2dyb3VuZEltZzF7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMHB4O1xcbn1cXG5cXG4uYmFja2dyb3VuZEltZzJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDBweDtcXG59XFxuXFxuLyogTUVOVSBTVFlMSU5HICovXFxuLm1lbnV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gICAgZ2FwOjYwcHg7XFxufVxcblxcbi5tZW51IC50aXRsZXtcXG4gICAgZm9udC1mYW1pbHk6ICdISVJPTUlTQUtFJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xcbiAgICBjb2xvcjogIzMzM0Y3MjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubWVudUl0ZW1DYXJkc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVJdGVtQ2FyZHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZ2FwOjIwcHg7XFxuICAgIGJvcmRlcjogc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHggMHB4O1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgLyogYm9yZGVyLXN0eWxlOiBpbmhlcml0OyAqL1xcbn1cXG5cXG4ubWVudUl0ZW1DYXJkIC5jYXJkT3JkZXJCdG57XFxuICAgIHdpZHRoOiAyNDJweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTU2RTBDO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4IDBweDtcXG4gICAgY29sb3I6ICNFNTZFMEM7XFxuICAgIGZvbnQtZmFtaWx5OiAnSElST01JU0FLRSc7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLm1lbnVJdGVtQ2FyZCAuY2FyZE9yZGVyQnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMzNGNzI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnVJdGVtQ2FyZCAubWVudUl0ZW1OYW1le1xcbiAgICBmb250LWZhbWlseTogJ0hJUk9NSVNBS0UnO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgY29sb3I6ICMzMzNGNzI7XFxufVxcblxcbi5tZW51SXRlbUNhcmQgLmRlc2NyaXB0aW9ue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU0FUT1NISVxcXCI7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi8qIEFCT1VUIFNUWUxJTkcgKi9cXG4uYWJvdXR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbi5hYm91dCAuZGVzY3JpcHRpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDozMHB4O1xcbn1cXG5cXG4uYWJvdXQgLmRlc2NyaXB0aW9uIC5hYm91dFRpdGxle1xcbiAgICBmb250LWZhbWlseTogJ0hJUk9NSVNBS0UnO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xcbiAgICBjb2xvcjogIzMzM0Y3MjtcXG59XFxuXFxuLmFib3V0IC5kZXNjcmlwdGlvbiAuZGVzY3JpcHRpb25UZXh0e1xcbiAgICB3aWR0aDogOTAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdTYXRvc2hpJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNDAlO1xcbiAgICBjb2xvcjogIzMzM0Y3MjtcXG59XFxuXFxuLnRlc3RpbW9uaWFsc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGVzdGltb25pYWxzIC50ZXN0aW1vbmlhbHNUaXRsZXtcXG4gICAgZm9udC1mYW1pbHk6ICdISVJPTUlTQUtFJztcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcXG4gICAgY29sb3I6ICMzMzNGNzI7XFxufVxcbi50ZXN0Q2FyZHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kaWFsb2d7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAzMzBweDtcXG4gICAgbGVmdDogODBweFxcbn1cXG5cXG4uZGlhbG9nIC5kaWFsb2dUZXh0e1xcbiAgICB3aWR0aDozMDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDEyMHB4O1xcbiAgICBsZWZ0OiA1MHB4O1xcbiAgICBmb250LWZhbWlseTogJ1NhdG9zaGknO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNDAlO1xcbiAgICBjb2xvcjogIzMzM0Y3MjtcXG59XFxuXFxuI29uZXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6MTAwcHg7XFxuICAgIHJpZ2h0OiAxMDBweDtcXG59XFxuXFxuI3R3b3tcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6MjAwcHg7XFxuICAgIHJpZ2h0OiAzMHB4O1xcbiAgICBcXG59XFxuXFxuI3RocmVle1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6NDAwcHg7XFxuICAgIHRvcDogMTAwcHg7XFxuICAgIFxcbn1cXG5cXG4jdGhyZWUgLmRpYWxvZ3tcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIGxlZnQ6LTM0MHB4O1xcbn1cXG5cXG4vKiBDT05UQUNUIFNUWUxJTkcgKi9cXG5cXG4uY29udGFjdHN7XFxuICAgIHBhZGRpbmctdG9wOiAxNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LWZhbWlseTogJ1NhdG9zaGknO1xcbiAgICBjb2xvcjogIzMzM0Y3MjtcXG4gICAgZ2FwOjMwcHg7XFxufVxcblxcbi5yZXNlcnZhdGlvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zb2NpYWxNZWRpYXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlcmV7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6I0U1NkUwQztcXG59XFxuXFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNyZWF0ZUFib3V0KCl7XG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZChcImFib3V0XCIpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIilcblxuICAgIGNvbnN0IGFib3V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaFwiKVxuICAgIGFib3V0VGl0bGUuY2xhc3NMaXN0LmFkZChcImFib3V0VGl0bGVcIilcbiAgICBhYm91dFRpdGxlLnRleHRDb250ZW50ID0gXCJBQk9VVCBVU1wiXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGRlc2NyaXB0aW9uVGV4dC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25UZXh0XCIpXG4gICAgZGVzY3JpcHRpb25UZXh0LnRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJbXBlZGl0IGlwc2FtIGF1dCBmdWdpYXQhIE5hbSByZWljaWVuZGlzIGlsbHVtIGN1bHBhIGVzc2UgaXN0ZSBldmVuaWV0IGRlbGVjdHVzIHZvbHVwdGF0ZW0gZXJyb3IsIGV4cGxpY2FibyBtYWduYW0gcmVwZWxsYXQgZnVnaWF0IHRvdGFtIHN1c2NpcGl0IHBvc3NpbXVzIHBhcmlhdHVyIUxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIElkIHNpbnQgZWxpZ2VuZGkgcXVpYnVzZGFtIGxhYm9yaW9zYW0uIFF1aWEgZWxpZ2VuZGkgb3B0aW8gZG9sb3JlIGRvbG9yZW1xdWUgbm9zdHJ1bSEgUXVhZXJhdCBlYXF1ZSBpbGxvIG1hZ25pIGF1dGVtIHRlbXBvcmlidXMgY3VtIHJlY3VzYW5kYWUgdmVybyBhdCBmYWNpbGlzIVwiXG5cbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChhYm91dFRpdGxlKVxuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dClcblxuICAgIGNvbnN0IHRlc3RpbW9uaWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0ZXN0aW1vbmlhbHMuY2xhc3NMaXN0LmFkZChcInRlc3RpbW9uaWFsc1wiKVxuXG4gICAgY29uc3QgdGVzdGltb25pYWxzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGVzdGltb25pYWxzVGl0bGUuY2xhc3NMaXN0LmFkZChcInRlc3RpbW9uaWFsc1RpdGxlXCIpXG4gICAgdGVzdGltb25pYWxzVGl0bGUudGV4dENvbnRlbnQgPSBcIlRFU1RJTU9OSUFMU1wiXG5cbiAgICBjb25zdCB0ZXN0Q2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGVzdENhcmRzLmNsYXNzTGlzdC5hZGQoXCJ0ZXN0Q2FyZHNcIilcblxuICAgIHRlc3RDYXJkcy5hcHBlbmRDaGlsZChjcmVhdGVUZXN0Q2FyZChcIm9uZVwiLCBmYWxzZSwgXCIvc3JjL2Fzc2V0cy9pY29ucy93b21hbjEucG5nXCIsIFwiVGhlIHN1c2hpIGF0IHRoaXMgZmFuY3kgSmFwYW5lc2UgcmVzdGF1cmFudCB3YXMgc29tZSBvZiB0aGUgZnJlc2hlc3QgYW5kIG1vc3QgZGVsaWNpb3VzIEl2ZSBldmVyIGhhZC5cIiwgXCItIENoYXJsaWUsIEVkaXRvciwgTlkgVGltZXNcIikpXG4gICAgdGVzdENhcmRzLmFwcGVuZENoaWxkKGNyZWF0ZVRlc3RDYXJkKFwidHdvXCIsIGZhbHNlLCBcIi9zcmMvYXNzZXRzL2ljb25zL3dvbWFuMi5wbmdcIiwgXCJJIGhpZ2hseSByZWNvbW1lbmQgdGhlIHRlbXB1cmEgYXQgdGhpcyByZXN0YXVyYW50LCBpdCB3YXMgY3Jpc3B5IGFuZCBwZXJmZWN0bHkgc2Vhc29uZWQuXCIsIFwiLS0gTWFydGhhLCBDaGVmLCBOb2J1XCIpKVxuICAgIHRlc3RDYXJkcy5hcHBlbmRDaGlsZChjcmVhdGVUZXN0Q2FyZChcInRocmVlXCIsIHRydWUsIFwiL3NyYy9hc3NldHMvaWNvbnMvbWFuLnBuZ1wiLCBcIkkgaGFkIGEgZ3JlYXQgZXhwZXJpZW5jZSBkaW5pbmcgYXQgdGhpcyBmYW5jeSBKYXBhbmVzZSByZXN0YXVyYW50LiBUaGUgbWVudSB3YXMgZGl2ZXJzZSBhbmQgaGFkIGEgZ29vZCB2YXJpZXR5IG9mIHNlYWZvb2QuXCIsIFwiLSBaYWNoZXJ5LCBTb3VzIENoZWYsIFN0YXJzXCIpKVxuXG4gICAgdGVzdGltb25pYWxzLmFwcGVuZENoaWxkKHRlc3RpbW9uaWFsc1RpdGxlKVxuICAgIHRlc3RpbW9uaWFscy5hcHBlbmRDaGlsZCh0ZXN0Q2FyZHMpXG5cblxuXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQodGVzdGltb25pYWxzKVxuXG4gICAgcmV0dXJuIGFib3V0XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRlc3RDYXJkKGlkLGlzSW52ZXJ0ZWQsIHBlcnNvbkltZywgZGlhbG9nQ29udGVudCwgYXV0aG9yKXtcbiAgICBjb25zdCB0ZXN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0ZXN0Q2FyZC5jbGFzc0xpc3QuYWRkKFwidGVzdENhcmRcIilcbiAgICB0ZXN0Q2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtpZH1gKTtcbiAgICBcblxuICAgIGNvbnN0IHRlc3RDYXJkSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIHRlc3RDYXJkSW1nLnNyYyA9IHBlcnNvbkltZ1xuXG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGRpYWxvZy5jbGFzc0xpc3QuYWRkKFwiZGlhbG9nXCIpXG5cbiAgICBjb25zdCBidWJibGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgYnViYmxlSW1nLmNsYXNzTGlzdC5hZGQoXCJidWJibGVcIilcbiAgICBpZihpc0ludmVydGVkID09PSBmYWxzZSl7XG4gICAgICAgIGJ1YmJsZUltZy5zcmMgPSBcIi9zcmMvYXNzZXRzL2ljb25zL2RpYWxvZy5zdmdcIlxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBidWJibGVJbWcuc3JjID0gXCIvc3JjL2Fzc2V0cy9pY29ucy9kaWFsb2dfcmV2ZXJzZS5zdmdcIlxuICAgIH1cblxuICAgIGNvbnN0IGRpYWxvZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGlhbG9nVGV4dC5jbGFzc0xpc3QuYWRkKFwiZGlhbG9nVGV4dFwiKVxuXG4gICAgY29uc3QgZGlhbG9nVGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGRpYWxvZ1RleHRDb250ZW50LnRleHRDb250ZW50ID0gZGlhbG9nQ29udGVudFxuXG4gICAgY29uc3QgZGlhbG9nVGV4dEF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgZGlhbG9nVGV4dEF1dGhvci50ZXh0Q29udGVudCA9IGF1dGhvclxuXG4gICAgZGlhbG9nVGV4dC5hcHBlbmRDaGlsZChkaWFsb2dUZXh0Q29udGVudClcbiAgICBkaWFsb2dUZXh0LmFwcGVuZENoaWxkKGRpYWxvZ1RleHRBdXRob3IpXG5cbiAgICBkaWFsb2cuYXBwZW5kQ2hpbGQoYnViYmxlSW1nKVxuICAgIGRpYWxvZy5hcHBlbmRDaGlsZChkaWFsb2dUZXh0KVxuICAgIFxuICAgIHRlc3RDYXJkLmFwcGVuZENoaWxkKHRlc3RDYXJkSW1nKVxuICAgIHRlc3RDYXJkLmFwcGVuZENoaWxkKGRpYWxvZylcblxuICAgIHJldHVybiB0ZXN0Q2FyZFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBYm91dCIsImZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKVxuXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBsb2dvLnRleHRDb250ZW50ID0gXCJNSVlBQkkgSE9VU0VcIlxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIilcblxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXG4gICAgbGlua3MuY2xhc3NMaXN0LmFkZChcImxpbmtzXCIpXG4gICAgY29uc3QgbGlua3NOYW1lc0FyciA9IFtcIkhvbWVcIixcIk1lbnVcIixcIkFib3V0XCIsXCJDb250YWN0c1wiXVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaW5rc05hbWVzQXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXG4gICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBsaW5rc05hbWVzQXJyW2ldXG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChsaW5rc05hbWVzQXJyW2ldKVxuICAgICAgICBsaW5rcy5hcHBlbmRDaGlsZChsaW5rKVxuICAgIH1cblxuICAgIGNvbnN0IGljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgaWNvbnMuY2xhc3NMaXN0LmFkZChcImljb25zXCIpXG5cbiAgICBjb25zdCBpY29uSW1nQXJyID0gW1wiL3NyYy9hc3NldHMvaWNvbnMvYmFnLWhhcHB5LnN2Z1wiLCBcIi9zcmMvYXNzZXRzL2ljb25zL3Byb2ZpbGUtY2lyY2xlLnN2Z1wiXVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpY29uSW1nQXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgaWNvbkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuICAgICAgICBjb25zdCBpY29uTGlua0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgaWNvbkxpbmtJbWcuc3JjID0gaWNvbkltZ0FycltpXVxuICAgICAgICBpY29uTGluay5hcHBlbmRDaGlsZChpY29uTGlua0ltZylcbiAgICAgICAgaWNvbnMuYXBwZW5kQ2hpbGQoaWNvbkxpbmspXG4gICAgfVxuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxpbmtzKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChpY29ucylcblxuICAgIHJldHVybiBoZWFkZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyOyIsImZ1bmN0aW9uIGNyZWF0ZUhvbWUoKXtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKVxuXG4gICAgLy8gVG9wIHNlY3Rpb24gb2YgaG9tZVxuICAgIGNvbnN0IG1haW5Ub3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWFpblRvcC5jbGFzc0xpc3QuYWRkKFwibWFpbi10b3BcIilcbiAgICBcbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBiYWNrZ3JvdW5kSW1nMS5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZEltZzFcIilcbiAgICBiYWNrZ3JvdW5kSW1nMS5zcmMgPSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kMS5wbmdcIlxuXG4gICAgY29uc3QgYmFja2dyb3VuZEltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgYmFja2dyb3VuZEltZzIuY2xhc3NMaXN0LmFkZChcImJhY2tncm91bmRJbWcyXCIpXG4gICAgYmFja2dyb3VuZEltZzIuc3JjID0gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZDIucG5nXCJcblxuICAgIGNvbnN0IGhvbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoXCIpXG4gICAgaG9tZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKVxuICAgIGhvbWVUaXRsZS5pbm5lckhUTUwgPSBcIlRBU1RFIFRIRSBUUkFESVRJT048YnI+T0YgSkFQQU5cIlxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGVzY3JpcHRpb25cIilcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIilcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ci4gVHVycGlzIGRpYW0gaWQgbnVsbGEgbGliZXJvIGF0IGZhdWNpYnVzIGxpYmVybyBlZ2V0LiBPcm5hcmUgdGluY2lkdW50IHRlbXBvciBzZWQgZWdlc3RhcyBwdWx2aW5hciBmYWNpbGlzaXMuXCJcblxuICAgIG1haW5Ub3AuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZEltZzEpXG4gICAgbWFpblRvcC5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kSW1nMilcbiAgICBtYWluVG9wLmFwcGVuZENoaWxkKGhvbWVUaXRsZSlcbiAgICBtYWluVG9wLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuXG5cblxuICAgIC8vIEJvdHRvbSBzZWN0aW9uIG9mIGhvbWVcbiAgICBjb25zdCBtYWluQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG1haW5Cb3R0b20uY2xhc3NMaXN0LmFkZChcIm1haW4tYm90dG9tXCIpXG5cbiAgICBjb25zdCBvcmRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBvcmRlckJ0bi50ZXh0Q29udGVudCA9IFwiT1JERVIgTk9XXCJcbiAgICBvcmRlckJ0bi5jbGFzc0xpc3QuYWRkKFwib3JkZXJCdG5cIilcblxuICAgIGNvbnN0IG1haW5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgbWFpbkltZy5jbGFzc0xpc3QuYWRkKFwibWFpbkltZ1wiKVxuICAgIG1haW5JbWcuc3JjID0gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvbWFpbl9yYW1lbi5wbmdcIlxuXG4gICAgbWFpbkJvdHRvbS5hcHBlbmRDaGlsZChvcmRlckJ0bilcbiAgICBtYWluQm90dG9tLmFwcGVuZENoaWxkKG1haW5JbWcpXG5cbiAgICAvLyBBZGRpbmcgYm90aCBzZWN0aW9ucyB0byBtYWluXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5Ub3ApXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluQm90dG9tKVxuXG4gICAgcmV0dXJuIG1haW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZSIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoKXtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIilcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJPVVIgU1BFQ0lBTFRJRVNcIlxuXG4gICAgY29uc3QgbWVudUl0ZW1DYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtZW51SXRlbUNhcmRzLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbUNhcmRzXCIpIFxuXG4gICAgbWVudUl0ZW1DYXJkcy5hcHBlbmRDaGlsZChjcmVhdGVNZW51Q2FyZChcIlNVU0hJXCIsIFwiL3NyYy9hc3NldHMvaW1hZ2VzL21lbnVfc3VzaGkucG5nXCIsIFwiU3VzaGkgaXMgYSB0cmFkaXRpb25hbCBKYXBhbmVzZSBkaXNoIGNvbnNpc3Rpbmcgb2Ygc21hbGwgcm9sbHMgb3IgYmFsbHMgb2YgdmluZWdhci1mbGF2b3JlZCBjb2xkIGNvb2tlZCByaWNlLCB1c3VhbGx5IHNlcnZlZCB3aXRoIHJhdyBmaXNoIG9yIG90aGVyIHNlYWZvb2QsIHZlZ2V0YWJsZXMsIGFuZCBvZnRlbiB3cmFwcGVkIGluIHNlYXdlZWQuXCIpKVxuICAgIG1lbnVJdGVtQ2FyZHMuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUNhcmQoXCJPTklHSVJJXCIsIFwiL3NyYy9hc3NldHMvaW1hZ2VzL21lbnVfb25pZ2lyaS5wbmdcIixcIk9uaWdpcmkgaXMgYSBKYXBhbmVzZSBzbmFjayBvciBsaWdodCBtZWFsIG1hZGUgb2YgcmljZSBzaGFwZWQgaW50byBhIHRyaWFuZ2xlLCBiYWxsIG9yIGN5bGluZGVyLCBhbmQgdHlwaWNhbGx5IGZpbGxlZCB3aXRoIHNhdm9yeSBpbmdyZWRpZW50cyBzdWNoIGFzIHBpY2tsZWQgcGx1bSwgZ3JpbGxlZCBzYWxtb24sIHR1bmEsIG9yIHNlYXdlZWQuXCIpKVxuICAgIG1lbnVJdGVtQ2FyZHMuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUNhcmQoXCJSQU1FTlwiLCBcIi9zcmMvYXNzZXRzL2ltYWdlcy9tZW51X3JhbWVuLnBuZ1wiLCBcIlJhbWVuIGlzIGEgSmFwYW5lc2Ugbm9vZGxlIGRpc2ggbWFkZSB3aXRoIENoaW5lc2Utc3R5bGUgd2hlYXQgbm9vZGxlcyBzZXJ2ZWQgaW4gYSBtZWF0IG9yIGZpc2gtYmFzZWQgYnJvdGgsIGZsYXZvcmVkIHdpdGggc295IHNhdWNlIG9yIG1pc28sIGFuZCB0b3BwZWQgd2l0aCB2YXJpb3VzIGluZ3JlZGllbnRzIHN1Y2ggYXMgc2xpY2VkIHBvcmssIHNlYXdlZWQsIGVnZ3MsIGFuZCBncmVlbiBvbmlvbnMuXCIpKVxuICAgIG1lbnVJdGVtQ2FyZHMuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUNhcmQoXCJNT0NISVwiLCBcIi9zcmMvYXNzZXRzL2ltYWdlcy9tZW51X3N3ZWV0LnBuZ1wiLCBcIk1vY2hpIGlzIGEgSmFwYW5lc2Ugc3RpY2t5IHJpY2UgY2FrZSBtYWRlIGZyb20gZ2x1dGlub3VzIHJpY2UgdGhhdCBoYXMgYmVlbiBwb3VuZGVkIGludG8gYSBwYXN0ZSBhbmQgbW9sZGVkIGludG8gdmFyaW91cyBzaGFwZXMuIEl0IGNhbiBiZSBzd2VldCBvciBzYXZvcnkgYW5kIGlzIG9mdGVuIGZpbGxlZCB3aXRoIHN3ZWV0IHJlZCBiZWFuIHBhc3RlIG9yIGljZSBjcmVhbS5cIikpXG5cbiAgICBtZW51LmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW1DYXJkcylcblxuICAgIHJldHVybiBtZW51XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVDYXJkKGl0ZW1OYW1lLCBpdGVtSW1nLCBpdGVtRGVzY3Ipe1xuICAgIGNvbnN0IG1lbnVJdGVtQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtZW51SXRlbUNhcmQuY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtQ2FyZFwiKSBcblxuICAgIGNvbnN0IG1lbnVJdGVtQ2FyZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBtZW51SXRlbUNhcmRJbWcuY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtSW1nXCIpXG4gICAgbWVudUl0ZW1DYXJkSW1nLnNyYyA9IGl0ZW1JbWdcblxuICAgIGNvbnN0IG1lbnVJdGVtQ2FyZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaFwiKVxuICAgIG1lbnVJdGVtQ2FyZE5hbWUuY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtTmFtZVwiKVxuICAgIG1lbnVJdGVtQ2FyZE5hbWUudGV4dENvbnRlbnQgPSBpdGVtTmFtZVxuXG4gICAgY29uc3QgbWVudUl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtZW51SXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKVxuICAgIG1lbnVJdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtRGVzY3JcblxuICAgIGNvbnN0IG1lbnVJdGVtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIG1lbnVJdGVtQnRuLmNsYXNzTGlzdC5hZGQoXCJjYXJkT3JkZXJCdG5cIilcbiAgICBtZW51SXRlbUJ0bi50ZXh0Q29udGVudCA9IFwiT1JERVIgTk9XXCJcblxuICAgIG1lbnVJdGVtQ2FyZC5hcHBlbmRDaGlsZChtZW51SXRlbUNhcmRJbWcpXG4gICAgbWVudUl0ZW1DYXJkLmFwcGVuZENoaWxkKG1lbnVJdGVtQ2FyZE5hbWUpXG4gICAgbWVudUl0ZW1DYXJkLmFwcGVuZENoaWxkKG1lbnVJdGVtRGVzY3JpcHRpb24pXG4gICAgbWVudUl0ZW1DYXJkLmFwcGVuZENoaWxkKG1lbnVJdGVtQnRuKVxuXG4gICAgcmV0dXJuIG1lbnVJdGVtQ2FyZFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vbW9kdWxlcy9oZWFkZXIuanNcIlxuaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSBcIi4vbW9kdWxlcy9ob21lLmpzXCJcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gXCIuL21vZHVsZXMvbWVudS5qc1wiXG5pbXBvcnQgY3JlYXRlQWJvdXQgZnJvbSBcIi4vbW9kdWxlcy9hYm91dC5qc1wiXG5cblxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpXG5cbi8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpXG5cblxuXG4vLyBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSlcblxuXG5cbmNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkhvbWVcIilcbmNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLk1lbnVcIilcbmNvbnN0IGFib3V0VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5BYm91dFwiKVxuLy8gY29uc3QgY29udGFjdHNUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiQ29udGFjdHNcIilcblxuXG5cbmhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5jaGlsZHJlblsxXSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpXG59KVxuXG5cbm1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5jaGlsZHJlblsxXSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpXG59KVxuXG5hYm91dFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmNoaWxkcmVuWzFdKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUFib3V0KCkpXG59KVxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9