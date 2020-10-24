import lifecycle from './mixins/lifecycle';
Component({
  mixins: [lifecycle],
  data: {
    maxHeight: 0
  },
  props: {
    className: '',
    onChange: function onChange() {},
    max: 10000
  },
  didMount: function didMount() {
    var commonProps = this.data.commonProps;
    var max = this.props.max;
    commonProps.max = max;
  },
  methods: {
    resetFn: function resetFn() {
      var _this$data = this.data,
          items = _this$data.items,
          results = _this$data.results;
      items.forEach(function (element) {
        element.setData({
          confirmStyle: ''
        });
      });
      results.splice(0, results.length);
    },
    confirmFn: function confirmFn() {
      var onChange = this.props.onChange;
      var results = this.data.results;
      onChange(results);
    },
    maskTap: function maskTap() {
      if (this.props.onMaskTap) {
        this.props.onMaskTap();
      }
    }
  }
});