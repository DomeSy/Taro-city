Component({
  props: {
    className: '',
    align: false,
    disabled: false,
    multipleLine: false,
    wrap: false
  },
  didMount: function didMount() {
    this._updateDataSet();
  },
  didUpdate: function didUpdate() {
    this._updateDataSet();
  },
  methods: {
    _updateDataSet: function _updateDataSet() {
      this.dataset = {};

      for (var key in this.props) {
        if (/data-/gi.test(key)) {
          this.dataset[key.replace(/data-/gi, '')] = this.props[key];
        }
      }
    },
    onItemTap: function onItemTap(ev) {
      var _this$props = this.props,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled;

      if (onClick && !disabled) {
        onClick({
          index: ev.target.dataset.index,
          target: {
            dataset: this.dataset
          }
        });
      }
    }
  }
});