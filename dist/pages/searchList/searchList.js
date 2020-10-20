(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["pages/searchList/searchList"],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/searchList/searchList.jsx":
/*!*************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/pages/searchList/searchList.jsx ***!
  \*************************************************************************************************/
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
/* harmony import */ var _searchList_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./searchList.scss */ "./src/pages/searchList/searchList.scss");
/* harmony import */ var _searchList_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_searchList_scss__WEBPACK_IMPORTED_MODULE_9__);











var searchList = /*#__PURE__*/function (_Component) {
  Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(searchList, _Component);

  var _super = Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(searchList);

  function searchList() {
    var _this;

    Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, searchList);

    _this = _super.apply(this, arguments);

    Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "onChange", function (value) {
      _this.setState({
        value: value
      });
    });

    _this.state = {
      value: '',
      list: [{
        text: '社会团体法人登记证书'
      }, {
        text: '社会团体法人登记证书社会团体法人登记证书'
      }]
    };
    return _this;
  }

  Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(searchList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var list = this.state.list;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["View"], {
        className: "searchList"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__[/* SearchView */ "m"], {
        placeholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",
        onChange: function onChange(value) {
          return _this2.onChange(value);
        }
      }), list.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["View"], {
          className: "searchList-list",
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["View"], {
          className: "searchList-list-text"
        }, item.text));
      }));
    }
  }]);

  return searchList;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (searchList);

/***/ }),

/***/ "./src/pages/searchList/searchList.jsx":
/*!*********************************************!*\
  !*** ./src/pages/searchList/searchList.jsx ***!
  \*********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.0.14@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_searchList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!./searchList.jsx */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/searchList/searchList.jsx");


var config = {"navigationBarTitleText":"爱山东"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_searchList_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/searchList/searchList', {}, config || {}))



/***/ }),

/***/ "./src/pages/searchList/searchList.scss":
/*!**********************************************!*\
  !*** ./src/pages/searchList/searchList.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/searchList/searchList.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=searchList.js.map