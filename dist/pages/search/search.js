(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["pages/search/search"],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/search/search.jsx":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/pages/search/search.jsx ***!
  \*****************************************************************************************/
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
/* harmony import */ var _search_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search.scss */ "./src/pages/search/search.scss");
/* harmony import */ var _search_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_search_scss__WEBPACK_IMPORTED_MODULE_9__);











var Search = /*#__PURE__*/function (_Component) {
  Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Search, _Component);

  var _super = Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Search);

  function Search() {
    var _this;

    Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Search);

    _this = _super.apply(this, arguments);

    Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "onChange", function (value) {
      _this.setState({
        value: value
      });
    });

    _this.state = {
      value: '',
      list: [{
        text: '社保'
      }, {
        text: '出入境'
      }, {
        text: '出入境出入境'
      }, {
        text: '出入'
      }, {
        text: '出入境出入境'
      }, {
        text: '出入境出入境'
      }],
      lists: [{
        text: '社保'
      }, {
        text: '社保社保社保社保社保社保社保社保社保社保社保社保社保社保社保社保社保'
      }]
    };
    return _this;
  }

  Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Search, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          list = _this$state.list,
          lists = _this$state.lists;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["View"], {
        className: "Search"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__[/* SearchView */ "m"], {
        placeholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",
        onChange: function onChange(value) {
          return _this2.onChange(value);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["View"], {
        className: "Search-border"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["View"], {
        className: "Search-title"
      }, "\u70ED\u95E8\u641C\u7D22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["View"], {
        className: "Search-hot"
      }, list.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["Text"], {
          className: "Search-hot-text",
          key: index
        }, item.text);
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["View"], {
        className: "Search-title"
      }, "\u5386\u53F2\u641C\u7D22"), lists.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["View"], {
          className: "Search-list",
          key: index + 'search'
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["View"], {
          className: "Search-list-left"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["View"], {
          className: "Search-list-left-clock"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["View"], {
          className: "Search-list-left-text"
        }, item.text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["View"], {
          className: "Search-list-close"
        }));
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["View"], {
        className: "Search-log"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__["View"], {
        className: "Search-log-text"
      }, "\u6E05\u9664\u6240\u6709\u5386\u53F2\u8BB0\u5F55")));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Search);

/***/ }),

/***/ "./src/pages/search/search.jsx":
/*!*************************************!*\
  !*** ./src/pages/search/search.jsx ***!
  \*************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.0.14@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_search_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!./search.jsx */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/search/search.jsx");


var config = {"navigationBarTitleText":"爱山东"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_search_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/search/search', {}, config || {}))



/***/ }),

/***/ "./src/pages/search/search.scss":
/*!**************************************!*\
  !*** ./src/pages/search/search.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/search/search.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=search.js.map