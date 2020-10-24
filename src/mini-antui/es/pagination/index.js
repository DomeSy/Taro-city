var noop = function noop() {};

Component({
  props: {
    mode: 'text',
    simple: false,
    disabled: false,
    current: 0,
    total: 0,
    prevText: '上一页',
    nextText: '下一页',
    onChange: noop,
    className: '',
    btnClass: ''
  },
  didMount: function didMount() {
    var current = this.props.current;
    this.setData({
      currentPage: current
    });
  },
  methods: {
    onTapPrev: function onTapPrev() {
      var currentPage = this.data.currentPage;
      var disabled = this.props.disabled;

      if (currentPage - 1 > 0 && !disabled) {
        this.setData({
          currentPage: currentPage - 1
        });
        this.props.onChange(this.data.currentPage);
      }
    },
    onTapNext: function onTapNext() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          total = _this$props.total;
      var currentPage = this.data.currentPage;

      if (currentPage + 1 <= total && !disabled) {
        this.setData({
          currentPage: currentPage + 1
        });
        this.props.onChange(this.data.currentPage);
      }
    }
  }
});