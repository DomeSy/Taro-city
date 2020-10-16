import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import reactifyWc from '../utils/reactify-wc';
var Input = reactifyWc('taro-input-core'); // eslint-disable-next-line

var h = React.createElement;
export default /*#__PURE__*/React.forwardRef(function (props, ref) {
  var args = _objectSpread({}, props);

  if (args.hasOwnProperty('focus')) {
    args.autoFocus = Boolean(args.focus);
    delete args.focus;
  }

  return /*#__PURE__*/React.createElement(Input, _objectSpread(_objectSpread({}, args), {}, {
    ref: ref
  }));
});