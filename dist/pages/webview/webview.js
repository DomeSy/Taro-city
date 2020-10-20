(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["pages/webview/webview"],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/webview/webview.jsx":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/pages/webview/webview.jsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.12.0@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.12.0@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime@7.12.0@@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.12.0@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/_@babel_runtime@7.12.0@@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime@7.12.0@@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/_react@16.14.0@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.0.14@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.14@@tarojs/components/mini/index.js");
/* harmony import */ var _webview_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./webview.scss */ "./src/pages/webview/webview.scss");
/* harmony import */ var _webview_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_webview_scss__WEBPACK_IMPORTED_MODULE_9__);











var Webview = /*#__PURE__*/function (_Component) {
  Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Webview, _Component);

  var _super = Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Webview);

  function Webview() {
    var _this;

    Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Webview);

    _this = _super.apply(this, arguments);

    Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "config", {
      navigationBarTitleText: ''
    });

    _this.state = {
      url: ''
    };
    return _this;
  }

  Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Webview, [{
    key: "componentDidShow",
    value: function componentDidShow() {
      var _getCurrentInstance$r = Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__["getCurrentInstance"])().router.params,
          _getCurrentInstance$r2 = _getCurrentInstance$r.title,
          title = _getCurrentInstance$r2 === void 0 ? '' : _getCurrentInstance$r2,
          url = _getCurrentInstance$r.url;
      this.setState({
        url: url
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.setNavigationBarTitle({
        title: title
      });
    }
  }, {
    key: "render",
    value: function render() {
      var url = this.state.url;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["View"], {
        className: "Webview"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["WebView"], {
        src: url
      }));
    }
  }]);

  return Webview;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Webview);

/***/ }),

/***/ "./src/pages/webview/webview.jsx":
/*!***************************************!*\
  !*** ./src/pages/webview/webview.jsx ***!
  \***************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.0.14@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_webview_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!./webview.jsx */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/webview/webview.jsx");


var config = {"navigationBarTitleText":""};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_webview_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/webview/webview', {}, config || {}))



/***/ }),

/***/ "./src/pages/webview/webview.scss":
/*!****************************************!*\
  !*** ./src/pages/webview/webview.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/webview/webview.jsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=webview.js.map