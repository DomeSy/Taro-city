(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["pages/my/my"],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/my/my.jsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/pages/my/my.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.12.0@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.12.0@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.12.0@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/_@babel_runtime@7.12.0@@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@16.14.0@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.14@@tarojs/components/mini/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/pages/my/components/index.js");
/* harmony import */ var _assets_my_banjian_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @assets/my/banjian.png */ "./src/assets/my/banjian.png");
/* harmony import */ var _my_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my.scss */ "./src/pages/my/my.scss");
/* harmony import */ var _my_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_my_scss__WEBPACK_IMPORTED_MODULE_8__);









var list = [{
  img: "background: url(".concat(_assets_my_banjian_png__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], ");background-size: 100% 100%"),
  text: '我的证件',
  ishot: true
}, {
  img: "background: url(".concat(_assets_my_banjian_png__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], ");background-size: 100% 100%"),
  text: '我的证件'
}, {
  img: "background: url(".concat(_assets_my_banjian_png__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], ");background-size: 100% 100%"),
  text: '我的证件'
}, {
  img: "background: url(".concat(_assets_my_banjian_png__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], ");background-size: 100% 100%"),
  text: '我的证件'
}];

var My = /*#__PURE__*/function (_Component) {
  Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(My, _Component);

  var _super = Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(My);

  function My() {
    var _this;

    Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, My);

    _this = _super.apply(this, arguments);
    _this.state = {
      list: list
    };
    return _this;
  }

  Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(My, [{
    key: "render",
    value: function render() {
      var list = this.state.list;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "My"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__[/* Info */ "a"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "My-border"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "My-List"
      }, list.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
          className: "My-List-center",
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
          className: "My-List-center-img"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
          className: "My-List-center-img-imgs",
          style: item.img
        }), item.ishot ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
          className: "My-List-center-img-top"
        }) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
          className: "My-List-center-text"
        }, item.text));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "My-border"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__[/* Space */ "b"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "My-login"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "My-login-btn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "My-login-btn-text"
      }, "\u9000\u51FA\u767B\u5F55"))));
    }
  }]);

  return My;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (My);

/***/ }),

/***/ "./src/assets/my/banjian.png":
/*!***********************************!*\
  !*** ./src/assets/my/banjian.png ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "assets/my/banjian.png");

/***/ }),

/***/ "./src/pages/my/components/Info/index.jsx":
/*!************************************************!*\
  !*** ./src/pages/my/components/Info/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.12.0@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.12.0@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.12.0@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/_@babel_runtime@7.12.0@@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@16.14.0@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.14@@tarojs/components/mini/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.scss */ "./src/pages/my/components/Info/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);






 // 搜索栏

var Index = /*#__PURE__*/function (_Component) {
  Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Index, _Component);

  var _super = Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Index);

  function Index() {
    Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Index);

    return _super.apply(this, arguments);
  }

  Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Index, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "Info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "Info-infos"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "Info-infos-img"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "Info-infos-name"
      }, "\u5F20\u4F73\u4E3D")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "Info-opinion"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "Info-opinion-text"
      }, "\u610F\u89C1\u53CD\u9988")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),

/***/ "./src/pages/my/components/Info/index.scss":
/*!*************************************************!*\
  !*** ./src/pages/my/components/Info/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/my/components/Space/index.jsx":
/*!*************************************************!*\
  !*** ./src/pages/my/components/Space/index.jsx ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.12.0@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.12.0@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.12.0@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/_@babel_runtime@7.12.0@@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@16.14.0@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.14@@tarojs/components/mini/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components */ "./src/components/index.jsx");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.scss */ "./src/pages/my/components/Space/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_7__);







 // 搜索栏

var Index = /*#__PURE__*/function (_Component) {
  Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Index, _Component);

  var _super = Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Index);

  function Index() {
    Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Index);

    return _super.apply(this, arguments);
  }

  Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Index, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "Space"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__[/* Title */ "n"], {
        title: "\u6211\u7684\u7A7A\u95F4",
        effectTitle: "\u6388\u6743\u7BA1\u7406"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "Space-centent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "Space-centent-none"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "Space-centent-none-text"
      }, "\u8BA2\u9605\u4E13\u5C5E\u670D\u52A1\uFF0C\u5F00\u542F\u60A8\u7684\u667A\u6167\u751F\u6D3B\u2026"))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),

/***/ "./src/pages/my/components/Space/index.scss":
/*!**************************************************!*\
  !*** ./src/pages/my/components/Space/index.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/my/components/index.js":
/*!******************************************!*\
  !*** ./src/pages/my/components/index.js ***!
  \******************************************/
/*! exports provided: Info, Space */
/*! exports used: Info, Space */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Info */ "./src/pages/my/components/Info/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Info__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _Space__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Space */ "./src/pages/my/components/Space/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _Space__WEBPACK_IMPORTED_MODULE_1__["a"]; });




/***/ }),

/***/ "./src/pages/my/my.jsx":
/*!*****************************!*\
  !*** ./src/pages/my/my.jsx ***!
  \*****************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.0.14@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_my_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!./my.jsx */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/my/my.jsx");


var config = {"navigationBarTitleText":"我的"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_my_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/my/my', {}, config || {}))



/***/ }),

/***/ "./src/pages/my/my.scss":
/*!******************************!*\
  !*** ./src/pages/my/my.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/my/my.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=my.js.map