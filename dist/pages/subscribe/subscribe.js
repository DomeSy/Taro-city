(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["pages/subscribe/subscribe"],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/subscribe/subscribe.jsx":
/*!***********************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/pages/subscribe/subscribe.jsx ***!
  \***********************************************************************************************/
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
/* harmony import */ var _assets_hot_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @assets/hot.png */ "./src/assets/hot.png");
/* harmony import */ var _subscribe_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subscribe.scss */ "./src/pages/subscribe/subscribe.scss");
/* harmony import */ var _subscribe_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_subscribe_scss__WEBPACK_IMPORTED_MODULE_7__);









var Subscribe = /*#__PURE__*/function (_Component) {
  Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Subscribe, _Component);

  var _super = Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Subscribe);

  function Subscribe() {
    var _this;

    Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Subscribe);

    _this = _super.apply(this, arguments);
    _this.state = {
      list: [{
        title: '我的医保',
        img: "background: url(".concat(_assets_hot_png__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], ");background-size: 100% 100%")
      }, {
        title: '我的医保' // img: false

      }, {
        title: '我的医保',
        img: "background: url(".concat(_assets_hot_png__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], ");background-size: 100% 100%")
      }]
    };
    return _this;
  }

  Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Subscribe, [{
    key: "render",
    value: function render() {
      var list = this.state.list;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "Subscribe"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "Subscribe-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "Subscribe-title-text"
      }, "\u6DFB\u52A0\u6388\u6743"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "Subscribe-title-administration"
      }, "\u7BA1\u7406\u6211\u7684\u6388\u6743")), list.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
          className: "Subscribe-list",
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
          className: "Subscribe-list-title"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
          className: "Subscribe-list-title-left"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
          className: "Subscribe-list-title-left-title"
        }, item.title), item.img ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
          className: "Subscribe-list-title-left-img",
          style: item.img
        }) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
          className: "Subscribe-list-title-add"
        }, "\u6388\u6743")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
          className: "Subscribe-list-tip"
        }, "\u6388\u6743\u540E\u53EF\u67E5\u770B\u8D26\u6237\u4F59\u989D\u7B49\u7F13\u5B58\u4FE1\u606F"));
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "Subscribe-tip"
      }, "\u66F4\u591A\u670D\u52A1\u9646\u7EED\u63A5\u5165\u4E2D\u2026"));
    }
  }]);

  return Subscribe;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Subscribe);

/***/ }),

/***/ "./src/pages/subscribe/subscribe.jsx":
/*!*******************************************!*\
  !*** ./src/pages/subscribe/subscribe.jsx ***!
  \*******************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.0.14@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_subscribe_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!./subscribe.jsx */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/subscribe/subscribe.jsx");


var config = {"navigationBarTitleText":"我的空间"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_subscribe_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/subscribe/subscribe', {}, config || {}))



/***/ }),

/***/ "./src/pages/subscribe/subscribe.scss":
/*!********************************************!*\
  !*** ./src/pages/subscribe/subscribe.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/subscribe/subscribe.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=subscribe.js.map