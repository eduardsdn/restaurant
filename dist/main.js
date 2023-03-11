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
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* CSS RESET */\n\n\n\n/* IMPORT FONTS FROM /assets */\n@font-face {\n    font-family: 'HIROMISAKE';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff');\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'SATOSHI';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n    font-style: normal;\n}\n\nbody{\n    background-color: #F3EDE1;\n}\n\n/* HEADER STYLING */\n.header{\n    padding-top: 40px;\n    padding-bottom: 40px;\n    padding-left: 0px;\n    padding-right: 80px;\n    border-bottom: solid;\n    border-width: 1px;\n    border-color: #E9DAC6;\n    \n    display: flex;\n    justify-content: space-evenly;\n    color: #333F72;\n    font-family: 'SATOSHI';\n    font-weight: 500;   \n}\n\n.header .logo{\n    font-family: 'HIROMISAKE';\n    font-size: 25px;\n}\n\n.header .links{\n    text-decoration: none;\n    width: 382px;\n    height: 40px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.header .links a{\n    font-size: 20px;\n    text-decoration: none;\n    color: inherit;\n}\n\n.header .links a:hover{\n    color: #E56E0C;\n    cursor: pointer;\n}\n\n.header .icons{\n    width: 72px;\n    height: auto;\n    display: flex;\n    justify-content: space-between;\n}\n\n.header .icons a img{\n    width: 24px;\n    height: 24px;\n}\n\n/* HOME MAIN STYLING */\n.main{\n    padding-top: 60px;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    gap: 24px;\n}\n\n.main .title{\n    font-family: 'HIROMISAKE';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 80px;\n    line-height: 120%;\n    color: #333F72;\n    text-align: center;\n}\n\n.main .description{\n    font-family: 'Satoshi';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 140%;\n    color: #333F72;\n    width:620px;\n    height:auto;\n    text-align: center;\n}\n\n.main .orderBtn{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 16px;\n    gap: 10px;\n    width: 200px;\n    height: 60px;\n    background: #E56E0C;\n    border-radius: 24px 0px;\n    border-style: inherit;\n    font-family: 'HIROMISAKE';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 140%;\n    color: #FFFFFF\n}\n\n.main .orderBtn:hover{\n    background-color: #333F72;\n    cursor: pointer;\n}\n\n.main-top{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap:24px;\n}\n\n.main-bottom{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap:60px;\n}\n\n.backgroundImg1{\n    position: absolute;\n    left: 0px;\n}\n\n.backgroundImg2{\n    position: absolute;\n    right: 0px;\n}\n\n/* MENU STYLING */\n.menu{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-top: 60px;\n    gap:60px;\n}\n\n.menu .title{\n    font-family: 'HIROMISAKE';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 48px;\n    line-height: 120%;\n    color: #333F72;\n    align-self: center;\n}\n\n.menuItemCards{\n    display: flex;\n    justify-content:space-evenly;\n    align-items: center;\n}\n\n.menuItemCard{\n    width: 400px;\n    height: 500px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    gap:20px;\n    border: solid;\n    border-radius: 40px 0px;\n    border-width: 1px;\n    /* border-style: inherit; */\n}\n\n.menuItemCard .cardOrderBtn{\n    width: 242px;\n    height: 60px;\n    border: 1px solid #E56E0C;\n    border-radius: 24px 0px;\n    color: #E56E0C;\n    font-family: 'HIROMISAKE';\n    font-size: 20px;\n    background-color: inherit;\n}\n\n.menuItemCard .cardOrderBtn:hover{\n    background-color:#333F72;\n    cursor: pointer;\n}\n\n.menuItemCard .menuItemName{\n    font-family: 'HIROMISAKE';\n    font-style: normal;\n    font-size: 32px;\n    color: #333F72;\n}\n\n.menuItemCard .description{\n    text-align: center;\n    font-family: \"SATOSHI\";\n    width: 80%;\n}\n\n/* ABOUT STYLING */\n.about{\n    display: flex;\n    flex-direction: column;\n    padding-top: 60px;\n    gap: 30px;\n}\n\n.about .description{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap:30px;\n}\n\n.about .description .aboutTitle{\n    font-family: 'HIROMISAKE';\n    font-size: 48px;\n    line-height: 120%;\n    color: #333F72;\n}\n\n.about .description .descriptionText{\n    width: 900px;\n    text-align: center;\n    font-family: 'Satoshi';\n    font-style: normal;\n    font-size: 20px;\n    line-height: 140%;\n    color: #333F72;\n}\n\n.testimonials{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n}\n\n.testimonials .testimonialsTitle{\n    font-family: 'HIROMISAKE';\n    font-size: 48px;\n    line-height: 120%;\n    color: #333F72;\n}\n.testCards{\n    display: flex;\n}\n\n.dialog{\n    position: relative;\n    bottom: 330px;\n    left: 80px\n}\n\n.dialog .dialogText{\n    width:300px;\n    position: relative;\n    bottom: 120px;\n    left: 50px;\n    font-family: 'Satoshi';\n    font-size: 15px;\n    line-height: 140%;\n    color: #333F72;\n}\n\n#one{\n    position: relative;\n    top:100px;\n    right: 100px;\n}\n\n#two{\n    position: relative;\n    top:200px;\n    right: 30px;\n    \n}\n\n#three{\n    position: relative;\n    left:400px;\n    top: 100px;\n    \n}\n\n#three .dialog{\n    position:relative;\n    left:-340px;\n}\n\n/* CONTACT STYLING */\n\n.contact{\n    padding-top: 140px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 40px;\n    font-family: 'Satoshi';\n    color: #333F72;\n    gap:30px;\n}\n\n.reservations{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.socialMedia{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.here{\n    text-decoration: none;\n    color:#E56E0C;\n}\n\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* CSS RESET */\n\n\n\n/* IMPORT FONTS FROM /assets */\n@font-face {\n    font-family: 'HIROMISAKE';\n    src: url('./assets/fonts/HIROMISAKE.woff') format('woff');\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'SATOSHI';\n    src: url('./assets/fonts/Satoshi-Regular.woff') format('woff');\n    font-style: normal;\n}\n\nbody{\n    background-color: #F3EDE1;\n}\n\n/* HEADER STYLING */\n.header{\n    padding-top: 40px;\n    padding-bottom: 40px;\n    padding-left: 0px;\n    padding-right: 80px;\n    border-bottom: solid;\n    border-width: 1px;\n    border-color: #E9DAC6;\n    \n    display: flex;\n    justify-content: space-evenly;\n    color: #333F72;\n    font-family: 'SATOSHI';\n    font-weight: 500;   \n}\n\n.header .logo{\n    font-family: 'HIROMISAKE';\n    font-size: 25px;\n}\n\n.header .links{\n    text-decoration: none;\n    width: 382px;\n    height: 40px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.header .links a{\n    font-size: 20px;\n    text-decoration: none;\n    color: inherit;\n}\n\n.header .links a:hover{\n    color: #E56E0C;\n    cursor: pointer;\n}\n\n.header .icons{\n    width: 72px;\n    height: auto;\n    display: flex;\n    justify-content: space-between;\n}\n\n.header .icons a img{\n    width: 24px;\n    height: 24px;\n}\n\n/* HOME MAIN STYLING */\n.main{\n    padding-top: 60px;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    gap: 24px;\n}\n\n.main .title{\n    font-family: 'HIROMISAKE';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 80px;\n    line-height: 120%;\n    color: #333F72;\n    text-align: center;\n}\n\n.main .description{\n    font-family: 'Satoshi';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 140%;\n    color: #333F72;\n    width:620px;\n    height:auto;\n    text-align: center;\n}\n\n.main .orderBtn{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 16px;\n    gap: 10px;\n    width: 200px;\n    height: 60px;\n    background: #E56E0C;\n    border-radius: 24px 0px;\n    border-style: inherit;\n    font-family: 'HIROMISAKE';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 140%;\n    color: #FFFFFF\n}\n\n.main .orderBtn:hover{\n    background-color: #333F72;\n    cursor: pointer;\n}\n\n.main-top{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap:24px;\n}\n\n.main-bottom{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap:60px;\n}\n\n.backgroundImg1{\n    position: absolute;\n    left: 0px;\n}\n\n.backgroundImg2{\n    position: absolute;\n    right: 0px;\n}\n\n/* MENU STYLING */\n.menu{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-top: 60px;\n    gap:60px;\n}\n\n.menu .title{\n    font-family: 'HIROMISAKE';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 48px;\n    line-height: 120%;\n    color: #333F72;\n    align-self: center;\n}\n\n.menuItemCards{\n    display: flex;\n    justify-content:space-evenly;\n    align-items: center;\n}\n\n.menuItemCard{\n    width: 400px;\n    height: 500px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    gap:20px;\n    border: solid;\n    border-radius: 40px 0px;\n    border-width: 1px;\n    /* border-style: inherit; */\n}\n\n.menuItemCard .cardOrderBtn{\n    width: 242px;\n    height: 60px;\n    border: 1px solid #E56E0C;\n    border-radius: 24px 0px;\n    color: #E56E0C;\n    font-family: 'HIROMISAKE';\n    font-size: 20px;\n    background-color: inherit;\n}\n\n.menuItemCard .cardOrderBtn:hover{\n    background-color:#333F72;\n    cursor: pointer;\n}\n\n.menuItemCard .menuItemName{\n    font-family: 'HIROMISAKE';\n    font-style: normal;\n    font-size: 32px;\n    color: #333F72;\n}\n\n.menuItemCard .description{\n    text-align: center;\n    font-family: \"SATOSHI\";\n    width: 80%;\n}\n\n/* ABOUT STYLING */\n.about{\n    display: flex;\n    flex-direction: column;\n    padding-top: 60px;\n    gap: 30px;\n}\n\n.about .description{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap:30px;\n}\n\n.about .description .aboutTitle{\n    font-family: 'HIROMISAKE';\n    font-size: 48px;\n    line-height: 120%;\n    color: #333F72;\n}\n\n.about .description .descriptionText{\n    width: 900px;\n    text-align: center;\n    font-family: 'Satoshi';\n    font-style: normal;\n    font-size: 20px;\n    line-height: 140%;\n    color: #333F72;\n}\n\n.testimonials{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n}\n\n.testimonials .testimonialsTitle{\n    font-family: 'HIROMISAKE';\n    font-size: 48px;\n    line-height: 120%;\n    color: #333F72;\n}\n.testCards{\n    display: flex;\n}\n\n.dialog{\n    position: relative;\n    bottom: 330px;\n    left: 80px\n}\n\n.dialog .dialogText{\n    width:300px;\n    position: relative;\n    bottom: 120px;\n    left: 50px;\n    font-family: 'Satoshi';\n    font-size: 15px;\n    line-height: 140%;\n    color: #333F72;\n}\n\n#one{\n    position: relative;\n    top:100px;\n    right: 100px;\n}\n\n#two{\n    position: relative;\n    top:200px;\n    right: 30px;\n    \n}\n\n#three{\n    position: relative;\n    left:400px;\n    top: 100px;\n    \n}\n\n#three .dialog{\n    position:relative;\n    left:-340px;\n}\n\n/* CONTACT STYLING */\n\n.contact{\n    padding-top: 140px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 40px;\n    font-family: 'Satoshi';\n    color: #333F72;\n    gap:30px;\n}\n\n.reservations{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.socialMedia{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.here{\n    text-decoration: none;\n    color:#E56E0C;\n}\n\n\n\n\n\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact(){
    const contact = document.createElement("div")
    contact.classList.add("contact")

    const reservations = document.createElement("div")
    reservations.classList.add("reservations")

    const socialMedia = document.createElement("div")
    socialMedia.classList.add("reservations")

    const review = document.createElement("div")
    review.classList.add("review")

    const reservationsTitle = document.createElement("h")
    reservationsTitle.textContent = "For reservations call:"

    const phone = document.createElement("p")
    phone.textContent = "+34 111 22 33"

    reservations.appendChild(reservationsTitle)
    reservations.appendChild(phone)

    const socialTitle = document.createElement("h")
    socialTitle.textContent = "Contact us on social media:"

    const mediaIcons = document.createElement("div")
    
    const icon1 = document.createElement("img")
    icon1.src = "/src/assets/icons/facebook.png"
    const icon2 = document.createElement("img")
    icon2.src = "/src/assets/icons/instagram.png"
    const icon3 = document.createElement("img")
    icon3.src = "/src/assets/icons/whatsapp.png"
    const icon4 = document.createElement("img")
    icon4.src = "/src/assets/icons/telegram.png"

    mediaIcons.appendChild(icon1)
    mediaIcons.appendChild(icon2)
    mediaIcons.appendChild(icon3)
    mediaIcons.appendChild(icon4)

    socialMedia.appendChild(socialTitle)
    socialMedia.appendChild(mediaIcons)

    const reviewText = document.createElement("p")
    reviewText.innerHTML = `Click <a href="" class="here">here</a> to leave a review`

    review.appendChild(reviewText)

    
    contact.appendChild(reservations)
    contact.appendChild(socialMedia)
    contact.appendChild(review)

    return contact
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);

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
/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/contact.js */ "./src/modules/contact.js");










