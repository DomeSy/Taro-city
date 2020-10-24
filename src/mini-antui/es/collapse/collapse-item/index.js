function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var noop = function noop() {};

function collectArr(arr, ele) {
  var resArr = arr;

  if (arr instanceof Array) {
    resArr.push(ele);
  } else {
    resArr = [ele];
  }

  return resArr;
}

var prefixKey = function prefixKey(prefix) {
  return function (key) {
    return prefix + "-" + key;
  };
};

var collapsePrefix = prefixKey('am-collapse');
Component({
  data: {
    isActive: false,
    contentHeight: 0,
    contentId: '',
    id: '',
    activeKey: []
  },
  props: {
    itemKey: '',
    // 默认随机数
    header: '',
    isOpen: false,
    showArrow: true,
    activeClass: '',
    className: '',
    titleClass: '',
    contentClass: '',
    defaultContentHeight: 0,
    disabled: false,
    collapseKey: ''
  },
  didMount: function didMount() {
    this.initItems();
  },
  methods: {
    initItems: function initItems() {
      var _this$props = this.props,
          itemKey = _this$props.itemKey,
          isOpen = _this$props.isOpen,
          defaultContentHeight = _this$props.defaultContentHeight,
          collapseKey = _this$props.collapseKey;
      this.setData({
        isActive: isOpen,
        contentHeight: defaultContentHeight,
        contentId: this.$id,
        id: itemKey || this.$id
      });
      this.updateStyle({
        isActive: isOpen
      });
      var bindedMethod = this.handleItemDataUpdate.bind(this);
      this.$page[collapsePrefix("updates-" + collapseKey)] = collectArr(this.$page[collapsePrefix("updates-" + collapseKey)], bindedMethod);
      this.$page[collapsePrefix("ids-" + collapseKey)] = collectArr(this.$page[collapsePrefix("ids-" + collapseKey)], this.data.id);
    },
    handleItemDataUpdate: function handleItemDataUpdate(data) {
      this.setData(_extends({}, data));
      var _this$data = this.data,
          activeKey = _this$data.activeKey,
          id = _this$data.id;
      var isActive = activeKey.indexOf(id) !== -1;
      this.setData({
        isActive: isActive
      });
      this.updateStyle({
        isActive: isActive
      });
    },
    onCollapseTap: function onCollapseTap(evt) {
      var collapseKey = this.props.collapseKey;

      if (!this.props.disabled) {
        var dataset = evt.currentTarget.dataset;
        this.$page[collapsePrefix("handleItemTap-" + collapseKey)](dataset.key);
      }
    },
    updateStyle: function updateStyle(_ref) {
      var _this = this;

      var isActive = _ref.isActive,
          _ref$callback = _ref.callback,
          callback = _ref$callback === void 0 ? noop : _ref$callback;

      if (!isActive) {
        this.setData({
          isActive: isActive,
          contentHeight: 0
        });
        callback();
      } else {
        this.calcContentHeight(".am-collapse-item-content." + ("am-collapse-item-content-" + this.$id)).then(function (height) {
          _this.setData({
            isActive: isActive,
            contentHeight: height
          });

          callback();
        });
      }
    },
    calcContentHeight: function calcContentHeight(selector) {
      if (selector === void 0) {
        selector = '';
      }

      return new Promise(function (resolve, reject) {
        my.createSelectorQuery().select(selector).boundingClientRect().exec(function (res) {
          if (res && res[0]) {
            resolve(res[0].height);
          } else {
            reject(res);
          }
        });
      });
    }
  }
});