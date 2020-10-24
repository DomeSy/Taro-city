Component({
  data: {
    opaReduce: 1,
    opaAdd: 1
  },
  props: {
    className: '',
    min: 0,
    max: 100000,
    disabled: false,
    value: 10,
    readOnly: false,
    showNumber: false,
    step: 1,
    onChange: function onChange() {}
  },
  didMount: function didMount() {
    var _this$props = this.props,
        value = _this$props.value,
        min = _this$props.min,
        max = _this$props.max;
    this.setData({
      value: Math.min(Math.max(min, value), max)
    });
  },
  didUpdate: function didUpdate(preProps) {
    var _this$props2 = this.props,
        value = _this$props2.value,
        min = _this$props2.min,
        max = _this$props2.max;

    if (preProps.value !== value) {
      var newValue = Math.min(Math.max(min, value), max);
      this.setData({
        value: newValue
      });
      this.resetFn(newValue);
    }
  },
  methods: {
    changeFn: function changeFn(ev) {
      var _this$props3 = this.props,
          min = _this$props3.min,
          max = _this$props3.max,
          onChange = _this$props3.onChange,
          disabled = _this$props3.disabled,
          step = _this$props3.step;
      var evType = ev.target.dataset.type;
      var _this$data = this.data,
          opaReduce = _this$data.opaReduce,
          opaAdd = _this$data.opaAdd,
          value = _this$data.value;

      if (!disabled) {
        if (evType === 'reduce') {
          if (value > min) {
            opaAdd = 1;
            value = Math.max(min, this.getCalculateValue('reduce', +value, +step));
            opaReduce = value === min ? 0.4 : 1;
          }
        } else {
          /* eslint-disable no-lonely-if */
          if (value < max) {
            opaReduce = 1;
            value = Math.min(this.getCalculateValue('add', +value, +step), max);
            opaAdd = value === max ? 0.4 : 1;
          }
        }

        this.setData({
          value: value,
          opaAdd: opaAdd,
          opaReduce: opaReduce
        });
        onChange(value);
      }
    },
    onBlur: function onBlur(event) {
      var value = event.detail.value;
      this.resetFn(value);
    },
    resetFn: function resetFn(value) {
      var _this$props4 = this.props,
          max = _this$props4.max,
          min = _this$props4.min,
          onChange = _this$props4.onChange;
      var calculatedVal = value;
      var opaAdd = 1;
      var opaReduce = 1;

      if (value >= max) {
        calculatedVal = max;
        opaAdd = 0.4;
      } else if (value <= min) {
        calculatedVal = min;
        opaReduce = 0.4;
      }

      this.setData({
        value: calculatedVal,
        opaAdd: opaAdd,
        opaReduce: opaReduce
      });
      onChange(calculatedVal);
    },
    getCalculateValue: function getCalculateValue(type, arg1, arg2) {
      var numFloat = arg1.toString().split('.')[1] || '';
      var num2Float = arg2.toString().split('.')[1] || '';
      var length = Math.max(numFloat.length, num2Float.length);
      var times = Math.pow(10, length);
      return type === 'reduce' ? ((+arg1 * times - +arg2 * times) / times).toFixed(length) : ((+arg1 * times + +arg2 * times) / times).toFixed(length);
    }
  }
});