const content = document.querySelector(".content")

content.appendChild((0,_modules_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])())
content.appendChild((0,_modules_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])())



const homeTab = document.querySelector(".Home")
const menuTab = document.querySelector(".Menu")
const aboutTab = document.querySelector(".About")
const contactsTab = document.querySelector(".Contacts")



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

contactsTab.addEventListener('click', function(){
    content.removeChild(content.children[1]);
    content.appendChild((0,_modules_contact_js__WEBPACK_IMPORTED_MODULE_5__["default"])())
})




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9B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QWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsR0FBRztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNyRmY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDekRmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7QUN0QzNCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUN2RGY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbERmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7O0FBRTBCO0FBQ0o7QUFDQTtBQUNFO0FBQ0k7Ozs7QUFJaEQ7O0FBRUEsb0JBQW9CLDhEQUFZO0FBQ2hDLG9CQUFvQiw0REFBVTs7OztBQUk5QjtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQSx3QkFBd0IsNERBQVU7QUFDbEMsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBLHdCQUF3Qiw0REFBVTtBQUNsQyxDQUFDOztBQUVEO0FBQ0E7QUFDQSx3QkFBd0IsNkRBQVc7QUFDbkMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0Esd0JBQXdCLCtEQUFhO0FBQ3JDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvSElST01JU0FLRS53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvU2F0b3NoaS1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBDU1MgUkVTRVQgKi9cXG5cXG5cXG5cXG4vKiBJTVBPUlQgRk9OVFMgRlJPTSAvYXNzZXRzICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSElST01JU0FLRSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTQVRPU0hJJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0VERTE7XFxufVxcblxcbi8qIEhFQURFUiBTVFlMSU5HICovXFxuLmhlYWRlcntcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcXG4gICAgcGFkZGluZy1yaWdodDogODBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItY29sb3I6ICNFOURBQzY7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgY29sb3I6ICMzMzNGNzI7XFxuICAgIGZvbnQtZmFtaWx5OiAnU0FUT1NISSc7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7ICAgXFxufVxcblxcbi5oZWFkZXIgLmxvZ297XFxuICAgIGZvbnQtZmFtaWx5OiAnSElST01JU0FLRSc7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLmhlYWRlciAubGlua3N7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgd2lkdGg6IDM4MnB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uaGVhZGVyIC5saW5rcyBhe1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5oZWFkZXIgLmxpbmtzIGE6aG92ZXJ7XFxuICAgIGNvbG9yOiAjRTU2RTBDO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXIgLmljb25ze1xcbiAgICB3aWR0aDogNzJweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5oZWFkZXIgLmljb25zIGEgaW1ne1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4vKiBIT01FIE1BSU4gU1RZTElORyAqL1xcbi5tYWlue1xcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4ubWFpbiAudGl0bGV7XFxuICAgIGZvbnQtZmFtaWx5OiAnSElST01JU0FLRSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcXG4gICAgY29sb3I6ICMzMzNGNzI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4gLmRlc2NyaXB0aW9ue1xcbiAgICBmb250LWZhbWlseTogJ1NhdG9zaGknO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE0MCU7XFxuICAgIGNvbG9yOiAjMzMzRjcyO1xcbiAgICB3aWR0aDo2MjBweDtcXG4gICAgaGVpZ2h0OmF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4gLm9yZGVyQnRue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZDogI0U1NkUwQztcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweCAwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6ICdISVJPTUlTQUtFJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNDAlO1xcbiAgICBjb2xvcjogI0ZGRkZGRlxcbn1cXG5cXG4ubWFpbiAub3JkZXJCdG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzNGNzI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW4tdG9we1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6MjRweDtcXG59XFxuXFxuLm1haW4tYm90dG9te1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6NjBweDtcXG59XFxuXFxuLmJhY2tncm91bmRJbWcxe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDBweDtcXG59XFxuXFxuLmJhY2tncm91bmRJbWcye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwcHg7XFxufVxcblxcbi8qIE1FTlUgU1RZTElORyAqL1xcbi5tZW51e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICAgIGdhcDo2MHB4O1xcbn1cXG5cXG4ubWVudSAudGl0bGV7XFxuICAgIGZvbnQtZmFtaWx5OiAnSElST01JU0FLRSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcXG4gICAgY29sb3I6ICMzMzNGNzI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVJdGVtQ2FyZHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51SXRlbUNhcmR7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGdhcDoyMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4IDBweDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIC8qIGJvcmRlci1zdHlsZTogaW5oZXJpdDsgKi9cXG59XFxuXFxuLm1lbnVJdGVtQ2FyZCAuY2FyZE9yZGVyQnRue1xcbiAgICB3aWR0aDogMjQycHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U1NkUwQztcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweCAwcHg7XFxuICAgIGNvbG9yOiAjRTU2RTBDO1xcbiAgICBmb250LWZhbWlseTogJ0hJUk9NSVNBS0UnO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5tZW51SXRlbUNhcmQgLmNhcmRPcmRlckJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzMzRjcyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51SXRlbUNhcmQgLm1lbnVJdGVtTmFtZXtcXG4gICAgZm9udC1mYW1pbHk6ICdISVJPTUlTQUtFJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGNvbG9yOiAjMzMzRjcyO1xcbn1cXG5cXG4ubWVudUl0ZW1DYXJkIC5kZXNjcmlwdGlvbntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogXFxcIlNBVE9TSElcXFwiO1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4vKiBBQk9VVCBTVFlMSU5HICovXFxuLmFib3V0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uYWJvdXQgLmRlc2NyaXB0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6MzBweDtcXG59XFxuXFxuLmFib3V0IC5kZXNjcmlwdGlvbiAuYWJvdXRUaXRsZXtcXG4gICAgZm9udC1mYW1pbHk6ICdISVJPTUlTQUtFJztcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcXG4gICAgY29sb3I6ICMzMzNGNzI7XFxufVxcblxcbi5hYm91dCAuZGVzY3JpcHRpb24gLmRlc2NyaXB0aW9uVGV4dHtcXG4gICAgd2lkdGg6IDkwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2F0b3NoaSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTQwJTtcXG4gICAgY29sb3I6ICMzMzNGNzI7XFxufVxcblxcbi50ZXN0aW1vbmlhbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRlc3RpbW9uaWFscyAudGVzdGltb25pYWxzVGl0bGV7XFxuICAgIGZvbnQtZmFtaWx5OiAnSElST01JU0FLRSc7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XFxuICAgIGNvbG9yOiAjMzMzRjcyO1xcbn1cXG4udGVzdENhcmRze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZGlhbG9ne1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMzMwcHg7XFxuICAgIGxlZnQ6IDgwcHhcXG59XFxuXFxuLmRpYWxvZyAuZGlhbG9nVGV4dHtcXG4gICAgd2lkdGg6MzAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAxMjBweDtcXG4gICAgbGVmdDogNTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdTYXRvc2hpJztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMTQwJTtcXG4gICAgY29sb3I6ICMzMzNGNzI7XFxufVxcblxcbiNvbmV7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOjEwMHB4O1xcbiAgICByaWdodDogMTAwcHg7XFxufVxcblxcbiN0d297XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOjIwMHB4O1xcbiAgICByaWdodDogMzBweDtcXG4gICAgXFxufVxcblxcbiN0aHJlZXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OjQwMHB4O1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICBcXG59XFxuXFxuI3RocmVlIC5kaWFsb2d7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICBsZWZ0Oi0zNDBweDtcXG59XFxuXFxuLyogQ09OVEFDVCBTVFlMSU5HICovXFxuXFxuLmNvbnRhY3R7XFxuICAgIHBhZGRpbmctdG9wOiAxNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LWZhbWlseTogJ1NhdG9zaGknO1xcbiAgICBjb2xvcjogIzMzM0Y3MjtcXG4gICAgZ2FwOjMwcHg7XFxufVxcblxcbi5yZXNlcnZhdGlvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zb2NpYWxNZWRpYXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlcmV7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6I0U1NkUwQztcXG59XFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wi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a0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXOztBQUVmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVOztBQUVkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQSxvQkFBb0I7O0FBRXBCO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIENTUyBSRVNFVCAqL1xcblxcblxcblxcbi8qIElNUE9SVCBGT05UUyBGUk9NIC9hc3NldHMgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdISVJPTUlTQUtFJztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL0hJUk9NSVNBS0Uud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1NBVE9TSEknO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvU2F0b3NoaS1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNFREUxO1xcbn1cXG5cXG4vKiBIRUFERVIgU1RZTElORyAqL1xcbi5oZWFkZXJ7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDgwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjRTlEQUM2O1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGNvbG9yOiAjMzMzRjcyO1xcbiAgICBmb250LWZhbWlseTogJ1NBVE9TSEknO1xcbiAgICBmb250LXdlaWdodDogNTAwOyAgIFxcbn1cXG5cXG4uaGVhZGVyIC5sb2dve1xcbiAgICBmb250LWZhbWlseTogJ0hJUk9NSVNBS0UnO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi5oZWFkZXIgLmxpbmtze1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHdpZHRoOiAzODJweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmhlYWRlciAubGlua3MgYXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uaGVhZGVyIC5saW5rcyBhOmhvdmVye1xcbiAgICBjb2xvcjogI0U1NkUwQztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyIC5pY29uc3tcXG4gICAgd2lkdGg6IDcycHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaGVhZGVyIC5pY29ucyBhIGltZ3tcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG59XFxuXFxuLyogSE9NRSBNQUlOIFNUWUxJTkcgKi9cXG4ubWFpbntcXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGdhcDogMjRweDtcXG59XFxuXFxuLm1haW4gLnRpdGxle1xcbiAgICBmb250LWZhbWlseTogJ0hJUk9NSVNBS0UnO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogODBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XFxuICAgIGNvbG9yOiAjMzMzRjcyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIC5kZXNjcmlwdGlvbntcXG4gICAgZm9udC1mYW1pbHk6ICdTYXRvc2hpJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNDAlO1xcbiAgICBjb2xvcjogIzMzM0Y3MjtcXG4gICAgd2lkdGg6NjIwcHg7XFxuICAgIGhlaWdodDphdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIC5vcmRlckJ0bntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNFNTZFMEM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHggMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnSElST01JU0FLRSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTQwJTtcXG4gICAgY29sb3I6ICNGRkZGRkZcXG59XFxuXFxuLm1haW4gLm9yZGVyQnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzRjcyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYWluLXRvcHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOjI0cHg7XFxufVxcblxcbi5tYWluLWJvdHRvbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOjYwcHg7XFxufVxcblxcbi5iYWNrZ3JvdW5kSW1nMXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwcHg7XFxufVxcblxcbi5iYWNrZ3JvdW5kSW1nMntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMHB4O1xcbn1cXG5cXG4vKiBNRU5VIFNUWUxJTkcgKi9cXG4ubWVudXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgICBnYXA6NjBweDtcXG59XFxuXFxuLm1lbnUgLnRpdGxle1xcbiAgICBmb250LWZhbWlseTogJ0hJUk9NSVNBS0UnO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XFxuICAgIGNvbG9yOiAjMzMzRjcyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5tZW51SXRlbUNhcmRze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudUl0ZW1DYXJke1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6MjBweDtcXG4gICAgYm9yZGVyOiBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweCAwcHg7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICAvKiBib3JkZXItc3R5bGU6IGluaGVyaXQ7ICovXFxufVxcblxcbi5tZW51SXRlbUNhcmQgLmNhcmRPcmRlckJ0bntcXG4gICAgd2lkdGg6IDI0MnB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFNTZFMEM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHggMHB4O1xcbiAgICBjb2xvcjogI0U1NkUwQztcXG4gICAgZm9udC1mYW1pbHk6ICdISVJPTUlTQUtFJztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4ubWVudUl0ZW1DYXJkIC5jYXJkT3JkZXJCdG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzMzM0Y3MjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudUl0ZW1DYXJkIC5tZW51SXRlbU5hbWV7XFxuICAgIGZvbnQtZmFtaWx5OiAnSElST01JU0FLRSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBjb2xvcjogIzMzM0Y3MjtcXG59XFxuXFxuLm1lbnVJdGVtQ2FyZCAuZGVzY3JpcHRpb257XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTQVRPU0hJXFxcIjtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLyogQUJPVVQgU1RZTElORyAqL1xcbi5hYm91dHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLmFib3V0IC5kZXNjcmlwdGlvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOjMwcHg7XFxufVxcblxcbi5hYm91dCAuZGVzY3JpcHRpb24gLmFib3V0VGl0bGV7XFxuICAgIGZvbnQtZmFtaWx5OiAnSElST01JU0FLRSc7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XFxuICAgIGNvbG9yOiAjMzMzRjcyO1xcbn1cXG5cXG4uYWJvdXQgLmRlc2NyaXB0aW9uIC5kZXNjcmlwdGlvblRleHR7XFxuICAgIHdpZHRoOiA5MDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ1NhdG9zaGknO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE0MCU7XFxuICAgIGNvbG9yOiAjMzMzRjcyO1xcbn1cXG5cXG4udGVzdGltb25pYWxze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50ZXN0aW1vbmlhbHMgLnRlc3RpbW9uaWFsc1RpdGxle1xcbiAgICBmb250LWZhbWlseTogJ0hJUk9NSVNBS0UnO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xcbiAgICBjb2xvcjogIzMzM0Y3MjtcXG59XFxuLnRlc3RDYXJkc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmRpYWxvZ3tcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDMzMHB4O1xcbiAgICBsZWZ0OiA4MHB4XFxufVxcblxcbi5kaWFsb2cgLmRpYWxvZ1RleHR7XFxuICAgIHdpZHRoOjMwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMTIwcHg7XFxuICAgIGxlZnQ6IDUwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2F0b3NoaSc7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE0MCU7XFxuICAgIGNvbG9yOiAjMzMzRjcyO1xcbn1cXG5cXG4jb25le1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDoxMDBweDtcXG4gICAgcmlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jdHdve1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDoyMDBweDtcXG4gICAgcmlnaHQ6IDMwcHg7XFxuICAgIFxcbn1cXG5cXG4jdGhyZWV7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDo0MDBweDtcXG4gICAgdG9wOiAxMDBweDtcXG4gICAgXFxufVxcblxcbiN0aHJlZSAuZGlhbG9ne1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgbGVmdDotMzQwcHg7XFxufVxcblxcbi8qIENPTlRBQ1QgU1RZTElORyAqL1xcblxcbi5jb250YWN0e1xcbiAgICBwYWRkaW5nLXRvcDogMTQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdTYXRvc2hpJztcXG4gICAgY29sb3I6ICMzMzNGNzI7XFxuICAgIGdhcDozMHB4O1xcbn1cXG5cXG4ucmVzZXJ2YXRpb25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc29jaWFsTWVkaWF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZXJle1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiNFNTZFMEM7XFxufVxcblxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVBYm91dCgpe1xuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoXCJhYm91dFwiKVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpXG5cbiAgICBjb25zdCBhYm91dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhcIilcbiAgICBhYm91dFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJhYm91dFRpdGxlXCIpXG4gICAgYWJvdXRUaXRsZS50ZXh0Q29udGVudCA9IFwiQUJPVVQgVVNcIlxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBkZXNjcmlwdGlvblRleHQuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uVGV4dFwiKVxuICAgIGRlc2NyaXB0aW9uVGV4dC50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSW1wZWRpdCBpcHNhbSBhdXQgZnVnaWF0ISBOYW0gcmVpY2llbmRpcyBpbGx1bSBjdWxwYSBlc3NlIGlzdGUgZXZlbmlldCBkZWxlY3R1cyB2b2x1cHRhdGVtIGVycm9yLCBleHBsaWNhYm8gbWFnbmFtIHJlcGVsbGF0IGZ1Z2lhdCB0b3RhbSBzdXNjaXBpdCBwb3NzaW11cyBwYXJpYXR1ciFMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJZCBzaW50IGVsaWdlbmRpIHF1aWJ1c2RhbSBsYWJvcmlvc2FtLiBRdWlhIGVsaWdlbmRpIG9wdGlvIGRvbG9yZSBkb2xvcmVtcXVlIG5vc3RydW0hIFF1YWVyYXQgZWFxdWUgaWxsbyBtYWduaSBhdXRlbSB0ZW1wb3JpYnVzIGN1bSByZWN1c2FuZGFlIHZlcm8gYXQgZmFjaWxpcyFcIlxuXG4gICAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoYWJvdXRUaXRsZSlcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHQpXG5cbiAgICBjb25zdCB0ZXN0aW1vbmlhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGVzdGltb25pYWxzLmNsYXNzTGlzdC5hZGQoXCJ0ZXN0aW1vbmlhbHNcIilcblxuICAgIGNvbnN0IHRlc3RpbW9uaWFsc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRlc3RpbW9uaWFsc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0ZXN0aW1vbmlhbHNUaXRsZVwiKVxuICAgIHRlc3RpbW9uaWFsc1RpdGxlLnRleHRDb250ZW50ID0gXCJURVNUSU1PTklBTFNcIlxuXG4gICAgY29uc3QgdGVzdENhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRlc3RDYXJkcy5jbGFzc0xpc3QuYWRkKFwidGVzdENhcmRzXCIpXG5cbiAgICB0ZXN0Q2FyZHMuYXBwZW5kQ2hpbGQoY3JlYXRlVGVzdENhcmQoXCJvbmVcIiwgZmFsc2UsIFwiL3NyYy9hc3NldHMvaWNvbnMvd29tYW4xLnBuZ1wiLCBcIlRoZSBzdXNoaSBhdCB0aGlzIGZhbmN5IEphcGFuZXNlIHJlc3RhdXJhbnQgd2FzIHNvbWUgb2YgdGhlIGZyZXNoZXN0IGFuZCBtb3N0IGRlbGljaW91cyBJdmUgZXZlciBoYWQuXCIsIFwiLSBDaGFybGllLCBFZGl0b3IsIE5ZIFRpbWVzXCIpKVxuICAgIHRlc3RDYXJkcy5hcHBlbmRDaGlsZChjcmVhdGVUZXN0Q2FyZChcInR3b1wiLCBmYWxzZSwgXCIvc3JjL2Fzc2V0cy9pY29ucy93b21hbjIucG5nXCIsIFwiSSBoaWdobHkgcmVjb21tZW5kIHRoZSB0ZW1wdXJhIGF0IHRoaXMgcmVzdGF1cmFudCwgaXQgd2FzIGNyaXNweSBhbmQgcGVyZmVjdGx5IHNlYXNvbmVkLlwiLCBcIi0tIE1hcnRoYSwgQ2hlZiwgTm9idVwiKSlcbiAgICB0ZXN0Q2FyZHMuYXBwZW5kQ2hpbGQoY3JlYXRlVGVzdENhcmQoXCJ0aHJlZVwiLCB0cnVlLCBcIi9zcmMvYXNzZXRzL2ljb25zL21hbi5wbmdcIiwgXCJJIGhhZCBhIGdyZWF0IGV4cGVyaWVuY2UgZGluaW5nIGF0IHRoaXMgZmFuY3kgSmFwYW5lc2UgcmVzdGF1cmFudC4gVGhlIG1lbnUgd2FzIGRpdmVyc2UgYW5kIGhhZCBhIGdvb2QgdmFyaWV0eSBvZiBzZWFmb29kLlwiLCBcIi0gWmFjaGVyeSwgU291cyBDaGVmLCBTdGFyc1wiKSlcblxuICAgIHRlc3RpbW9uaWFscy5hcHBlbmRDaGlsZCh0ZXN0aW1vbmlhbHNUaXRsZSlcbiAgICB0ZXN0aW1vbmlhbHMuYXBwZW5kQ2hpbGQodGVzdENhcmRzKVxuXG5cblxuICAgIGFib3V0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGFib3V0LmFwcGVuZENoaWxkKHRlc3RpbW9uaWFscylcblxuICAgIHJldHVybiBhYm91dFxufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXN0Q2FyZChpZCxpc0ludmVydGVkLCBwZXJzb25JbWcsIGRpYWxvZ0NvbnRlbnQsIGF1dGhvcil7XG4gICAgY29uc3QgdGVzdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGVzdENhcmQuY2xhc3NMaXN0LmFkZChcInRlc3RDYXJkXCIpXG4gICAgdGVzdENhcmQuc2V0QXR0cmlidXRlKCdpZCcsYCR7aWR9YCk7XG4gICAgXG5cbiAgICBjb25zdCB0ZXN0Q2FyZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICB0ZXN0Q2FyZEltZy5zcmMgPSBwZXJzb25JbWdcblxuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkaWFsb2cuY2xhc3NMaXN0LmFkZChcImRpYWxvZ1wiKVxuXG4gICAgY29uc3QgYnViYmxlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGJ1YmJsZUltZy5jbGFzc0xpc3QuYWRkKFwiYnViYmxlXCIpXG4gICAgaWYoaXNJbnZlcnRlZCA9PT0gZmFsc2Upe1xuICAgICAgICBidWJibGVJbWcuc3JjID0gXCIvc3JjL2Fzc2V0cy9pY29ucy9kaWFsb2cuc3ZnXCJcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgYnViYmxlSW1nLnNyYyA9IFwiL3NyYy9hc3NldHMvaWNvbnMvZGlhbG9nX3JldmVyc2Uuc3ZnXCJcbiAgICB9XG5cbiAgICBjb25zdCBkaWFsb2dUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGRpYWxvZ1RleHQuY2xhc3NMaXN0LmFkZChcImRpYWxvZ1RleHRcIilcblxuICAgIGNvbnN0IGRpYWxvZ1RleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBkaWFsb2dUZXh0Q29udGVudC50ZXh0Q29udGVudCA9IGRpYWxvZ0NvbnRlbnRcblxuICAgIGNvbnN0IGRpYWxvZ1RleHRBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGRpYWxvZ1RleHRBdXRob3IudGV4dENvbnRlbnQgPSBhdXRob3JcblxuICAgIGRpYWxvZ1RleHQuYXBwZW5kQ2hpbGQoZGlhbG9nVGV4dENvbnRlbnQpXG4gICAgZGlhbG9nVGV4dC5hcHBlbmRDaGlsZChkaWFsb2dUZXh0QXV0aG9yKVxuXG4gICAgZGlhbG9nLmFwcGVuZENoaWxkKGJ1YmJsZUltZylcbiAgICBkaWFsb2cuYXBwZW5kQ2hpbGQoZGlhbG9nVGV4dClcbiAgICBcbiAgICB0ZXN0Q2FyZC5hcHBlbmRDaGlsZCh0ZXN0Q2FyZEltZylcbiAgICB0ZXN0Q2FyZC5hcHBlbmRDaGlsZChkaWFsb2cpXG5cbiAgICByZXR1cm4gdGVzdENhcmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWJvdXQiLCJmdW5jdGlvbiBjcmVhdGVDb250YWN0KCl7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpXG5cbiAgICBjb25zdCByZXNlcnZhdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgcmVzZXJ2YXRpb25zLmNsYXNzTGlzdC5hZGQoXCJyZXNlcnZhdGlvbnNcIilcblxuICAgIGNvbnN0IHNvY2lhbE1lZGlhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHNvY2lhbE1lZGlhLmNsYXNzTGlzdC5hZGQoXCJyZXNlcnZhdGlvbnNcIilcblxuICAgIGNvbnN0IHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICByZXZpZXcuY2xhc3NMaXN0LmFkZChcInJldmlld1wiKVxuXG4gICAgY29uc3QgcmVzZXJ2YXRpb25zVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaFwiKVxuICAgIHJlc2VydmF0aW9uc1RpdGxlLnRleHRDb250ZW50ID0gXCJGb3IgcmVzZXJ2YXRpb25zIGNhbGw6XCJcblxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBwaG9uZS50ZXh0Q29udGVudCA9IFwiKzM0IDExMSAyMiAzM1wiXG5cbiAgICByZXNlcnZhdGlvbnMuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25zVGl0bGUpXG4gICAgcmVzZXJ2YXRpb25zLmFwcGVuZENoaWxkKHBob25lKVxuXG4gICAgY29uc3Qgc29jaWFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaFwiKVxuICAgIHNvY2lhbFRpdGxlLnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzIG9uIHNvY2lhbCBtZWRpYTpcIlxuXG4gICAgY29uc3QgbWVkaWFJY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBcbiAgICBjb25zdCBpY29uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBpY29uMS5zcmMgPSBcIi9zcmMvYXNzZXRzL2ljb25zL2ZhY2Vib29rLnBuZ1wiXG4gICAgY29uc3QgaWNvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgaWNvbjIuc3JjID0gXCIvc3JjL2Fzc2V0cy9pY29ucy9pbnN0YWdyYW0ucG5nXCJcbiAgICBjb25zdCBpY29uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBpY29uMy5zcmMgPSBcIi9zcmMvYXNzZXRzL2ljb25zL3doYXRzYXBwLnBuZ1wiXG4gICAgY29uc3QgaWNvbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgaWNvbjQuc3JjID0gXCIvc3JjL2Fzc2V0cy9pY29ucy90ZWxlZ3JhbS5wbmdcIlxuXG4gICAgbWVkaWFJY29ucy5hcHBlbmRDaGlsZChpY29uMSlcbiAgICBtZWRpYUljb25zLmFwcGVuZENoaWxkKGljb24yKVxuICAgIG1lZGlhSWNvbnMuYXBwZW5kQ2hpbGQoaWNvbjMpXG4gICAgbWVkaWFJY29ucy5hcHBlbmRDaGlsZChpY29uNClcblxuICAgIHNvY2lhbE1lZGlhLmFwcGVuZENoaWxkKHNvY2lhbFRpdGxlKVxuICAgIHNvY2lhbE1lZGlhLmFwcGVuZENoaWxkKG1lZGlhSWNvbnMpXG5cbiAgICBjb25zdCByZXZpZXdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICByZXZpZXdUZXh0LmlubmVySFRNTCA9IGBDbGljayA8YSBocmVmPVwiXCIgY2xhc3M9XCJoZXJlXCI+aGVyZTwvYT4gdG8gbGVhdmUgYSByZXZpZXdgXG5cbiAgICByZXZpZXcuYXBwZW5kQ2hpbGQocmV2aWV3VGV4dClcblxuICAgIFxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25zKVxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoc29jaWFsTWVkaWEpXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChyZXZpZXcpXG5cbiAgICByZXR1cm4gY29udGFjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0IiwiZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpXG5cbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGxvZ28udGV4dENvbnRlbnQgPSBcIk1JWUFCSSBIT1VTRVwiXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKVxuXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcbiAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKFwibGlua3NcIilcbiAgICBjb25zdCBsaW5rc05hbWVzQXJyID0gW1wiSG9tZVwiLFwiTWVudVwiLFwiQWJvdXRcIixcIkNvbnRhY3RzXCJdXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxpbmtzTmFtZXNBcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGxpbmtzTmFtZXNBcnJbaV1cbiAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKGxpbmtzTmFtZXNBcnJbaV0pXG4gICAgICAgIGxpbmtzLmFwcGVuZENoaWxkKGxpbmspXG4gICAgfVxuXG4gICAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICBpY29ucy5jbGFzc0xpc3QuYWRkKFwiaWNvbnNcIilcblxuICAgIGNvbnN0IGljb25JbWdBcnIgPSBbXCIvc3JjL2Fzc2V0cy9pY29ucy9iYWctaGFwcHkuc3ZnXCIsIFwiL3NyYy9hc3NldHMvaWNvbnMvcHJvZmlsZS1jaXJjbGUuc3ZnXCJdXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGljb25JbWdBcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBpY29uTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXG4gICAgICAgIGNvbnN0IGljb25MaW5rSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICBpY29uTGlua0ltZy5zcmMgPSBpY29uSW1nQXJyW2ldXG4gICAgICAgIGljb25MaW5rLmFwcGVuZENoaWxkKGljb25MaW5rSW1nKVxuICAgICAgICBpY29ucy5hcHBlbmRDaGlsZChpY29uTGluaylcbiAgICB9XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbylcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobGlua3MpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGljb25zKVxuXG4gICAgcmV0dXJuIGhlYWRlclxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXI7IiwiZnVuY3Rpb24gY3JlYXRlSG9tZSgpe1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpXG5cbiAgICAvLyBUb3Agc2VjdGlvbiBvZiBob21lXG4gICAgY29uc3QgbWFpblRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtYWluVG9wLmNsYXNzTGlzdC5hZGQoXCJtYWluLXRvcFwiKVxuICAgIFxuICAgIGNvbnN0IGJhY2tncm91bmRJbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGJhY2tncm91bmRJbWcxLmNsYXNzTGlzdC5hZGQoXCJiYWNrZ3JvdW5kSW1nMVwiKVxuICAgIGJhY2tncm91bmRJbWcxLnNyYyA9IFwiL3NyYy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQxLnBuZ1wiXG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBiYWNrZ3JvdW5kSW1nMi5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZEltZzJcIilcbiAgICBiYWNrZ3JvdW5kSW1nMi5zcmMgPSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kMi5wbmdcIlxuXG4gICAgY29uc3QgaG9tZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhcIilcbiAgICBob21lVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpXG4gICAgaG9tZVRpdGxlLmlubmVySFRNTCA9IFwiVEFTVEUgVEhFIFRSQURJVElPTjxicj5PRiBKQVBBTlwiXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkZXNjcmlwdGlvblwiKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKVxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLiBUdXJwaXMgZGlhbSBpZCBudWxsYSBsaWJlcm8gYXQgZmF1Y2lidXMgbGliZXJvIGVnZXQuIE9ybmFyZSB0aW5jaWR1bnQgdGVtcG9yIHNlZCBlZ2VzdGFzIHB1bHZpbmFyIGZhY2lsaXNpcy5cIlxuXG4gICAgbWFpblRvcC5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kSW1nMSlcbiAgICBtYWluVG9wLmFwcGVuZENoaWxkKGJhY2tncm91bmRJbWcyKVxuICAgIG1haW5Ub3AuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlKVxuICAgIG1haW5Ub3AuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cblxuXG4gICAgLy8gQm90dG9tIHNlY3Rpb24gb2YgaG9tZVxuICAgIGNvbnN0IG1haW5Cb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWFpbkJvdHRvbS5jbGFzc0xpc3QuYWRkKFwibWFpbi1ib3R0b21cIilcblxuICAgIGNvbnN0IG9yZGVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIG9yZGVyQnRuLnRleHRDb250ZW50ID0gXCJPUkRFUiBOT1dcIlxuICAgIG9yZGVyQnRuLmNsYXNzTGlzdC5hZGQoXCJvcmRlckJ0blwiKVxuXG4gICAgY29uc3QgbWFpbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBtYWluSW1nLmNsYXNzTGlzdC5hZGQoXCJtYWluSW1nXCIpXG4gICAgbWFpbkltZy5zcmMgPSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9tYWluX3JhbWVuLnBuZ1wiXG5cbiAgICBtYWluQm90dG9tLmFwcGVuZENoaWxkKG9yZGVyQnRuKVxuICAgIG1haW5Cb3R0b20uYXBwZW5kQ2hpbGQobWFpbkltZylcblxuICAgIC8vIEFkZGluZyBib3RoIHNlY3Rpb25zIHRvIG1haW5cblxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpblRvcClcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5Cb3R0b20pXG5cbiAgICByZXR1cm4gbWFpblxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lIiwiZnVuY3Rpb24gY3JlYXRlTWVudSgpe1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKVxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIk9VUiBTUEVDSUFMVElFU1wiXG5cbiAgICBjb25zdCBtZW51SXRlbUNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG1lbnVJdGVtQ2FyZHMuY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtQ2FyZHNcIikgXG5cbiAgICBtZW51SXRlbUNhcmRzLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVDYXJkKFwiU1VTSElcIiwgXCIvc3JjL2Fzc2V0cy9pbWFnZXMvbWVudV9zdXNoaS5wbmdcIiwgXCJTdXNoaSBpcyBhIHRyYWRpdGlvbmFsIEphcGFuZXNlIGRpc2ggY29uc2lzdGluZyBvZiBzbWFsbCByb2xscyBvciBiYWxscyBvZiB2aW5lZ2FyLWZsYXZvcmVkIGNvbGQgY29va2VkIHJpY2UsIHVzdWFsbHkgc2VydmVkIHdpdGggcmF3IGZpc2ggb3Igb3RoZXIgc2VhZm9vZCwgdmVnZXRhYmxlcywgYW5kIG9mdGVuIHdyYXBwZWQgaW4gc2Vhd2VlZC5cIikpXG4gICAgbWVudUl0ZW1DYXJkcy5hcHBlbmRDaGlsZChjcmVhdGVNZW51Q2FyZChcIk9OSUdJUklcIiwgXCIvc3JjL2Fzc2V0cy9pbWFnZXMvbWVudV9vbmlnaXJpLnBuZ1wiLFwiT25pZ2lyaSBpcyBhIEphcGFuZXNlIHNuYWNrIG9yIGxpZ2h0IG1lYWwgbWFkZSBvZiByaWNlIHNoYXBlZCBpbnRvIGEgdHJpYW5nbGUsIGJhbGwgb3IgY3lsaW5kZXIsIGFuZCB0eXBpY2FsbHkgZmlsbGVkIHdpdGggc2F2b3J5IGluZ3JlZGllbnRzIHN1Y2ggYXMgcGlja2xlZCBwbHVtLCBncmlsbGVkIHNhbG1vbiwgdHVuYSwgb3Igc2Vhd2VlZC5cIikpXG4gICAgbWVudUl0ZW1DYXJkcy5hcHBlbmRDaGlsZChjcmVhdGVNZW51Q2FyZChcIlJBTUVOXCIsIFwiL3NyYy9hc3NldHMvaW1hZ2VzL21lbnVfcmFtZW4ucG5nXCIsIFwiUmFtZW4gaXMgYSBKYXBhbmVzZSBub29kbGUgZGlzaCBtYWRlIHdpdGggQ2hpbmVzZS1zdHlsZSB3aGVhdCBub29kbGVzIHNlcnZlZCBpbiBhIG1lYXQgb3IgZmlzaC1iYXNlZCBicm90aCwgZmxhdm9yZWQgd2l0aCBzb3kgc2F1Y2Ugb3IgbWlzbywgYW5kIHRvcHBlZCB3aXRoIHZhcmlvdXMgaW5ncmVkaWVudHMgc3VjaCBhcyBzbGljZWQgcG9yaywgc2Vhd2VlZCwgZWdncywgYW5kIGdyZWVuIG9uaW9ucy5cIikpXG4gICAgbWVudUl0ZW1DYXJkcy5hcHBlbmRDaGlsZChjcmVhdGVNZW51Q2FyZChcIk1PQ0hJXCIsIFwiL3NyYy9hc3NldHMvaW1hZ2VzL21lbnVfc3dlZXQucG5nXCIsIFwiTW9jaGkgaXMgYSBKYXBhbmVzZSBzdGlja3kgcmljZSBjYWtlIG1hZGUgZnJvbSBnbHV0aW5vdXMgcmljZSB0aGF0IGhhcyBiZWVuIHBvdW5kZWQgaW50byBhIHBhc3RlIGFuZCBtb2xkZWQgaW50byB2YXJpb3VzIHNoYXBlcy4gSXQgY2FuIGJlIHN3ZWV0IG9yIHNhdm9yeSBhbmQgaXMgb2Z0ZW4gZmlsbGVkIHdpdGggc3dlZXQgcmVkIGJlYW4gcGFzdGUgb3IgaWNlIGNyZWFtLlwiKSlcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51SXRlbUNhcmRzKVxuXG4gICAgcmV0dXJuIG1lbnVcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUNhcmQoaXRlbU5hbWUsIGl0ZW1JbWcsIGl0ZW1EZXNjcil7XG4gICAgY29uc3QgbWVudUl0ZW1DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG1lbnVJdGVtQ2FyZC5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1DYXJkXCIpIFxuXG4gICAgY29uc3QgbWVudUl0ZW1DYXJkSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIG1lbnVJdGVtQ2FyZEltZy5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1JbWdcIilcbiAgICBtZW51SXRlbUNhcmRJbWcuc3JjID0gaXRlbUltZ1xuXG4gICAgY29uc3QgbWVudUl0ZW1DYXJkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoXCIpXG4gICAgbWVudUl0ZW1DYXJkTmFtZS5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1OYW1lXCIpXG4gICAgbWVudUl0ZW1DYXJkTmFtZS50ZXh0Q29udGVudCA9IGl0ZW1OYW1lXG5cbiAgICBjb25zdCBtZW51SXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG1lbnVJdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpXG4gICAgbWVudUl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW1EZXNjclxuXG4gICAgY29uc3QgbWVudUl0ZW1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgbWVudUl0ZW1CdG4uY2xhc3NMaXN0LmFkZChcImNhcmRPcmRlckJ0blwiKVxuICAgIG1lbnVJdGVtQnRuLnRleHRDb250ZW50ID0gXCJPUkRFUiBOT1dcIlxuXG4gICAgbWVudUl0ZW1DYXJkLmFwcGVuZENoaWxkKG1lbnVJdGVtQ2FyZEltZylcbiAgICBtZW51SXRlbUNhcmQuYXBwZW5kQ2hpbGQobWVudUl0ZW1DYXJkTmFtZSlcbiAgICBtZW51SXRlbUNhcmQuYXBwZW5kQ2hpbGQobWVudUl0ZW1EZXNjcmlwdGlvbilcbiAgICBtZW51SXRlbUNhcmQuYXBwZW5kQ2hpbGQobWVudUl0ZW1CdG4pXG5cbiAgICByZXR1cm4gbWVudUl0ZW1DYXJkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9tb2R1bGVzL2hlYWRlci5qc1wiXG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9tb2R1bGVzL2hvbWUuanNcIlxuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbW9kdWxlcy9tZW51LmpzXCJcbmltcG9ydCBjcmVhdGVBYm91dCBmcm9tIFwiLi9tb2R1bGVzL2Fib3V0LmpzXCJcbmltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gXCIuL21vZHVsZXMvY29udGFjdC5qc1wiXG5cblxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpXG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpXG5jb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSlcblxuXG5cbmNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkhvbWVcIilcbmNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLk1lbnVcIilcbmNvbnN0IGFib3V0VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5BYm91dFwiKVxuY29uc3QgY29udGFjdHNUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkNvbnRhY3RzXCIpXG5cblxuXG5ob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuY2hpbGRyZW5bMV0pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKVxufSlcblxuXG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuY2hpbGRyZW5bMV0pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKVxufSlcblxuYWJvdXRUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5jaGlsZHJlblsxXSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVBYm91dCgpKVxufSlcblxuY29udGFjdHNUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5jaGlsZHJlblsxXSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpXG59KVxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9