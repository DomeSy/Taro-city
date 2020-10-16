(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["pages/detail/detail"],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/detail/detail.jsx":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/pages/detail/detail.jsx ***!
  \*****************************************************************************************/
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
/* harmony import */ var _detail_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail.scss */ "./src/pages/detail/detail.scss");
/* harmony import */ var _detail_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_detail_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_banner_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @assets/banner.png */ "./src/assets/banner.png");
/* harmony import */ var _assets_hot_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @assets/hot.png */ "./src/assets/hot.png");











var Card = /*#__PURE__*/function (_Component) {
  Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Card, _Component);

  var _super = Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Card);

  function Card(props) {
    var _this;

    Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Card);

    _this = _super.call(this, props);
    _this.state = {
      img: "background: url(".concat(_assets_banner_png__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], ");background-size: 100% 100%"),
      data: [{
        title: '机动车业务',
        list: [{
          text: "\u6CE8\u518C\u7528\u6237\u673A\u52A8\u8F66\u9A7E\u9A76\u8BC1\u67E5\u8BE2",
          img: "background: url(".concat(_assets_hot_png__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], ");background-size: 100% 100%")
        }, {
          text: "\u6CE8\u518C\u7528\u6237\u673A\u52A8\u8F66\u9A7E\u9A76\u8BC1\u67E5\u8BE2" // img : `background: url(${hot});background-size: 100% 100%`

        }, {
          text: "\u6CE8\u518C\u7528\u6237\u673A\u52A8\u8F66\u9A7E\u9A76\u8BC1\u67E5\u8BE2\u54E6\u6211\u4EE3",
          img: "background: url(".concat(_assets_hot_png__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], ");background-size: 100% 100%")
        }]
      }, {
        title: '机动车业务1',
        list: [{
          text: "\u6CE8\u518C\u7528\u6237\u673A\u52A8\u8F66\u9A7E\u9A76\u8BC1\u67E5\u8BE21",
          img: "background: url(".concat(_assets_hot_png__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], ");background-size: 100% 100%")
        }, {
          text: "\u6CE8\u518C\u7528\u6237\u673A\u52A8\u8F66\u9A7E\u9A76\u8BC1\u67E5\u8BE21" // img : `background: url(${hot});background-size: 100% 100%`

        }, {
          text: "\u6CE8\u518C\u7528\u6237\u673A\u52A8\u8F66\u9A7E\u9A76\u8BC1\u67E5\u8BE2\u54E6\u6211\u4EE3\u6CE8\u518C\u7528\u6237\u673A\u52A8\u8F66\u9A7E\u9A76\u8BC1\u67E5\u8BE2\u54E6\u6211\u4EE311" // img : `background: url(${hot});background-size: 100% 100%`

        }]
      }]
    };
    return _this;
  }

  Object(_Users_Domesy_Documents_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Card, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          img = _this$state.img,
          data = _this$state.data;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "Detail"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "Detail-img",
        style: img
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__[/* TabDetail */ "k"], null), data.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__[/* List */ "d"], {
          border: true,
          title: item.title,
          list: item.list,
          key: index
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "Detail-buttom"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "Detail-buttom-text"
      }, "*\u66F4\u591A\u670D\u52A1\uFF0C\u5C3D\u5728\u201C\u7231\u5C71\u4E1C\u201DAPP\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__["View"], {
        className: "Detail-buttom-download"
      }, "\u5982\u4F55\u4E0B\u8F7D\uFF1F")));
    }
  }]);

  return Card;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "./src/pages/detail/detail.jsx":
/*!*************************************!*\
  !*** ./src/pages/detail/detail.jsx ***!
  \*************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.0.14@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_detail_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!./detail.jsx */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/detail/detail.jsx");


var config = {"navigationBarTitleText":"爱山东"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_detail_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/detail/detail', {}, config || {}))



/***/ }),

/***/ "./src/pages/detail/detail.scss":
/*!**************************************!*\
  !*** ./src/pages/detail/detail.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/detail/detail.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=detail.js.map