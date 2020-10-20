(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["pages/opinion/opinion"],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/opinion/opinion.jsx":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/pages/opinion/opinion.jsx ***!
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
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_components@3.0.14@@tarojs/components/mini/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components */ "./src/components/index.jsx");
/* harmony import */ var _opinion_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./opinion.scss */ "./src/pages/opinion/opinion.scss");
/* harmony import */ var _opinion_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_opinion_scss__WEBPACK_IMPORTED_MODULE_9__);











var Opinion = /*#__PURE__*/function (_Component) {
  Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Opinion, _Component);

  var _super = Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Opinion);

  function Opinion() {
    var _this;

    Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Opinion);

    _this = _super.apply(this, arguments);

    Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "onChangeText", function (textValue) {
      _this.setState({
        textValue: textValue
      });
    });

    Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "onChangeImage", function (file) {
      console.log(file, '----');
    });

    _this.state = {
      textValue: ''
    };
    return _this;
  }

  Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Opinion, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["View"], {
        className: "Opinion"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__[/* Textarea */ "q"], {
        maxLength: "140",
        placeholder: "\u8BF7\u5728\u6B64\u8F93\u5165\u60A8\u7684\u53CD\u9988\u5185\u5BB9\uFF0C\u4EE5\u4FBF\u6211\u4EEC\u66F4\u597D\u7684\u4E3A\u60A8\u670D\u52A1\uFF0C \u8C22\u8C22\uFF01",
        onChange: this.onChangeText
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__[/* ImagePicker */ "d"], {
        count: 4,
        allCount: 4,
        onChange: function onChange(file) {
          return _this2.onChangeImage(file);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["View"], {
        className: "Opinion-border"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__[/* Button */ "a"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["View"], {
        className: "Opinion-tip"
      }, "\u8054\u7CFB\u6211\u4EEC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["View"], {
        className: "Opinion-tel"
      }, "0531-81286501 / 0531-81286501"));
    }
  }]);

  return Opinion;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Opinion);

/***/ }),

/***/ "./src/pages/opinion/opinion.jsx":
/*!***************************************!*\
  !*** ./src/pages/opinion/opinion.jsx ***!
  \***************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.0.14@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_opinion_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!./opinion.jsx */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/opinion/opinion.jsx");


var config = {"navigationBarTitleText":"意见反馈"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_opinion_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/opinion/opinion', {}, config || {}))



/***/ }),

/***/ "./src/pages/opinion/opinion.scss":
/*!****************************************!*\
  !*** ./src/pages/opinion/opinion.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/opinion/opinion.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=opinion.js.map